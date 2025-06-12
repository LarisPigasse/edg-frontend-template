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
|   |   ├── constants.ts                            # Parametri e costanti globali
│   │   ├── hooks.ts                                # Redux hooks tipizzati
│   │   └── store.ts                                # Redux store
│   ├── config/                                     # Configurazioni
|   |   ├── app.config.ts                           # Parametri e configurazioni dell'app
│   │   ├── index.ts                                # Barrel file
│   │   ├── navigation.config.ts                    # Navigazione di default
│   │   └── routes.config.ts                        # Configurazione del routing
|   ├── core/                                       # Componenti e utility condivisi
|   |   ├── components/                             # Componenti riutilizzabili
|   │   │   ├── actions                             # Componenti base del layout
|   │   │   │   ├── ActionMenu.tsx                  # Menu a tendina delle actions
|   │   │   │   ├── CreateAction.tsx                # Creare un nuovo elemento dell'identità
|   │   │   │   ├── DeleteAction.tsx                # Eliminare l'elemento selezionato
|   │   │   │   ├── EditAction.tsx                  # Modificare l'elemento selezionato
|   │   │   |   └── index.ts                        # Barrel file dei componenti layout
|   │   │   ├── info                                # Componenti utili secondari e informativi
|   │   │   │   ├── VersionInfo.tsx                 # Componente info versione
|   │   │   │   ├── ConnectionStatus.tsx            # Indicatore connessione backend
|   │   │   │   ├── QuickLink.tsx                   # Link rapidi
|   │   │   |   └── index.ts                        # Barrel file dei componenti layout
|   │   │   ├── layout/                             # Componenti base del layout
|   │   │   │   ├── Logo.tsx                        # Logo dell'applicazione
|   │   │   │   ├── Footer.tsx                      # Footer dell'applicazione
|   │   │   │   ├── Header.tsx                      # Header dell'applicazione
|   │   │   |   ├── index.ts                        # Barrel file dei componenti layout
|   │   │   |   └── Sidebar.ts                      # Sidebar dell'applicazione
|   │   │   ├── navigation/                         # Componenti navigazione
|   │   │   |   ├── index.ts                        # Barrel file dei componenti navigation
|   │   │   │   ├── MainMenu.tsx                    # Menu principale
|   │   │   │   ├── FooterMenu.tsx                  # Menu nel footer
|   │   │   │   └── UserProfileMenu.tsx             # Menu utente con dropdown
|   │   │   └── ui/                                 # Componenti base dell'interfaccia utente
|   |   |       ├── Badge.tsx                       # Componente badge con varianti
|   │   │       ├── Button.tsx                      # Componente button con varianti
|   │   │       ├── index.ts                        # Barrel file dei componenti ui
|   │   │       ├── Input.tsx                       # Componente input con varianti
|   │   │       ├── Modal.tsx                       # Componente modale base
|   │   │       ├── SubmitButton.tsx                # Componente button per submit
|   │   │       ├── Table.tsx                       # Componente per tabella semplice
|   │   │       ├── TableLink.tsx                   # Componente per elementi cliccabile delle righe tabella
|   │   │       └── Tooltip.tsx                     # Componente per tooltip, richiede headless
|   │   ├── hooks/                                  # Hook personalizzati condivisi
|   │   │   ├── index.ts                            # Barrel file degli Hooks
|   │   │   └── useModal.ts                         # Hook per gestione modal
|   │   ├── services/                               # Servizi di base condivisi
|   │   │   ├── apiService.ts                       # Servizio base per le richieste API
|   │   │   └── index.ts                            # Barrel file dei services
|   │   ├── styles/                                 # Stile personalizzati
|   │   │   └── typography.css                      # Classi per stili tipografici
|   │   └── utils/                                  # Utility condivise
│   ├── features/
│   │   ├── auth/
│   │   |   ├── AuthInitializer.tsx             # Componente per verifica autenticazione
│   │   |   ├── authService.ts                  # Servizio autenticazione
│   │   |   ├── authSlice.ts                    # Slice Redux per auth
│   │   |   ├── ChangePasswordModal.tsx         # Modal cambio password
│   │   |   ├── index.ts                        # Barrel file exports
│   │   |   ├── Login.tsx                       # Pagina login
│   │   |   ├── ResetPasswordConfirm.tsx        # Pagina conferma reset password
│   │   |   └── ResetPasswordRequest.tsx        # Pagina richiesta reset password
│   │   │
│   │   ├── settings/
│   │   │   ├── SettingsPanel.tsx               # Panel delle impostazioni
│   │   │   ├── settingsSlice.ts                # Redux slice impostazioni
│   │   │   ├── types.ts                        # TypeScript types
│   │   │   └── index.ts                        # Export settings feature
│   │   │
│   │   └── shared/
|   |       ├── components/                     # Componenti per le pagine shared
│   |       |   ├── ShowButtons.tsx             # Showcase del Button component
|   |       |   ├── ShowForms.tsx               # Showcase per Input, label e form validation
│   |       |   ├── ShowDataDisplay.tsx         # Showcase per Table, TableLinl e Badge
│   |       |   ├── ShowFeedback.tsx            # Showcase Modal, Tooltip e notification/alert
|   |       |   ├── ShowActions.tsx             # Showcase per azioni e crud
│   |       |   └── index.ts                    # Barrel file
|   |       |
│   │       ├── Dashboard.tsx                   # Pagina principale
│   │       ├── NotFound.tsx                    # Pagina 404
|   |       ├── Showcase.tsx                    # Pagina di esempio per i componenti
│   │       └── index.ts                        # Export shared pages
│   ├── layouts/
│   │   └── MainLayout.tsx                      # Layout principale con dual-mode
│   │
│   ├── App.tsx                                 # Componente root applicazione
│   ├── index.css                               # Stili globali Tailwind
│   ├── main.tsx                                # Entry point React
│   └── vite-env.d.ts                           # Garantisce che TypeSscript validi il codice che interagisce con Vite
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