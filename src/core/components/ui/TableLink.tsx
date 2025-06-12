// src/core/components/ui/TableLink.tsx
import React, { ReactNode, forwardRef } from "react";

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
    const baseClasses =
      "inline-flex items-center text-left transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-sm";

    const variantClasses = {
      primary: "text-violet-600 hover:text-violet-700 focus:ring-violet-500 dark:text-violet-400 dark:hover:text-violet-300",
      secondary: "text-gray-600 hover:text-gray-700 focus:ring-gray-500 dark:text-gray-400 dark:hover:text-gray-300",
      danger: "text-red-600 hover:text-red-700 focus:ring-red-500 dark:text-red-400 dark:hover:text-red-300",
      success: "text-green-600 hover:text-green-700 focus:ring-green-500 dark:text-green-400 dark:hover:text-green-300",
    };

    const disabledClasses = "text-gray-400 cursor-not-allowed dark:text-gray-600";

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
