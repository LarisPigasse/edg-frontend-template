import React, { useState, useId } from "react";
import { cn } from "../../utils";

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  label: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "error";
  fullWidth?: boolean;
  required?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      variant = "default",
      fullWidth = true,
      required = false,
      className,
      disabled,
      value,
      defaultValue,
      onFocus,
      onBlur,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(Boolean(value || defaultValue));
    const id = useId();

    const isFloating = isFocused || hasValue || (value !== undefined && value !== "");
    const hasError = error || variant === "error";

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value !== "");
      props.onChange?.(e);
    };

    // Classes per il container
    const containerClasses = cn("relative", fullWidth && "w-full");

    // Classes per l'input
    const inputClasses = cn(
      // Base styling
      "w-full bg-transparent border-none outline-none",
      "pt-6 pb-2 px-0",
      "text-base leading-6",
      "transition-all duration-200 ease-out",

      // Text color - usa le tue variabili CSS
      "text-text-primary",

      // Disabled state
      disabled && "text-text-disabled cursor-not-allowed",

      // Override browser autofill styling ✨
      "autofill:bg-transparent autofill:shadow-[inset_0_0_0px_1000px_rgb(255,255,255,0)]",
      "dark:autofill:shadow-[inset_0_0_0px_1000px_rgb(26,31,46,1)]",

      className
    );

    // Classes per la label
    const labelClasses = cn(
      "absolute left-0 pointer-events-none select-none",
      "transition-all duration-200 ease-out",
      "text-text-label",

      // Floating state
      isFloating
        ? ["top-1 text-sm font-medium", isFocused && !hasError && "text-text-primary", hasError && "text-text-error"]
        : ["top-1/2 -translate-y-1/2 text-base", "text-text-placeholder"],

      // Disabled state
      disabled && "text-text-disabled"
    );

    // Classes per l'underline - USA LE VARIABILI UNDERLINE SPECIFICHE
    const underlineClasses = cn(
      "absolute bottom-0 left-0 right-0",
      "transition-all duration-200 ease-out",

      // Disabled state
      disabled && "h-px bg-border-thin",

      // Error state (priorità massima)
      !disabled && hasError && ["h-px bg-underline-error"],

      // Focused state (focus attivo)
      !disabled && !hasError && isFocused && ["h-px bg-underline-focus"],

      // Valid state (ha valore ma non focus)
      !disabled && !hasError && !isFocused && hasValue && ["h-px bg-underline-primary"],

      // Empty state (default)
      !disabled && !hasError && !isFocused && !hasValue && ["h-px bg-underline-default"]
    );

    return (
      <div className={containerClasses}>
        {/* Input container con background neutro */}
        <div className="relative rounded-t-lg">
          {/* Input field */}
          <input
            ref={ref}
            id={id}
            className={inputClasses}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required={required}
            {...props}
          />

          {/* Floating label con asterisco */}
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

          {/* Underline */}
          <div className={underlineClasses} />
        </div>

        {/* Helper text o error message */}
        {(helperText || error) && (
          <div className="mt-0 px-0">
            <span className={cn("text-sm", error ? "text-text-error" : "text-text-secondary")}>{error || helperText}</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
