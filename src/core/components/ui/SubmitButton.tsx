// src/core/components/ui/SubmitButton.tsx
import React, { ButtonHTMLAttributes, ReactNode, forwardRef } from "react";
import Button from "./Button";

export type SubmitButtonVariant = "primary" | "secondary" | "success" | "outline";
export type SubmitButtonSize = "md" | "lg";

interface SubmitButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: SubmitButtonVariant;
  size?: SubmitButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  loadingText?: string;
  fullWidth?: boolean;
}

const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  (
    {
      children,
      variant = "info",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      loadingText = "Invio in corso...",
      fullWidth = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        type="submit"
        variant={variant}
        size={size}
        isLoading={isLoading}
        leftIcon={!isLoading ? leftIcon : undefined}
        rightIcon={rightIcon}
        disabled={disabled || isLoading}
        fullWidth={fullWidth}
        {...props}
      >
        {isLoading ? loadingText : children}
      </Button>
    );
  }
);

SubmitButton.displayName = "SubmitButton";
export default SubmitButton;
