# EDG-FRONTEND-TEMPLATE

## Obiettivo: realizzare un frontend template che sia riutilizzabile e contenga gli elementi basilari per avviare lo sviluppo di un frontend complesso

## Caratteristiche: 
- Stack tecnologico moderno e performante (React + Vite + TypeScript + Tailwind)
- Dipendenze ben scelte per coprire le esigenze comuni (form, state management, UI, validazione)
- Componenti personalizzati riutilizzabili per mantenere coerenza visiva
- Un layout header-mode, con header e main content, dal quale attivare o meno: la sidebar; il footer
- Visualizzazione Light e Dark attivabile dall'utente
- Struttura feature-based per organizzazione scalabile
- Design minimale e responsive
- Utilizzo di Radix primmitives
- Sistema di icone lucide-react
- Sistema di design atomico con componenti modulari  
- Collaborazione iterativa step-by-step con approccio "divide et impera"

## Struttura
I file che hanno il seguente simbolo associato 🟡 devono essere ancora creati
I file che hanno il seguente simbolo associato 🔴 presentanto un errore o un problema grave
I file che hanno il seguente simbolo associato 🟢 sono stati realizzati e testati


edg-frontend-template/
├── public/                             
│   └── favicon.png
├── src/
│   ├── app/                                    # Elementi principali dell'app
|   |   ├── middleware/                         # app middleware
|   |   |   ├── index.ts                        # 🟢 barrel file del middleware 
│   │   |   └── persistenceMiddleware.ts        # 🟢 middleware per la persistenza
|   |   ├── index.ts                            # 🟢 barrel file
|   |   ├── constants.ts                        # 🟢 Parametri e costanti globali
│   │   ├── hooks.ts                            # 🟢 Redux hooks tipizzati
│   │   └── store.ts                            # 🟢 Redux store
|   ├── assets/                             
│   |   ├── logo.png
│   |   └── icon.png
│   ├── config/                                 # Configurazione
|   |   ├── index.ts                            # 🟢 Configurazioni unificate 
│   │   ├── navigation.config.ts                # 🟢 Navigazione di default 
│   │   └── routes.config.ts                    # 🟢 Route definitions 
|   ├── core/                                   # Componenti e utility condivisi
|   |   ├── components/                         # Componenti riutilizzabili
|   │   │   ├── actions                         # Componenti per le azioni principali
|   │   │   │   ├── index.ts                    # 🟡 barrel file dei componenti layout
|   │   │   │   ├── ActionMenu.tsx              # 🟡 Menu a tendina delle actions
|   │   │   │   ├── CreateAction.tsx            # 🟡 Creare un nuovo elemento dell'identità
|   │   │   │   ├── DeleteAction.tsx            # 🟡 Eliminare l'elemento selezionato
|   │   │   │   └── EditAction.tsx              # 🟡 Modificare l'elemento selezionato
|   │   │   ├── atomic                          # Componenti atomici per la gestione del tema
|   │   │   │   ├── index.ts                    # 🟢 barrel file dei componenti atomici
|   │   │   │   ├── ThemesSurface.tsx           # 🟢 Gestisce sfondo + testo + bordi per superfici
|   │   │   │   ├── ThemedText.tsx              # 🟢 Gestisce solo i colori del testo semantici
|   │   │   │   ├── ThemedShadow.tsx            # 🟢 Gestisce le ombre
|   │   │   │   ├── ThemedImage.tsx             # 🟢 Gestisce le immagini che si modificano con tema
|   │   │   │   └── ThemedBorder.tsx            # 🟢 Wrapper per elementi che hanno solo bordi tematici 
|   │   │   ├── info                            # Componenti utili secondari e informativi
|   │   │   │   ├── index.ts                    # 🟡 Barrel file
|   │   │   │   ├── VersionInfo.tsx             # 🟡 Componente info versione (da definire)
|   │   │   │   ├── ConnectionStatus.tsx        # 🟡Indicatore connessione backend (da definire)
|   │   │   │   └── QuickLink.tsx               # 🟡 Link rapidi (da definire)
|   │   │   ├── layout/                         # Componenti base del layout
|   │   │   |   ├── index.ts                    # 🟢 Barrel file dei componenti layout
|   │   │   │   ├── CenteredPage.tsx            # 🟡 Container di pagina per centrare in verticale
|   │   │   │   ├── CenteredSection.tsx         # 🟡 Container di sezione per centrare in verticale
|   │   │   │   ├── Footer.tsx                  # 🟢 Footer dell'applicazione
|   │   │   │   ├── Header.tsx                  # 🟢 Header dell'applicazione
|   │   │   │   ├── Logo.tsx                    # 🟢 Logo dell'applicazione
|   │   │   │   ├── MainLayout.tsx              # 🟢 Gestione del layout dell'app
|   │   │   |   └── Sidebar.ts                  # 🟢 Sidebar dell'applicazione
|   │   │   ├── navigation/                     # Componenti navigazione
|   │   │   |   ├── index.ts                    # 🟢 Barrel file dei componenti navigation
|   │   │   │   ├── FooterMenu.tsx              # 🟡 Menu nel footer
|   │   │   │   ├── MainMenu.tsx                # 🟡 Menu principale
|   │   │   │   ├── UserMenu.tsx                # 🟢 Menu utente per configurazione app
|   │   │   │   ├── MobileMenu.tsx              # 🟢 Mobile menu
|   │   │   │   └── ProfileMenu.tsx             # 🟡 Menu utente con dropdown
|   │   │   └── ui/                             # Componenti base dell'interfaccia utente
|   │   │       ├── index.ts                    # 🟡 Barrel file dei componenti ui
|   |   |       ├── Badge.tsx                   # 🟡 Componente badge con varianti
|   │   │       ├── Button.tsx                  # 🟡 Componente button con varianti
|   │   │       ├── Input.tsx                   # 🟡 Componente input con varianti
|   │   │       ├── Modal.tsx                   # 🟡 Componente modale base
|   │   │       ├── SubmitButton.tsx            # 🟡 Componente button per submit
|   │   │       ├── Table.tsx                   # 🟡 Componente per tabella semplice
|   │   │       ├── TableLink.tsx               # 🟡 Componente per elementi cliccabile delle righe tabella
|   │   │       └── Tooltip.tsx                 # 🟡 Componente per tooltip, richiede headless
|   │   ├── hooks/                              # Hook personalizzati condivisi
|   │   │   ├── index.ts                        # 🟢 Barrel file degli Hooks
|   │   │   ├── useLocalStorage.ts              # 🟡 Hook per la gestione del local storage
|   │   │   ├── useModal.ts                     # 🟡 Hook per gestione modal
|   │   │   ├── useMediaQuery.ts                # 🟢 Hook per rilevare media queries e gestire responsive behavior
|   │   │   ├── useThemedImage.ts               # 🟢 Hook per gestione delle immagini che variano in base al tema
|   │   │   └── useThemeStyles.ts               # 🟡 Hook per gestione stili e temi
|   │   ├── services/                           # Servizi di base condivisi
|   │   │   ├── index.ts                        # 🟡 barrel file 
|   │   │   └── apiService.ts                   # 🟡 Servizio base per le richieste API 
|   │   ├── styles/                             # Stile personalizzati
|   │   │   └── typography.css                  # 🟢 Classi per stili tipografici
|   │   └── utils/                              # Utility condivise
|   │   │   └── index.ts                        # 🟢 Utility unificate come iconMap oppure combinare classi CSS condizionalmente
│   ├── features/
│   │   ├── auth/                               # Tutto ancora da deinire
│   │   |   ├── index.ts                        # 🟡 Barrel file exports
│   │   |   ├── AuthInitializer.tsx             # 🟡 Componente per verifica autenticazione
│   │   |   ├── authService.ts                  # 🟡 Servizio autenticazione
│   │   |   ├── authSlice.ts                    # 🟡 Slice Redux per auth
│   │   |   ├── ChangePasswordModal.tsx         # 🟡 Modal cambio password
│   │   |   ├── Login.tsx                       # 🟡 Pagina login
│   │   |   ├── ResetPasswordConfirm.tsx        # 🟡 Pagina conferma reset password
│   │   |   └── ResetPasswordRequest.tsx        # 🟡 Pagina richiesta reset password
│   │   │
│   │   ├── settings/
│   │   │   ├── index.ts.ts                     # 🟡 Barrel file
│   │   │   └── uiSlice.ts                      # 🟢 Redux slice per impostazioni ui
│   │   │
│   │   └── shared/
|   |       ├── components/                     # Componenti per le pagine shared
│   |       |   ├── index.ts                    # 🟡 Barrel file
│   |       |   ├── ShowButtons.tsx             # 🟡 Showcase del Button component
|   |       |   ├── ShowForms.tsx               # 🟡 Showcase per Input, label e form validation
│   |       |   ├── ShowDataDisplay.tsx         # 🟡 Showcase per Table, TableLinl e Badge
│   |       |   ├── ShowFeedback.tsx            # 🟡 Showcase Modal, Tooltip e notification/alert
|   |       |   └── ShowActions.tsx             # 🟡 Showcase per azioni e crud
|   |       |
│   │       ├── index.ts                        # 🟢 Barrel file
│   │       ├── Dashboard.tsx                   # 🟢 Pagina principale
│   │       ├── NotFound.tsx                    # 🟢 Pagina 404
|   |       └── Showcase.tsx                    # 🟢 Pagina di esempio per i componenti
│   │
│   ├── App.tsx                                 # 🟢 Componente root applicazione
│   ├── index.css                               # 🟢 Stili di base Tailwind
│   ├── global.css                              # 🟢 Stili per definire temi dark e light (root)
│   ├── main.tsx                                # 🟢 Entry point React
│   └── vite-env.d.ts                           # 🟢 Garantisce che TypeSscript validi il codice che interagisce con Vite
├── .env.development                            # 🟢 variabili d'ambiente per lo sviluppo
├── .env.production                             # 🟢 variabili d'ambiente per la produzione
├── .gitignore                                  # 🟢 ignore per git
├── .prettierignore                             # 🟢 ignore per estensione Prettier
├── eslint.config.js                            # 🟢 Configurazione di esLint per il controllo del codice
├── index.html                                  # 🟢 l'index html dell'applicazione
├── package.json                                # 🟢 Dipendenze del progetto
├── tsconfig.app.json                           # 🟢 Configurazione TypeScript specifico
├── tsconfig.json                               # 🟢 Configurazione TypeScript principale
├── vite.config.ts                              # 🟢 Configurazione Vite
├── Development-progress.md                     # 🟢 Documenta lo stato di sviluppo del progetto
├── Edg-Frontend-Template.md                    # 🟢 Struttura e funzioni del progetto
└── README.md                                   # 🟡


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

