// src/features/shared/components/ShowButtons.tsx
import React, { useState } from "react";
import { ThemedSurface, ThemedText } from "../../../core/components/atomic";
import { Button, type ButtonVariant, type ButtonSize } from "../../../core/components/ui";

const ShowButtons: React.FC = () => {
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});

  // Simulate loading for demo
  const handleLoadingDemo = (buttonId: string) => {
    setLoadingStates((prev) => ({ ...prev, [buttonId]: true }));
    setTimeout(() => {
      setLoadingStates((prev) => ({ ...prev, [buttonId]: false }));
    }, 2000);
  };

  const variants: ButtonVariant[] = [
    "primary",
    "secondary",
    "outline",
    "danger",
    "success",
    "ghost",
    "link",
    "info",
    "warning",
  ];

  const sizes: ButtonSize[] = ["xs", "sm", "md", "lg"];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <ThemedText variant="primary" className="text-2xl font-bold mb-2">
          Button Component
        </ThemedText>
        <ThemedText variant="secondary" className="text-sm">
          Esempi di utilizzo del componente Button con tutte le varianti disponibili
        </ThemedText>
      </div>

      {/* 1. Varianti Base */}
      <ThemedSurface variant="primary" borderVariant="default" className="rounded-lg border p-6">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          🎨 Varianti
        </ThemedText>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {variants.map((variant) => (
            <div key={variant} className="space-y-2">
              <Button variant={variant} className="w-full">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
              <ThemedText variant="secondary" className="text-xs text-center">
                {variant}
              </ThemedText>
            </div>
          ))}
        </div>
      </ThemedSurface>

      {/* 2. Dimensioni */}
      <ThemedSurface variant="primary" borderVariant="default" className="rounded-lg border p-6">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          📏 Dimensioni
        </ThemedText>
        <div className="flex flex-wrap items-end gap-4">
          {sizes.map((size) => (
            <div key={size} className="space-y-2">
              <Button variant="primary" size={size}>
                Size {size.toUpperCase()}
              </Button>
              <ThemedText variant="secondary" className="text-xs text-center">
                {size}
              </ThemedText>
            </div>
          ))}
        </div>
      </ThemedSurface>

      {/* 3. Stati Speciali */}
      <ThemedSurface variant="primary" borderVariant="default" className="rounded-lg border p-6">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          🔄 Stati Speciali
        </ThemedText>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Loading */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Loading State
            </ThemedText>
            <div className="space-y-2">
              <Button variant="primary" isLoading={loadingStates.demo1} onClick={() => handleLoadingDemo("demo1")}>
                Click me
              </Button>
              <Button variant="secondary" isLoading={true}>
                Loading...
              </Button>
            </div>
          </div>

          {/* Disabled */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Disabled State
            </ThemedText>
            <div className="space-y-2">
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="outline" disabled>
                Not available
              </Button>
            </div>
          </div>

          {/* Full Width */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Full Width
            </ThemedText>
            <div className="space-y-2">
              <Button variant="primary" fullWidth>
                Full Width
              </Button>
              <Button variant="outline" fullWidth>
                Stretch
              </Button>
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              With Icons
            </ThemedText>
            <div className="space-y-2">
              <Button variant="primary" leftIcon={<span>➕</span>}>
                Add New
              </Button>
              <Button variant="outline" rightIcon={<span>📁</span>}>
                Open File
              </Button>
            </div>
          </div>
        </div>
      </ThemedSurface>

      {/* 4. Combinazioni Pratiche */}
      <ThemedSurface variant="primary" borderVariant="default" className="rounded-lg border p-6">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          💼 Casi d'Uso Pratici
        </ThemedText>

        <div className="space-y-6">
          {/* Action Group */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-3">
              Action Group
            </ThemedText>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary" leftIcon={<span>💾</span>}>
                Salva
              </Button>
              <Button variant="secondary">Annulla</Button>
              <Button variant="outline" leftIcon={<span>👁️</span>}>
                Anteprima
              </Button>
              <Button variant="danger" leftIcon={<span>🗑️</span>}>
                Elimina
              </Button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-3">
              Navigation
            </ThemedText>
            <div className="flex flex-wrap gap-2">
              <Button variant="ghost" leftIcon={<span>⬅️</span>}>
                Indietro
              </Button>
              <Button variant="link">Vai alla dashboard</Button>
              <Button variant="primary" rightIcon={<span>➡️</span>}>
                Continua
              </Button>
            </div>
          </div>

          {/* Status Actions */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-3">
              Status Actions
            </ThemedText>
            <div className="flex flex-wrap gap-2">
              <Button variant="success" leftIcon={<span>✅</span>}>
                Approva
              </Button>
              <Button variant="warning" leftIcon={<span>⚠️</span>}>
                In Attesa
              </Button>
              <Button variant="info" leftIcon={<span>ℹ️</span>}>
                Info
              </Button>
              <Button variant="danger" leftIcon={<span>❌</span>}>
                Rifiuta
              </Button>
            </div>
          </div>

          {/* Interactive Demo */}
          <div>
            <ThemedText variant="secondary" className="text-sm font-medium mb-3">
              Interactive Demo
            </ThemedText>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="primary"
                isLoading={loadingStates.save}
                onClick={() => handleLoadingDemo("save")}
                leftIcon={!loadingStates.save ? <span>💾</span> : undefined}
              >
                {loadingStates.save ? "Salvando..." : "Salva Documento"}
              </Button>
              <Button
                variant="success"
                isLoading={loadingStates.upload}
                onClick={() => handleLoadingDemo("upload")}
                leftIcon={!loadingStates.upload ? <span>📤</span> : undefined}
              >
                {loadingStates.upload ? "Caricando..." : "Upload File"}
              </Button>
            </div>
          </div>
        </div>
      </ThemedSurface>

      {/* 5. Code Examples */}
      <ThemedSurface variant="secondary" borderVariant="default" className="rounded-lg border p-6">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          📝 Esempi di Codice
        </ThemedText>

        <div className="space-y-4">
          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Button base</div>
            <div>{`<Button variant="primary">Click me</Button>`}</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Con icone e loading</div>
            <div>{`<Button variant="primary" leftIcon={<Icon />} isLoading={saving}>`}</div>
            <div className="ml-4">{`{saving ? 'Salvando...' : 'Salva'}`}</div>
            <div>{`</Button>`}</div>
          </div>

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// Full width e dimensioni</div>
            <div>{`<Button variant="outline" size="lg" fullWidth>`}</div>
            <div className="ml-4">{`Bottone esteso`}</div>
            <div>{`</Button>`}</div>
          </div>
        </div>
      </ThemedSurface>
    </div>
  );
};

export default ShowButtons;
