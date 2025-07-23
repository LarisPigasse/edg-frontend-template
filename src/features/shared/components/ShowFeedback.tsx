// src/features/shared/components/ShowFeedback.tsx
import React, { useState } from "react";
import { HelpCircle, Settings, AlertTriangle, Trash2, Save, Eye } from "lucide-react";
import { Tooltip, Button, Modal, ConfirmModal, Spinner, Alert } from "../../../core/components/ui";
import { TitledSurface } from "../../../core/components/layout";
import { ThemedText } from "../../../core/components/atomic";
import type { ConfirmVariant } from "../../../core/components/ui/ConfirmModal";
import type { ModalSize } from "../../../core/components/ui/Modal";

/**
 * ShowFeedback - Showcase completo per componenti di feedback:
 * - Tooltip (informazioni contextual)
 * - Modal (dialog generici)
 * - ConfirmModal (conferme specializzate)
 */
const ShowFeedback: React.FC = () => {
  // Stati per Modal demo
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [currentModalSize, setCurrentModalSize] = useState<ModalSize>("md");
  const [complexModalOpen, setComplexModalOpen] = useState(false);
  const [loadingModalOpen, setLoadingModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(false);

  // Stati per ConfirmModal demo
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [currentConfirmVariant, setCurrentConfirmVariant] = useState<ConfirmVariant>("default");
  const [confirmLoading, setConfirmLoading] = useState(false);

  // Handlers Modal
  const handleModalSizeDemo = (size: ModalSize) => {
    setCurrentModalSize(size);
    setSizeModalOpen(true);
  };

  const handleModalSave = async () => {
    setModalLoading(true);
    // Simula async operation
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setModalLoading(false);
    setLoadingModalOpen(false);
  };

  // Handlers ConfirmModal
  const handleConfirmDemo = (variant: ConfirmVariant) => {
    setCurrentConfirmVariant(variant);
    setConfirmModalOpen(true);
  };

  const handleConfirm = async () => {
    setConfirmLoading(true);
    // Simula async operation
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setConfirmLoading(false);
    setConfirmModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Tooltip Showcase */}
        <TitledSurface title="Tooltip Components" padding="lg">
          <div className="space-y-6">
            {/* Tooltip Base */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-2 block">
                Tooltip Base e posizioni
              </ThemedText>
              <div className="flex items-center gap-4 flex-wrap">
                <Tooltip content="Questo è un tooltip informativo">
                  <Button variant="primary">Hover me</Button>
                </Tooltip>

                <Tooltip content="Tooltip in alto" side="top">
                  <Button variant="outline" size="sm">
                    Top
                  </Button>
                </Tooltip>

                <Tooltip content="Tooltip a destra" side="right">
                  <Button variant="outline" size="sm">
                    Right
                  </Button>
                </Tooltip>

                <Tooltip content="Tooltip in basso" side="bottom">
                  <Button variant="outline" size="sm">
                    Bottom
                  </Button>
                </Tooltip>

                <Tooltip content="Tooltip a sinistra" side="left">
                  <Button variant="outline" size="sm">
                    Left
                  </Button>
                </Tooltip>
              </div>
            </div>

            {/* Tooltip su Icone */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-2 block">
                Tooltip su Icone e dimensioni
              </ThemedText>
              <div className="flex items-center gap-4">
                <Tooltip content="Aiuto e documentazione">
                  <button className="p-2 rounded-lg hover:bg-bg-hover transition-colors">
                    <HelpCircle className="w-5 h-5 text-text-secondary" />
                  </button>
                </Tooltip>

                <Tooltip content="Impostazioni utente" side="bottom">
                  <button className="p-2 rounded-lg hover:bg-bg-hover transition-colors">
                    <Settings className="w-5 h-5 text-text-secondary" />
                  </button>
                </Tooltip>

                <Tooltip content="Tooltip piccolo" size="sm">
                  <Button size="sm">Small</Button>
                </Tooltip>

                <Tooltip content="Tooltip medio con un po' più di testo" size="md">
                  <Button size="md">Medium</Button>
                </Tooltip>

                <Tooltip content="Tooltip grande con molto testo esplicativo per dare informazioni dettagliate" size="lg">
                  <Button size="lg">Large</Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </TitledSurface>
        {/* Modal Showcase */}
        <TitledSurface title="Modal Components" padding="lg">
          <div className="space-y-6 mb-2">
            {/* Modal Base */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-3 block">
                Modal Base
              </ThemedText>
              <div className="flex items-center gap-4 flex-wrap">
                <Button variant="primary" onClick={() => setBasicModalOpen(true)}>
                  Modal Semplice
                </Button>

                <Button variant="outline" onClick={() => setComplexModalOpen(true)}>
                  Modal Complesso
                </Button>

                <Button variant="secondary" onClick={() => setLoadingModalOpen(true)}>
                  Modal con Loading
                </Button>
              </div>
            </div>

            {/* Modal Dimensioni */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-3 block">
                Dimensioni Modal
              </ThemedText>
              <div className="flex items-center gap-4 flex-wrap">
                <Button variant="outline" size="sm" onClick={() => handleModalSizeDemo("sm")}>
                  Small
                </Button>

                <Button variant="outline" size="sm" onClick={() => handleModalSizeDemo("md")}>
                  Medium
                </Button>

                <Button variant="outline" size="sm" onClick={() => handleModalSizeDemo("lg")}>
                  Large
                </Button>

                <Button variant="outline" size="sm" onClick={() => handleModalSizeDemo("xl")}>
                  Extra Large
                </Button>
              </div>
            </div>
          </div>
        </TitledSurface>
        {/* ConfirmModal Showcase */}
        <TitledSurface title="ConfirmModal Components" padding="lg">
          <div className="space-y-6 mb-1">
            {/* ConfirmModal Varianti */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-3 block">
                Varianti ConfirmModal
              </ThemedText>
              <div className="flex items-center gap-4 flex-wrap">
                <Button variant="primary" onClick={() => handleConfirmDemo("default")}>
                  Default
                </Button>

                <Button variant="danger" onClick={() => handleConfirmDemo("danger")}>
                  Danger
                </Button>

                <Button variant="warning" onClick={() => handleConfirmDemo("warning")}>
                  Warning
                </Button>

                <Button variant="success" onClick={() => handleConfirmDemo("success")}>
                  Success
                </Button>

                <Button variant="info" onClick={() => handleConfirmDemo("info")}>
                  Info
                </Button>
              </div>
            </div>

            {/* Use Cases */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-3 block">
                Casi d'Uso Comuni
              </ThemedText>
              <div className="flex items-center gap-4 flex-wrap">
                <Tooltip content="Conferma eliminazione">
                  <Button
                    variant="danger"
                    leftIcon={<Trash2 className="w-4 h-4" />}
                    onClick={() => handleConfirmDemo("danger")}
                  >
                    Elimina
                  </Button>
                </Tooltip>

                <Tooltip content="Salva modifiche">
                  <Button
                    variant="success"
                    leftIcon={<Save className="w-4 h-4" />}
                    onClick={() => handleConfirmDemo("success")}
                  >
                    Salva
                  </Button>
                </Tooltip>

                <Tooltip content="Avviso importante">
                  <Button
                    variant="warning"
                    leftIcon={<AlertTriangle className="w-4 h-4" />}
                    onClick={() => handleConfirmDemo("warning")}
                  >
                    Avviso
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
        </TitledSurface>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {/* Spinner Showcase */}
        <TitledSurface title="Spinner Components" padding="lg">
          <div className="space-y-6">
            {/* Spinner Dimensioni */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-3 block">
                Dimensioni, spinner in pulsanti e inline
              </ThemedText>
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Spinner size="xs" />
                  <ThemedText variant="secondary" className="text-xs mt-2 block">
                    XS (16px)
                  </ThemedText>
                </div>

                <div className="text-center">
                  <Spinner size="sm" />
                  <ThemedText variant="secondary" className="text-xs mt-2 block">
                    SM (20px)
                  </ThemedText>
                </div>

                <div className="text-center">
                  <Spinner size="md" />
                  <ThemedText variant="secondary" className="text-xs mt-2 block">
                    MD (24px)
                  </ThemedText>
                </div>
                <div className="flex items-center gap-4 flex-wrap">
                  <Button variant="info" disabled leftIcon={<Spinner size="sm" />}>
                    Caricamento...
                  </Button>

                  <Button variant="secondary" disabled leftIcon={<Spinner size="sm" />}>
                    Elaborazione...
                  </Button>

                  <Button variant="outline" disabled leftIcon={<Spinner size="sm" />}>
                    Sincronizzazione...
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Spinner size="xs" />
                  <ThemedText variant="secondary" className="text-sm">
                    Salvataggio automatico...
                  </ThemedText>
                </div>

                <div className="flex items-center gap-2">
                  <Spinner size="sm" />
                  <ThemedText variant="secondary" className="text-sm">
                    Sincronizzazione con il server...
                  </ThemedText>
                </div>
              </div>
            </div>

            {/* Spinner con Background */}
            <div>
              <ThemedText variant="label" className="text-sm font-medium mb-3 block">
                Spinner su Sfondi Diversi
              </ThemedText>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-bg-primary border border-border-default rounded-lg p-6 text-center">
                  <Spinner size="md" />
                  <ThemedText variant="secondary" className="mt-2 text-xs ms-3">
                    Sfondo Primary
                  </ThemedText>
                </div>

                <div className="bg-bg-secondary border border-border-default rounded-lg p-6 text-center">
                  <Spinner size="md" />
                  <ThemedText variant="secondary" className="mt-2 text-xs ms-3">
                    Sfondo Secondary
                  </ThemedText>
                </div>

                <div className="bg-bg-contrast rounded-lg p-6 text-center">
                  <Spinner size="md" />
                  <ThemedText variant="contrast" className="mt-2 text-xs ms-3">
                    Sfondo Contrast
                  </ThemedText>
                </div>
              </div>
            </div>
          </div>
        </TitledSurface>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Alert Showcase */}
          <TitledSurface title="Alert Components" padding="lg">
            <div className="space-y-8">
              {/* Alert con Titoli */}
              <div>
                <ThemedText variant="label" className="text-sm font-medium mb-4 block">
                  Alert minimali e con Titoli
                </ThemedText>
                <div className="space-y-4">
                  <Alert variant="info">
                    Questa è un'informazione importante per l'utente. I dati verranno sincronizzati automaticamente.
                  </Alert>

                  <Alert variant="warning">Attenzione: questa azione potrebbe avere conseguenze. Procedere con cautela.</Alert>

                  <Alert variant="danger" title="Errore di Connessione">
                    Impossibile connettersi al server. Verificare la connessione internet e riprovare.
                  </Alert>

                  <Alert variant="info" title="Notifica Sistema" closable onClose={() => alert("Alert Info chiuso")}>
                    Questo alert può essere chiuso dall'utente cliccando il pulsante X nell'angolo in alto a destra.
                  </Alert>
                </div>
              </div>
            </div>
          </TitledSurface>

          <TitledSurface title="Alert Components custom" padding="lg">
            <div className="space-y-8">
              {/* Alert Personalizzati */}
              <div>
                <ThemedText variant="label" className="text-sm font-medium mb-4 block">
                  Alert Personalizzati
                </ThemedText>
                <div className="space-y-4">
                  <Alert variant="warning" icon={<span className="text-lg">⚡</span>} title="Alert con Icona Custom">
                    Questo alert utilizza un'icona personalizzata al posto di quella di default.
                  </Alert>

                  <Alert variant="info" hideIcon>
                    Alert senza icona per un design più minimale e pulito.
                  </Alert>

                  <Alert
                    variant="success"
                    icon={<span className="text-lg">🎉</span>}
                    closable
                    onClose={() => alert("Congratulazioni chiuse!")}
                  >
                    Congratulazioni! Hai completato tutti i passaggi richiesti.
                  </Alert>

                  <Alert variant="info" title="Alert di sistema" hideIcon>
                    Backup: Ultimo backup completato 2 ore fa.
                  </Alert>
                </div>
              </div>
            </div>
          </TitledSurface>
        </div>
      </div>
      {/* Demo Modals */}

      {/* Basic Modal */}
      <Modal
        isOpen={basicModalOpen}
        onClose={() => setBasicModalOpen(false)}
        title="Modal Semplice"
        description="Questo è un modal base con contenuto semplice"
        footer={
          <div className="flex justify-end space-x-3">
            <Button variant="ghost" onClick={() => setBasicModalOpen(false)}>
              Chiudi
            </Button>
            <Button variant="primary" onClick={() => setBasicModalOpen(false)}>
              Conferma
            </Button>
          </div>
        }
      >
        <div className="p-6">
          <ThemedText variant="secondary" className="leading-relaxed">
            Contenuto del modal semplice. Questo è un esempio di modal base con header, contenuto e footer personalizzato. Il
            modal usa ThemedSurface per integrarsi perfettamente con il theme system.
          </ThemedText>
        </div>
      </Modal>

      {/* Size Demo Modal */}
      <Modal
        isOpen={sizeModalOpen}
        onClose={() => setSizeModalOpen(false)}
        title={`Modal ${currentModalSize.toUpperCase()}`}
        size={currentModalSize}
        footer={
          <div className="flex justify-end">
            <Button variant="primary" onClick={() => setSizeModalOpen(false)}>
              Chiudi
            </Button>
          </div>
        }
      >
        <div className="p-6">
          <ThemedText variant="secondary" className="leading-relaxed">
            Questo è un modal con dimensione <strong>{currentModalSize}</strong>. La dimensione viene gestita tramite classi
            Tailwind responsive che si adattano automaticamente ai diversi viewport.
          </ThemedText>
        </div>
      </Modal>

      {/* Complex Modal */}
      <Modal
        isOpen={complexModalOpen}
        onClose={() => setComplexModalOpen(false)}
        title="Modal Complesso"
        description="Esempio di modal with contenuto ricco e scrollable"
        size="lg"
        footer={
          <div className="flex justify-between">
            <Button variant="ghost" onClick={() => setComplexModalOpen(false)}>
              Annulla
            </Button>
            <div className="flex space-x-3">
              <Button variant="outline" leftIcon={<Eye className="w-4 h-4" />}>
                Anteprima
              </Button>
              <Button variant="primary" leftIcon={<Save className="w-4 h-4" />}>
                Salva
              </Button>
            </div>
          </div>
        }
      >
        <div className="p-6 space-y-4">
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-2 block">
              Sezione 1
            </ThemedText>
            <ThemedText variant="secondary" className="leading-relaxed">
              Questo è un modal più complesso con multiple sezioni e contenuto scrollable. Il modal mantiene l'header e footer
              fissi mentre il contenuto può scorrere.
            </ThemedText>
          </div>

          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-2 block">
              Sezione 2
            </ThemedText>
            <ThemedText variant="secondary" className="leading-relaxed">
              Il theme system garantisce coerenza visiva in tutti i modal. Tutti i componenti utilizzano ThemedSurface e
              ThemedText per essere sempre consistenti.
            </ThemedText>
          </div>

          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-2 block">
              Sezione 3
            </ThemedText>
            <ThemedText variant="secondary" className="leading-relaxed">
              Il modal supporta contenuti di qualsiasi altezza grazie al sistema di scroll interno che mantiene header e footer
              sempre visibili.
            </ThemedText>
          </div>
        </div>
      </Modal>

      {/* Loading Modal */}
      <Modal
        isOpen={loadingModalOpen}
        onClose={() => setLoadingModalOpen(false)}
        title="Modal con Loading"
        preventClose={modalLoading}
        footer={
          <div className="flex justify-end space-x-3">
            <Button variant="ghost" onClick={() => setLoadingModalOpen(false)} disabled={modalLoading}>
              Annulla
            </Button>
            <Button variant="primary" onClick={handleModalSave} isLoading={modalLoading} loadingText="Salvando...">
              Salva
            </Button>
          </div>
        }
      >
        <div className="p-6">
          <ThemedText variant="secondary" className="leading-relaxed">
            Questo modal dimostra la gestione degli stati di loading. Durante il caricamento il modal non può essere chiuso e i
            pulsanti mostrano lo stato appropriato.
          </ThemedText>
        </div>
      </Modal>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={handleConfirm}
        variant={currentConfirmVariant}
        title={`Conferma ${currentConfirmVariant}`}
        message={`Sei sicuro di voler procedere con questa azione ${currentConfirmVariant}?`}
        details="Questa operazione non può essere annullata. Controlla attentamente prima di procedere."
        isLoading={confirmLoading}
        loadingText="Elaborando..."
      />
    </div>
  );
};

export default ShowFeedback;
