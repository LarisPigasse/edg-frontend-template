import React from "react";
import { cn } from "../../utils";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  variant?: "default" | "required" | "disabled" | "error" | "info";
  size?: "xs" | "sm" | "md" | "lg";
  weight?: "normal" | "medium" | "semibold" | "bold";
  required?: boolean;
  optional?: boolean;
  htmlFor?: string;
}

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      weight = "medium",
      required = false,
      optional = false,
      className,
      htmlFor,
      ...props
    },
    ref
  ) => {
    // Classes per il testo basate sulla variante
    const getVariantClasses = () => {
      switch (variant) {
        case "required":
          return "text-text-primary";
        case "info":
          return "text-text-info";
        case "disabled":
          return "text-text-disabled cursor-not-allowed";
        case "error":
          return "text-text-error";
        default:
          return "text-text-label";
      }
    };

    // Classes per la dimensione
    const getSizeClasses = () => {
      switch (size) {
        case "xs":
          return "text-xs";
        case "sm":
          return "text-sm";
        case "lg":
          return "text-lg";
        default:
          return "text-base";
      }
    };

    // Classes per il peso del font
    const getWeightClasses = () => {
      switch (weight) {
        case "normal":
          return "font-normal";
        case "medium":
          return "font-medium";
        case "semibold":
          return "font-semibold";
        case "bold":
          return "font-bold";
        default:
          return "font-medium";
      }
    };

    const labelClasses = cn(
      // Base styling
      "block select-none transition-colors duration-200",
      "leading-6",

      // Varianti colore
      getVariantClasses(),

      // Dimensioni
      getSizeClasses(),

      // Peso font
      getWeightClasses(),

      // Hover effect (solo se non disabled)
      variant !== "disabled" && "cursor-pointer",

      className
    );

    return (
      <label ref={ref} htmlFor={htmlFor} className={labelClasses} {...props}>
        <span className="flex items-center gap-1">
          {children}

          {/* Asterisco per required */}
          {required && (
            <span className="text-text-error font-medium ml-0.5" aria-label="richiesto">
              *
            </span>
          )}

          {/* Badge opzionale */}
          {optional && !required && <span className="text-text-placeholder text-sm font-normal ml-1">(opzionale)</span>}
        </span>
      </label>
    );
  }
);

Label.displayName = "Label";
