// src/core/components/ui/Tooltip.tsx
import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { cn } from "../../utils";

interface TooltipProps {
  /** Testo del tooltip */
  content: string;
  /** Elemento che triggera il tooltip */
  children: React.ReactNode;
  /** Posizione del tooltip rispetto al trigger */
  side?: "top" | "right" | "bottom" | "left";
  /** Allineamento del tooltip */
  align?: "start" | "center" | "end";
  /** Delay di apertura in millisecondi */
  delayDuration?: number;
  /** Dimensione del tooltip */
  size?: "sm" | "md" | "lg";
  /** Disabilita il tooltip */
  disabled?: boolean;
  /** Classi CSS aggiuntive */
  className?: string;
}

/**
 * Tooltip - Componente tooltip con Radix UI per informazioni contestuali.
 *
 * Features:
 * - Positioning automatico con collision detection
 * - Accessibility completa con ARIA attributes
 * - Portal rendering per z-index management
 * - Fade animation con CSS transitions
 * - Touch device friendly
 * - Max-width responsivo
 *
 * @example
 * <Tooltip content="Questa è una spiegazione utile">
 *   <Button>Hover me</Button>
 * </Tooltip>
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = "top",
  align = "center",
  delayDuration = 300,
  size = "md",
  disabled = false,
  className = "",
}) => {
  // Se disabilitato, ritorna solo i children
  if (disabled || !content) {
    return <>{children}</>;
  }

  // Classi per dimensioni
  const sizeClasses = {
    sm: "px-2 py-1 text-xs max-w-48",
    md: "px-3 py-2 text-sm max-w-64",
    lg: "px-4 py-3 text-sm max-w-80",
  };

  // Classi del tooltip content
  const tooltipClasses = cn(
    // Base styling
    "bg-bg-contrast text-text-contrast rounded-lg shadow-themed-lg",
    // Animation & z-index
    "z-50",
    "data-[state=delayed-open]:animate-in data-[state=closed]:animate-out",
    "data-[state=delayed-open]:fade-in-0 data-[state=closed]:fade-out-0",
    "data-[state=delayed-open]:zoom-in-95 data-[state=closed]:zoom-out-95",
    "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
    "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
    // Size
    sizeClasses[size],
    // Custom classes
    className
  );

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>

        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content className={tooltipClasses} side={side} align={align} sideOffset={8} collisionPadding={8}>
            {content}
            <TooltipPrimitive.Arrow className="fill-bg-contrast" />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

export default Tooltip;
