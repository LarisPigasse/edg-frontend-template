import React, { useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";
import { cn } from "../../utils";

interface CheckboxProps {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
}

export const Checkbox = React.forwardRef<React.ElementRef<typeof CheckboxPrimitive.Root>, CheckboxProps>(
  (
    {
      label,
      description,
      checked,
      defaultChecked,
      indeterminate = false,
      disabled = false,
      required = false,
      error,
      size = "md",
      variant = "default",
      onCheckedChange,
      className,
      id: providedId,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = providedId || generatedId;
    const hasError = error || variant === "error";

    // Size variants for the checkbox
    const sizeClasses = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    };

    // Icon sizes
    const iconSizes = {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    };

    // Text sizes
    const textSizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };

    // Checkbox styling
    const checkboxClasses = cn(
      // Base styling
      "shrink-0 rounded border-2 ring-offset-bg-primary",
      "focus:outline-none focus:ring-2 focus:ring-text-link focus:ring-offset-2",
      "transition-all duration-200 ease-in-out",

      // Size
      sizeClasses[size],

      // State styling
      "border-border-strong bg-bg-primary",
      "hover:border-border-strong",
      "data-[state=checked]:bg-text-link data-[state=checked]:border-text-link",
      "data-[state=indeterminate]:bg-text-link data-[state=indeterminate]:border-text-link",

      // Error state
      hasError && [
        "border-text-error",
        "data-[state=checked]:bg-text-error data-[state=checked]:border-text-error",
        "data-[state=indeterminate]:bg-text-error data-[state=indeterminate]:border-text-error",
      ],

      // Disabled state
      disabled && ["opacity-50 cursor-not-allowed", "hover:border-border-default"],

      className
    );

    // Container styling
    const containerClasses = cn("flex items-start gap-3", disabled && "cursor-not-allowed");

    // Label styling
    const labelClasses = cn(
      "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      "font-medium",
      textSizes[size],
      hasError ? "text-text-info" : "text-text-primary"
    );

    // Description styling
    const descriptionClasses = cn("text-text-secondary", size === "sm" ? "text-xs" : "text-sm", "mt-1");

    return (
      <div className="space-y-2">
        <div className={containerClasses}>
          <CheckboxPrimitive.Root
            ref={ref}
            id={id}
            className={checkboxClasses}
            checked={indeterminate ? "indeterminate" : checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            required={required}
            onCheckedChange={onCheckedChange}
            {...props}
          >
            <CheckboxPrimitive.Indicator className="flex items-center justify-center text-white">
              {indeterminate ? <Minus className={iconSizes[size]} /> : <Check className={iconSizes[size]} />}
            </CheckboxPrimitive.Indicator>
          </CheckboxPrimitive.Root>

          {/* Label and description */}
          {(label || description) && (
            <div className="grid gap-1 leading-none">
              {label && (
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

              {description && <p className={descriptionClasses}>{description}</p>}

              {/* ✨ Fix: Error message sotto la label */}
              {error && <p className="text-sm text-text-error">{error}</p>}
            </div>
          )}
        </div>

        {/* ✨ Fix: Error message per checkbox senza label */}
        {error && !label && !description && <p className="text-sm text-text-error px-0">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
