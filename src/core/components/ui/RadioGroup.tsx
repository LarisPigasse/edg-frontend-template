import React, { useId } from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { cn } from "../../utils";

interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  helperText?: string;
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  variant?: "default" | "error";
  onValueChange?: (value: string) => void;
  className?: string;
  name?: string;
}

export const RadioGroup = React.forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  (
    {
      label,
      options,
      value,
      defaultValue,
      disabled = false,
      required = false,
      error,
      helperText,
      orientation = "vertical",
      size = "md",
      variant = "default",
      onValueChange,
      className,
      name,
      ...props
    },
    ref
  ) => {
    const groupId = useId();
    const hasError = error || variant === "error";

    // Size variants
    const sizeClasses = {
      sm: {
        radio: "h-4 w-4",
        indicator: "h-2 w-2",
        text: "text-sm",
        gap: "gap-2",
      },
      md: {
        radio: "h-5 w-5",
        indicator: "h-2.5 w-2.5",
        text: "text-base",
        gap: "gap-3",
      },
      lg: {
        radio: "h-6 w-6",
        indicator: "h-3 w-3",
        text: "text-lg",
        gap: "gap-3",
      },
    };

    const sizes = sizeClasses[size];

    // Radio item styling
    const radioClasses = cn(
      // Base styling
      "aspect-square rounded-full border-2 ring-offset-bg-primary",
      "focus:outline-none focus:ring-2 focus:ring-text-link focus:ring-offset-2",
      "transition-all duration-200 ease-in-out",

      // Size
      sizes.radio,

      // State styling
      "border-border-default bg-bg-primary",
      "hover:border-border-strong",
      "data-[state=checked]:border-text-link data-[state=checked]:bg-text-link",

      // Error state
      hasError && ["border-text-error", "data-[state=checked]:border-text-error data-[state=checked]:bg-text-error"],

      // Disabled state
      disabled && "opacity-50 cursor-not-allowed hover:border-border-default"
    );

    // Indicator styling
    const indicatorClasses = cn("flex items-center justify-center", sizes.indicator, "rounded-full bg-white");

    // Container styling
    const containerClasses = cn("space-y-3", orientation === "horizontal" && "flex flex-wrap gap-6 space-y-0");

    // Item container styling
    const itemClasses = cn("flex items-start", sizes.gap, disabled && "cursor-not-allowed");

    // Label styling
    const labelClasses = cn("font-medium leading-none", sizes.text, hasError ? "text-text-error" : "text-text-primary");

    // Option label styling
    const optionLabelClasses = cn(
      "leading-none cursor-pointer",
      sizes.text,
      "font-medium text-text-primary",
      "peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    );

    // Description styling
    const descriptionClasses = cn("text-text-secondary mt-1", size === "sm" ? "text-xs" : "text-sm");

    return (
      <div className="space-y-3">
        {/* Group label */}
        {label && (
          <div className={labelClasses}>
            <span className="flex items-center gap-1">
              {label}

              {/* Asterisco per required */}
              {required && (
                <span className="text-text-error font-medium ml-0.5" aria-label="richiesto">
                  *
                </span>
              )}
            </span>
          </div>
        )}

        {/* Radio group */}
        <RadioGroupPrimitive.Root
          ref={ref}
          className={cn(containerClasses, className)}
          value={value}
          defaultValue={defaultValue}
          onValueChange={onValueChange}
          disabled={disabled}
          required={required}
          name={name}
          orientation={orientation}
          {...props}
        >
          {options.map((option) => {
            const itemId = `${groupId}-${option.value}`;

            return (
              <div key={option.value} className={itemClasses}>
                <RadioGroupPrimitive.Item
                  value={option.value}
                  id={itemId}
                  disabled={option.disabled || disabled}
                  className={radioClasses}
                >
                  <RadioGroupPrimitive.Indicator className={indicatorClasses} />
                </RadioGroupPrimitive.Item>

                <div className="grid gap-1.5 leading-none">
                  <label htmlFor={itemId} className={optionLabelClasses}>
                    {option.label}
                  </label>

                  {option.description && <p className={descriptionClasses}>{option.description}</p>}
                </div>
              </div>
            );
          })}
        </RadioGroupPrimitive.Root>

        {/* Helper text o error message */}
        {(helperText || error) && (
          <div className="px-0">
            <span className={cn("text-sm", error ? "text-text-error" : "text-text-secondary")}>{error || helperText}</span>
          </div>
        )}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
