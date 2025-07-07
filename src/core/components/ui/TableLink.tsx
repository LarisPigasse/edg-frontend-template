// src/core/components/ui/TableLink.tsx
import React, { ReactNode, forwardRef } from "react";
import { cn } from "../../utils/";

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

/**
 * TableLink component per elementi cliccabili nelle tabelle.
 * Integrato anche nel Table component per celle cliccabili.
 */
const TableLink = forwardRef<HTMLButtonElement, TableLinkProps>(
  ({ onClick, children, className = "", variant = "primary", title, disabled = false, icon }, ref) => {
    // 🎨 Base classes con CSS custom properties
    const baseClasses =
      "inline-flex items-center text-left focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-sm transition-colors duration-200";

    // 🎨 Variant classes allineate al theme system
    const variantClasses = {
      primary: "text-violet-600 hover:text-violet-700 focus:ring-violet-500",
      secondary: "text-text-secondary hover:text-text-primary focus:ring-gray-500",
      danger: "text-red-600 hover:text-red-700 focus:ring-red-500",
      success: "text-green-600 hover:text-green-700 focus:ring-green-500",
    };

    const disabledClasses = "text-text-disabled opacity-50 cursor-not-allowed";

    const handleClick = () => {
      if (!disabled) {
        onClick();
      }
    };

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(baseClasses, disabled ? disabledClasses : variantClasses[variant], className)}
        title={title}
        disabled={disabled}
        type="button"
      >
        {icon && <span className="mr-1 flex items-center">{icon}</span>}
        <span>{children}</span>
      </button>
    );
  }
);

TableLink.displayName = "TableLink";
export default TableLink;
export type { TableLinkVariant };
