// src/features/shared/components/ShowTheme.tsx
import React from "react";
import { ThemedSurface, ThemedText } from "../../../core/components/atomic";
import { Button } from "../../../core/components/ui";
import { useUISettings } from "../../../app/hooks";
import { HeaderGroup, TitledSurface } from "../../../core/components/layout";

const ShowTheme: React.FC = () => {
  const { darkMode, toggleDarkMode } = useUISettings();

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <HeaderGroup title="Theme System" subtitle="Sistema di theming e CSS custom properties" spacing="tight" />
      </div>

      {/* Theme Controls */}

      <TitledSurface title="Controlli Tema" padding="md">
        <div className="flex items-center gap-4">
          <Button variant={darkMode ? "secondary" : "primary"} onClick={toggleDarkMode}>
            {darkMode ? "Attiva Light Mode" : "Attiva Dark Mode"}
          </Button>
          <ThemedText variant="secondary" className="text-sm">
            Modalità attuale: <strong>{darkMode ? "Dark" : "Light"}</strong>
          </ThemedText>
        </div>
      </TitledSurface>

      {/* Color Palette */}
      <TitledSurface title="Color Palette" padding="md">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Backgrounds */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Backgrounds
            </ThemedText>
            <div className="space-y-2">
              <div className="h-10 bg-bg-base border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  bg-base
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-primary border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  bg-primary
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-secondary border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  bg-secondary
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-hover border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  bg-hover
                </ThemedText>
              </div>
            </div>
          </div>

          {/* Text Colors */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Text Colors
            </ThemedText>
            <div className="space-y-2">
              <div className="h-10 bg-bg-primary border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  text-primary
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-primary border border-border-default rounded flex items-center px-3">
                <ThemedText variant="secondary" className="text-xs">
                  text-secondary
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-primary border border-border-default rounded flex items-center px-3">
                <span className="text-text-placeholder text-xs">text-placeholder</span>
              </div>
              <div className="h-10 bg-bg-primary border border-border-default rounded flex items-center px-3">
                <span className="text-text-link text-xs">text-link</span>
              </div>
            </div>
          </div>

          {/* Borders */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Borders
            </ThemedText>
            <div className="space-y-2">
              <div className="h-10 bg-bg-primary border border-border-thin rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  border-thin
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-primary border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  border-default
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-primary border border-border-strong rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  border-strong
                </ThemedText>
              </div>
            </div>
          </div>

          {/* Interactive */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Interactive
            </ThemedText>
            <div className="space-y-2">
              <div className="h-10 bg-bg-selected border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  bg-selected
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-info border border-border-default rounded flex items-center px-3">
                <ThemedText variant="primary" className="text-xs">
                  bg-info
                </ThemedText>
              </div>
              <div className="h-10 bg-bg-contrast text-text-contrast border border-border-default rounded flex items-center px-3">
                <span className="text-xs">bg-contrast</span>
              </div>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Atomic Components Test */}
      <TitledSurface title="Atomic Components" padding="md">
        <div className="space-y-6">
          {/* ThemedSurface variants */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-4">
              ThemedSurface Variants
            </ThemedText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
              <ThemedSurface variant="primary" borderVariant="default" className="p-4 rounded border">
                <ThemedText variant="primary" className="text-sm font-medium">
                  Primary Surface
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs mt-1 ms-2">
                  variant="primary"
                </ThemedText>
              </ThemedSurface>
              <ThemedSurface variant="secondary" borderVariant="default" className="p-4 rounded border">
                <ThemedText variant="primary" className="text-sm font-medium">
                  Secondary Surface
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs mt-1 ms-2">
                  variant="secondary"
                </ThemedText>
              </ThemedSurface>
              <ThemedSurface variant="elevated" borderVariant="default" className="p-4 rounded border">
                <ThemedText variant="primary" className="text-sm font-medium">
                  Elevated Surface
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs mt-1 ms-2">
                  variant="elevated"
                </ThemedText>
              </ThemedSurface>
            </div>
          </div>

          {/* ThemedText variants */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-3">
              ThemedText Variants
            </ThemedText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-1">
              <div className="p-3 bg-bg-secondary rounded">
                <ThemedText variant="primary" className="text-lg">
                  Primary Text - Large
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs ms-2">
                  variant="primary"
                </ThemedText>
              </div>
              <div className="p-3 bg-bg-secondary rounded">
                <ThemedText variant="secondary">Secondary Text - Normal</ThemedText>
                <ThemedText variant="secondary" className="text-xs ms-2">
                  variant="secondary"
                </ThemedText>
              </div>
              <div className="p-3 bg-bg-secondary rounded">
                <ThemedText variant="muted" className="text-sm ms-2">
                  Muted Text - Small
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs ms-2">
                  variant="muted"
                </ThemedText>
              </div>
            </div>
          </div>

          {/* Border Variants */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-3">
              Border Variants
            </ThemedText>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ThemedSurface variant="primary" borderVariant="thin" className="p-4 rounded border">
                <ThemedText variant="primary" className="text-sm">
                  Thin Border
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs ms-2">
                  borderVariant="thin"
                </ThemedText>
              </ThemedSurface>
              <ThemedSurface variant="primary" borderVariant="default" className="p-4 rounded border">
                <ThemedText variant="primary" className="text-sm">
                  Default Border
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs ms-2">
                  borderVariant="default"
                </ThemedText>
              </ThemedSurface>
              <ThemedSurface variant="primary" borderVariant="strong" className="p-4 rounded border">
                <ThemedText variant="primary" className="text-sm">
                  Strong Border
                </ThemedText>
                <ThemedText variant="secondary" className="text-xs ms-2">
                  borderVariant="strong"
                </ThemedText>
              </ThemedSurface>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* CSS Custom Properties Reference */}
      <ThemedSurface variant="secondary" borderVariant="default" className="rounded-lg border p-6">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          CSS Custom Properties Reference
        </ThemedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Background Variables
            </ThemedText>
            <div className="bg-bg-contrast text-text-contrast p-3 rounded text-xs font-mono space-y-1 mt-2">
              <div>--bg-base</div>
              <div>--bg-primary</div>
              <div>--bg-secondary</div>
              <div>--bg-hover</div>
              <div>--bg-selected</div>
              <div>--bg-elevated</div>
            </div>
          </div>

          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Text & Border Variables
            </ThemedText>
            <div className="bg-bg-contrast text-text-contrast p-3 rounded text-xs font-mono space-y-1 mt-2">
              <div>--text-primary</div>
              <div>--text-secondary</div>
              <div>--text-placeholder</div>
              <div>--border-thin</div>
              <div>--border-default</div>
              <div>--border-strong</div>
            </div>
          </div>
        </div>
      </ThemedSurface>
    </div>
  );
};

export default ShowTheme;
