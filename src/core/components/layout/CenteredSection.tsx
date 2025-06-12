// src/core/components/ui/CenteredSection.tsx
import React from "react";

export interface CenteredSectionProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
  background?: "default" | "neutral" | "white" | "transparent" | "accent";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  height?: "auto" | "screen" | "half" | number; // number in rem units
  alignment?: "center" | "start" | "end";
}

const CenteredSection: React.FC<CenteredSectionProps> = ({
  children,
  className = "",
  maxWidth = "md",
  background = "transparent",
  padding = "md",
  height = "auto",
  alignment = "center",
}) => {
  // Costruisce le classi per max-width
  const maxWidthClasses = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-2xl",
    "3xl": "max-w-3xl",
    full: "max-w-full",
  };

  // Costruisce le classi per background
  const backgroundClasses = {
    default: "bg-neutral-50 dark:bg-neutral-900",
    neutral: "bg-neutral-100 dark:bg-neutral-800",
    white: "bg-white dark:bg-neutral-900",
    transparent: "bg-transparent",
    accent: "bg-violet-50 dark:bg-violet-950",
  };

  // Costruisce le classi per padding
  const paddingClasses = {
    none: "",
    xs: "px-2 py-2",
    sm: "px-3 py-3",
    md: "px-4 py-4",
    lg: "px-6 py-6",
    xl: "px-8 py-8",
  };

  // Costruisce le classi per alignment
  const alignmentClasses = {
    center: "items-center justify-center",
    start: "items-start justify-start",
    end: "items-end justify-end",
  };

  // Gestisce l'altezza
  const getHeightStyle = () => {
    switch (height) {
      case "screen":
        return { minHeight: "100vh" };
      case "half":
        return { minHeight: "50vh" };
      case "auto":
        return {};
      default:
        return typeof height === "number" ? { minHeight: `${height}rem` } : {};
    }
  };

  return (
    <div
      className={`
        flex flex-col
        ${alignmentClasses[alignment]}
        ${backgroundClasses[background]}
        ${paddingClasses[padding]}
        ${className}
      `}
      style={getHeightStyle()}
    >
      <div className={`${maxWidthClasses[maxWidth]} w-full text-center`}>{children}</div>
    </div>
  );
};

export default CenteredSection;
