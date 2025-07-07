import React, { useState, useId, useRef, useEffect } from "react";
import { cn } from "../../utils";

interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "placeholder"> {
  label: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "error";
  fullWidth?: boolean;
  required?: boolean;
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  showCharCount?: boolean;
  maxLength?: number;
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      error,
      helperText,
      variant = "default",
      fullWidth = true,
      required = false,
      autoResize = true,
      minRows = 3,
      maxRows = 8,
      showCharCount = false,
      maxLength,
      className,
      disabled,
      value,
      defaultValue,
      onFocus,
      onBlur,
      onChange,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(Boolean(value || defaultValue));
    const [charCount, setCharCount] = useState(0);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const id = useId();

    const isFloating = isFocused || hasValue || (value !== undefined && value !== "");
    const hasError = error || variant === "error";

    // Auto-resize logic
    useEffect(() => {
      const textarea = textareaRef.current;
      if (!textarea || !autoResize) return;

      const adjustHeight = () => {
        textarea.style.height = "auto";
        const scrollHeight = textarea.scrollHeight;
        const lineHeight = parseInt(getComputedStyle(textarea).lineHeight);
        const minHeight = minRows * lineHeight;
        const maxHeight = maxRows * lineHeight;

        textarea.style.height = `${Math.min(Math.max(scrollHeight, minHeight), maxHeight)}px`;
      };

      adjustHeight();

      // Adjust on content change
      const observer = new MutationObserver(adjustHeight);
      observer.observe(textarea, {
        attributes: true,
        attributeFilter: ["value"],
      });

      return () => observer.disconnect();
    }, [autoResize, minRows, maxRows, value]);

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value !== "");
      onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(e.target.value !== "");
      setCharCount(e.target.value.length);
      onChange?.(e);
    };

    // Update char count on value prop change
    useEffect(() => {
      if (typeof value === "string") {
        setCharCount(value.length);
      }
    }, [value]);

    // Classes per il container
    const containerClasses = cn("relative", fullWidth && "w-full");

    // Classes per il textarea
    const textareaClasses = cn(
      // Base styling
      "w-full bg-transparent border-none outline-none resize-none",
      "pt-6 pb-2 px-0",
      "text-base leading-6",
      "transition-all duration-200 ease-out",

      // Text color
      "text-text-primary",

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
        ? ["top-1 text-sm font-medium", isFocused && !hasError && "text-text-primary", hasError && "text-text-error"]
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

      // Focused state (focus attivo)
      !disabled && !hasError && isFocused && ["h-px bg-underline-focus"],

      // Valid state (ha valore ma non focus)
      !disabled && !hasError && !isFocused && hasValue && ["h-px bg-underline-primary"],

      // Empty state (default)
      !disabled && !hasError && !isFocused && !hasValue && ["h-px bg-underline-default"]
    );

    // Character count styling
    const isNearLimit = maxLength && charCount > maxLength * 0.8;
    const isOverLimit = maxLength && charCount > maxLength;

    return (
      <div className={containerClasses}>
        {/* TextArea container */}
        <div className="relative bg-bg-primary rounded-t-lg">
          {/* TextArea field */}
          <textarea
            ref={(node) => {
              textareaRef.current = node;
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                ref.current = node;
              }
            }}
            id={id}
            className={textareaClasses}
            disabled={disabled}
            value={value}
            defaultValue={defaultValue}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            required={required}
            maxLength={maxLength}
            rows={minRows}
            {...props}
          />

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

        {/* Helper text, error e character count */}
        <div className="mt-1.5 px-0">
          <div className="flex justify-between items-start">
            {/* Helper text o error message */}
            {(helperText || error) && (
              <span className={cn("text-sm", error ? "text-text-error" : "text-text-secondary")}>{error || helperText}</span>
            )}

            {/* Character count */}
            {showCharCount && (
              <span
                className={cn(
                  "text-sm ml-2 flex-shrink-0",
                  isOverLimit ? "text-text-error" : isNearLimit ? "text-yellow-600" : "text-text-secondary"
                )}
              >
                {charCount}
                {maxLength && `/${maxLength}`}
              </span>
            )}
          </div>
        </div>
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
