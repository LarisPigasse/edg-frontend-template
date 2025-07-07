import React, { useId } from "react";
import { cn } from "../../utils";

interface FormFieldProps {
  children: React.ReactNode;
  label?: string;
  required?: boolean;
  error?: string;
  helperText?: string;
  description?: string;
  size?: "sm" | "md" | "lg";
  spacing?: "tight" | "normal" | "loose";
  className?: string;
  labelClassName?: string;
  errorClassName?: string;
  helperClassName?: string;
  hideLabel?: boolean; // Per componenti che hanno già label interna (Input, Select, etc.)
}

export const FormField = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      children,
      label,
      required = false,
      error,
      helperText,
      description,
      size = "md",
      spacing = "normal",
      className,
      labelClassName,
      errorClassName,
      helperClassName,
      hideLabel = false,
      ...props
    },
    ref
  ) => {
    const id = useId();
    const hasError = Boolean(error);

    // Size variants
    const sizeClasses = {
      sm: {
        label: "text-sm",
        helper: "text-xs",
        error: "text-xs",
      },
      md: {
        label: "text-base",
        helper: "text-sm",
        error: "text-sm",
      },
      lg: {
        label: "text-lg",
        helper: "text-base",
        error: "text-sm",
      },
    };

    // Spacing variants
    const spacingClasses = {
      tight: "space-y-1",
      normal: "space-y-2",
      loose: "space-y-3",
    };

    const sizes = sizeClasses[size];

    // Container styling
    const containerClasses = cn("w-full", spacingClasses[spacing], className);

    // Label styling
    const labelClasses = cn(
      "block font-medium leading-none",
      sizes.label,
      hasError ? "text-text-error" : "text-text-label",
      labelClassName
    );

    // Description styling
    const descriptionClasses = cn("leading-relaxed", sizes.helper, "text-text-secondary");

    // Helper text styling
    const helperClasses = cn("leading-relaxed", sizes.helper, "text-text-secondary", helperClassName);

    // Error styling
    const errorClasses = cn("leading-relaxed", sizes.error, "text-text-error", errorClassName);

    // Clone children to pass fieldId for accessibility
    const childrenWithProps = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        // Se il componente supporta queste props, le passiamo
        return React.cloneElement(child, {
          id: child.props.id || id,
          "aria-describedby": error ? `${id}-error` : helperText ? `${id}-helper` : undefined,
          "aria-invalid": hasError ? "true" : undefined,
          ...child.props,
        } as React.HTMLAttributes<HTMLElement> & { [key: string]: unknown });
      }
      return child;
    });

    return (
      <div ref={ref} className={containerClasses} {...props}>
        {/* Label - Solo se non hideLabel e se c'è una label */}
        {!hideLabel && label && (
          <label htmlFor={id} className={labelClasses}>
            <span className="flex items-center gap-1">
              {label}

              {/* Asterisco per required */}
              {required && (
                <span className="text-text-error font-medium ml-0.5" aria-label="richiesto">
                  *
                </span>
              )}
            </span>
          </label>
        )}

        {/* Description - Testo esplicativo prima del campo */}
        {description && <p className={descriptionClasses}>{description}</p>}

        {/* Form control */}
        <div>{childrenWithProps}</div>

        {/* Error message - Priorità massima */}
        {error && (
          <p id={`${id}-error`} className={errorClasses} role="alert">
            {error}
          </p>
        )}

        {/* Helper text - Solo se non c'è errore */}
        {!error && helperText && (
          <p id={`${id}-helper`} className={helperClasses}>
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";
