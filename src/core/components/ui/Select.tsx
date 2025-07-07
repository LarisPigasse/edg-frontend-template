import React, { useState, useId } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import { cn } from "../../utils";

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "error";
  fullWidth?: boolean;
  required?: boolean;
  disabled?: boolean;
  onValueChange?: (value: string) => void;
  className?: string;
}

export const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      label,
      options,
      value,
      defaultValue,
      placeholder = "Seleziona un'opzione",
      error,
      helperText,
      variant = "default",
      fullWidth = true,
      required = false,
      disabled = false,
      onValueChange,
      className,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState(false);
    const [internalValue, setInternalValue] = useState(defaultValue || "");
    const id = useId();

    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = Boolean(currentValue);
    const hasError = error || variant === "error";
    const isFloating = open || hasValue || Boolean(placeholder); // ✨ Fix: include placeholder

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onValueChange?.(newValue);
    };

    // Classes per il container
    const containerClasses = cn("relative", fullWidth && "w-full");

    // Classes per il trigger (simile all'Input)
    const triggerClasses = cn(
      // Base styling
      "w-full bg-transparent border-none outline-none",
      "pt-6 pb-2 px-0 pr-8",
      "text-base leading-6 text-left",
      "transition-all duration-200 ease-out",
      "cursor-pointer",

      // Text color
      hasValue ? "text-text-primary" : "text-text-placeholder",

      // Disabled state
      disabled && "text-text-disabled cursor-not-allowed",

      className
    );

    // Classes per la label (identiche all'Input)
    const labelClasses = cn(
      "absolute left-0 pointer-events-none select-none",
      "transition-all duration-200 ease-out",
      "text-text-label",

      // Floating state
      isFloating
        ? ["top-1 text-sm font-medium", open && !hasError && "text-text-primary", hasError && "text-text-error"]
        : ["top-1/2 -translate-y-1/2 text-base", "text-text-placeholder"],

      // Disabled state
      disabled && "text-text-disabled"
    );

    // Classes per l'underline (identiche all'Input)
    const underlineClasses = cn(
      "absolute bottom-0 left-0 right-0",
      "transition-all duration-200 ease-out",

      // Disabled state
      disabled && "h-px bg-border-thin",

      // Error state (priorità massima)
      !disabled && hasError && ["h-px bg-underline-error"],

      // Open state (come focus)
      !disabled && !hasError && open && ["h-px bg-underline-focus"],

      // Valid state (ha valore ma non aperto)
      !disabled && !hasError && !open && hasValue && ["h-px bg-underline-primary"],

      // Empty state (default)
      !disabled && !hasError && !open && !hasValue && ["h-px bg-underline-default"]
    );

    // Classes per il dropdown content
    const contentClasses = cn(
      "relative z-50 max-h-96 min-w-[8rem] overflow-hidden",
      "rounded-md border border-border-default bg-bg-primary shadow-themed-lg",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
      "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2"
    );

    // Classes per le opzioni
    const itemClasses = cn(
      "relative flex w-full cursor-pointer select-none items-center",
      "rounded-sm px-3 py-2 text-sm outline-none",
      "focus:bg-bg-hover focus:text-text-primary",
      "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      "text-text-primary hover:bg-bg-hover"
    );

    return (
      <div className={containerClasses}>
        <SelectPrimitive.Root
          value={currentValue}
          defaultValue={defaultValue}
          onValueChange={handleValueChange}
          onOpenChange={setOpen}
          disabled={disabled}
        >
          {/* Select container */}
          <div className="relative bg-bg-primary rounded-t-lg">
            {/* Select trigger */}
            <SelectPrimitive.Trigger ref={ref} className={triggerClasses} id={id} {...props}>
              <SelectPrimitive.Value placeholder={placeholder} />

              {/* Dropdown icon */}
              <SelectPrimitive.Icon asChild>
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  {open ? (
                    <ChevronUp className="h-4 w-4 text-text-secondary" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-text-secondary" />
                  )}
                </div>
              </SelectPrimitive.Icon>
            </SelectPrimitive.Trigger>

            {/* Floating label */}
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

          {/* Dropdown content */}
          <SelectPrimitive.Portal>
            <SelectPrimitive.Content className={contentClasses} position="popper">
              <SelectPrimitive.ScrollUpButton className="flex cursor-default items-center justify-center h-[25px] bg-bg-primary text-text-primary">
                <ChevronUp className="h-4 w-4" />
              </SelectPrimitive.ScrollUpButton>

              <SelectPrimitive.Viewport className="p-1">
                {options.map((option) => (
                  <SelectPrimitive.Item
                    key={option.value}
                    value={option.value}
                    disabled={option.disabled}
                    className={itemClasses}
                  >
                    <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
                      <SelectPrimitive.ItemIndicator>
                        <Check className="h-4 w-4" />
                      </SelectPrimitive.ItemIndicator>
                    </span>

                    <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                  </SelectPrimitive.Item>
                ))}
              </SelectPrimitive.Viewport>

              <SelectPrimitive.ScrollDownButton className="flex cursor-default items-center justify-center h-[25px] bg-bg-primary text-text-primary">
                <ChevronDown className="h-4 w-4" />
              </SelectPrimitive.ScrollDownButton>
            </SelectPrimitive.Content>
          </SelectPrimitive.Portal>
        </SelectPrimitive.Root>

        {/* Helper text o error message */}
        {(helperText || error) && (
          <div className="mt-1.5 px-0">
            <span className={cn("text-sm", error ? "text-text-error" : "text-text-secondary")}>{error || helperText}</span>
          </div>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
