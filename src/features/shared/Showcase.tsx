// src/features/shared/Showcase.tsx
import React, { useState } from "react";
import { ThemedSurface, ThemedText } from "../../core/components/atomic";
import Button from "../../core/components/ui/Button";
import { ShowButtons, ShowTheme } from "./components/";

type TabType = "theme" | "buttons" | "forms" | "data-display" | "feedback" | "actions";

interface Tab {
  id: TabType;
  label: string;
  component?: React.ComponentType;
  isActive: boolean;
  icon?: string;
}

// Componenti placeholder per i tab non ancora implementati
const ShowForms: React.FC = () => (
  <div className="text-center py-16">
    <ThemedText variant="primary" className="text-xl font-semibold mb-2">
      Forms
    </ThemedText>
    <ThemedText variant="secondary">Componente in sviluppo</ThemedText>
  </div>
);

const ShowDataDisplay: React.FC = () => (
  <div className="text-center py-16">
    <ThemedText variant="primary" className="text-xl font-semibold mb-2">
      Data Display
    </ThemedText>
    <ThemedText variant="secondary">Componente in sviluppo</ThemedText>
  </div>
);

const ShowFeedback: React.FC = () => (
  <div className="text-center py-16">
    <ThemedText variant="primary" className="text-xl font-semibold mb-2">
      Feedback
    </ThemedText>
    <ThemedText variant="secondary">Componente in sviluppo</ThemedText>
  </div>
);

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
    { id: "theme", label: "Theme", component: ShowTheme, isActive: true, icon: "🎨" },
    { id: "buttons", label: "Buttons", component: ShowButtons, isActive: true, icon: "🔘" },
    { id: "forms", label: "Forms", component: ShowForms, isActive: false, icon: "📝" },
    { id: "data-display", label: "Data Display", component: ShowDataDisplay, isActive: false, icon: "📊" },
    { id: "feedback", label: "Feedback", component: ShowFeedback, isActive: false, icon: "💬" },
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
    <div className="space-y-6">
      {/* Header */}
      <div>
        <ThemedText variant="primary" className="text-3xl font-bold mb-2">
          Componenti UI - Showcase
        </ThemedText>
        <ThemedText variant="secondary" className="text-sm">
          Esplora i componenti disponibili nel design system
        </ThemedText>
      </div>

      {/* Tab Navigation */}
      <ThemedSurface variant="primary" borderVariant="default" className="rounded-lg border">
        {/* Tab Headers */}
        <div className="border-b border-border-default p-4">
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
        <div className="p-6">{renderTabContent()}</div>
      </ThemedSurface>

      {/* Info Card */}
      <ThemedSurface variant="secondary" borderVariant="default" className="rounded-lg border p-4">
        <div className="flex items-start gap-3">
          <span className="text-xl">💡</span>
          <div>
            <ThemedText variant="primary" className="font-medium text-sm mb-1">
              Testing Ground
            </ThemedText>
            <ThemedText variant="secondary" className="text-xs">
              Utilizza questa pagina per testare i componenti durante lo sviluppo. Ogni componente mostra le diverse varianti e
              stati disponibili.
            </ThemedText>
          </div>
        </div>
      </ThemedSurface>
    </div>
  );
};

export default Showcase;
