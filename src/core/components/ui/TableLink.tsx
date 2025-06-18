// src/core/components/ui/TableLink.tsx
import React, { ReactNode, forwardRef } from "react";
import { useThemeStyles } from "../../hooks/useThemeStyles";

export type TableLinkVariant = "primary" | "secondary" | "danger" | "success";

interface TableLinkProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  variant?: TableLinkVariant;
  title?: string;
  disabled?: boolean;
  icon?: ReactNode;
}

const TableLink = forwardRef<HTMLButtonElement, TableLinkProps>(
  ({ onClick, children, className = "", variant = "primary", title, disabled = false, icon }, ref) => {
    const { utils } = useThemeStyles();

    const baseClasses = `inline-flex items-center text-left focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-sm ${utils.transition.fast}`;

    // 🎨 Varianti unificate con design tokens
    const variantClasses = {
      primary: "text-violet-600 hover:text-violet-700 focus:ring-violet-500",
      secondary: `${utils.text.secondary} hover:${utils.text.primary} focus:ring-gray-500`,
      danger: "text-red-600 hover:text-red-700 focus:ring-red-500",
      success: "text-green-600 hover:text-green-700 focus:ring-green-500",
    };

    const disabledClasses = `${utils.text.secondary} opacity-50 cursor-not-allowed`;

    const classes = disabled
      ? `${baseClasses} ${disabledClasses} ${className}`
      : `${baseClasses} ${variantClasses[variant]} ${className}`;

    const handleClick = () => {
      if (!disabled) {
        onClick();
      }
    };

    return (
      <button ref={ref} onClick={handleClick} className={classes} title={title} disabled={disabled} type="button">
        {icon && <span className="mr-1 flex items-center">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

TableLink.displayName = "TableLink";
export default TableLink;
