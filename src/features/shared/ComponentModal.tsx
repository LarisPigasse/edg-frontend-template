// src/features/shared/ComponentModal.tsx
import React, { useEffect } from "react";
import { X, Copy, Check, ExternalLink } from "lucide-react";
import { Badge } from "../../core/components/ui";
import { ThemedSurface, ThemedText } from "../../core/components/atomic";
import { TitledSurface } from "../../core/components/layout";
import type { ComponentData } from "../../data/components.data";
import { cn } from "../../core/utils";

interface ComponentModalProps {
  /** Stato aperto/chiuso del modal */
  isOpen: boolean;
  /** Dati del componente da mostrare */
  component: ComponentData;
  /** Callback per chiusura modal */
  onClose: () => void;
}

/**
 * ComponentModal - Modal unificato per mostrare i dettagli di qualsiasi componente.
 * Layout consistente con sezioni: Overview, Props, Examples, Usage.
 */
const ComponentModal: React.FC<ComponentModalProps> = ({ isOpen, component, onClose }) => {
  const [copiedCode, setCopiedCode] = React.useState<string | null>(null);

  // Close modal on ESC
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden"; // Lock scroll

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset"; // Unlock scroll
    };
  }, [isOpen, onClose]);

  // Copy code to clipboard
  const copyToClipboard = async (code: string, exampleId: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(exampleId);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Category colors mapping (same as InfoCard)
  const categoryBackgrounds = {
    ui: "bg-category-ui",
    form: "bg-category-form",
    navigation: "bg-category-navigation",
    feedback: "bg-category-feedback",
    data: "bg-category-data",
    layout: "bg-category-layout",
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={handleBackdropClick}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] mx-4 flex flex-col">
        <ThemedSurface variant="modal" borderVariant="default" className="rounded-xl shadow-xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border-default">
            <div className="flex items-center space-x-4">
              {/* Category Strip + Title */}
              <div className="relative">
                <div className={cn("w-1 h-8 rounded-full", categoryBackgrounds[component.category])} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-text-primary">{component.title}</h2>
                <div className="flex items-center space-x-2 mt-1">
                  <Badge variant="default" size="xs">
                    {component.category}
                  </Badge>
                  <ThemedText variant="secondary" className="text-sm">
                    {component.id}
                  </ThemedText>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button onClick={onClose} className="p-2 rounded-lg hover:bg-bg-hover transition-colors" aria-label="Chiudi modal">
              <X className="w-5 h-5 text-text-secondary" />
            </button>
          </div>

          {/* Content - Scrollable */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Overview */}
            <div>
              <ThemedText variant="secondary" className="leading-relaxed">
                {component.description}
              </ThemedText>

              {/* Import */}
              <div className="mt-4">
                <div className="flex items-center justify-between mb-2">
                  <ThemedText variant="label" className="text-sm font-medium">
                    Import
                  </ThemedText>
                  <button
                    onClick={() => copyToClipboard(component.importPath, "import")}
                    className="p-1 rounded hover:bg-bg-hover transition-colors"
                    title="Copia import"
                  >
                    {copiedCode === "import" ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-text-secondary" />
                    )}
                  </button>
                </div>
                <div className="bg-bg-contrast text-text-contrast p-3 rounded-lg text-sm font-mono">{component.importPath}</div>
              </div>
            </div>

            {/* Props API */}
            <TitledSurface title="Props API" padding="md">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border-default">
                      <th className="text-left py-2 pr-4 font-medium text-text-secondary">Nome</th>
                      <th className="text-left py-2 pr-4 font-medium text-text-secondary">Tipo</th>
                      <th className="text-left py-2 pr-4 font-medium text-text-secondary">Default</th>
                      <th className="text-left py-2 font-medium text-text-secondary">Descrizione</th>
                    </tr>
                  </thead>
                  <tbody>
                    {component.props.map((prop, index) => (
                      <tr key={prop.name} className={index % 2 === 0 ? "bg-bg-secondary/30" : ""}>
                        <td className="py-3 pr-4">
                          <code className="text-violet-600 font-medium">{prop.name}</code>
                          {prop.required && (
                            <span className="text-red-500 ml-1" title="Required">
                              *
                            </span>
                          )}
                        </td>
                        <td className="py-3 pr-4">
                          <code className="text-sm text-text-secondary bg-bg-secondary px-2 py-1 rounded">{prop.type}</code>
                        </td>
                        <td className="py-3 pr-4">
                          {prop.defaultValue ? (
                            <code className="text-sm text-green-600">{prop.defaultValue}</code>
                          ) : (
                            <span className="text-text-placeholder">-</span>
                          )}
                        </td>
                        <td className="py-3">
                          <ThemedText variant="secondary" className="text-sm">
                            {prop.description}
                          </ThemedText>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </TitledSurface>

            {/* Examples */}
            <TitledSurface title="Esempi di Utilizzo" padding="md">
              <div className="space-y-6">
                {component.examples.map((example, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <ThemedText variant="primary" className="font-semibold">
                          {example.title}
                        </ThemedText>
                        <ThemedText variant="secondary" className="text-sm mt-1">
                          {example.description}
                        </ThemedText>
                      </div>
                      <button
                        onClick={() => copyToClipboard(example.code, `example-${index}`)}
                        className="p-2 rounded-lg hover:bg-bg-hover transition-colors"
                        title="Copia codice"
                      >
                        {copiedCode === `example-${index}` ? (
                          <Check className="w-4 h-4 text-green-600" />
                        ) : (
                          <Copy className="w-4 h-4 text-text-secondary" />
                        )}
                      </button>
                    </div>

                    <div className="bg-bg-contrast text-text-contrast p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm font-mono whitespace-pre-wrap">{example.code}</pre>
                    </div>
                  </div>
                ))}
              </div>
            </TitledSurface>

            {/* Notes & Best Practices */}
            {component.notes && (
              <TitledSurface title="Note e Best Practices" padding="md">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <ExternalLink className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <ThemedText variant="secondary" className="leading-relaxed">
                    {component.notes}
                  </ThemedText>
                </div>
              </TitledSurface>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-border-default p-6">
            <div className="flex items-center justify-between">
              <ThemedText variant="secondary" className="text-sm">
                Component ID: <code className="font-mono">{component.id}</code>
              </ThemedText>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition-colors"
              >
                Chiudi
              </button>
            </div>
          </div>
        </ThemedSurface>
      </div>
    </div>
  );
};

export default ComponentModal;
