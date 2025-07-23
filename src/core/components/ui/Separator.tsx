// src/core/components/ui/Separator.tsx
import React from "react";
import { cn } from "../../utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Orientazione del separator */
  orientation?: "horizontal" | "vertical";
  /** Variante visiva */
  variant?: "default" | "subtle";
  /** Testo opzionale nel separator (solo horizontal) */
  children?: React.ReactNode;
  /** Classi CSS aggiuntive */
  className?: string;
}

/**
 * Separator - Componente per divisioni visive eleganti.
 *
 * Features:
 * - Orientazione horizontal/vertical
 * - Varianti default e subtle
 * - Supporto testo decorativo (solo horizontal)
 * - Integrazione theme system con border colors
 * - Accessibility con role="separator"
 * - Minimalista ed elegante
 *
 * @example
 * <Separator />
 * <Separator orientation="vertical" className="h-8" />
 * <Separator>OR</Separator>
 */
export const Separator: React.FC<SeparatorProps> = ({
  orientation = "horizontal",
  variant = "default",
  children,
  className = "",
  ...props
}) => {
  // Configurazione varianti
  const variantClasses = {
    default: "border-border-default",
    subtle: "border-border-thin",
  };

  // Se ha children, forza horizontal
  const finalOrientation = children ? "horizontal" : orientation;

  if (children && finalOrientation === "horizontal") {
    // Separator con testo
    return (
      <div className={cn("relative flex items-center", className)} role="separator" aria-orientation="horizontal" {...props}>
        <div className={cn("flex-1 border-t", variantClasses[variant])} />
        <div className="px-3">
          <span className="text-xs font-medium text-text-secondary bg-bg-primary">{children}</span>
        </div>
        <div className={cn("flex-1 border-t", variantClasses[variant])} />
      </div>
    );
  }

  if (finalOrientation === "vertical") {
    // Separator verticale
    return (
      <div
        className={cn(
          "border-l h-4", // Default height, può essere overridden
          variantClasses[variant],
          className
        )}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  // Separator orizzontale semplice
  return (
    <hr
      className={cn("border-0 border-t", variantClasses[variant], className)}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    />
  );
};

export default Separator;
