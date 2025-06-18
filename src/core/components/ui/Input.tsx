// src/core/components/ui/Input.tsx
import React, { InputHTMLAttributes, forwardRef } from "react";
import { useThemeStyles } from "../../hooks/useThemeStyles";

export type InputVariant = "default" | "error" | "success";
export type InputSize = "sm" | "md" | "lg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  entity?: string;
  fieldName?: string;
  error?: string;
  label?: string;
  helperText?: string;
  variant?: InputVariant;
  inputSize?: InputSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      entity,
      fieldName,
      id,
      name,
      error,
      label,
      helperText,
      variant = "default",
      inputSize = "md",
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    const { tokens, utils } = useThemeStyles();

    const inputId = id || (entity && fieldName ? `${entity}_${fieldName}` : undefined);
    const inputName = name || (entity && fieldName ? `${entity}_${fieldName}` : undefined);
    const resolvedVariant = error ? "error" : variant;

    const baseClasses = `block w-full rounded-md border focus:outline-none focus:ring-2 focus:ring-offset-0 ${utils.transition.fast}`;

    const sizeClasses = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-3 py-2 text-sm",
      lg: "px-4 py-3 text-base",
    };

    // 🎨 Varianti unificate con design tokens
    const variantClasses = {
      default: `border-[${tokens.surface.border}] text-[${tokens.surface.text}] bg-[${tokens.surface.bgElevated}] focus:border-violet-500 focus:ring-violet-500`,

      error: `border-red-300 text-[${tokens.surface.text}] bg-[${tokens.surface.bgElevated}] focus:border-red-500 focus:ring-red-500`,

      success: `border-green-300 text-[${tokens.surface.text}] bg-[${tokens.surface.bgElevated}] focus:border-green-500 focus:ring-green-500`,
    };

    const iconClasses = leftIcon || rightIcon ? "relative" : "";
    const paddingClasses = {
      left: leftIcon ? "pl-10" : "",
      right: rightIcon ? "pr-10" : "",
    };

    const inputClasses = `${baseClasses} ${sizeClasses[inputSize]} ${variantClasses[resolvedVariant]} ${paddingClasses.left} ${paddingClasses.right} ${className}`;

    return (
      <div className="w-full">
        {/* Label */}
        {label && (
          <label htmlFor={inputId} className={`block mb-2 text-sm font-medium ${utils.text.primary}`}>
            {label}
          </label>
        )}

        {/* Input Container */}
        <div className={iconClasses}>
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className={utils.text.secondary}>{leftIcon}</div>
            </div>
          )}

          {/* Input */}
          <input ref={ref} id={inputId} name={inputName} className={inputClasses} {...props} />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className={utils.text.secondary}>{rightIcon}</div>
            </div>
          )}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}

        {/* Helper Text */}
        {helperText && !error && <p className={`${utils.text.secondary} text-sm mt-1`}>{helperText}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
export default Input;
