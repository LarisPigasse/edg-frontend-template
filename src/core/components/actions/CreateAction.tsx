// src/core/components/ui/CreateAction.tsx
import React, { ReactNode, forwardRef } from "react";
import Button from "./../ui/Button";
import ButtonVariant from "./../ui/Button";
import ButtonSize from "./../ui/Button";

interface CreateActionProps {
  onClick: () => void;
  label?: string;
  icon?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
}

const CreateAction = forwardRef<HTMLButtonElement, CreateActionProps>(
  (
    {
      onClick,
      label = "Nuovo",
      icon = (
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      ),
      variant = "primary",
      size = "md",
      className = "",
      disabled = false,
      fullWidth = false,
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        variant={variant}
        size={size}
        leftIcon={icon}
        onClick={onClick}
        className={className}
        disabled={disabled}
        fullWidth={fullWidth}
      >
        {label}
      </Button>
    );
  }
);

CreateAction.displayName = "CreateAction";
export default CreateAction;