## Strategia Ottimizzata per Dark/Light Mode in React & Tailwind

L'obiettivo è creare un sistema di theming estremamente flessibile, riusabile, manutenibile e performante, eliminando ogni logica condizionale dal JSX e garantendo un'esperienza utente impeccabile.

### Componenti Atomici e Astratti (Sfondi, Bordi, Testi Generici, Immagini)
La chiave di questa strategia è identificare e isolare i tipi di elementi UI più basilari che cambiano con il tema, trasformandoli in componenti atomici riusabili e tematici.

Invece di tematizzare direttamente componenti complessi come "l'Header" o "la Card", tematizziamo i loro costituenti più elementari che si ripetono.
Esempi:
ThemedSurface (o ThemedBackground): Un componente generico che gestisce lo sfondo e il colore del testo primario per tutte le "superfici" dell'UI (es. card, modal, sezioni di contenuto, pannelli). Questo componente include anche il bordo se le tue superfici lo condividono.
ThemedText: Un componente per vari tipi di testo (primario, secondario, disabilitato) che gestisce solo il colore del testo, utilizzabile ovunque sia necessario un blocco di testo con una specifica semantica.
ThemedBorder: Un componente o una classe helper per bordi che cambiano colore con il tema.
ThemedImage: per gestire le imamgini che cambiano tipo il logo
Vantaggio Maggiore: La logica del cambio tema (dark:) o il riferimento alle variabili CSS sono incapsulati completamente all'interno di questi pochissimi componenti atomici. Il JSX dei tuoi componenti più complessi (Header, Card, Modal) rimane pulito, semanticamente chiaro e libero da qualsiasi riferimento al tema o logica condizionale.

