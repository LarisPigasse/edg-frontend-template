// src/features/shared/components/ShowLayout.tsx
import React from "react";
import { Card, Separator } from "../../../core/components/ui";
import { TitledSurface } from "../../../core/components/layout";
import { ThemedText } from "../../../core/components/atomic";
import { Accordion } from "../../../core/components/ui";
import { Tabs } from "../../../core/components/ui";

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
      {/* Accordion Showcase */}
      <TitledSurface title="Accordion Components" padding="lg">
        <div className="space-y-8">
          {/* Accordion Single */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Accordion Single (FAQ Style)
            </ThemedText>
            <Accordion
              type="single"
              collapsible
              variant="default"
              defaultValue="faq-1"
              items={[
                {
                  value: "faq-1",
                  title: "Come posso cambiare la mia password?",
                  content:
                    "Vai nelle impostazioni del tuo account e clicca su 'Cambia Password'. Inserisci la password attuale e quella nuova. Ti verrà inviata una email di conferma.",
                },
                {
                  value: "faq-2",
                  title: "Come posso contattare il supporto?",
                  content:
                    "Puoi contattarci tramite email a support@example.com o tramite il modulo di contatto nella sezione Aiuto. Il nostro team risponde entro 24 ore.",
                },
                {
                  value: "faq-3",
                  title: "Posso cancellare il mio account?",
                  content:
                    "Sì, puoi cancellare il tuo account in qualsiasi momento dalle impostazioni. Nota che questa azione è irreversibile e tutti i tuoi dati verranno eliminati.",
                },
              ]}
            />
          </div>

          {/* Accordion Multiple */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Accordion Multiple (Settings Style)
            </ThemedText>
            <Accordion
              type="multiple"
              variant="bordered"
              defaultValue={["privacy", "notifications"]}
              items={[
                {
                  value: "privacy",
                  title: "Impostazioni Privacy",
                  content:
                    "Gestisci le tue impostazioni di privacy e controlla chi può vedere le tue informazioni. Puoi modificare la visibilità del profilo e gestire i permessi delle app.",
                },
                {
                  value: "notifications",
                  title: "Notifiche",
                  content:
                    "Configura quando e come ricevere le notifiche dall'applicazione. Puoi scegliere di ricevere notifiche push, email o SMS per diversi tipi di eventi.",
                },
                {
                  value: "security",
                  title: "Sicurezza",
                  content:
                    "Attiva l'autenticazione a due fattori e gestisci i dispositivi connessi. Monitora gli accessi recenti e ricevi avvisi per attività sospette.",
                },
                {
                  value: "billing",
                  title: "Fatturazione",
                  content:
                    "Visualizza la cronologia dei pagamenti, gestisci i metodi di pagamento e aggiorna le informazioni di fatturazione.",
                },
              ]}
            />
          </div>

          {/* Accordion Varianti */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Varianti Visive
            </ThemedText>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Default */}
              <div>
                <ThemedText variant="secondary" className="text-xs mb-2 block">
                  Default
                </ThemedText>
                <Accordion
                  type="single"
                  variant="default"
                  size="sm"
                  items={[
                    {
                      value: "item-1",
                      title: "Elemento 1",
                      content: "Contenuto con variante default - bordi sottili e layout minimale.",
                    },
                    {
                      value: "item-2",
                      title: "Elemento 2",
                      content: "Ideale per FAQ e contenuti informativi.",
                    },
                  ]}
                />
              </div>

              {/* Bordered */}
              <div>
                <ThemedText variant="secondary" className="text-xs mb-2 block">
                  Bordered
                </ThemedText>
                <Accordion
                  type="single"
                  variant="bordered"
                  size="sm"
                  items={[
                    {
                      value: "item-1",
                      title: "Elemento 1",
                      content: "Contenuto con variante bordered - bordi definiti e separazione chiara.",
                    },
                    {
                      value: "item-2",
                      title: "Elemento 2",
                      content: "Perfetto per dashboard e pannelli di configurazione.",
                    },
                  ]}
                />
              </div>

              {/* Separated */}
              <div>
                <ThemedText variant="secondary" className="text-xs mb-2 block">
                  Separated
                </ThemedText>
                <Accordion
                  type="single"
                  variant="separated"
                  size="sm"
                  items={[
                    {
                      value: "item-1",
                      title: "Elemento 1",
                      content: "Contenuto con variante separated - elementi distanziati con sfondi diversi.",
                    },
                    {
                      value: "item-2",
                      title: "Elemento 2",
                      content: "Ottimo per sezioni informative e landing pages.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Accordion Dimensioni */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Dimensioni
            </ThemedText>
            <div className="space-y-4">
              <div>
                <ThemedText variant="secondary" className="text-xs mb-2 block">
                  Small
                </ThemedText>
                <Accordion
                  type="single"
                  variant="bordered"
                  size="sm"
                  items={[
                    {
                      value: "small-item",
                      title: "Accordion Small",
                      content: "Dimensione compatta ideale per sidebar e spazi ridotti.",
                    },
                  ]}
                />
              </div>

              <div>
                <ThemedText variant="secondary" className="text-xs mb-2 block">
                  Medium (Default)
                </ThemedText>
                <Accordion
                  type="single"
                  variant="bordered"
                  size="md"
                  items={[
                    {
                      value: "medium-item",
                      title: "Accordion Medium",
                      content: "Dimensione standard per la maggior parte dei casi d'uso.",
                    },
                  ]}
                />
              </div>

              <div>
                <ThemedText variant="secondary" className="text-xs mb-2 block">
                  Large
                </ThemedText>
                <Accordion
                  type="single"
                  variant="bordered"
                  size="lg"
                  items={[
                    {
                      value: "large-item",
                      title: "Accordion Large",
                      content: "Dimensione ampia per contenuti importanti e landing pages.",
                    },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Accordion con Contenuto Complesso */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Contenuto Complesso
            </ThemedText>
            <Accordion
              type="single"
              variant="separated"
              items={[
                {
                  value: "complex-1",
                  title: "🚀 Funzionalità Avanzate",
                  content: (
                    <div className="space-y-3">
                      <p>L'accordion supporta contenuto React complesso:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Liste e elementi formattati</li>
                        <li>Componenti React embedded</li>
                        <li>Styling personalizzato</li>
                      </ul>
                      <div className="p-3 bg-violet-50 dark:bg-violet-900/20 rounded-lg">
                        <strong>Nota:</strong> Il contenuto può includere qualsiasi elemento React.
                      </div>
                    </div>
                  ),
                },
                {
                  value: "complex-2",
                  title: "⚙️ Configurazione",
                  content: (
                    <div className="space-y-3">
                      <p>Parametri di configurazione disponibili:</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <strong>Type:</strong> single | multiple
                        </div>
                        <div>
                          <strong>Variant:</strong> default | bordered | separated
                        </div>
                        <div>
                          <strong>Size:</strong> sm | md | lg
                        </div>
                        <div>
                          <strong>Collapsible:</strong> true | false
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          {/* States e Interazioni */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Stati e Accessibilità
            </ThemedText>
            <Accordion
              type="single"
              variant="default"
              items={[
                {
                  value: "accessibility",
                  title: "♿ Accessibilità",
                  content:
                    "Supporto completo keyboard navigation: frecce ↑↓ per navigare, Space/Enter per aprire/chiudere, Home/End per primo/ultimo elemento.",
                },
                {
                  value: "disabled",
                  title: "Elemento Disabilitato",
                  content: "Questo elemento non dovrebbe essere accessibile.",
                  disabled: true,
                },
                {
                  value: "animations",
                  title: "🎬 Animazioni",
                  content:
                    "Smooth collapse/expand animations con durata 200ms. Le animazioni rispettano le preferenze di accessibilità del sistema operativo.",
                },
              ]}
            />
          </div>
        </div>
      </TitledSurface>

      {/* Tabs Showcase */}
      <TitledSurface title="Tabs Components" padding="lg">
        <div className="space-y-8">
          {/* Tabs Default */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Tabs Default (Showcase Style)
            </ThemedText>
            <Tabs
              variant="default"
              defaultTab="overview"
              items={[
                {
                  id: "overview",
                  label: "Panoramica",
                  content: (
                    <div className="p-4 bg-bg-secondary rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">Panoramica Generale</h3>
                      <p className="text-text-secondary">
                        Questa è la sezione panoramica con informazioni generali. Perfetta per dashboard e landing pages. Il
                        variant 'default' usa lo stesso stile del componente Showcase esistente.
                      </p>
                    </div>
                  ),
                },
                {
                  id: "details",
                  label: "Dettagli",
                  content: (
                    <div className="p-4 bg-bg-secondary rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">Dettagli Specifici</h3>
                      <p className="text-text-secondary">
                        Contenuto dettagliato con informazioni specifiche. Ogni tab può contenere qualsiasi ReactNode, inclusi
                        componenti complessi, form, grafici, ecc.
                      </p>
                    </div>
                  ),
                },
                {
                  id: "settings",
                  label: "Impostazioni",
                  content: (
                    <div className="p-4 bg-bg-secondary rounded-lg">
                      <h3 className="font-semibold text-text-primary mb-2">Configurazione</h3>
                      <p className="text-text-secondary">
                        Sezione per impostazioni e configurazioni. Il componente gestisce automaticamente il content switching e
                        mantiene lo stato interno.
                      </p>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          {/* Tabs Pills */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Tabs Pills (Modern Style)
            </ThemedText>
            <Tabs
              variant="pills"
              defaultTab="dashboard"
              items={[
                {
                  id: "dashboard",
                  label: "Dashboard",
                  content: (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-4 bg-violet-100 dark:bg-violet-900/20 rounded-lg text-center">
                        <div className="text-2xl font-bold text-violet-600">1,234</div>
                        <div className="text-sm text-text-secondary">Utenti Attivi</div>
                      </div>
                      <div className="p-4 bg-green-100 dark:bg-green-900/20 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">€45.2K</div>
                        <div className="text-sm text-text-secondary">Fatturato</div>
                      </div>
                      <div className="p-4 bg-blue-100 dark:bg-blue-900/20 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">98.5%</div>
                        <div className="text-sm text-text-secondary">Uptime</div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "analytics",
                  label: "Analytics",
                  content: (
                    <div className="space-y-4">
                      <div className="p-4 border border-border-default rounded-lg">
                        <h4 className="font-semibold mb-2">Traffico Mensile</h4>
                        <div className="h-32 bg-gradient-to-r from-violet-100 to-violet-50 dark:from-violet-900/20 dark:to-violet-800/10 rounded flex items-center justify-center">
                          <span className="text-text-secondary">Grafico Analytics</span>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "reports",
                  label: "Reports",
                  content: (
                    <div className="p-4 border border-border-default rounded-lg">
                      <h4 className="font-semibold mb-4">Report Generati</h4>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-2 hover:bg-bg-hover rounded">
                          <span>Report Vendite Q4</span>
                          <span className="text-sm text-text-secondary">2 giorni fa</span>
                        </div>
                        <div className="flex justify-between items-center p-2 hover:bg-bg-hover rounded">
                          <span>Analisi Performance</span>
                          <span className="text-sm text-text-secondary">1 settimana fa</span>
                        </div>
                        <div className="flex justify-between items-center p-2 hover:bg-bg-hover rounded">
                          <span>Customer Insights</span>
                          <span className="text-sm text-text-secondary">2 settimane fa</span>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          {/* Tabs Underline */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Tabs Underline (Minimal Style)
            </ThemedText>
            <Tabs
              variant="underline"
              defaultTab="profile"
              items={[
                {
                  id: "profile",
                  label: "Profilo",
                  content: (
                    <div className="max-w-md">
                      <div className="flex items-center space-x-4 p-4">
                        <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/30 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-violet-600">AD</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-text-primary">Admin Demo</h3>
                          <p className="text-text-secondary">admin@demo.com</p>
                          <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded mt-1 inline-block">
                            Attivo
                          </span>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "security",
                  label: "Sicurezza",
                  content: (
                    <div className="space-y-4 max-w-md">
                      <div className="flex justify-between items-center p-3 border border-border-default rounded-lg">
                        <span>Autenticazione a due fattori</span>
                        <span className="text-sm text-green-600">Attivata</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-border-default rounded-lg">
                        <span>Password sicura</span>
                        <span className="text-sm text-green-600">Forte</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border border-border-default rounded-lg">
                        <span>Ultimo accesso</span>
                        <span className="text-sm text-text-secondary">2 minuti fa</span>
                      </div>
                    </div>
                  ),
                },
                {
                  id: "notifications",
                  label: "Notifiche",
                  content: (
                    <div className="space-y-3 max-w-md">
                      <div className="flex justify-between items-center">
                        <span>Email di marketing</span>
                        <div className="w-10 h-6 bg-violet-600 rounded-full flex items-center">
                          <div className="w-4 h-4 bg-white rounded-full ml-5 transition-all"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Notifiche push</span>
                        <div className="w-10 h-6 bg-gray-300 rounded-full flex items-center">
                          <div className="w-4 h-4 bg-white rounded-full ml-1 transition-all"></div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Aggiornamenti sistema</span>
                        <div className="w-10 h-6 bg-violet-600 rounded-full flex items-center">
                          <div className="w-4 h-4 bg-white rounded-full ml-5 transition-all"></div>
                        </div>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>

          {/* Tabs Responsive */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Tabs Responsive (Scroll Orizzontale su Mobile)
            </ThemedText>
            <Tabs
              variant="pills"
              size="sm"
              defaultTab="tab1"
              items={[
                { id: "tab1", label: "Dashboard", content: <div className="p-4 text-center">Content Dashboard</div> },
                { id: "tab2", label: "Analytics", content: <div className="p-4 text-center">Content Analytics</div> },
                { id: "tab3", label: "Reports", content: <div className="p-4 text-center">Content Reports</div> },
                { id: "tab4", label: "Settings", content: <div className="p-4 text-center">Content Settings</div> },
                { id: "tab5", label: "Users", content: <div className="p-4 text-center">Content Users</div> },
                { id: "tab6", label: "Permissions", content: <div className="p-4 text-center">Content Permissions</div> },
                { id: "tab7", label: "Integrations", content: <div className="p-4 text-center">Content Integrations</div> },
                { id: "tab8", label: "Billing", content: <div className="p-4 text-center">Content Billing</div> },
              ]}
            />
            <ThemedText variant="secondary" className="text-xs mt-2">
              Su mobile, i tab scorrono orizzontalmente senza scrollbar visibile
            </ThemedText>
          </div>

          {/* Tabs con Stati */}
          <div>
            <ThemedText variant="label" className="text-sm font-medium mb-4 block">
              Tabs con Stati (Disabled)
            </ThemedText>
            <Tabs
              variant="default"
              defaultTab="available"
              items={[
                {
                  id: "available",
                  label: "Disponibile",
                  content: (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <p className="text-green-700 dark:text-green-300">Questo tab è disponibile e funzionante.</p>
                    </div>
                  ),
                },
                {
                  id: "disabled",
                  label: "Disabilitato",
                  disabled: true,
                  content: (
                    <div className="p-4 bg-gray-50 dark:bg-gray-900/20 rounded-lg">
                      <p className="text-gray-500">Questo tab non è accessibile.</p>
                    </div>
                  ),
                },
                {
                  id: "normal",
                  label: "Normale",
                  content: (
                    <div className="p-4 bg-bg-secondary rounded-lg">
                      <p className="text-text-primary">Tab normale senza stati particolari.</p>
                    </div>
                  ),
                },
              ]}
            />
            <ThemedText variant="secondary" className="text-xs mt-2">
              I tab disabilitati non sono cliccabili e hanno opacity ridotta
            </ThemedText>
          </div>
        </div>
      </TitledSurface>
    </div>
  );
};

export default ShowLayout;
