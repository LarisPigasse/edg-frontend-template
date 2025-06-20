// src/core/components/ui/Modal.tsx
import React, { ReactNode, useEffect } from "react";
import { useThemeStyles } from "../../hooks/useThemeStyles";

export type ModalSize = "xs" | "sm" | "md" | "lg" | "xl" | "full";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: ModalSize;
  closable?: boolean;
  footer?: ReactNode;
  className?: string;
}
const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  closable = true,
  footer,
  className = "",
}) => {
  const { tokens, surface, utils } = useThemeStyles();

  const sizeClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-4xl",
    full: "max-w-7xl mx-4",
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && closable) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, closable]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget && closable) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={handleBackdropClick} />

      {/* Modal Container */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`
            relative w-full ${sizeClasses[size]} transform overflow-hidden rounded-lg 
            ${surface.elevated} shadow-xl ${utils.transition.normal}
            ${className}
          `}
        >
          {/* Header */}
          {(title || closable) && (
            <div className={`flex items-center justify-between p-6 ${surface.border}`}>
              {title && <h3 className={`text-lg font-semibold ${utils.text.primary}`}>{title}</h3>}
              {closable && (
                <button
                  type="button"
                  className={`rounded-md bg-transparent ${utils.text.secondary} hover:${utils.text.interactive} focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 p-1 ${utils.transition.fast}`}
                  onClick={onClose}
                >
                  <span className="sr-only">Chiudi</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          {footer && (
            <div className={`flex justify-end space-x-3 p-6 ${surface.border} bg-[${tokens.surface.bg}]/50`}>{footer}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