### Costanti di Colore Semantiche tramite Variabili CSS
Questo è il cuore del sistema per la gestione dei colori senza logica condizionale nel JSX.

Definizione Semantica: Dimentica i nomi di colore diretti di Tailwind (es. gray-900). Definisci variabili CSS (Custom Properties) con nomi semantici che descrivono il loro ruolo nell'interfaccia (es. --color-bg-primary, --color-text-secondary, --color-border-default, --color-action-primary).
Implementazione in globals.css:
Nel selettore :root, definisci i valori Hex/RGB per il tema light (default) per ciascuna variabile.
All'interno del selettore .dark, sovrascrivi i valori di queste stesse variabili CSS con i colori corrispondenti per il tema dark.
Integrazione con Tailwind (tailwind.config.js):
Utilizza darkMode: 'class' per indicare a Tailwind che il cambio di tema avviene tramite una classe CSS.
Estendi la sezione theme.extend.colors per mappare i tuoi nomi semantici (es. bg-primary, text-secondary) alle rispettive variabili CSS (var(--color-bg-primary), var(--color-text-secondary)).
Uso nei Componenti: Nei tuoi componenti React (in particolare nei tuoi componenti atomici tematizzati come ThemedSurface o ThemedText), userai le classi Tailwind semantiche (es. bg-bg-primary, text-text-secondary). Tailwind leggerà automaticamente il valore corretto della variabile CSS in base al tema attivo sul tag <html> o sul suo antenato.

### Gestione dello Stato del Tema in React
Per gestire il tema a livello applicativo e la persistenza della scelta dell'utente.

ThemeContext (React Context API): Un contesto React per centralizzare lo stato attuale del tema ('light' o 'dark') e le funzioni per modificarlo (toggleTheme, setTheme). Sarà fornito a livello radice dell'applicazione.
useTheme Hook: Un custom hook (const { theme, toggleTheme } = useTheme();) per rendere l'accesso e la modifica del tema semplici e puliti in qualsiasi componente.
Persistenza con Local Storage:
Lettura: All'avvio dell'applicazione, leggi la preferenza dell'utente dal localStorage. Se non è salvata, puoi usare la preferenza di sistema (window.matchMedia('(prefers-color-scheme: dark)')).
Scrittura: Ogni volta che il tema viene cambiato dall'utente, salva la nuova preferenza nel localStorage per assicurare che venga mantenuta nelle sessioni future.

### Prevenire il "Flash of Unstyled Content" (FOUC)
Un aspetto cruciale per un'esperienza utente fluida.

