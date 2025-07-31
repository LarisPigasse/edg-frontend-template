// src/core/components/ui/Toast.tsx
import React from "react";
import * as ToastPrimitive from "@radix-ui/react-toast";
import { AlertTriangle, Info, CheckCircle, XCircle, X } from "lucide-react";
import { ThemedText } from "../atomic";
import { cn } from "../../utils";
import { TOAST_CONFIG, type ToastPosition } from "../../../config";
import { useToastState } from "../../hooks/useToast";

export type ToastVariant = "default" | "success" | "warning" | "danger";

interface ToastProps {
  /** Variante visiva del toast */
  variant?: ToastVariant;
  /** Titolo del toast */
  title?: string;
  /** Descrizione del toast */
  description?: string;
  /** Azione opzionale */
  action?: {
    label: string;
    onClick: () => void;
  };
  /** Durata in millisecondi (0 per permanente) */
  duration?: number;
  /** Callback per chiusura */
  onClose?: () => void;
}

/**
 * Toast - Sistema di notifiche temporanee con Radix UI.
 *
 * Features:
 * - 4 varianti semantiche con icone automatiche
 * - Posizionamento configurabile tramite TOAST_CONFIG
 * - Auto-dismiss con durata personalizzabile
 * - Action button opzionale
 * - Queue management automatico
 * - Swipe to dismiss configurabile
 * - Integrazione theme system completa
 *
 * Usa tramite useToast hook, non direttamente.
 */
const Toast: React.FC<ToastProps> = ({
  variant = "default",
  title,
  description,
  action,
  duration = TOAST_CONFIG.DEFAULT_DURATION,
  onClose,
}) => {
  // Configurazione varianti
  const variantConfig = {
    default: {
      surface: "primary" as const,
      bgClass: "bg-modal-info-bg",
      textClass: "text-modal-info-text",
      iconClass: "text-modal-info-text",
      icon: Info,
    },
    success: {
      surface: "primary" as const,
      bgClass: "bg-modal-success-bg",
      textClass: "text-modal-success-text",
      iconClass: "text-modal-success-text",
      icon: CheckCircle,
    },
    warning: {
      surface: "primary" as const,
      bgClass: "bg-modal-warning-bg",
      textClass: "text-modal-warning-text",
      iconClass: "text-modal-warning-text",
      icon: AlertTriangle,
    },
    danger: {
      surface: "primary" as const,
      bgClass: "bg-modal-danger-bg",
      textClass: "text-modal-danger-text",
      iconClass: "text-modal-danger-text",
      icon: XCircle,
    },
  };

  const config = variantConfig[variant];
  const IconComponent = config.icon;

  return (
    <ToastPrimitive.Root
      duration={duration}
      onOpenChange={(open) => {
        if (!open && onClose) {
          onClose();
        }
      }}
      className={cn(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-lg border p-4 shadow-lg transition-all",
        "data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        config.bgClass
      )}
    >
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          <IconComponent className={cn("w-5 h-5", config.iconClass)} />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {title && (
            <ToastPrimitive.Title asChild>
              <ThemedText variant="primary" className={cn("font-semibold text-sm", config.textClass)}>
                {title}
              </ThemedText>
            </ToastPrimitive.Title>
          )}

          {description && (
            <ToastPrimitive.Description asChild>
              <ThemedText variant="primary" className={cn("text-sm leading-relaxed", config.textClass, title ? "mt-1" : "")}>
                {description}
              </ThemedText>
            </ToastPrimitive.Description>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Action Button */}
        {action && (
          <ToastPrimitive.Action altText={action.label} asChild>
            <button
              onClick={action.onClick}
              className={cn(
                "inline-flex h-8 shrink-0 items-center justify-center rounded-md px-3 text-xs font-medium transition-colors",
                "hover:bg-black/10 dark:hover:bg-white/10",
                config.textClass
              )}
            >
              {action.label}
            </button>
          </ToastPrimitive.Action>
        )}

        {/* Close Button */}
        <ToastPrimitive.Close asChild>
          <button
            className={cn(
              "absolute right-2 top-2 rounded-md p-1 opacity-70 transition-opacity hover:opacity-100",
              "hover:bg-black/10 dark:hover:bg-white/10",
              config.iconClass
            )}
            aria-label="Chiudi notifica"
          >
            <X className="h-4 w-4" />
          </button>
        </ToastPrimitive.Close>
      </div>
    </ToastPrimitive.Root>
  );
};

/**
 * ToastProvider - Provider per il sistema Toast con Context.
 *
 * Props:
 * - position: Posizione dei toast (default da TOAST_CONFIG)
 * - children: App components
 */
interface ToastProviderProps {
  position?: ToastPosition;
  children: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ position = TOAST_CONFIG.DEFAULT_POSITION, children }) => {
  const { contextValue, ToastContext } = useToastState();

  // Mapping posizioni to Radix props
  const positionConfig = {
    "top-center": { swipeDirection: "up" as const },
    "bottom-center": { swipeDirection: "down" as const },
    "top-right": { swipeDirection: "right" as const },
    "bottom-right": { swipeDirection: "right" as const },
  };

  const config = positionConfig[position];

  // CSS per posizionamento
  const getPositionClasses = () => {
    switch (position) {
      case "top-center":
        return "top-0 left-1/2 -translate-x-1/2 flex-col";
      case "bottom-center":
        return "bottom-0 left-1/2 -translate-x-1/2 flex-col-reverse";
      case "top-right":
        return "top-0 right-0 flex-col";
      case "bottom-right":
        return "bottom-0 right-0 flex-col-reverse";
    }
  };

  return (
    <ToastContext.Provider value={contextValue}>
      <ToastPrimitive.Provider
        swipeDirection={TOAST_CONFIG.SWIPE_ENABLED ? config.swipeDirection : undefined}
        duration={TOAST_CONFIG.DEFAULT_DURATION}
      >
        {children}

        {/* Render active toasts */}
        {contextValue.toasts.map((toastItem) => (
          <Toast
            key={toastItem.id}
            variant={toastItem.variant}
            title={toastItem.title}
            description={toastItem.description}
            action={toastItem.action}
            duration={toastItem.duration}
            onClose={() => contextValue.dismiss(toastItem.id)}
          />
        ))}

        <ToastPrimitive.Viewport
          className={cn(
            "fixed z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            getPositionClasses()
          )}
          style={
            {
              "--viewport-padding": `${TOAST_CONFIG.VIEWPORT_OFFSET}px`,
            } as React.CSSProperties
          }
        />
      </ToastPrimitive.Provider>
    </ToastContext.Provider>
  );
};

export { Toast, ToastProvider };
export default Toast;
