// src/core/components/ui/Spinner.tsx
import React from "react";
import { cn } from "../../utils";

interface SpinnerProps {
  /** Dimensione del spinner */
  size?: "xs" | "sm" | "md";
  /** Classi CSS aggiuntive */
  className?: string;
  /** Aria label per accessibility */
  "aria-label"?: string;
}

/**
 * Spinner - Componente dots spinner per stati di caricamento.
 *
 * Features:
 * - Animazione CSS smooth con 3 dots
 * - Colore primary integrato nel theme system
 * - Dimensioni responsive (xs, sm, md)
 * - Accessibility con aria-label
 * - Performance ottimizzata con transform
 *
 * @example
 * <Spinner size="md" aria-label="Caricamento in corso" />
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = "md",
  className = "",
  "aria-label": ariaLabel = "Caricamento in corso",
}) => {
  // Configurazione dimensioni
  const sizeConfig = {
    xs: {
      container: "w-4 h-4", // 16px
      dot: "w-1 h-1", // 4px
      gap: "gap-0.5", // 2px
    },
    sm: {
      container: "w-5 h-5", // 20px
      dot: "w-1.5 h-1.5", // 6px
      gap: "gap-0.5", // 2px
    },
    md: {
      container: "w-6 h-6", // 24px
      dot: "w-2 h-2", // 8px
      gap: "gap-1", // 4px
    },
  };

  const config = sizeConfig[size];

  return (
    <div
      className={cn("inline-flex items-center justify-center", config.container, className)}
      role="status"
      aria-label={ariaLabel}
    >
      <div className={cn("flex items-center", config.gap)}>
        {/* Dot 1 */}
        <div
          className={cn(config.dot, "bg-violet-600 rounded-full", "animate-pulse", "animation-delay-0")}
          style={{
            animation: "spinnerPulse 1.4s ease-in-out infinite both",
            animationDelay: "0s",
          }}
        />

        {/* Dot 2 */}
        <div
          className={cn(config.dot, "bg-violet-600 rounded-full", "animate-pulse")}
          style={{
            animation: "spinnerPulse 1.4s ease-in-out infinite both",
            animationDelay: "0.16s",
          }}
        />

        {/* Dot 3 */}
        <div
          className={cn(config.dot, "bg-violet-600 rounded-full", "animate-pulse")}
          style={{
            animation: "spinnerPulse 1.4s ease-in-out infinite both",
            animationDelay: "0.32s",
          }}
        />
      </div>
    </div>
  );
};

export default Spinner;