Soluzione: Un piccolo script JavaScript inline deve essere inserito nel <head> del tuo public/index.html (o l'equivalente del tuo framework). Questo script deve essere eseguito prima che il bundle di React venga caricato. Il suo compito è leggere la preferenza del tema dal localStorage (o di sistema) e applicare immediatamente la classe dark al tag <html>. Questo garantisce che la pagina si carichi già con il tema corretto, eliminando il "flash" iniziale del tema sbagliato.

### Interfaccia Utente per il Tema (Pannello di Configurazione)
Un semplice componente React (es. un toggle, un radio button) che, utilizzando l'hook useTheme, permette all'utente di selezionare o cambiare la modalità di visualizzazione.

### Massima Compatibilità con Radix UI
Questa strategia è ideale per Radix UI perché i suoi componenti sono "unstyled". Puoi applicare le tue classi Tailwind semantiche direttamente agli elementi che compongono i componenti Radix, ottenendo il theming desiderato senza conflitti o necessità di complesse personalizzazioni.
Questa architettura ti permette di avere un controllo capillare sul theming, garantendo al contempo massima flessibilità e una base di codice estremamente pulita e manutenibile per il tuo template riusabile.


# Stato di sviluppo

## Obiettivi Raggiunti

### Sistema di Design Atomico Completo
- **Componenti atomici** base per costruire interfacce coerenti
- **Theming system** automatico light/dark mode
- **Variabili CSS semantiche** per massima flessibilità
- **Componenti riutilizzabili** con props tipizzate

### State Management Centralizzato con Persistenza
- **Redux Toolkit** configurato con slice UI
- **Persistenza automatica** delle preferenze utente nel localStorage
- **Middleware custom** per salvataggio trasparente
- **Hooks tipizzati** per accesso allo stato
- **Sincronizzazione DOM** automatica per temi

### Layout System Responsivo
- **MainLayout** adattivo con/senza sidebar
- **Header/Footer** condizionali e configurabili
- **Sidebar** collassabile con icone semantiche (w-12/w-64)
- **Navigation** context-aware

### Sistema Immagini Tematiche
- **ThemedImage** component per immagini responsive al tema
- **useThemedImage** hook per gestione automatica
- **Asset management** centralizzato per light/dark mode

### 

## Componenti Atomici Implementati

### 1. ThemedSurface
**Scopo:** Gestisce sfondi, container e superfici  
**Varianti:**
- `base` - Sfondo app principale
- `primary` - Superfici primarie (card, panel)
- `secondary` - Superfici secondarie (sidebar, header)
- `info` - Superfici informative (alert, notice)
- `hover` - Stati hover
- `selected` - Stati selezionati
- `contrast` - Alto contrasto (pulsanti)

**Props:**
- `variant` - Variante superficie
- `borderVariant` - Tipo bordo (default, thin, thick)
- `textVariant` - Variante testo integrata
- `as` - Elemento HTML (polymorphic)
- `className` - Classi aggiuntive

### 2. ThemedText
**Scopo:** Testi semantici con theming automatico  
**Varianti:**
- `primary` - Testo principale
- `secondary` - Testo secondario
- `label` - Label e intestazioni
- `placeholder` - Placeholder e hint
- `disabled` - Testo disabilitato
- `link` - Link e elementi cliccabili
- `contrast` - Alto contrasto
- `inherit` - Eredita dal parent

**Props:**
- `variant` - Variante testo semantica
- `as` - Elemento HTML (h1, h2, p, span, etc.)
- `className` - Classi aggiuntive

### 3. ThemedBorder
**Scopo:** Wrapper per bordi tematici  
**Varianti:**
- `default` - Bordo standard
- `thin` - Bordo sottile
- `thick` - Bordo spesso

### 4. ThemedShadow
**Scopo:** Wrapper per ombre responsive  
**Varianti:**
- `sm` - Ombra piccola
- `default` - Ombra standard
- `md` - Ombra media
- `lg` - Ombra grande
- `xl` - Ombra extra large

### 5. ThemedImage 
**Scopo:** Immagini responsive al tema  
**Features:**
- **Auto-switching** - Cambia automaticamente con dark/light mode
- **Type-safe** - Chiavi immagini tipizzate
- **Performance** - Memoization con useMemo
- **Transition** - Cambio smooth tra immagini

**Props:**
- `imageKey` - Chiave immagine ("logo" | "icon")
- `alt` - Testo alternativo (obbligatorio)
- `className` - Classi CSS
- `...rest` - Tutti gli attributi HTML img

---

## Sistema di Theming

### Variabili CSS Implementate
```css
/* Light Mode */
:root {
  /* Superfici */
  --surface-base: theme('colors.gray.50');
  --surface-primary: theme('colors.white');
  --surface-secondary: theme('colors.gray.100');
  --surface-info: theme('colors.blue.50');
  --surface-hover: theme('colors.gray.100');
  --surface-selected: theme('colors.violet.100');
  --surface-contrast: theme('colors.violet.600');

  /* Contenuti */
  --content-primary: theme('colors.gray.900');
  --content-secondary: theme('colors.gray.600');
  --content-label: theme('colors.gray.700');
  --content-placeholder: theme('colors.gray.400');
  --content-disabled: theme('colors.gray.400');
  --content-link: theme('colors.violet.600');
  --content-contrast: theme('colors.white');

  /* Bordi */
  --outline-default: theme('colors.gray.200');
  --outline-thin: theme('colors.gray.100');
  --outline-thick: theme('colors.gray.300');

  /* Ombre */
  --shadow-sm: theme('boxShadow.sm');
  --shadow-default: theme('boxShadow.DEFAULT');
  --shadow-md: theme('boxShadow.md');
  --shadow-lg: theme('boxShadow.lg');
  --shadow-xl: theme('boxShadow.xl');
}

/* Dark Mode */
.dark {
  /* Superfici adattate per dark mode */
  --surface-base: theme('colors.gray.900');
  --surface-primary: theme('colors.gray.800');
  --surface-secondary: theme('colors.gray.700');
  /* ... altre variabili dark */
}
```

### Gestione Automatica del Tema
- **localStorage persistence** - Salva preferenza utente automaticamente
- **System preference detection** - Rileva preferenza sistema come fallback
- **Redux synchronization** - Stato centralizzato con middleware
- **DOM class application** - Applica classe `.dark` automaticamente

---

## Redux Store Architecture con Persistenza

### Store Configuration (app/store.ts)
```typescript
export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['ui/initializeFromStorage'],
      },
    }).concat(persistenceMiddleware), // Middleware di persistenza
  devTools: process.env.NODE_ENV !== 'production',
});
```

### Persistence Middleware (app/middleware/persistenceMiddleware.ts)
**Features:**
- **Auto-save** - Salva automaticamente ogni cambio UI
- **Type-safe** - Tipizzazione completa senza `any`
- **Error handling** - Gestione errori localStorage
- **Selective persistence** - Solo settings rilevanti salvati

**Tipizzazione:**
```typescript
export const persistenceMiddleware: Middleware<
  Record<string, never>, // Extra dispatch signature
  RootState,             // State type
  AppDispatch            // Dispatch type
> = (store) => (next) => (action: Action) => {
  // Logica di persistenza
};
```

### UI Slice con Persistenza (features/settings/uiSlice.ts)
**State Shape:**
```typescript
interface UIState {
  darkMode: boolean;           // Tema dark/light
  sidebarVisible: boolean;     // Visibilità sidebar  
  sidebarExpanded: boolean;    // Sidebar espansa/compressa
  footerVisible: boolean;      // Visibilità footer
  userMenuOpen: boolean;       // Menu impostazioni aperto
}
```

**Inizializzazione con localStorage:**
```typescript
const createInitialState = (): UIState => {
  const defaultState = { /* ... */ };
  const savedSettings = storageUtils.loadUISettings();
  
  return savedSettings 
    ? { ...defaultState, ...savedSettings, userMenuOpen: false }
    : defaultState;
};
```

**Actions Implementate:**
- `toggleDarkMode()` - Toggle tema
- `setDarkMode(boolean)` - Imposta tema specifico
- `toggleSidebar()` - Toggle visibilità sidebar
- `setSidebarVisible(boolean)` - Imposta visibilità sidebar
- `toggleSidebarExpanded()` - Toggle espansione sidebar
- `setSidebarExpanded(boolean)` - Imposta espansione sidebar
- `toggleFooter()` - Toggle visibilità footer
- `setFooterVisible(boolean)` - Imposta visibilità footer
- `toggleUserMenu()` - Toggle menu impostazioni
- `setUserMenuOpen(boolean)` - Imposta stato menu
- `closeUserMenu()` - Chiudi menu impostazioni
- `resetUISettings()` - Reset tutte le impostazioni + localStorage
- `initializeFromStorage()` -  Inizializza tema dal localStorage

**Selectors:**
- `selectDarkMode`
- `selectSidebarVisible`
- `selectSidebarExpanded`
- `selectFooterVisible`
- `selectUserMenuOpen`
- `selectUIState` - Intero stato UI

### Storage Utils (app/middleware/persistenceMiddleware.ts)
```typescript
export const storageUtils = {
  saveUISettings: (uiState) => { /* Salva nel localStorage */ },
  loadUISettings: () => { /* Carica dal localStorage con validazione */ },
  clearUISettings: () => { /* Pulisce localStorage */ },
};
```

**Chiave localStorage:** `"edg-ui-settings"`

**Dati salvati:**
```json
{
  "darkMode": true,
  "sidebarVisible": false, 
  "sidebarExpanded": true,
  "footerVisible": true
}
```

### Custom Hooks (app/hooks.ts)
**useUISettings()** - Hook principale per UI state:
```typescript
const {
  darkMode,
  sidebarVisible,
  sidebarExpanded,
  footerVisible,
  userMenuOpen,
  toggleDarkMode,
  toggleSidebar,
  toggleSidebarExpanded,
  toggleFooter,
  toggleUserMenu,
  closeUserMenu,
  resetUISettings
} = useUISettings();
```

---

## Sistema Immagini Tematiche  **NUOVO**

### useThemedImage Hook (core/hooks/useThemedImage.ts)
**Features:**
- **Reactive** - Cambia automaticamente con il tema
- **Centralized** - Mapping immagini in un posto
- **Type-safe** - TypeScript per chiavi immagini
- **Optimized** - useMemo per performance

**Image Mapping:**
```typescript
const THEMED_IMAGES = {
  logo: {
    light: '/src/assets/logo.png',
    dark: '/src/assets/logo-reverse.png',
  },
  icon: {
    light: '/src/assets/icon.png', 
    dark: '/src/assets/icon-reverse.png',
  },
} as const;
```

**Hooks disponibili:**
```typescript
// Hook generico
const src = useThemedImage('logo');

// Hooks specifici (convenience)
const logoSrc = useThemedLogo();
const iconSrc = useThemedIcon();
```

### ThemedImage Component (core/components/ui/ThemedImage.tsx)
**Utilizzo:**
```typescript
<ThemedImage 
  imageKey="logo" 
  alt="Company Logo" 
  className="w-8 h-8"
/>
```

**Features:**
- **Props standard** - Tutti gli attributi `<img>` supportati
- **Transition smooth** - Cambio fluido tra immagini
- **Accessibility** - Alt text obbligatorio
- **Type safety** - imageKey tipizzato

---

## Sistema di Routing

### Routes Configuration (config/routes.config.ts)
```typescript
export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  SHOWCASE: "/showcase", 
  SETTINGS: "/settings",
  NOT_FOUND: "/404",
} as const;
```

### Navigation Configuration (config/navigation.config.ts)
```typescript
interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: "home" | "dashboard" | "components" | "settings" | "showcase";
  description?: string;
}
```

### App Router Structure (App.tsx)
- `/` → Redirect to `/dashboard`
- `/dashboard` → Dashboard component
- `/showcase` → Showcase component
- `/settings` → NotFound (placeholder)
- `/404` → NotFound component
- `*` → Catch-all NotFound

---

## Layout System

### MainLayout (layouts/MainLayout.tsx)  **AGGIORNATO**
**Responsabilità:**
- Gestisce layout con/senza sidebar
- Calcola margini dinamici corretti
- Controlla visibilità footer
- Adatta header context

**Layout Modes:**
1. **Normal Mode** (sidebarVisible = false):
   - Header completo con logo e navigation
   - Content full-width
   - Footer condizionale

2. **Sidebar Mode** (sidebarVisible = true):
   - Sidebar fixed a sinistra
   - Header senza logo e navigation
   - Content con margine dinamico  **CORRETTO**: `ml-12` / `ml-64`
   - Footer condizionale

**Margini corretti:**
```typescript
const getMainContentMargin = () => {
  if (!sidebarVisible) return "ml-0";
  return sidebarExpanded ? "ml-64" : "ml-12"; // Allineato con sidebar w-12/w-64
};
```

### Header (core/components/layout/Header.tsx) **PULITO**
**Features:**
- Logo condizionale (nascosto quando sidebar visible)
- Navigation desktop (nascosta quando sidebar visible)
- User avatar con immagine tematica
- Settings icon (apre UserMenu)
- Mobile menu toggle (placeholder)

**Props semplificate:**
```typescript
interface HeaderProps {
  showLogo?: boolean;
  showNavigation?: boolean;
}
```

**Utilizzo immagini tematiche:**
```typescript
<ThemedImage
  imageKey="icon"
  alt="User Avatar"
  className="w-8 h-8 rounded-full"
/>
```

### Sidebar (core/components/layout/Sidebar.tsx) **DIMENSIONI AGGIORNATE**
**Features:**
- Width dinamica **AGGIORNATA**: w-12 compressa, w-64 espansa
- Logo adattivo (compact/full con immagini tematiche)
- Navigation con icone Lucide semantiche
- Stati attivi automatici
- Toggle interno expand/collapse

**Navigation Icons:**
- Dashboard → `LayoutDashboard`
- Showcase → `Palette`
- Settings → `Settings`

### Footer (core/components/layout/Footer.tsx)
**Features:**
- Copyright dinamico
- Badge versione
- Link footer (Privacy, Termini, Supporto)
- Link social (GitHub)
- Design responsivo

**Props:**
- `showVersionInfo` - Mostra/nasconde info versione
- `className` - Classi aggiuntive

### Logo (core/components/layout/Logo.tsx) **CON IMMAGINI TEMATICHE**
**Aggiornato per usare ThemedImage:**
```typescript
// Logo compatto
<ThemedImage imageKey="icon" alt="EDG Logo" className="w-8 h-8" />

// Logo completo
<ThemedImage imageKey="icon" alt="EDG Logo" className="w-8 h-8" />
<div className="flex flex-col">
  <ThemedText variant="primary" className="font-bold text-lg leading-none">
    EDG
  </ThemedText>
  <ThemedText variant="secondary" className="text-xs leading-none">
    Frontend
  </ThemedText>
</div>
```

---

## UserMenu Panel con Persistenza **MIGLIORATO**

### Caratteristiche Implementate
**Design:**
- Panel sliding da destra (320px width)
- Backdrop con blur effect
- Animazioni fluide (400ms cubic-bezier)
- Responsive e accessibile

**Controlli UI:**
1. **Info Persistenza**  **NUOVO**
   - Badge "Auto-Save" nell'header
   - Spiegazione salvataggio automatico
   - Info localStorage

2. **Aspetto**
   - Toggle Dark Mode con switch animato
   - Descrizione funzionalità

3. **Layout**
   - Toggle Sidebar visibility
   - Toggle Footer visibility
   - Descrizioni per ogni opzione

4. **Debug** (solo development)  **MIGLIORATO**
   - Reset tutte le impostazioni + localStorage
   - JSON state viewer con chiave localStorage
   - Styled reset button

**Features persistenza:**
- Auto-Save badge** - Indicatore visivo nell'header
- localStorage info** - Mostra chiave e dati salvati
- Reset completo** - Pulisce anche localStorage
- User education** - Spiega il salvataggio automatico

**Interazioni:**
- ESC key per chiusura
- Click backdrop per chiusura
- Focus management
- Body scroll lock quando aperto

### ToggleSwitch Component
**Features:**
- Design iOS-style
- Animazioni micro-interaction
- Accessibility completa (ARIA)
- Scale effects su hover/click
- Theming automatico

---

## Features delle Pagine

### Dashboard (features/shared/Dashboard.tsx)
**Contenuto:**
- Hero section con titolo template
- Status cards con indicatori sistema
- Features grid con dettagli componenti
- Redux state test e visualizzazione

### Showcase (features/shared/Showcase.tsx)
**Contenuto:**
- Demo completa componenti atomici
- Varianti ThemedSurface
- Varianti ThemedText
- Varianti ThemedShadow
- Stati e interazioni
- Statistiche sistema

### NotFound (features/shared/NotFound.tsx)
**Features:**
- Design 404 centrato ed elegante
- Pulsanti funzionali (Home + Back)
- Icone Lucide per azioni
- Footer con link supporto
- Layout completamente responsive

---

## Utilità e Helpers

### Icon Mapping (core/utils/cn.ts)
```typescript
export const iconMap = {
  home: Home,
  dashboard: LayoutDashboard,
  settings: Settings,
  components: Package,
  showcase: Palette,
} as const;
```

### CSS Utility (core/utils/cn.ts)
```typescript
export function cn(...inputs: (string | undefined | null | false | 0)[]): string {
  return inputs.filter(Boolean).join(' ');
}
```

---

## Best Practices Applicate

### Architettura
- **Barrel files** per import puliti
- **Separation of concerns** per responsabilità
- **Modular architecture** per scalabilità
- **Type safety** completa con TypeScript
- **No any usage** - Tipizzazione rigorosa

### Componenti
- **Props tipizzate** con interfaces
- **Polymorphic components** con prop `as`
- **Conditional rendering** intelligente
- **Default props** sensati
- **Clean props** - Rimozione props non utilizzate

### State Management
- **Immutable updates** con Immer
- **Typed selectors** e hooks
- **Action creators** automatici
- **Side effects** gestiti (DOM manipulation)
- **Automatic persistence** - Middleware trasparente

### Styling
- **CSS Variables** per theming
- **Responsive design** mobile-first
- **Consistent spacing** con Tailwind
- **Semantic colors** per accessibility
- **Themed assets** per light/dark mode

### Accessibility
- **ARIA labels** appropriati
- **Keyboard navigation** completa
- **Focus management** corretto
- **Screen reader** friendly
- **Alt text** obbligatorio per immagini

### Performance
- **useMemo** per calcoli costosi
- **Selective re-renders** con selectors specifici
- **Efficient middleware** - Solo save quando necessario
- **Asset optimization** - Immagini tematiche cached

---

## Workflow di Sviluppo

### Metodologia Applicata
1. **Step-by-step development** - Un componente alla volta
2. **Iterative feedback** - Validazione ad ogni step
3. **Modular approach** - Divide et impera
4. **Documentation driven** - Commenti e types espliciti
5. **Clean code principles** - Rifattorizzazione costante

### Testing Strategy
- **Visual testing** - Showcase component
- **Theme switching** - Light/dark validation
- **Responsive testing** - Mobile/desktop
- **State persistence** - localStorage validation
- **Asset loading** - Immagini tematiche

------------------------------------------------------------------------------

# Appendice - Stato Sviluppo Layout System

**Data**: 26 Giugno 2025  
**Sessione**: Layout System Implementation  
**Obiettivo**: Memoria progetto per continuità sviluppo

## 🏗️ Layout System Implementato

### ✅ MainLayout Completato

#### Grid Structure
```css
grid-template-rows: auto 1fr auto
grid-template-areas: 
  "header"
  "content" 
  "footer"
```

- **Sticky header e sidebar** - Navigazione sempre accessibile
- **Content area responsive** - Flex container per sidebar + main
- **Footer compatto** - Altezza ridotta per design più elegante
- **Gestione altezze corretta** - Chain completa: Grid → Content → Main → Children

#### Responsive Behavior
- **Mobile** (< sm): Sidebar nascosta, header compatto
- **Desktop** (≥ sm): Sidebar visibile, layout completo
- **Transizioni smooth** - `transition-all duration-300 ease-in-out`

### 🎨 Componenti Atomic Ottimizzati

#### ThemedSurface
```typescript
interface ThemedSurfaceProps {
  variant?: "base" | "primary" | "secondary" | "modal" | "info" | "contrast" | "hover" | "selected"
  textVariant?: "primary" | "secondary" | "contrast" | "label" | "placeholder" | "disabled" | "link" | "linkHover"
  borderVariant?: "none" | "thin" | "default" | "strong"
  as?: keyof JSX.IntrinsicElements
}
```

**Pattern CSS Custom Properties**:
- `bg-bg-*` per backgrounds
- `text-text-*` per testi  
- `border-border-*` per bordi

#### Sidebar
- **Stati**: Espansa (w-64) vs Compressa (w-12)
- **Hook**: `useUISettings()` per gestione toggle
- **Navigation**: `NAVIGATION_ITEMS` da config
- **Icons**: `iconMap` utility per Lucide components
- **Visual feedback**: Stati attivi/hover gestiti dinamicamente

#### Header & Footer
- **Header**: Logo, sidebar toggle, area breadcrumb
- **Footer**: Design minimalista, solo copyright
- **Sticky positioning**: Sempre visibili durante scroll

### 🔧 Fix Tecnici Risolti

#### Problema Bordi Sidebar
```typescript
// ❌ PRIMA (Errato)
<ThemedSurface borderVariant="default" className="border-r">
// Risultato: bordi su tutti i lati + bordo destro duplicato

// ✅ DOPO (Corretto)  
<ThemedSurface borderVariant="none" className="border-r border-border-default">
// Risultato: solo bordo destro
```

#### Problema Altezze Pagine
```typescript
// ❌ PRIMA (Overflow)
className="min-h-screen" // Ignora header/footer

// ✅ DOPO (Corretto)
className="min-h-full"   // Usa altezza contenitore
```

**Soluzione MainLayout**:
```typescript
// Main content con altezza definita
<main className="flex-1 min-w-0 overflow-y-auto flex flex-col">
  <div className="w-full px-4 sm:px-6 py-8 flex-1">{children}</div>
</main>
```

#### Button Consistency NotFound
```typescript
// Pattern responsive uniforme per Link e Button
className="w-full sm:w-auto justify-center flex-shrink-0"
// Mobile: full width, Desktop: auto width
```

### 📱 Responsive Design Patterns

#### Breakpoints Utilizzati
- **sm (640px)**: Sidebar visibility toggle
- **md (768px)**: Layout adjustments  
- **lg (1024px)**: Full desktop experience

#### Mobile-First Approach
```css
/* Base (Mobile) */
flex-col gap-3

/* Desktop */
sm:flex-row sm:gap-4
```

#### Touch-Friendly Design
- **Button heights**: py-3 (48px+ touch target)
- **Click areas**: Padding generoso per touch
- **Icon sizes**: w-5 h-5 (20px) per leggibilità

### 🎯 Pattern e Convenzioni Stabiliti

#### Pagine Speciali
```typescript
// Template per pagine 404, Login, etc.
<ThemedSurface variant="base" className="min-h-full flex items-center justify-center p-4">
  <div className="max-w-lg w-full">
    {/* Contenuto centrato */}
  </div>
</ThemedSurface>
```

#### Gestione Stati UI
```typescript
// Hook pattern per UI state
const { sidebarExpanded, toggleSidebarExpanded } = useUISettings();

// Classi dinamiche per stati
const getMenuItemClasses = (isActive: boolean) => {
  const baseClasses = "flex items-center rounded-lg text-sm font-medium transition-colors duration-200";
  const paddingClasses = sidebarExpanded ? "px-3 py-3" : "px-2 py-2 justify-center";
  return isActive ? `${baseClasses} ${paddingClasses} bg-bg-selected` : `${baseClasses} ${paddingClasses} hover:bg-bg-hover`;
};
```

#### Icon System
```typescript
// Mapping centralizzato per icone
const iconMap = { /* Lucide components */ };
const getMenuIcon = (iconType: IconName) => {
  const IconComponent = iconMap[iconType];
  return <IconComponent className="w-5 h-5 flex-shrink-0" />;
};
```

### 🗂️ Struttura Files Consolidata

```
src/
├── core/
│   └── components/
│       ├── atomic/           # ThemedSurface, ThemedText
│       ├── layout/           # MainLayout, Header, Sidebar, Footer  
│       └── ui/               # Componenti specifici applicazione
├── features/
│   └── shared/              # NotFound, componenti cross-feature
├── config/
│   ├── index.ts            # ROUTES, NAVIGATION_ITEMS
│   └── constants.ts        # Costanti applicazione
└── utils/
    └── iconMap.ts          # Mapping icone Lucide
```

### 🚀 Stato Repository

#### Git Setup Completato
- **Repository**: `https://github.com/LarisPigasse/edg-frontend-template`
- **Strategia**: Delete/Recreate (Opzione 2)
- **`.gitignore`**: Ottimizzato per React/TypeScript/Vite stack

#### Files Protetti
```gitignore
# Environment specifici
.env.development
.env.production

# Build e cache
node_modules/
dist/
.vite/
*.tsbuildinfo
```

### 💡 Note Metodologiche

#### Approccio Sviluppo
- **Step-by-step incrementale** - Un problema alla volta
- **Feedback bidirezionale** - Analisi e verifica continua  
- **Soluzioni semplici** - Fix eleganti vs over-engineering
- **Componenti on-demand** - Solo quando realmente necessari

#### Principi Architetturali
- **Modularità** - Separazione logica/presentazione
- **Consistenza** - Pattern uniformi per ThemedSurface
- **Flessibilità** - Props per customizzazione
- **Performance** - CSS transitions, lazy loading ready

### 🔮 Prossimi Sviluppi Suggeriti

1. **Tema System** - Dark/light mode toggle
2. **Form Components** - Input, Select, Button variants  
3. **Modal System** - Overlay management
4. **Table Components** - Data display
5. **Loading States** - Skeleton, spinners
6. **Error Boundaries** - Gestione errori React

---

**Stato Attuale**: Layout system completo, robusto e testato. Pronto per sviluppo features applicative specifiche.

**Memoria Tecnica**: Tutti i pattern e fix documentati per continuità sviluppo collaborativo.