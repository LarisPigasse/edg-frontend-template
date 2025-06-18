# EDG-FRONTEND-TEMPLATE

## Obiettivo: realizzare un frontend template che sia riutilizzabile e contenga gli elelementi basilari per avviare lo sviluppo di un frontend nel più breve tempo possibile

## Caratteristiche: 
- Stack tecnologico moderno e performante (React + Vite + TypeScript + Tailwind)
- Dipendenze ben scelte per coprire le esigenze comuni (form, state management, UI, validazione)
- Componenti personalizzati riutilizzabili per mantenere coerenza visiva
- Un layout header-mode, con header e main content, dal quale attivare o meno: la sidebar; il footer 
- Struttura feature-based per organizzazione scalabile
- Design minimale e responsive

## Struttura

edg-frontend-template/
├── assets/                             
│   ├── logo.png
│   └── icon.png
├── src/
│   ├── app/                                        # Elementi principali dell'app
|   |   ├── index.ts                                # barrel file
|   |   ├── constants.ts                            # Parametri e costanti globali
│   │   ├── hooks.ts                                # Redux hooks tipizzati
│   │   └── store.ts                                # Redux store
│   ├── config/                                     # Configurazioni
|   |   ├── index.ts                                # barrel file
│   │   ├── app.config.ts                           # Parametri e configurazioni dell'app
│   │   ├── navigation.config.ts                    # Navigazione di default
│   │   └── routes.config.ts                        # Configurazione del routing
|   ├── core/                                       # Componenti e utility condivisi
|   |   ├── components/                             # Componenti riutilizzabili
|   │   │   ├── actions                             # Componenti base del layout
|   │   │   │   ├── index.ts                        # barrel file dei componenti layout
|   │   │   │   ├── ActionMenu.tsx                  # Menu a tendina delle actions
|   │   │   │   ├── CreateAction.tsx                # Creare un nuovo elemento dell'identità
|   │   │   │   ├── DeleteAction.tsx                # Eliminare l'elemento selezionato
|   │   │   │   └── EditAction.tsx                  # Modificare l'elemento selezionato
|   │   │   ├── info                                # Componenti utili secondari e informativi
|   │   │   │   ├── index.ts                        # Barrel file
|   │   │   │   ├── VersionInfo.tsx                 # Componente info versione (da definire)
|   │   │   │   ├── ConnectionStatus.tsx            # Indicatore connessione backend (da definire)
|   │   │   │   └── QuickLink.tsx                   # Link rapidi (da definire)
|   │   │   ├── layout/                             # Componenti base del layout
|   │   │   |   ├── index.ts                        # Barrel file dei componenti layout
|   │   │   │   ├── CenteredPage.tsx                # Container per centrare in verticale in una pagina
|   │   │   │   ├── CenteredSection.tsx             # Container per centrare in verticale in una sezione
|   │   │   │   ├── Footer.tsx                      # Footer dell'applicazione
|   │   │   │   ├── Header.tsx                      # Header dell'applicazione
|   │   │   │   ├── Logo.tsx                        # Logo dell'applicazione
|   │   │   |   └── Sidebar.ts                      # Sidebar dell'applicazione
|   │   │   ├── navigation/                         # Componenti navigazione
|   │   │   |   ├── index.ts                        # Barrel file dei componenti navigation
|   │   │   │   ├── FooterMenu.tsx                  # Menu nel footer (da definire)
|   │   │   │   ├── MainMenu.tsx                    # Menu principale (da definire)
|   │   │   │   ├── SidebarToggle.tsx               # Toggle per allargare o stingere la sidebar
|   │   │   │   ├── UserMenu.tsx                    # Menu utente per configurazione app
|   │   │   │   ├── UserMenuTrigger.tsx             # Trigger per menu utente
|   │   │   │   └── UserProfileMenu.tsx             # Menu utente con dropdown (da definire)
|   │   │   └── ui/                                 # Componenti base dell'interfaccia utente
|   │   │       ├── index.ts                        # Barrel file dei componenti ui
|   |   |       ├── Badge.tsx                       # Componente badge con varianti
|   │   │       ├── Button.tsx                      # Componente button con varianti
|   │   │       ├── Input.tsx                       # Componente input con varianti
|   │   │       ├── Modal.tsx                       # Componente modale base
|   │   │       ├── SubmitButton.tsx                # Componente button per submit
|   │   │       ├── Table.tsx                       # Componente per tabella semplice
|   │   │       ├── TableLink.tsx                   # Componente per elementi cliccabile delle righe tabella
|   │   │       └── Tooltip.tsx                     # Componente per tooltip, richiede headless
|   │   ├── hooks/                                  # Hook personalizzati condivisi
|   │   │   ├── index.ts                            # Barrel file degli Hooks
|   │   │   ├── useLocalStorage.ts                  # Hook per la gestione del local storage
|   │   │   ├── useModal.ts                         # Hook per gestione modal (da definire)
|   │   │   └── useThemeStyles.ts                   # Hook per gestione stili e temi
|   │   ├── services/                               # Servizi di base condivisi
|   │   │   ├── index.ts                            # barrel file
|   │   │   └── apiService.ts                       # Servizio base per le richieste API (da definire)
|   │   ├── styles/                                 # Stile personalizzati
|   │   │   ├── tokens.ts                           # Design tokens centralizzati
|   │   │   └── typography.css                      # Classi per stili tipografici
|   │   └── utils/                                  # Utility condivise
|   │   │   ├── index.ts                            # Barrel file delle utils
|   │   │   └── iconMap.ts                          # Import delle icons condivise
│   ├── features/
│   │   ├── auth/                                   # Tutto ancora da deinire
│   │   |   ├── index.ts                            # Barrel file exports
│   │   |   ├── AuthInitializer.tsx                 # Componente per verifica autenticazione
│   │   |   ├── authService.ts                      # Servizio autenticazione
│   │   |   ├── authSlice.ts                        # Slice Redux per auth
│   │   |   ├── ChangePasswordModal.tsx             # Modal cambio password
│   │   |   ├── Login.tsx                           # Pagina login
│   │   |   ├── ResetPasswordConfirm.tsx            # Pagina conferma reset password
│   │   |   └── ResetPasswordRequest.tsx            # Pagina richiesta reset password
│   │   │
│   │   ├── settings/
│   │   │   ├── index.ts.ts                         # Barrel file
│   │   │   └── uiSlice.ts                          # Redux slice per impostazioni ui
│   │   │
│   │   └── shared/
|   |       ├── components/                     # Componenti per le pagine shared
│   |       |   ├── index.ts                    # Barrel file
│   |       |   ├── ShowButtons.tsx             # Showcase del Button component
|   |       |   ├── ShowForms.tsx               # Showcase per Input, label e form validation
│   |       |   ├── ShowDataDisplay.tsx         # Showcase per Table, TableLinl e Badge
│   |       |   ├── ShowFeedback.tsx            # Showcase Modal, Tooltip e notification/alert
|   |       |   └── ShowActions.tsx             # Showcase per azioni e crud
|   |       |
│   │       ├── index.ts                        # Barrel file
│   │       ├── Dashboard.tsx                   # Pagina principale
│   │       ├── NotFound.tsx                    # Pagina 404
|   |       └── Showcase.tsx                    # Pagina di esempio per i componenti
│   ├── layouts/
│   │   └── MainLayout.tsx                      # Layout principale con dual-mode
│   │
│   ├── App.tsx                                 # Componente root applicazione
│   ├── index.css                               # Stili globali Tailwind
│   ├── main.tsx                                # Entry point React
│   └── vite-env.d.ts                           # Garantisce che TypeSscript validi il codice che interagisce con Vite
├── .env.development                            # variabili d'ambiente per lo sviluppo
├── .env.production                             # variabili d'ambiente per la produzione
├── .gitignore                                  # ignore per git
├── .prettierignore                             # ignore per estensione Prettier
├── eslint.config.js                            # Configurazione di esLint per il controllo del codice
├── index.html                                  # l'index html dell'applicazione
├── package.json                                # Dipendenze del progetto
├── tsconfig.app.json                           # Configurazione TypeScript specifico
├── tsconfig.json                               # Configurazione TypeScript principale
├── vite.config.ts                              # Configurazione Vite
├── Development-progress.md                     # Documenta lo stato di sviluppo del progetto
├── Edg-Frontend-Template.md                    # Struttura e funzioni del progetto
└── README.md                                   # Documentazione progetto

## Metodologia di sviluppo
- Procedere nello sviluppo passo per passo
- Seguire la logica dei piccoli componenti
- Semplificare il più possibile le importazioni
- Separare le responsabilità
- Scalabile
- Aggiornare la documentazione sullo stato di sviluppo
- Usare il moching in modo trasparente per sostituire le API
- Fornire un metodo semplice per passare dal moching alle API effettive
- File .env per la produzione e per lo sviluppo

## Stao di sviluppo
Vedere il file Development-Progress.md

## Repository
https://github.com/LarisPigasse/edg-frontend-template