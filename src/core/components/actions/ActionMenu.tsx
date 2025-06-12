// src/core/components/ui/ActionMenu.tsx
import React, { useState, useEffect, useRef } from "react";

export interface Action {
  id: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "default" | "danger" | "success" | "warning";
}

export type ActionMenuSize = "sm" | "md" | "lg";
export type ActionMenuAlign = "left" | "right";

interface ActionMenuProps {
  actions: Action[];
  menuButton?: React.ReactNode;
  alignMenu?: ActionMenuAlign;
  size?: ActionMenuSize;
  className?: string;
  disabled?: boolean;
}

const ActionMenu: React.FC<ActionMenuProps> = ({
  actions,
  menuButton,
  alignMenu = "right",
  size = "md",
  className = "",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [menuAlignment, setMenuAlignment] = useState(alignMenu);

  useEffect(() => {
    const calculatePosition = () => {
      if (!menuRef.current) return;

      const rect = menuRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;

      if (alignMenu === "right" && rect.right + 224 > viewportWidth) {
        setMenuAlignment("left");
      } else if (alignMenu === "left" && rect.left - 224 < 0) {
        setMenuAlignment("right");
      } else {
        setMenuAlignment(alignMenu);
      }
    };

    calculatePosition();
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("resize", calculatePosition);
    };
  }, [alignMenu]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const getDefaultIcon = (id: string) => {
    switch (id) {
      case "edit":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        );
      case "delete":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        );
      case "view":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        );
      case "copy":
        return (
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const sizeClasses = {
    sm: "p-1",
    md: "p-1.5",
    lg: "p-2",
  };

  const buttonClasses = `
    inline-flex justify-center items-center rounded-md transition-colors duration-150
    text-gray-600 hover:text-gray-900 hover:bg-gray-100 
    dark:text-gray-400 dark:hover:text-gray-100 dark:hover:bg-gray-700
    focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-1
    ${sizeClasses[size]}
    ${disabled ? "opacity-50 cursor-not-allowed" : ""}
  `;

  const handleMenuToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleActionClick = (action: Action) => {
    if (!action.disabled) {
      action.onClick();
      setIsOpen(false);
    }
  };

  const getActionTextColor = (variant: Action["variant"], isActive: boolean) => {
    if (isActive) {
      switch (variant) {
        case "danger":
          return "text-red-700 dark:text-red-300";
        case "success":
          return "text-green-700 dark:text-green-300";
        case "warning":
          return "text-amber-700 dark:text-amber-300";
        default:
          return "text-gray-900 dark:text-gray-100";
      }
    }

    switch (variant) {
      case "danger":
        return "text-red-600 dark:text-red-400";
      case "success":
        return "text-green-600 dark:text-green-400";
      case "warning":
        return "text-amber-600 dark:text-amber-400";
      default:
        return "text-gray-700 dark:text-gray-300";
    }
  };

  return (
    <div className={`relative inline-block text-left ${className}`} ref={menuRef}>
      <button ref={buttonRef} onClick={handleMenuToggle} className={buttonClasses} disabled={disabled} type="button">
        {menuButton || (
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        )}
      </button>

      {isOpen && (
        <div
          className={`
            absolute z-50 mt-2 w-56 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 
            bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700
            ${menuAlignment === "right" ? "right-0 origin-top-right" : "left-0 origin-top-left"}
            transition-all duration-150
          `}
        >
          <div className="py-1">
            {actions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={() => handleActionClick(action)}
                disabled={action.disabled}
                className={`
                  group flex w-full items-center px-4 py-2 text-sm transition-colors duration-150
                  ${action.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-50 dark:hover:bg-gray-700"}
                  ${getActionTextColor(action.variant, false)}
                  hover:${getActionTextColor(action.variant, true)}
                `}
              >
                <span className="flex-shrink-0">{action.icon || getDefaultIcon(action.id)}</span>
                <span className="ml-3">{action.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ActionMenu;
