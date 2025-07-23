// src/features/shared/components/ShowLayout.tsx
import React from "react";
import { Card, Separator } from "../../../core/components/ui";
import { TitledSurface } from "../../../core/components/layout";
import { ThemedText } from "../../../core/components/atomic";

/**
 * ShowLayout - Showcase per componenti di layout:
 * - Card (contenitori versatili)
 * - Separator (future)
 * - Spacer (future)
 * - Grid helpers (future)
 */
const ShowLayout: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Card Showcase */}
      <TitledSurface title="Card Components" padding="lg">
        <div className="space-y-8">
          {/* Card Varianti */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Varianti Card
            </ThemedText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card variant="default">
                <h3 className="font-semibold mb-2 text-text-primary">Default</h3>
                <p className="text-sm text-text-secondary">Ombra leggera e bordo sottile per contenuti standard</p>
              </Card>

              <Card variant="elevated">
                <h3 className="font-semibold mb-2 text-text-primary">Elevated</h3>
                <p className="text-sm text-text-secondary">Ombra prominente per contenuti importanti</p>
              </Card>

              <Card variant="outlined">
                <h3 className="font-semibold mb-2 text-text-primary">Outlined</h3>
                <p className="text-sm text-text-secondary">Bordo spesso senza ombra per design minimale</p>
              </Card>

              <Card variant="flat">
                <h3 className="font-semibold mb-2 text-text-primary">Flat</h3>
                <p className="text-sm text-text-secondary">Solo sfondo per design ultra-minimale</p>
              </Card>
            </div>
          </div>

          {/* Card Interattivi */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Card Interattivi, info card e padding
            </ThemedText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card variant="outlined" clickable onClick={() => alert("Card cliccato!")}>
                <h3 className="font-semibold mb-2 text-text-primary">Card Cliccabile</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Clicca qui per testare l'interazione. Supporta anche navigazione da tastiera con Tab e Enter.
                </p>
                <div className="text-xs text-violet-600 font-medium">Click me! →</div>
              </Card>

              <Card variant="elevated" hover>
                <h3 className="font-semibold mb-2 text-text-primary">Card con Hover</h3>
                <p className="text-sm text-text-secondary">
                  Hover effects attivi senza essere cliccabile. Perfetto per contenuti che cambiano al passaggio del mouse.
                </p>
              </Card>

              <Card variant="flat" padding="lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-text-primary">1,234</h3>
                    <p className="text-sm text-text-secondary">Utenti Attivi</p>
                  </div>
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    US
                  </div>
                </div>
              </Card>

              <Card variant="outlined" padding="lg">
                <h4 className="font-medium text-text-primary">Large</h4>
                <p className="text-xs text-text-secondary">Padding 24px</p>
              </Card>
            </div>
          </div>

          {/* Card Composizione */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Card Composizione Complessa
            </ThemedText>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card variant="elevated" padding="lg">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-text-primary">Progetto Dashboard</h3>
                  </div>
                  <span className="text-xs bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-2 py-1 rounded">
                    In Sviluppo
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Progresso</span>
                    <span className="text-text-primary font-medium">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div className="bg-violet-600 h-2 rounded-full" style={{ width: "78%" }}></div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      A
                    </div>
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      B
                    </div>
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                      C
                    </div>
                  </div>
                  <span className="text-xs text-text-secondary">Scadenza: 15 Gen</span>
                </div>
              </Card>

              <Card variant="outlined" padding="lg" clickable onClick={() => alert("Notifica aperta!")}>
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-lg">📨</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-text-primary mb-1">Nuova Notifica</h3>
                    <p className="text-sm text-text-secondary mb-2">
                      Hai ricevuto 3 nuovi messaggi da colleghi del team. Clicca per visualizzare tutti i dettagli.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-text-secondary">2 minuti fa</span>
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Separator Showcase */}
      <TitledSurface title="Separator Components" padding="lg">
        <div className="space-y-8">
          {/* Separator Base */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Separator Orizzontali, con testo decorativo
            </ThemedText>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="p-4 border border-border-default rounded-lg">
                <p className="text-sm text-text-secondary">Contenuto sezione 1</p>
                <Separator className="my-4" />
                <p className="text-sm text-text-secondary">Contenuto sezione 2</p>
                <Separator variant="subtle" className="my-4" />
                <p className="text-sm text-text-secondary">Contenuto con separator sottile</p>
              </div>
              <div className="p-4 border border-border-default rounded-lg space-y-4">
                <div className="text-center">
                  <h4 className="font-semibold text-text-primary">Login</h4>
                  <p className="text-sm text-text-secondary">Inserisci le tue credenziali</p>
                </div>
                <Separator>OR</Separator>
                <div className="text-center">
                  <h4 className="font-semibold text-text-primary">Social Login</h4>
                  <p className="text-sm text-text-secondary">Accedi con i tuoi social</p>
                </div>
              </div>

              <div className="p-4 border border-border-default rounded-lg space-y-4">
                <div>
                  <h4 className="font-semibold text-text-primary">Progetti 2024</h4>
                  <p className="text-sm text-text-secondary">Progetti dell'anno corrente</p>
                </div>
                <Separator>2023</Separator>
                <div>
                  <h4 className="font-semibold text-text-primary">Progetti Precedenti</h4>
                  <p className="text-sm text-text-secondary">Archivio progetti anni passati</p>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Verticali */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Separator Verticali
            </ThemedText>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="p-4 border border-border-default rounded-lg">
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-text-primary">Dashboard</span>
                  <Separator orientation="vertical" className="h-5" />
                  <span className="text-sm text-text-primary">Progetti</span>
                  <Separator orientation="vertical" className="h-5" variant="subtle" />
                  <span className="text-sm text-text-primary">Impostazioni</span>
                </div>
              </div>

              <div className="p-4 border border-border-default rounded-lg">
                <div className="flex items-center justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">1,234</div>
                    <div className="text-xs text-text-secondary">Users</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">€45K</div>
                    <div className="text-xs text-text-secondary">Revenue</div>
                  </div>
                  <Separator orientation="vertical" className="h-12" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-text-primary">98%</div>
                    <div className="text-xs text-text-secondary">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TitledSurface>
    </div>
  );
};

export default ShowLayout;
