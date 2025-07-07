import React, { useId } from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "../../utils";

interface SwitchProps {
  label?: string;
  description?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  id?: string;
}

export const Switch = React.forwardRef<React.ElementRef<typeof SwitchPrimitive.Root>, SwitchProps>(
  (
    {
      label,
      description,
      checked,
      defaultChecked,
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

    // Size variants for the switch
    const switchSizes = {
      sm: "h-5 w-9",
      md: "h-6 w-11",
      lg: "h-7 w-13",
    };

    // Thumb sizes
    const thumbSizes = {
      sm: "h-4 w-4 data-[state=checked]:translate-x-4",
      md: "h-5 w-5 data-[state=checked]:translate-x-5",
      lg: "h-6 w-6 data-[state=checked]:translate-x-6",
    };

    // Text sizes
    const textSizes = {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    };

    // Switch styling
    const switchClasses = cn(
      // Base styling
      "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
      "transition-all duration-200 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-text-link focus:ring-offset-2 focus:ring-offset-bg-primary",

      // Size
      switchSizes[size],

      // State styling
      "bg-border-default hover:bg-border-strong",
      "data-[state=checked]:bg-text-link",
      "data-[state=unchecked]:bg-border-default",

      // Error state
      hasError && [
        "data-[state=checked]:bg-text-error",
        "data-[state=unchecked]:bg-text-error data-[state=unchecked]:opacity-50",
      ],

      // Disabled state
      disabled && ["cursor-not-allowed opacity-50", "hover:bg-border-default data-[state=checked]:hover:bg-text-link"],

      className
    );

    // Thumb styling
    const thumbClasses = cn(
      "pointer-events-none block rounded-full bg-white shadow-lg ring-0",
      "transition-transform duration-200 ease-in-out",
      "translate-x-0",
      thumbSizes[size]
    );

    // Container styling
    const containerClasses = cn("flex items-start gap-3", disabled && "cursor-not-allowed");

    // Label styling
    const labelClasses = cn(
      "leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      "font-medium cursor-pointer",
      textSizes[size],
      hasError ? "text-text-primary" : "text-text-primary"
    );

    // Description styling
    const descriptionClasses = cn("text-text-secondary", size === "sm" ? "text-xs" : "text-sm", "mt-1");

    return (
      <div className="space-y-2">
        <div className={containerClasses}>
          <SwitchPrimitive.Root
            ref={ref}
            id={id}
            className={switchClasses}
            checked={checked}
            defaultChecked={defaultChecked}
            disabled={disabled}
            required={required}
            onCheckedChange={onCheckedChange}
            {...props}
          >
            <SwitchPrimitive.Thumb className={thumbClasses} />
          </SwitchPrimitive.Root>

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
      </div>
    );
  }
);

Switch.displayName = "Switch";
