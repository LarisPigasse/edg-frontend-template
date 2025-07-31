# EDG Frontend Template - Catalogo Componenti

**Versione**: 2.2  
**Data aggiornamento**: 31 Luglio 2025  
**Stack**: React + TypeScript + Tailwind CSS + Radix UI

---

## Indice

- [🎨 Componenti Atomici](#-componenti-atomici)
- [🖼️ Componenti Info](#️-componenti-info)  
- [🏗️ Componenti Layout](#️-componenti-layout)
- [🧭 Componenti Navigation](#-componenti-navigation)
- [🔧 Componenti UI](#-componenti-ui)
- [⚡ Componenti Actions](#-componenti-actions)
- [🛠️ Hooks e Utilities](#️-hooks-e-utilities)
- [📡 Servizi](#-servizi)

---

## 🎨 Componenti Atomici

### ThemedSurface
**Location**: `src/core/components/atomic/ThemedSurface.tsx`

**Purpose**: Componente base per gestire sfondi, bordi e contenitori con theming automatico.

```typescript
interface ThemedSurfaceProps {
  variant?: "base" | "primary" | "secondary" | "modal" | "info" | "contrast" | "hover" | "selected";
  textVariant?: "primary" | "secondary" | "contrast" | "label" | "placeholder" | "disabled" | "link";
  borderVariant?: "none" | "thin" | "default" | "strong";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}
```

**Esempi d'uso:**
```tsx
// Card semplice
<ThemedSurface variant="primary" borderVariant="default">
  Contenuto della card
</ThemedSurface>

// Modal backdrop
<ThemedSurface variant="modal" className="p-6 rounded-lg">
  Contenuto del modal
</ThemedSurface>

// Superficie selezionata
<ThemedSurface variant="selected" textVariant="contrast">
  Elemento selezionato
</ThemedSurface>
```

---

### ThemedText
**Location**: `src/core/components/atomic/ThemedText.tsx`

**Purpose**: Componente per testi semantici con theming automatico.

```typescript
interface ThemedTextProps {
  variant?: "primary" | "secondary" | "label" | "placeholder" | "disabled" | "link" | "contrast" | "inherit";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  className?: string;
  children: React.ReactNode;
}
```

**Esempi d'uso:**
```tsx
// Titolo principale
<ThemedText variant="primary" as="h1" className="text-2xl font-bold">
  Titolo Pagina
</ThemedText>

// Testo secondario
<ThemedText variant="secondary" className="text-sm">
  Descrizione o sottotitolo
</ThemedText>

// Link semantico
<ThemedText variant="link" as="a" href="/about">
  Vai alla pagina About
</ThemedText>
```

---

### ThemedImage
**Location**: `src/core/components/atomic/ThemedImage.tsx`

**Purpose**: Immagini che cambiano automaticamente con il tema (light/dark).

```typescript
interface ThemedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  imageKey: "logo" | "icon";
  alt: string;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Logo che cambia con il tema
<ThemedImage 
  imageKey="logo" 
  alt="Company Logo" 
  className="w-32 h-auto"
/>

// Icona nel header
<ThemedImage 
  imageKey="icon" 
  alt="App Icon" 
  className="w-8 h-8"
/>
```

---

### ThemedBorder
**Location**: `src/core/components/atomic/ThemedBorder.tsx`

**Purpose**: Wrapper per elementi che necessitano solo bordi tematici.

```typescript
interface ThemedBorderProps {
  variant?: "none" | "thin" | "default" | "strong";
  sides?: "all" | "top" | "right" | "bottom" | "left" | "horizontal" | "vertical";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}
```

---

### ThemedShadow
**Location**: `src/core/components/atomic/ThemedShadow.tsx`

**Purpose**: Wrapper per gestire ombre responsive al tema.

```typescript
interface ThemedShadowProps {
  variant?: "sm" | "default" | "md" | "lg" | "xl";
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}
```

---

## 🖼️ Componenti Info

### VersionInfo
**Location**: `src/core/components/info/VersionInfo.tsx`

**Purpose**: Visualizza informazioni sulla versione dell'applicazione con dettagli di build.

```typescript
interface VersionInfoProps {
  variant?: 'compact' | 'detailed';
  showEnvironment?: boolean;
  showBuildTime?: boolean;
  version?: string;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Version info compatta nel footer
<VersionInfo variant="compact" />

// Version info dettagliata in settings
<VersionInfo 
  variant="detailed" 
  showEnvironment={true}
  showBuildTime={true}
/>
```

---

### ConnectionStatus
**Location**: `src/core/components/info/ConnectionStatus.tsx`

**Purpose**: Monitora e visualizza lo stato della connessione al backend in real-time.

```typescript
interface ConnectionStatusProps {
  variant?: 'indicator' | 'detailed';
  pollInterval?: number;
  healthEndpoint?: string;
  showRetryButton?: boolean;
  className?: string;
  onStatusChange?: (status: ConnectionState) => void;
}
```

**Esempi d'uso:**
```tsx
// Indicatore semplice nell'header
<ConnectionStatus variant="indicator" />

// Status dettagliato con retry
<ConnectionStatus 
  variant="detailed"
  pollInterval={30000}
  showRetryButton={true}
  onStatusChange={(status) => handleConnectionChange(status)}
/>
```

---

### QuickLink
**Location**: `src/core/components/info/QuickLink.tsx`

**Purpose**: Link rapidi con icone, badge e supporto per link interni/esterni.

```typescript
interface QuickLinkProps {
  title: string;
  description?: string;
  href: string;
  icon?: keyof typeof iconMap;
  badge?: { text: string; variant?: BadgeVariant; };
  size?: 'sm' | 'md' | 'lg';
  variant?: 'card' | 'list' | 'minimal';
  openInNewTab?: boolean;
  className?: string;
  onClick?: () => void;
}
```

**Esempi d'uso:**
```tsx
// Link interno con icona
<QuickLink 
  title="Dashboard"
  description="Vai alla dashboard principale"
  href="/dashboard"
  icon="dashboard"
  variant="card"
/>

// Link esterno con badge
<QuickLink 
  title="GitHub"
  href="https://github.com/user/repo"
  icon="github"
  badge={{ text: "new", variant: "info" }}
  openInNewTab={true}
/>
```

---

### UserAvatar
**Location**: `src/core/components/info/UserAvatar.tsx`

**Purpose**: Avatar utente con iniziali e varianti colore.

```typescript
interface UserAvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  onClick?: () => void;
}
```

---

### Logo
**Location**: `src/core/components/info/Logo.tsx`

**Purpose**: Logo dell'applicazione con modalità compatta e completa.

```typescript
interface LogoProps {
  variant?: "compact" | "full";
  className?: string;
}
```

---

## 🏗️ Componenti Layout

### MainLayout
**Location**: `src/core/components/layout/MainLayout.tsx`

**Purpose**: Layout principale dell'applicazione con gestione sidebar e footer.

```typescript
interface MainLayoutProps {
  children: React.ReactNode;
}
```

**Features:**
- Grid layout responsive (header, content, footer)
- Gestione automatica sidebar margins
- Integrazione con Redux UI state
- Sticky header e sidebar

---

### Header
**Location**: `src/core/components/layout/Header.tsx`

**Purpose**: Header dell'applicazione con navigazione e controlli utente.

```typescript
interface HeaderProps {
  showLogo?: boolean;
  showNavigation?: boolean;
}
```

**Features:**
- Logo condizionale
- Navigation menu desktop/mobile
- User controls (avatar, settings)
- Dual menu system integration

---

### Sidebar
**Location**: `src/core/components/layout/Sidebar.tsx`

**Purpose**: Barra laterale con navigazione e controlli.

**Features:**
- Width dinamica (w-12 compressa, w-64 espansa)
- Navigation items con icone semantiche
- Logo adattivo
- Toggle interno expand/collapse

---

### Footer
**Location**: `src/core/components/layout/Footer.tsx`

**Purpose**: Footer dell'applicazione con informazioni e link.

```typescript
interface FooterProps {
  showVersionInfo?: boolean;
  className?: string;
}
```

---

### CenteredPage
**Location**: `src/core/components/layout/CenteredPage.tsx`

**Purpose**: Container per pagine che necessitano centratura verticale (login, 404, loading).

```typescript
interface CenteredPageProps {
  children: React.ReactNode;
  variant?: 'base' | 'primary' | 'secondary' | 'modal';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  padding?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingMessage?: string;
  animate?: boolean;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Pagina di login
<CenteredPage maxWidth="md" animate={true}>
  <LoginForm />
</CenteredPage>

// Loading page
<CenteredPage 
  isLoading={true} 
  loadingMessage="Caricamento dati..."
/>
```

---

### CenteredSection
**Location**: `src/core/components/layout/CenteredSection.tsx`

**Purpose**: Container per sezioni interne che necessitano centratura.

```typescript
interface CenteredSectionProps {
  children: React.ReactNode;
  variant?: 'base' | 'primary' | 'secondary' | 'modal' | 'info';
  borderVariant?: 'none' | 'thin' | 'default' | 'strong';
  height?: 'auto' | 'screen' | 'half' | 'tall' | string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  align?: 'start' | 'center' | 'end';
  icon?: keyof typeof iconMap;
  iconSize?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: boolean;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Empty state con icona
<CenteredSection 
  height="half" 
  icon="info"
  variant="info"
  align="center"
>
  <EmptyStateContent />
</CenteredSection>

// Sezione con altezza custom
<CenteredSection height="300px" maxWidth="lg">
  <CustomContent />
</CenteredSection>
```

---

### HeaderGroup
**Location**: `src/core/components/layout/HeaderGroup.tsx`

**Purpose**: Titolo e sottotitolo con spacing ottimizzato.

```typescript
interface HeaderGroupProps {
  title: string;
  subtitle?: string;
  titleSize?: "sm" | "md" | "lg" | "xl" | "2xl";
  spacing?: "tight" | "normal" | "loose";
  align?: "left" | "center" | "right";
}
```

---

### TitledSurface
**Location**: `src/core/components/layout/TitledSurface.tsx`

**Purpose**: Surface con titolo che interrompe il bordo superiore (fieldset-style).

```typescript
interface TitledSurfaceProps {
  title: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "modal" | "info";
  borderVariant?: "none" | "thin" | "default" | "strong";
  titleSize?: "sm" | "md" | "lg";
  padding?: "sm" | "md" | "lg";
}
```

---

## 🧭 Componenti Navigation

### SettingsMenu
**Location**: `src/core/components/navigation/SettingsMenu.tsx`

**Purpose**: Menu delle impostazioni dell'applicazione.

**Features:**
- Dark mode toggle
- Layout controls (sidebar, footer)
- Auto-save information
- Debug state viewer

---

### UserMenu
**Location**: `src/core/components/navigation/UserMenu.tsx`

**Purpose**: Menu del profilo utente.

**Features:**
- User info display
- Profile navigation
- Logout functionality
- Dropdown positioning

---

### MobileMenu
**Location**: `src/core/components/navigation/MobileMenu.tsx`

**Purpose**: Menu di navigazione per dispositivi mobile.

---

## 🔧 Componenti UI

### Button
**Location**: `src/core/components/ui/Button.tsx`

**Purpose**: Componente button con varianti e stati.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}
```

**Esempi d'uso:**
```tsx
// Button primario
<Button variant="primary" size="lg">
  Salva Modifiche
</Button>

// Button con loading
<Button 
  variant="primary" 
  isLoading={isSubmitting}
  loadingText="Salvando..."
>
  Salva
</Button>

// Button con icone
<Button 
  variant="outline" 
  leftIcon={<PlusIcon />}
  rightIcon={<ArrowRightIcon />}
>
  Aggiungi Elemento
</Button>
```

---

### Input
**Location**: `src/core/components/ui/Input.tsx`

**Purpose**: Campo input con floating label e validazione.

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  variant?: 'default' | 'error';
  fullWidth?: boolean;
}
```

**Esempi d'uso:**
```tsx
// Input base
<Input 
  label="Email" 
  type="email" 
  required 
  placeholder="Inserisci la tua email"
/>

// Input con errore
<Input 
  label="Password"
  type="password"
  error="Password troppo corta"
  variant="error"
/>
```

---

### TextArea
**Location**: `src/core/components/ui/TextArea.tsx`

**Purpose**: Area di testo con auto-resize e character counter.

```typescript
interface TextAreaProps extends InputProps {
  autoResize?: boolean;
  minRows?: number;
  maxRows?: number;
  showCharCount?: boolean;
  maxLength?: number;
}
```

---

### Select
**Location**: `src/core/components/ui/Select.tsx`

**Purpose**: Select dropdown con Radix UI e floating label.

```typescript
interface SelectProps {
  label: string;
  options: SelectOption[];
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  onValueChange?: (value: string) => void;
  className?: string;
}
```

---

### Checkbox
**Location**: `src/core/components/ui/Checkbox.tsx`

**Purpose**: Checkbox con stati avanzati e Radix UI.

```typescript
interface CheckboxProps {
  label?: string;
  description?: string;
  error?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  indeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
}
```

---

### Switch
**Location**: `src/core/components/ui/Switch.tsx`

**Purpose**: Toggle switch iOS-style con Radix UI.

```typescript
interface SwitchProps {
  label?: string;
  description?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}
```

---

### RadioGroup
**Location**: `src/core/components/ui/RadioGroup.tsx`

**Purpose**: Gruppo di radio button con Radix UI.

```typescript
interface RadioGroupProps {
  label?: string;
  options: RadioOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  orientation?: 'vertical' | 'horizontal';
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  required?: boolean;
  className?: string;
}
```

---

### FormField
**Location**: `src/core/components/ui/FormField.tsx`

**Purpose**: Wrapper universale per eliminare codice ripetitivo nei form.

```typescript
interface FormFieldProps {
  label?: string;
  description?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  hideLabel?: boolean;
  children: React.ReactElement;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Con componenti che hanno label interna
<FormField error={errors.email} helperText="Formato email" hideLabel>
  <Input label="Email" type="email" required />
</FormField>

// Con componenti che necessitano label esterna
<FormField label="Genere" required description="Informazione demografica">
  <RadioGroup options={genderOptions} />
</FormField>
```

---

### Label
**Location**: `src/core/components/ui/Label.tsx`

**Purpose**: Label standalone con varianti semantiche.

```typescript
interface LabelProps {
  children: React.ReactNode;
  variant?: 'default' | 'required' | 'disabled' | 'error' | 'info';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  required?: boolean;
  optional?: boolean;
  htmlFor?: string;
  className?: string;
}
```

---

### Card
**Location**: `src/core/components/ui/Card.tsx`

**Purpose**: Card container con varianti e theming.

```typescript
interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

### Badge
**Location**: `src/core/components/ui/Badge.tsx`

**Purpose**: Badge per etichette e stati.

```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

### Modal
**Location**: `src/core/components/ui/Modal.tsx`

**Purpose**: Modal base con overlay e gestione focus.

```typescript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}
```

---

### ConfirmModal
**Location**: `src/core/components/ui/ConfirmModal.tsx`

**Purpose**: Modal di conferma per azioni destructive.

```typescript
interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'default' | 'danger';
  isLoading?: boolean;
}
```

---

### Table
**Location**: `src/core/components/ui/Table.tsx`

**Purpose**: Tabella responsive con theming.

```typescript
interface TableProps {
  columns: TableColumn[];
  data: Record<string, unknown>[];
  onRowClick?: (row: Record<string, unknown>) => void;
  className?: string;
}
```

---

### TableLink
**Location**: `src/core/components/ui/TableLink.tsx`

**Purpose**: Link per elementi cliccabili nelle righe della tabella.

```typescript
interface TableLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  className?: string;
}
```

---

### Spinner
**Location**: `src/core/components/ui/Spinner.tsx`

**Purpose**: Spinner di caricamento con varianti.

```typescript
interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

---

### Alert
**Location**: `src/core/components/ui/Alert.tsx`

**Purpose**: Alert per messaggi e notifiche.

```typescript
interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}
```

---

### Separator
**Location**: `src/core/components/ui/Separator.tsx`

**Purpose**: Separatore visuale con orientazione.

```typescript
interface SeparatorProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}
```

---

### Tooltip
**Location**: `src/core/components/ui/Tooltip.tsx`

**Purpose**: Tooltip con Radix UI e theming automatico.

```typescript
interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'start' | 'center' | 'end';
  delayDuration?: number;
  className?: string;
}
```

---

### InfoCard
**Location**: `src/core/components/ui/InfoCard.tsx`

**Purpose**: Card informativa con icona e contenuto strutturato.

```typescript
interface InfoCardProps {
  title: string;
  description?: string;
  icon?: keyof typeof iconMap;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children?: React.ReactNode;
  className?: string;
}
```

---

### Accordion
**Location**: `src/core/components/ui/Accordion.tsx`

**Purpose**: Componente per contenuti collassibili organizzati in sezioni.

```typescript
interface AccordionItem {
  value: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface AccordionProps {
  type?: "single" | "multiple";
  items: AccordionItem[];
  defaultValue?: string | string[];
  collapsible?: boolean;
  variant?: "default" | "bordered" | "separated";
  size?: "sm" | "md" | "lg";
  onValueChange?: (value: string | string[]) => void;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Accordion single con collapsible
<Accordion
  type="single"
  collapsible
  items={[
    { value: "item1", title: "Sezione 1", content: "Contenuto 1" },
    { value: "item2", title: "Sezione 2", content: "Contenuto 2" }
  ]}
  variant="bordered"
/>

// Accordion multiple
<Accordion
  type="multiple"
  defaultValue={["item1", "item3"]}
  items={faqItems}
  variant="separated"
  size="lg"
/>
```

---

### Progress
**Location**: `src/core/components/ui/Progress.tsx`

**Purpose**: Progress bar per visualizzare stati di avanzamento.

```typescript
interface ProgressProps {
  value?: number;
  max?: number;
  variant?: "default" | "success" | "warning" | "danger" | "info";
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  label?: string;
  indeterminate?: boolean;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Progress bar base
<Progress value={75} variant="success" showLabel />

// Progress indeterminata con label
<Progress 
  indeterminate 
  variant="info" 
  label="Caricamento dati..." 
  showLabel 
/>

// Progress con dimensioni custom
<Progress 
  value={45} 
  max={100} 
  size="lg" 
  variant="warning"
  showLabel
/>
```

---

### Tabs
**Location**: `src/core/components/ui/Tabs.tsx`

**Purpose**: Componente per organizzare contenuti in schede navigabili.

```typescript
interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  variant?: "default" | "pills" | "underline";
  size?: "sm" | "md" | "lg";
  onTabChange?: (tabId: string) => void;
  className?: string;
}
```

**Esempi d'uso:**
```tsx
// Tabs base
<Tabs
  items={[
    { id: "forms", label: "Forms", content: <FormsContent /> },
    { id: "buttons", label: "Buttons", content: <ButtonsContent /> }
  ]}
  defaultTab="forms"
  variant="default"
/>

// Tabs pills style
<Tabs
  items={tabItems}
  variant="pills"
  size="lg"
  onTabChange={(tabId) => handleTabChange(tabId)}
/>
```

---

### Toast
**Location**: `src/core/components/ui/Toast.tsx`

**Purpose**: Sistema di notifiche temporanee con gestione automatica della coda.

```typescript
interface ToastProps {
  variant?: "default" | "success" | "warning" | "danger";
  title?: string;
  description?: string;
  action?: {
    label: string;
    onClick: () => void;
  };
  duration?: number;
  onClose?: () => void;
}
```

**Utilizzo tramite hook:**
```tsx
const { toast } = useToast();

// Toast base
toast("Operazione completata");

// Toast semantici
toast.success("File salvato correttamente");
toast.warning("Connessione instabile");
toast.danger("Errore durante il salvataggio");

// Toast con azione
toast.success("Elemento eliminato", {
  action: {
    label: "Annulla",
    onClick: () => undoDelete()
  }
});

// Toast permanente
toast.info("Messaggio importante", { 
  duration: 0,
  title: "Attenzione" 
});
```

---

## ⚡ Componenti Actions

### ActionMenu
**Location**: `src/core/components/actions/ActionMenu.tsx`

**Purpose**: Menu dropdown per azioni CRUD.

```typescript
interface ActionMenuProps {
  actions: ActionItem[];
  trigger?: React.ReactNode;
  className?: string;
}
```

---

### CreateAction
**Location**: `src/core/components/actions/CreateAction.tsx`

**Purpose**: Pulsante per creare nuovi elementi.

```typescript
interface CreateActionProps {
  onAction: () => void;
  label?: string;
  disabled?: boolean;
  className?: string;
}
```

---

### EditAction
**Location**: `src/core/components/actions/EditAction.tsx`

**Purpose**: Pulsante per modificare elementi esistenti.

```typescript
interface EditActionProps {
  onAction: () => void;
  disabled?: boolean;
  className?: string;
}
```

---

### DeleteAction
**Location**: `src/core/components/actions/DeleteAction.tsx`

**Purpose**: Pulsante per eliminare elementi con conferma.

```typescript
interface DeleteActionProps {
  onAction: () => void;
  confirmTitle?: string;
  confirmMessage?: string;
  disabled?: boolean;
  className?: string;
}
```

---

## 🛠️ Hooks e Utilities

### useUISettings
**Location**: `src/app/hooks.ts`

**Purpose**: Hook principale per gestire lo stato UI dell'applicazione.

```typescript
const {
  darkMode,
  sidebarVisible,
  sidebarExpanded,
  footerVisible,
  userMenuOpen,
  settingsMenuOpen,
  toggleDarkMode,
  toggleSidebar,
  toggleSidebarExpanded,
  toggleFooter,
  toggleUserMenu,
  toggleSettingsMenu,
  closeUserMenu,
  closeSettingsMenu,
  resetUISettings
} = useUISettings();
```

---

### useThemedImage
**Location**: `src/core/hooks/useThemedImage.ts`

**Purpose**: Hook per gestire immagini che cambiano con il tema.

```typescript
// Hook generico
const logoSrc = useThemedImage('logo');

// Hook specifici
const logoSrc = useThemedLogo();
const iconSrc = useThemedIcon();
```

---

### useMediaQuery
**Location**: `src/core/hooks/useMediaQuery.ts`

**Purpose**: Hook per rilevare media queries e gestire responsive behavior.

```typescript
const isMobile = useMediaQuery('(max-width: 768px)');
const isDesktop = useMediaQuery('(min-width: 1024px)');
```

---

### useToast
**Location**: `src/core/hooks/useToast.ts`

**Purpose**: Hook per utilizzare il sistema Toast con context-based state management.

```typescript
interface ToastOptions {
  title?: string;
  description?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface ToastContextValue {
  toasts: ToastItem[];
  toast: ToastFunction;
  dismiss: (id: string) => void;
  dismissAll: () => void;
}
```

**Esempi d'uso:**
```tsx
const { toast, dismiss, dismissAll } = useToast();

// Toast base
toast("Operazione completata");

// Toast semantici con opzioni
toast.success("File salvato", {
  title: "Successo",
  duration: 6000
});

toast.warning("Attenzione", {
  action: { label: "OK", onClick: () => handleWarning() }
});

// Gestione manuale
const toastId = toast.danger("Errore critico", { duration: 0 });
setTimeout(() => dismiss(toastId), 10000);
```

---

## 📡 Servizi

### ApiService
**Location**: `src/core/services/apiService.ts`

**Purpose**: Servizio HTTP client completo con autenticazione e gestione errori.

```typescript
// GET request tipizzato
const response = await apiService.get<UserData>('/users/me');
const userData = response.data;

// POST con dati
const newUser = await apiService.post<User>('/users', {
  name: 'John Doe',
  email: 'john@example.com'
});

// Gestione errori
import { isApiError } from '../services';
try {
  const data = await apiService.get('/protected');
} catch (error) {
  if (isApiError(error)) {
    console.log('API Error:', error.status, error.message);
  }
}

// Authentication
apiService.setAuthToken('your-jwt-token');
apiService.removeAuthToken();

// File upload
const formData = new FormData();
formData.append('file', file);
const result = await apiService.upload('/upload', formData);
```

**Features:**
- HTTP methods completi (GET, POST, PUT, PATCH, DELETE, UPLOAD)
- Authentication support con token management
- Error handling tipizzato con `ApiError` interface
- Request/Response interceptors con timeout
- Environment configuration
- TypeScript completo con generics

---

## 🎨 Pattern di Utilizzo

### Import Pattern
```typescript
// Componenti atomici
import { ThemedSurface, ThemedText } from '../components/atomic';

// Componenti UI
import { Button, Input, Modal } from '../components/ui';

// Componenti layout
import { Header, Footer, CenteredPage } from '../components/layout';

// Componenti info
import { VersionInfo, ConnectionStatus } from '../components/info';

// Servizi
import { apiService, isApiError } from '../services';

// Hooks
import { useUISettings } from '../hooks';
```

### Theming Pattern
```typescript
// Superficie con testo integrato
<ThemedSurface variant="primary" textVariant="contrast">
  Contenuto con testo automatico
</ThemedSurface>

// Composizione componenti
<ThemedSurface variant="modal" borderVariant="default">
  <ThemedText variant="primary" className="font-bold">
    Titolo Modal
  </ThemedText>
  <ThemedText variant="secondary">
    Descrizione del contenuto
  </ThemedText>
</ThemedSurface>
```

### Form Pattern
```typescript
// Form completo con validazione
<form onSubmit={handleSubmit}>
  <FormField error={errors.email} hideLabel>
    <Input 
      label="Email" 
      type="email" 
      required 
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
  </FormField>
  
  <FormField error={errors.message} hideLabel>
    <TextArea 
      label="Messaggio"
      maxLength={500}
      showCharCount={true}
      value={message}
      onChange={(e) => setMessage(e.target.value)}
    />
  </FormField>
  
  <Button 
    type="submit" 
    variant="primary" 
    isLoading={isSubmitting}
    loadingText="Invio in corso..."
    fullWidth
  >
    Invia Messaggio
  </Button>
</form>
```

### Layout Pattern
```typescript
// Layout con sidebar
<MainLayout>
  <CenteredSection height="half" icon="info">
    <HeaderGroup 
      title="Benvenuto" 
      subtitle="Inizia a esplorare i componenti"
      spacing="tight"
    />
    <QuickLink 
      title="Componenti"
      href="/showcase"
      icon="components"
      variant="card"
    />
  </CenteredSection>
</MainLayout>

// Pagina centrata (login, 404)
<CenteredPage maxWidth="md" animate={true}>
  <TitledSurface title="Accesso" padding="lg">
    <LoginForm />
  </TitledSurface>
</CenteredPage>
```

---

## 📋 Checklist Implementazione

### ✅ Componenti Completati (39/46)

**Atomici (5/5)**
- ✅ ThemedSurface - Superfici con theming
- ✅ ThemedText - Testi semantici
- ✅ ThemedImage - Immagini tematiche
- ✅ ThemedBorder - Bordi tematici
- ✅ ThemedShadow - Ombre responsive

**Info (5/5)**
- ✅ Logo - Logo applicazione
- ✅ UserAvatar - Avatar utente
- ✅ VersionInfo - Info versione e build
- ✅ ConnectionStatus - Status connessione backend
- ✅ QuickLink - Link rapidi con icone

**Layout (8/8)**
- ✅ MainLayout - Layout principale
- ✅ Header - Header applicazione
- ✅ Sidebar - Barra laterale
- ✅ Footer - Footer applicazione
- ✅ HeaderGroup - Titoli con spacing
- ✅ TitledSurface - Surface con titolo
- ✅ CenteredPage - Pagine centrate
- ✅ CenteredSection - Sezioni centrate

**UI (18/18)**
- ✅ Button - Pulsanti con varianti
- ✅ Input - Campi input con floating label
- ✅ TextArea - Area testo con auto-resize
- ✅ Select - Dropdown con Radix UI
- ✅ Checkbox - Checkbox con stati avanzati
- ✅ Switch - Toggle switch iOS-style
- ✅ RadioGroup - Radio button groups
- ✅ FormField - Wrapper form universale
- ✅ Label - Label standalone
- ✅ Card - Container card
- ✅ Badge - Badge per stati
- ✅ Modal - Modal base
- ✅ ConfirmModal - Modal conferma
- ✅ Table - Tabelle responsive
- ✅ TableLink - Link tabella
- ✅ Spinner - Loading spinner
- ✅ Alert - Alert messaggi
- ✅ Separator - Separatori visuali
- ✅ Tooltip - Tooltip con Radix UI
- ✅ InfoCard - Card informative
- ✅ Accordion - Accordion collassibili
- ✅ Progress - Progress bar con varianti
- ✅ Tabs - Sistema di schede navigabili
- ✅ Toast - Sistema notifiche temporanee

**Actions (4/4)**
- ✅ ActionMenu - Menu azioni CRUD
- ✅ CreateAction - Pulsante creazione
- ✅ EditAction - Pulsante modifica
- ✅ DeleteAction - Pulsante eliminazione

### 🟡 Componenti da Completare (7/46)

**Navigation (3/6)**
- ✅ SettingsMenu - Menu impostazioni app
- ✅ UserMenu - Menu profilo utente
- ✅ MobileMenu - Menu mobile
- 🟡 FooterMenu - Menu nel footer
- 🟡 MainMenu - Menu principale
- 🟡 ProfileMenu - Menu profilo con dropdown

**Hooks (4/7)**
- ✅ useUISettings - Hook stato UI
- ✅ useThemedImage - Hook immagini tematiche
- ✅ useMediaQuery - Hook media queries
- ✅ useToast - Hook sistema Toast
- 🟡 useLocalStorage - Hook localStorage
- 🟡 useModal - Hook gestione modal
- 🟡 useThemeStyles - Hook gestione stili

**Servizi (1/1)**
- ✅ ApiService - HTTP client completo

---

## 🚀 Roadmap Futuri Sviluppi

### Phase 1: Completamento Base
- Implementare componenti navigation mancanti
- Completare hooks utilities
- Aggiungere showcase components

### Phase 2: Advanced Features
- Sistema autenticazione completo
- Form validation avanzata
- Data fetching patterns
- Error boundaries

### Phase 3: Performance & Scale
- Code splitting per componenti
- Lazy loading utilities
- Bundle optimization
- Testing utilities

---

**Ultima modifica**: 31 Luglio 2025  
**Versione catalogo**: 2.2  
**Completamento**: 85% (39/46 componenti)