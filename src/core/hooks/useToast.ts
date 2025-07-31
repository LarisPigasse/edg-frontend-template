// src/core/hooks/useToast.ts
import { createContext, useContext, useState, useCallback } from "react";
import type { ToastVariant } from "../components/ui/Toast";
import { TOAST_CONFIG } from "../../config";

interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastItem extends ToastOptions {
  id: string;
  variant: ToastVariant;
  open: boolean;
}

interface ToastFunction {
  (message: string, options?: ToastOptions): string;
  success: (message: string, options?: Omit<ToastOptions, "variant">) => string;
  warning: (message: string, options?: Omit<ToastOptions, "variant">) => string;
  danger: (message: string, options?: Omit<ToastOptions, "variant">) => string;
  info: (message: string, options?: Omit<ToastOptions, "variant">) => string;
}

interface ToastContextValue {
  toasts: ToastItem[];
  toast: ToastFunction;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/**
 * useToastState - Hook interno per gestire lo state dei toast.
 * Separato dal Provider per evitare problemi con JSX.
 */
export const useToastState = () => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  // Generate unique ID
  const generateId = useCallback(() => {
    return `toast-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }, []);

  // Dismiss specific toast
  const dismiss = useCallback((id: string) => {
    setToasts((current) => current.map((toast) => (toast.id === id ? { ...toast, open: false } : toast)));

    // Remove after animation
    setTimeout(() => {
      setToasts((current) => current.filter((toast) => toast.id !== id));
    }, 300);
  }, []);

  // Dismiss all toasts
  const dismissAll = useCallback(() => {
    setToasts((current) => current.map((toast) => ({ ...toast, open: false })));

    // Remove all after animation
    setTimeout(() => {
      setToasts([]);
    }, 300);
  }, []);

  // Add new toast
  const addToast = useCallback(
    (variant: ToastVariant, message: string, options: ToastOptions = {}) => {
      const id = generateId();
      const newToast: ToastItem = {
        id,
        variant,
        description: message,
        open: true,
        ...options,
      };

      setToasts((current) => {
        const updatedToasts = [...current, newToast];

        // Enforce max concurrent limit
        if (updatedToasts.filter((t) => t.open).length > TOAST_CONFIG.MAX_CONCURRENT) {
          // Close oldest open toast
          const oldestOpenIndex = updatedToasts.findIndex((t) => t.open);
          if (oldestOpenIndex !== -1) {
            updatedToasts[oldestOpenIndex] = {
              ...updatedToasts[oldestOpenIndex],
              open: false,
            };

            // Remove after animation
            setTimeout(() => {
              setToasts((current) => current.filter((toast) => toast.id !== updatedToasts[oldestOpenIndex].id));
            }, 300);
          }
        }

        return updatedToasts;
      });

      return id;
    },
    [generateId]
  );

  // Toast API
  const toast = useCallback(
    (message: string, options?: ToastOptions) => {
      return addToast("default", message, options);
    },
    [addToast]
  ) as ToastFunction;

  toast.success = useCallback(
    (message: string, options?: Omit<ToastOptions, "variant">) => {
      return addToast("success", message, options);
    },
    [addToast]
  );

  toast.warning = useCallback(
    (message: string, options?: Omit<ToastOptions, "variant">) => {
      return addToast("warning", message, options);
    },
    [addToast]
  );

  toast.danger = useCallback(
    (message: string, options?: Omit<ToastOptions, "variant">) => {
      return addToast("danger", message, options);
    },
    [addToast]
  );

  toast.info = useCallback(
    (message: string, options?: Omit<ToastOptions, "variant">) => {
      return addToast("info", message, options);
    },
    [addToast]
  );

  const contextValue: ToastContextValue = {
    toasts,
    toast,
    dismiss,
    dismissAll,
  };

  return {
    contextValue,
    ToastContext,
  };
};

/**
 * useToast - Hook per utilizzare il sistema Toast.
 *
 * @returns Object con metodi per showing toast e gestione state
 *
 * @example
 * const { toast } = useToast();
 *
 * // Default toast
 * toast("Operazione completata");
 *
 * // Success toast with action
 * toast.success("File salvato", {
 *   action: { label: "Visualizza", onClick: () => openFile() }
 * });
 *
 * // Custom duration
 * toast.warning("Connessione instabile", { duration: 8000 });
 */
export const useToast = (): ToastContextValue => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast deve essere utilizzato all'interno di ToastProvider");
  }

  return context;
};

// Export types
export type { ToastOptions, ToastItem, ToastContextValue };
export { ToastContext };
