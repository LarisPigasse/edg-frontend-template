// src/core/components/ui/Tabs.tsx
import React, { useState } from "react";
import { ThemedSurface } from "../atomic";
import Button from "./Button";
import { cn } from "../../utils";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Array di tab items */
  items: TabItem[];
  /** Tab attivo di default */
  defaultTab?: string;
  /** Variante visiva */
  variant?: "default" | "pills" | "underline";
  /** Dimensione dei tab */
  size?: "sm" | "md" | "lg";
  /** Callback per cambio tab */
  onTabChange?: (tabId: string) => void;
  /** Classi CSS aggiuntive */
  className?: string;
}

/**
 * Tabs - Componente per organizzare contenuti in schede.
 *
 * Features:
 * - 3 varianti visive (default, pills, underline)
 * - Content management interno automatico
 * - Responsive scroll orizzontale su mobile
 * - Support per tab disabilitati
 * - Integrazione completa theme system
 * - Pattern validato dal Showcase esistente
 *
 * @example
 * <Tabs
 *   items={[
 *     { id: "tab1", label: "Forms", content: <FormsContent /> },
 *     { id: "tab2", label: "Buttons", content: <ButtonsContent /> }
 *   ]}
 *   defaultTab="tab1"
 *   variant="default"
 * />
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  variant = "default",
  size = "md",
  onTabChange,
  className = "",
  ...props
}) => {
  // State per tab attivo
  const [activeTab, setActiveTab] = useState(defaultTab || items[0]?.id || "");

  // Handler per cambio tab
  const handleTabChange = (tabId: string) => {
    const tabItem = items.find((item) => item.id === tabId);
    if (tabItem?.disabled) return;

    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  // Trova il contenuto del tab attivo
  const activeTabContent = items.find((item) => item.id === activeTab)?.content;

  // Configurazione varianti
  const variantConfig = {
    default: {
      container: "border-b border-border-default p-2",
      tabContainer: "flex flex-wrap gap-2",
      activeButton: "primary" as const,
      inactiveButton: "ghost" as const,
    },
    pills: {
      container: "bg-bg-secondary rounded-lg p-1",
      tabContainer: "flex flex-wrap gap-1",
      activeButton: "primary" as const,
      inactiveButton: "ghost" as const,
    },
    underline: {
      container: "border-b border-border-default",
      tabContainer: "flex gap-1 px-2",
      activeButton: "ghost" as const,
      inactiveButton: "ghost" as const,
    },
  };

  const config = variantConfig[variant];

  // Classi per underline variant
  const getUnderlineClasses = (isActive: boolean) => {
    if (variant !== "underline") return "";
    return isActive
      ? "border-b-2 border-violet-600 text-violet-600 rounded-none"
      : "border-b-2 border-transparent hover:border-border-default rounded-none";
  };

  return (
    <div className={cn("w-full", className)} {...props}>
      <ThemedSurface variant="base">
        {/* Tab Headers */}
        <div className={config.container}>
          <nav
            className={cn(
              config.tabContainer,
              // Responsive scroll su mobile
              "overflow-x-auto scrollbar-hide",
              // Per underline, no wrap
              variant === "underline" && "flex-nowrap"
            )}
            aria-label="Tabs Navigation"
          >
            {items.map((item) => {
              const isActive = activeTab === item.id;

              return (
                <Button
                  key={item.id}
                  variant={isActive ? config.activeButton : config.inactiveButton}
                  size={size}
                  disabled={item.disabled}
                  onClick={() => handleTabChange(item.id)}
                  className={cn(
                    // Flexible width per responsive
                    "flex-shrink-0",
                    // Underline specific styling
                    getUnderlineClasses(isActive),
                    // Disabled styling
                    item.disabled && "opacity-50 cursor-not-allowed"
                  )}
                  aria-selected={isActive}
                  role="tab"
                >
                  {item.label}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-4" role="tabpanel" aria-labelledby={`tab-${activeTab}`}>
          {activeTabContent || (
            <div className="text-center py-8">
              <p className="text-text-secondary">Nessun contenuto disponibile per questo tab.</p>
            </div>
          )}
        </div>
      </ThemedSurface>
    </div>
  );
};

export default Tabs;
