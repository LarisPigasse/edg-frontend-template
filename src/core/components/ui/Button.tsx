// src/core/components/ui/Button.tsx
import { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "danger" | "success" | "ghost" | "link" | "info" | "warning";
export type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      className = "",
      disabled,
      type = "button",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors duration-200";

    const sizeClasses = {
      xs: "px-2 py-1 text-xs",
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    };

    const variantClasses = {
      primary:
        "border border-transparent bg-violet-500 text-white hover:bg-violet-600 focus:ring-violet-500 disabled:bg-violet-300 disabled:cursor-not-allowed",
      secondary:
        "border border-transparent bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
      outline:
        "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-violet-500 disabled:bg-gray-50 disabled:text-gray-400 disabled:cursor-not-allowed dark:border-gray-600 dark:text-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700",
      danger:
        "border border-transparent bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 disabled:bg-red-300 disabled:cursor-not-allowed",
      success:
        "border border-transparent bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 disabled:bg-green-300 disabled:cursor-not-allowed",
      warning:
        "border border-transparent bg-amber-400 text-amber-900 hover:bg-amber-500 focus:ring-amber-400 disabled:bg-amber-200 disabled:text-amber-600 disabled:cursor-not-allowed",
      info: "border border-transparent bg-sky-500 text-white hover:bg-sky-600 focus:ring-sky-500 disabled:bg-sky-300 disabled:cursor-not-allowed",
      ghost:
        "border border-transparent bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 disabled:bg-transparent disabled:text-gray-400 disabled:cursor-not-allowed dark:text-gray-300 dark:hover:bg-gray-800",
      link: "border border-transparent bg-transparent p-0 text-violet-600 hover:text-violet-700 hover:underline focus:ring-0 disabled:text-violet-300 disabled:cursor-not-allowed dark:text-violet-400 dark:hover:text-violet-300",
    };

    const widthClass = fullWidth ? "w-full" : "";
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
        disabled={isDisabled}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!isLoading && leftIcon && <span className="mr-2 -ml-1 flex items-center">{leftIcon}</span>}

        <span>{children}</span>

        {rightIcon && <span className="ml-2 -mr-1 flex items-center">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
