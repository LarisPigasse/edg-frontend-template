// src/features/shared/Showcase.tsx
import React, { useState } from "react";
import { ThemedSurface, ThemedText } from "../../core/components/atomic";
import { Button } from "../../core/components/ui";
import { ShowButtons, ShowTheme, ShowForms, ShowDataDisplay, ShowFeedback, ShowLayout } from "./components/";
import { HeaderGroup } from "../../core/components/layout";

type TabType = "theme" | "buttons" | "forms" | "data-display" | "feedback" | "layout" | "actions";

interface Tab {
  id: TabType;
  label: string;
  component?: React.ComponentType;
  isActive: boolean;
  icon?: string;
}

// Componenti placeholder per i tab non ancora implementati

const ShowActions: React.FC = () => (
  <div className="text-center py-16">
    <ThemedText variant="primary" className="text-xl font-semibold mb-2">
      Actions
    </ThemedText>
    <ThemedText variant="secondary">Componente in sviluppo</ThemedText>
  </div>
);

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("theme");

  const tabs: Tab[] = [
    { id: "theme", label: "Theme", component: ShowTheme, isActive: true, icon: "" },
    { id: "buttons", label: "Buttons", component: ShowButtons, isActive: true, icon: "" },
    { id: "forms", label: "Forms", component: ShowForms, isActive: false, icon: "" },
    { id: "data-display", label: "Data Display", component: ShowDataDisplay, isActive: false, icon: "" },
    { id: "feedback", label: "Feedback", component: ShowFeedback, isActive: false, icon: "" },
    { id: "layout", label: "Layout", component: ShowLayout, isActive: false, icon: "" },
    { id: "actions", label: "Actions", component: ShowActions, isActive: false, icon: "⚡" },
  ];

  const renderTabContent = () => {
    const activeTabData = tabs.find((tab) => tab.id === activeTab);

    if (!activeTabData?.component) {
      return (
        <ThemedSurface variant="secondary" className="text-center py-16 rounded-lg">
          <ThemedText variant="primary" className="text-xl font-semibold mb-2">
            Componente in sviluppo
          </ThemedText>
          <ThemedText variant="secondary" className="text-sm">
            Il componente <strong>{activeTabData?.label}</strong> sarà disponibile presto.
          </ThemedText>
        </ThemedSurface>
      );
    }

    const ComponentToRender = activeTabData.component;
    return <ComponentToRender />;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <HeaderGroup
          title="Componenti UI - Showcase"
          titleSize="3xl"
          subtitle="Esplora i componenti disponibili nel design system"
          spacing="tight"
        />
      </div>

      {/* Tab Navigation */}
      <ThemedSurface variant="base">
        {/* Tab Headers */}
        <div className="border-b border-border-contrast p-2">
          <nav className="flex flex-wrap gap-2" aria-label="Showcase Tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <Button key={tab.id} variant={isActive ? "primary" : "ghost"} size="sm" onClick={() => setActiveTab(tab.id)}>
                  {tab.label}
                </Button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="py-4">{renderTabContent()}</div>
      </ThemedSurface>
    </div>
  );
};

export default Showcase;
