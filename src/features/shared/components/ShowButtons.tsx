// src/features/shared/components/ShowButtons.tsx
import React, { useState } from "react";
import { ThemedSurface, ThemedText } from "../../../core/components/atomic";
import { Button, type ButtonVariant, type ButtonSize } from "../../../core/components/ui";
import { HeaderGroup, TitledSurface } from "../../../core/components/layout";
import { iconMap } from "../../../core/utils";
import { Check, Timer } from "lucide-react";

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

  // Get icons from iconMap
  const BackIcon = iconMap.back; // ArrowBigLeft
  const ForwardIcon = iconMap.forward; // ArrowBigRight
  const DownloadIcon = iconMap.download; // Download
  const UploadIcon = iconMap.upload; // Upload

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <HeaderGroup
          title="Button Component"
          subtitle="Esempi di utilizzo del componente Button con tutte le varianti disponibili"
          spacing="tight"
        />
      </div>

      {/* 1. Varianti Base */}
      <TitledSurface title="Varianti" padding="md">
        <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-9 gap-4">
          {variants.map((variant) => (
            <div key={variant} className="space-y-2">
              <Button variant={variant} className="w-full">
                {variant.charAt(0).toUpperCase() + variant.slice(1)}
              </Button>
            </div>
          ))}
        </div>
      </TitledSurface>
      {/* 2. Dimensioni */}
      <TitledSurface title="Dimensioni" padding="md">
        <div className="flex flex-wrap items-end gap-4">
          {sizes.map((size) => (
            <div key={size} className="space-y-2">
              <Button variant="primary" size={size}>
                Size {size.toUpperCase()}
              </Button>
            </div>
          ))}
        </div>
      </TitledSurface>

      {/* 3. Stati Speciali */}
      <TitledSurface title="Stati speciali" padding="md">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
          {/* Loading */}
          <div className="space-y-3">
            <ThemedText variant="secondary" className="text-sm font-medium">
              Loading State
            </ThemedText>
            <div className="space-y-2">
              <Button variant="primary" isLoading={loadingStates.demo1} onClick={() => handleLoadingDemo("demo1")}>
                Click me
              </Button>
              <Button variant="secondary" isLoading={true} className="ms-2">
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
              <Button variant="outline" disabled className="ms-2">
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
      </TitledSurface>

      {/* 4. Combinazioni Pratiche */}
      <TitledSurface title="Casi d'Uso Pratici" padding="md">
        <div className="space-y-6 mt-4">
          {/* Action Group */}
          <div>
            <div className="flex flex-wrap gap-2">
              <Button variant="primary">Salva</Button>
              <Button variant="secondary">Annulla</Button>
              <Button variant="outline">Anteprima</Button>
              <Button variant="danger">Elimina</Button>
              <Button variant="info">Info</Button>
              <Button variant="ghost" leftIcon={<BackIcon />}>
                Indietro
              </Button>
              <Button variant="primary" rightIcon={<ForwardIcon />}>
                Continua
              </Button>
            </div>
          </div>

          {/* Status Actions */}
          <div>
            <div className="flex flex-wrap gap-2">
              <Button variant="success" leftIcon={<Check />}>
                Approva
              </Button>
              <Button variant="warning" leftIcon={<Timer />}>
                In Attesa
              </Button>
              <Button variant="danger" leftIcon={<span>X</span>}>
                Rifiuta
              </Button>
              <Button
                variant="primary"
                isLoading={loadingStates.save}
                onClick={() => handleLoadingDemo("save")}
                leftIcon={!loadingStates.save ? <DownloadIcon /> : undefined}
              >
                {loadingStates.save ? "Download in corso..." : "Salva Documento"}
              </Button>
              <Button
                variant="success"
                isLoading={loadingStates.upload}
                onClick={() => handleLoadingDemo("upload")}
                leftIcon={!loadingStates.upload ? <UploadIcon /> : undefined}
              >
                {loadingStates.upload ? "Upload in corso..." : "Upload File"}
              </Button>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* 5. Code Examples */}
      <ThemedSurface variant="secondary" borderVariant="default" className="rounded-lg border p-4">
        <ThemedText variant="primary" className="text-lg font-semibold mb-4">
          Esempi di Codice
        </ThemedText>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
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

          <div className="bg-bg-contrast text-text-contrast p-4 rounded text-sm font-mono overflow-x-auto">
            <div className="text-green-400 mb-2">// IconMap invece che import diretto</div>
            <div>{`<Button variant="outline" size="lg" fullWidth>`}</div>
            <div className="ml-4">{`Indietro`}</div>
            <div>{`</Button>`}</div>
          </div>
        </div>
      </ThemedSurface>
    </div>
  );
};

export default ShowButtons;
