// src/features/shared/components/ToastShowcaseDemo.tsx
import React from "react";
import { Button } from "../../../core/components/ui";
import { ThemedText } from "../../../core/components/atomic";
import { useToast } from "../../../core/hooks";

/**
 * ToastShowcaseDemo - Componente separato per demo Toast.
 * Necessario per rispettare Rules of Hooks (useToast al top level).
 */
const ToastShowcaseDemo: React.FC = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-8">
      {/* Toast Base */}
      <div>
        <ThemedText variant="label" className="text-sm font-medium mb-4 block">
          Toast Base
        </ThemedText>
        <div className="flex items-center gap-4 flex-wrap">
          <Button variant="primary" onClick={() => toast("Operazione completata con successo")}>
            Toast Base
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast("Documento salvato", {
                title: "Salvataggio",
                duration: 6000,
              })
            }
          >
            Con Titolo
          </Button>

          <Button
            variant="secondary"
            onClick={() =>
              toast("Questo toast rimane visibile", {
                title: "Toast Permanente",
                duration: 0,
              })
            }
          >
            Permanente
          </Button>
        </div>
      </div>

      {/* Toast Semantici */}
      <div>
        <ThemedText variant="label" className="text-sm font-medium mb-4 block">
          Toast Semantici
        </ThemedText>
        <div className="flex items-center gap-4 flex-wrap">
          <Button variant="success" onClick={() => toast.success("File salvato correttamente")}>
            Success
          </Button>

          <Button
            variant="warning"
            onClick={() =>
              toast.warning("Connessione instabile", {
                title: "Attenzione",
                duration: 8000,
              })
            }
          >
            Warning
          </Button>

          <Button variant="danger" onClick={() => toast.danger("Errore durante il salvataggio")}>
            Danger
          </Button>

          <Button
            variant="info"
            onClick={() =>
              toast.info("Nuova versione disponibile", {
                title: "Aggiornamento",
              })
            }
          >
            Info
          </Button>
        </div>
      </div>

      {/* Toast con Azioni */}
      <div>
        <ThemedText variant="label" className="text-sm font-medium mb-4 block">
          Toast con Azioni
        </ThemedText>
        <div className="flex items-center gap-4 flex-wrap">
          <Button
            variant="outline"
            onClick={() =>
              toast.success("Elemento eliminato", {
                action: {
                  label: "Annulla",
                  onClick: () => alert("Operazione annullata!"),
                },
              })
            }
          >
            Con Undo
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast.info("Report generato con successo", {
                title: "Export Completato",
                action: {
                  label: "Visualizza",
                  onClick: () => alert("Apertura report..."),
                },
              })
            }
          >
            Con View
          </Button>

          <Button
            variant="outline"
            onClick={() =>
              toast.warning("Spazio di archiviazione quasi esaurito", {
                title: "Attenzione",
                duration: 10000,
                action: {
                  label: "Gestisci",
                  onClick: () => alert("Apertura gestione storage..."),
                },
              })
            }
          >
            Con Action
          </Button>
        </div>
      </div>

      {/* Toast Configuration Info */}
      <div>
        <ThemedText variant="label" className="text-sm font-medium mb-4 block">
          Configurazione Sistema
        </ThemedText>
        <div className="p-4 bg-bg-secondary rounded-lg space-y-2">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-text-primary">Posizione:</span>
              <span className="text-text-secondary ml-2">Top Center</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Max Concurrent:</span>
              <span className="text-text-secondary ml-2">2 toast</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Durata Default:</span>
              <span className="text-text-secondary ml-2">4000ms</span>
            </div>
            <div>
              <span className="font-medium text-text-primary">Swipe Mobile:</span>
              <span className="text-text-secondary ml-2">Disabilitato</span>
            </div>
          </div>
          <div className="text-xs text-text-secondary pt-2 border-t border-border-thin">
            Configurazione modificabile in <code className="bg-bg-primary px-1 rounded">src/config/index.ts</code>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToastShowcaseDemo;
