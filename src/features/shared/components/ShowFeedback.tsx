// src/features/shared/components/ShowFeedback.tsx
import React, { useState } from "react";
import { Modal, Tooltip, Button, Input, SubmitButton, Badge } from "../../../core/components/ui";

const ShowFeedback: React.FC = () => {
  const [basicModal, setBasicModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);
  const [formModal, setFormModal] = useState(false);
  const [largeModal, setLargeModal] = useState(false);
  const [nonClosableModal, setNonClosableModal] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setFormModal(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Form inviato con successo!");
    }, 2000);
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const openNonClosableModal = () => {
    setNonClosableModal(true);
    // Auto close after 3 seconds
    setTimeout(() => setNonClosableModal(false), 3000);
  };

  return (
    <div className="space-y-8">
      {/* Tooltip Examples */}
      <div>
        <h3 className="text-element-title mb-4">Tooltip Variants</h3>
        <div className="space-y-6">
          {/* Tooltip Positions */}
          <div>
            <h4 className="text-body-sm font-medium mb-3">Posizioni</h4>
            <div className="flex flex-wrap gap-8 items-center justify-center p-8 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <Tooltip content="Tooltip sopra" position="top">
                <Button variant="outline">Top</Button>
              </Tooltip>
              <Tooltip content="Tooltip sotto" position="bottom">
                <Button variant="outline">Bottom</Button>
              </Tooltip>
              <Tooltip content="Tooltip a sinistra" position="left">
                <Button variant="outline">Left</Button>
              </Tooltip>
              <Tooltip content="Tooltip a destra" position="right">
                <Button variant="outline">Right</Button>
              </Tooltip>
            </div>
          </div>

          {/* Tooltip Variants */}
          <div>
            <h4 className="text-body-sm font-medium mb-3">Varianti</h4>
            <div className="flex flex-wrap gap-4">
              <Tooltip content="Tooltip default scuro" variant="default">
                <Button variant="primary">Default</Button>
              </Tooltip>
              <Tooltip content="Tooltip scuro forzato" variant="dark">
                <Button variant="secondary">Dark</Button>
              </Tooltip>
              <Tooltip content="Tooltip chiaro con bordo" variant="light">
                <Button variant="outline">Light</Button>
              </Tooltip>
            </div>
          </div>

          {/* Tooltip with different content */}
          <div>
            <h4 className="text-body-sm font-medium mb-3">Contenuto Avanzato</h4>
            <div className="flex flex-wrap gap-4">
              <Tooltip
                content={
                  <div className="text-center">
                    <div className="font-semibold">Tooltip con Badge</div>
                    <Badge variant="success" size="xs" text="Attivo" />
                  </div>
                }
                variant="light"
                position="bottom"
              >
                <Button variant="info">Rich Content</Button>
              </Tooltip>

              <Tooltip
                content="Questo è un tooltip molto lungo che dimostra come il contenuto possa estendersi su più righe quando necessario"
                position="top"
                delay={100}
              >
                <Button variant="warning">Long Text</Button>
              </Tooltip>

              <Tooltip content="Tooltip disabilitato" disabled>
                <Button variant="ghost" disabled>
                  Disabled
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Examples */}
      <div>
        <h3 className="text-element-title mb-4">Modal Examples</h3>
        <div className="space-y-6">
          {/* Modal Triggers */}
          <div>
            <h4 className="text-body-sm font-medium mb-3">Tipi di Modal</h4>
            <div className="flex flex-wrap gap-3">
              <Button onClick={() => setBasicModal(true)}>Modal Base</Button>
              <Button variant="warning" onClick={() => setConfirmModal(true)}>
                Modal Conferma
              </Button>
              <Button variant="info" onClick={() => setFormModal(true)}>
                Modal con Form
              </Button>
              <Button variant="secondary" onClick={() => setLargeModal(true)}>
                Modal Grande
              </Button>
              <Button variant="danger" onClick={openNonClosableModal}>
                Non Chiudibile
              </Button>
            </div>
          </div>

          {/* Modal Sizes Demo */}
          <div>
            <h4 className="text-body-sm font-medium mb-3">Dimensioni Modal</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
              {(["xs", "sm", "md", "lg", "xl", "full"] as const).map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    // Create temporary modal for each size
                    const modal = document.createElement("div");
                    modal.innerHTML = `
                      <div class="fixed inset-0 z-50 overflow-y-auto">
                        <div class="fixed inset-0 bg-black bg-opacity-50"></div>
                        <div class="flex min-h-full items-center justify-center p-4">
                          <div class="relative w-full max-w-${
                            size === "xs"
                              ? "xs"
                              : size === "sm"
                              ? "sm"
                              : size === "md"
                              ? "lg"
                              : size === "lg"
                              ? "2xl"
                              : size === "xl"
                              ? "4xl"
                              : "7xl"
                          } transform overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-xl p-6">
                            <h3 class="text-lg font-medium mb-4">Modal Size: ${size.toUpperCase()}</h3>
                            <p class="text-gray-600 dark:text-gray-300 mb-4">Questo è un modal di dimensione ${size}</p>
                            <button onclick="this.closest('div').remove()" class="bg-violet-600 text-white px-4 py-2 rounded hover:bg-violet-700">Chiudi</button>
                          </div>
                        </div>
                      </div>
                    `;
                    document.body.appendChild(modal);
                  }}
                >
                  {size.toUpperCase()}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Examples */}
      <div>
        <h3 className="text-element-title mb-4">Esempi Interattivi</h3>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-body font-medium mb-3">Tooltip su Input</h4>
              <Tooltip content="Inserisci il tuo nome completo" position="top">
                <Input label="Nome" placeholder="Es. Mario Rossi" helperText="Hover per vedere il tooltip" />
              </Tooltip>
            </div>

            <div>
              <h4 className="text-body font-medium mb-3">Tooltip su Badge</h4>
              <div className="flex flex-wrap gap-2">
                <Tooltip content="Utente attivo e verificato" variant="light">
                  <Badge variant="success">Attivo</Badge>
                </Tooltip>
                <Tooltip content="In attesa di approvazione">
                  <Badge variant="warning">Pendente</Badge>
                </Tooltip>
                <Tooltip content="Account sospeso temporaneamente">
                  <Badge variant="danger">Sospeso</Badge>
                </Tooltip>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h3 className="text-element-title mb-4">Esempi di Codice</h3>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <div>
              <span className="text-gray-500 dark:text-gray-400">// Tooltip base</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;Tooltip</span>
              <span className="text-green-600 dark:text-green-400"> content</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"Testo tooltip"</span>
              <span className="text-green-600 dark:text-green-400"> position</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"top"</span>
              <span className="text-blue-600 dark:text-blue-400">&gt;</span>
            </div>
            <div className="mt-3">
              <span className="text-gray-500 dark:text-gray-400">// Modal con footer</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;Modal</span>
              <span className="text-green-600 dark:text-green-400"> isOpen</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{open}"}</span>
              <span className="text-green-600 dark:text-green-400"> title</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"Titolo"</span>
              <span className="text-green-600 dark:text-green-400"> footer</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{buttons}"}</span>
              <span className="text-blue-600 dark:text-blue-400">&gt;</span>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}

      {/* Basic Modal */}
      <Modal isOpen={basicModal} onClose={() => setBasicModal(false)} title="Modal di Base" size="md">
        <div className="space-y-4">
          <p className="text-body">
            Questo è un modal di base con contenuto semplice. Può essere chiuso cliccando la X, premendo Escape, o cliccando
            fuori dal modal.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded">
            <p className="text-body-sm text-muted">
              I modal sono utili per mostrare contenuto che richiede l'attenzione dell'utente senza perdere il contesto della
              pagina principale.
            </p>
          </div>
        </div>
      </Modal>

      {/* Confirm Modal */}
      <Modal
        isOpen={confirmModal}
        onClose={() => setConfirmModal(false)}
        title="Conferma Azione"
        size="sm"
        footer={
          <>
            <Button variant="outline" onClick={() => setConfirmModal(false)}>
              Annulla
            </Button>
            <Button
              variant="warning"
              onClick={() => {
                setConfirmModal(false);
                alert("Azione confermata!");
              }}
            >
              Conferma
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-element-title">Sei sicuro?</h3>
              <p className="text-element-description">Questa azione non può essere annullata. Vuoi procedere?</p>
            </div>
          </div>
        </div>
      </Modal>

      {/* Form Modal */}
      <Modal
        isOpen={formModal}
        onClose={() => setFormModal(false)}
        title="Contattaci"
        size="lg"
        footer={
          <>
            <Button variant="outline" onClick={() => setFormModal(false)}>
              Annulla
            </Button>
            <SubmitButton form="contact-form" isLoading={isSubmitting} loadingText="Invio in corso...">
              Invia Messaggio
            </SubmitButton>
          </>
        }
      >
        <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Nome" placeholder="Il tuo nome" value={formData.name} onChange={handleInputChange("name")} required />
            <Input
              label="Email"
              type="email"
              placeholder="nome@example.com"
              value={formData.email}
              onChange={handleInputChange("email")}
              required
            />
          </div>
          <div>
            <label className="text-label block mb-2">Messaggio</label>
            <textarea
              className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors focus:border-violet-500 focus:ring-2 focus:ring-violet-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
              rows={4}
              placeholder="Il tuo messaggio..."
              value={formData.message}
              onChange={handleInputChange("message")}
              required
            />
          </div>
        </form>
      </Modal>

      {/* Large Modal */}
      <Modal isOpen={largeModal} onClose={() => setLargeModal(false)} title="Modal Grande con Contenuto Esteso" size="xl">
        <div className="space-y-6">
          <div>
            <h4 className="text-element-title mb-2">Sezione 1</h4>
            <p className="text-body">
              Questo è un modal di grandi dimensioni che può contenere molto contenuto. È ideale per form complessi, dashboard o
              visualizzazioni di dati estese.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-element-title mb-2">Colonna Sinistra</h4>
              <div className="space-y-2">
                <Badge variant="success">Feature 1</Badge>
                <Badge variant="info">Feature 2</Badge>
                <Badge variant="warning">Feature 3</Badge>
              </div>
            </div>
            <div>
              <h4 className="text-element-title mb-2">Colonna Destra</h4>
              <p className="text-body-sm text-muted">
                I modal grandi sono perfetti quando hai bisogno di più spazio per visualizzare informazioni complesse o form
                articolati.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded">
            <h4 className="text-element-title mb-2">Nota</h4>
            <p className="text-body-sm">
              Ricorda di non abusare dei modal grandi su dispositivi mobili, dove lo spazio è limitato.
            </p>
          </div>
        </div>
      </Modal>

      {/* Non-closable Modal */}
      <Modal
        isOpen={nonClosableModal}
        onClose={() => {}} // Empty function - non closable
        title="Processo in Corso"
        size="sm"
        closable={false}
      >
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-violet-500"></div>
          </div>
          <div>
            <p className="text-body">Elaborazione in corso...</p>
            <p className="text-body-sm text-muted">Questo modal si chiuderà automaticamente tra pochi secondi.</p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ShowFeedback;
