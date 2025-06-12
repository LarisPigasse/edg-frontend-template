// src/core/components/ui/CenteredPage.tsx
import React from "react";

export interface CenteredPageProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  background?: "default" | "neutral" | "white" | "transparent";
  padding?: "none" | "sm" | "md" | "lg";
  headerHeight?: number; // in spacing units (4 = 1rem)
  footerHeight?: number; // in spacing units (4 = 1rem)
}

const CenteredPage: React.FC<CenteredPageProps> = ({
  children,
  className = "",
  maxWidth = "lg",
  background = "default",
  padding = "md",
  headerHeight = 16, // 64px default
  footerHeight = 20, // 80px default
}) => {
  // Costruisce le classi per max-width
  const maxWidthClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    full: "max-w-full",
  };

  // Costruisce le classi per background
  const backgroundClasses = {
    default: "bg-neutral-50 dark:bg-neutral-900",
    neutral: "bg-neutral-100 dark:bg-neutral-800",
    white: "bg-white dark:bg-neutral-900",
    transparent: "bg-transparent",
  };

  // Costruisce le classi per padding
  const paddingClasses = {
    none: "",
    sm: "px-4 py-4",
    md: "px-4 py-8",
    lg: "px-6 py-12",
  };

  // Calcola l'altezza minima sottraendo header e footer
  const minHeightStyle = `calc(100vh - ${headerHeight * 0.25}rem - ${footerHeight * 0.25}rem)`;

  return (
    <div
      className={`
        flex flex-col items-center justify-center
        ${backgroundClasses[background]}
        ${paddingClasses[padding]}
        ${className}
      `}
      style={{ minHeight: minHeightStyle }}
    >
      <div className={`${maxWidthClasses[maxWidth]} w-full`}>{children}</div>
    </div>
  );
};

export default CenteredPage;
