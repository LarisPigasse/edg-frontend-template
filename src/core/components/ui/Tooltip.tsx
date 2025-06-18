// src/core/components/ui/Tooltip.tsx
import React, { ReactNode, useState, useRef, useEffect } from "react";
import { useThemeStyles } from "../../hooks/useThemeStyles";

export type TooltipPosition = "top" | "bottom" | "left" | "right";
export type TooltipVariant = "default" | "dark" | "light";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
  position?: TooltipPosition;
  variant?: TooltipVariant;
  className?: string;
  delay?: number;
  disabled?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  variant = "default",
  className = "",
  delay = 300,
  disabled = false,
}) => {
  const { tokens, surface } = useThemeStyles();
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    const id = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  const handleFocus = () => {
    if (disabled) return;
    setIsVisible(true);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const positionClasses = {
    top: "bottom-full left-1/2 transform -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 transform -translate-x-1/2 mt-2",
    left: "right-full top-1/2 transform -translate-y-1/2 mr-2",
    right: "left-full top-1/2 transform -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: "top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent",
    bottom: "bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent",
    left: "left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent",
    right: "right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent",
  };

  // 🎨 Varianti unificate con design tokens
  const variantClasses = {
    default: `bg-[${tokens.surface.text}] text-[${tokens.surface.bgElevated}]`,
    dark: "bg-gray-900 text-white",
    light: `bg-[${tokens.surface.bgElevated}] text-[${tokens.surface.text}] ${surface.border} shadow-lg`,
  };

  const arrowVariantClasses = {
    default: `border-[${tokens.surface.text}]`,
    dark: "border-gray-900",
    light: `border-[${tokens.surface.border}]`,
  };

  const arrowBorderWidth = {
    top: "border-t-4 border-l-4 border-r-4",
    bottom: "border-b-4 border-l-4 border-r-4",
    left: "border-l-4 border-t-4 border-b-4",
    right: "border-r-4 border-t-4 border-b-4",
  };

  if (disabled) {
    return <>{children}</>;
  }

  return (
    <div
      ref={triggerRef}
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}

      {isVisible && (
        <div
          ref={tooltipRef}
          className={`
            absolute z-50 px-3 py-2 text-sm font-medium rounded-lg pointer-events-none
            whitespace-nowrap transition-opacity duration-200
            ${positionClasses[position]} 
            ${variantClasses[variant]}
            ${className}
          `}
          role="tooltip"
        >
          {content}

          {/* Arrow */}
          <div
            className={`
              absolute w-0 h-0 
              ${arrowClasses[position]}
              ${arrowBorderWidth[position]}
              ${arrowVariantClasses[variant]}
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;
