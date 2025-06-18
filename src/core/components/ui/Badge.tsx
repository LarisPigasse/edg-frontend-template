// src/core/components/ui/Badge.tsx
import React from "react";
import { useThemeStyles } from "../../hooks/useThemeStyles";

export type BadgeVariant = "success" | "warning" | "danger" | "info" | "default";
export type BadgeSize = "xs" | "sm" | "md";

// Mappa degli stati alle varianti
const statusVariantMap: Record<string, BadgeVariant> = {
  attivo: "success",
  inattivo: "warning",
  eliminato: "danger",
  completato: "success",
  pendente: "warning",
  errore: "danger",
  nuovo: "info",
};

interface BadgeProps {
  children?: React.ReactNode;
  text?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  status?: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, text, variant, size = "xs", status, className = "" }) => {
  const { tokens } = useThemeStyles();

  const content = children || text;
  const resolvedVariant = status ? statusVariantMap[status.toLowerCase()] || "default" : variant || "default";

  const baseClasses = "inline-flex items-center justify-center font-medium rounded-full transition-colors";

  const sizeClasses = {
    xs: "px-2 py-0.5 text-xs",
    sm: "px-2.5 py-0.5 text-sm",
    md: "px-3 py-1 text-sm",
  };

  // 🎨 Design tokens-based variants (unificati per light/dark)
  const variantClasses = {
    success: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    warning: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    danger: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    info: "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
    default: `bg-gray-100 ${tokens.surface.textSecondary} dark:bg-gray-700 dark:text-gray-200`,
  };

  const badgeClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[resolvedVariant]} ${className}`;

  return <span className={badgeClasses}>{content}</span>;
};

export default Badge;
