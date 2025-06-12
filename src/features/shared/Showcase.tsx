// src/features/shared/Showcase.tsx
import React, { useState } from "react";
import { ShowButtons, ShowForms, ShowDataDisplay, ShowFeedback, ShowActions } from "./components";

type TabType = "buttons" | "forms" | "data display" | "feedback" | "actions";

interface Tab {
  id: TabType;
  label: string;
  component?: React.ComponentType;
  isActive: boolean;
}

const Showcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("buttons");

  const tabs: Tab[] = [
    { id: "buttons", label: "Buttons", component: ShowButtons, isActive: true },
    { id: "forms", label: "Forms", component: ShowForms, isActive: true },
    { id: "data display", label: "Data display", component: ShowDataDisplay, isActive: false },
    { id: "feedback", label: "Feedback", component: ShowFeedback, isActive: false },
    { id: "actions", label: "Actions", component: ShowActions, isActive: false },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "buttons":
        return <ShowButtons />;
      case "forms":
        return <ShowForms />;
      case "data display":
        return <ShowDataDisplay />;
      case "feedback":
        return <ShowFeedback />;
      case "actions":
        return <ShowActions />;
      default:
        return (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🚧</div>
            <h3 className="text-section-title">Componente in sviluppo</h3>
            <p className="text-element-description">
              Il componente <strong>{tabs.find((t) => t.id === activeTab)?.label}</strong> sarà disponibile presto.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-page-title mb-4">Componenti UI - Showcase</h1>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white dark:bg-neutral-800 rounded-md border border-neutral-100 dark:border-neutral-700">
        <div className="border-b border-neutral-200 dark:border-neutral-700">
          <nav className="flex space-x-0" aria-label="Tabs">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-6 text-sm font-medium transition-colors duration-200 border-b-2 ${
                    isActive
                      ? "border-violet-500 text-violet-600 dark:text-violet-400 bg-neutral-100 dark:bg-neutral-900/20"
                      : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-neutral-400 dark:hover:border-neutral-600"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {tab.label}
                  {!tab.component && (
                    <span className="ml-2 text-xs px-1.5 py-0.5 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 rounded">
                      Soon
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-8">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default Showcase;
