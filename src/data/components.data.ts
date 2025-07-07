// src/data/components.data.ts
import type { ComponentCategory } from "../core/components/ui/InfoCard";

/** Tipo di una singola prop */
export interface ComponentProp {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: string;
  description: string;
}

/** Esempio di utilizzo di un componente */
export interface ComponentExample {
  title: string;
  description: string;
  code: string;
  preview?: string; // HTML per preview opzionale
}

/** Dati completi di un componente */
export interface ComponentData {
  id: string;
  title: string;
  description: string;
  category: ComponentCategory;
  importPath: string;
  props: ComponentProp[];
  examples: ComponentExample[];
  notes?: string; // Note aggiuntive o best practices
}

/** Database completo dei componenti */
export const COMPONENTS_DATA: Record<string, ComponentData> = {
  // UI Components
  button: {
    id: "button",
    title: "Button",
    description: "Pulsanti per azioni primarie e secondarie con varianti multiple e stati di caricamento",
    category: "ui",
    importPath: 'import { Button } from "../core/components/ui";',
    props: [
      {
        name: "variant",
        type: '"primary" | "secondary" | "outline" | "danger" | "success" | "ghost" | "link" | "info" | "warning"',
        required: false,
        defaultValue: '"primary"',
        description: "Variante visiva del pulsante",
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del pulsante",
      },
      {
        name: "isLoading",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Mostra spinner di caricamento",
      },
      {
        name: "loadingText",
        type: "string",
        required: false,
        description: "Testo personalizzato durante il caricamento",
      },
      {
        name: "leftIcon",
        type: "ReactNode",
        required: false,
        description: "Icona a sinistra del testo",
      },
      {
        name: "rightIcon",
        type: "ReactNode",
        required: false,
        description: "Icona a destra del testo",
      },
      {
        name: "fullWidth",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Occupa tutta la larghezza disponibile",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il pulsante",
      },
    ],
    examples: [
      {
        title: "Utilizzo Base",
        description: "Pulsante standard con varianti principali",
        code: `<Button variant="primary">Salva</Button>
<Button variant="secondary">Annulla</Button>
<Button variant="outline">Preview</Button>`,
      },
      {
        title: "Con Icone",
        description: "Pulsanti con icone a sinistra o destra",
        code: `import { Plus, Download } from "lucide-react";

<Button variant="primary" leftIcon={<Plus />}>
  Nuovo
</Button>
<Button variant="outline" rightIcon={<Download />}>
  Scarica
</Button>`,
      },
      {
        title: "Stati Loading",
        description: "Pulsante con stato di caricamento",
        code: `<Button 
  variant="primary" 
  isLoading={saving}
  loadingText="Salvando..."
>
  Salva Documento
</Button>`,
      },
    ],
    notes: "Usa variant='primary' per azioni principali, 'secondary' per azioni secondarie, 'outline' per azioni neutre.",
  },

  badge: {
    id: "badge",
    title: "Badge",
    description: "Etichette per mostrare stati, categorizzazioni e informazioni brevi con auto-mapping intelligente",
    category: "ui",
    importPath: 'import { Badge } from "../core/components/ui";',
    props: [
      {
        name: "variant",
        type: '"success" | "warning" | "danger" | "info" | "default"',
        required: false,
        defaultValue: '"default"',
        description: "Variante colore del badge",
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md"',
        required: false,
        defaultValue: '"xs"',
        description: "Dimensione del badge",
      },
      {
        name: "status",
        type: "string",
        required: false,
        description: "Status testuale che viene mappato automaticamente alla variante appropriata",
      },
      {
        name: "text",
        type: "string",
        required: false,
        description: "Testo alternativo al children",
      },
    ],
    examples: [
      {
        title: "Varianti Base",
        description: "Badge con colori predefiniti",
        code: `<Badge variant="success">Attivo</Badge>
<Badge variant="warning">In Attesa</Badge>
<Badge variant="danger">Errore</Badge>
<Badge variant="info">Info</Badge>`,
      },
      {
        title: "Auto-mapping Status",
        description: "Badge che si colorano automaticamente in base al testo",
        code: `<Badge status="completato">Task Done</Badge>
<Badge status="pendente">In Progress</Badge>
<Badge status="errore">Failed</Badge>
<Badge status="nuovo">New Item</Badge>`,
      },
      {
        title: "Con Icone",
        description: "Badge con icone integrate",
        code: `import { CheckCircle, Clock } from "lucide-react";

<Badge variant="success" size="sm">
  <CheckCircle className="w-3 h-3 mr-1" />
  Completato
</Badge>`,
      },
    ],
    notes: "Usa 'status' per auto-mapping quando possibile. Supporta: attivo, completato, pendente, errore, nuovo, etc.",
  },

  // Form Components
  input: {
    id: "input",
    title: "Input",
    description: "Campi di input con floating label, validazione e supporto per diversi tipi di dato",
    category: "form",
    importPath: 'import { Input } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: true,
        description: "Etichetta del campo (floating label)",
      },
      {
        name: "type",
        type: '"text" | "email" | "password" | "number" | "tel" | "url"',
        required: false,
        defaultValue: '"text"',
        description: "Tipo di input HTML",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore da visualizzare",
      },
      {
        name: "helperText",
        type: "string",
        required: false,
        description: "Testo di aiuto sotto il campo",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Campo obbligatorio (mostra asterisco rosso)",
      },
      {
        name: "fullWidth",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Occupa tutta la larghezza disponibile",
      },
    ],
    examples: [
      {
        title: "Input Base",
        description: "Campo di input standard con label",
        code: `<Input 
  label="Nome utente"
  placeholder="Inserisci il tuo nome"
/>`,
      },
      {
        title: "Con Validazione",
        description: "Input con errore e helper text",
        code: `<Input 
  label="Email"
  type="email"
  error="Formato email non valido"
  helperText="Inserisci un indirizzo email valido"
  required
/>`,
      },
      {
        title: "Diversi Tipi",
        description: "Input per diversi tipi di dato",
        code: `<Input label="Password" type="password" required />
<Input label="Telefono" type="tel" />
<Input label="Età" type="number" />`,
      },
    ],
    notes: "Il floating label si sposta automaticamente quando il campo ha focus o contiene testo.",
  },

  // Data Components
  table: {
    id: "table",
    title: "Table",
    description: "Tabelle semplici con supporto per azioni, celle cliccabili e configurazione flessibile",
    category: "data",
    importPath: 'import { Table } from "../core/components/ui";',
    props: [
      {
        name: "data",
        type: "T[]",
        required: true,
        description: "Array di dati da visualizzare nella tabella",
      },
      {
        name: "columns",
        type: "TableColumn<T>[]",
        required: true,
        description: "Configurazione delle colonne",
      },
      {
        name: "keyExtractor",
        type: "(item: T) => string | number",
        required: true,
        description: "Funzione per estrarre la chiave univoca di ogni riga",
      },
      {
        name: "rowActions",
        type: "TableRowActions<T>",
        required: false,
        description: "Configurazione azioni per ogni riga (edit, delete, custom)",
      },
      {
        name: "hoverable",
        type: "boolean",
        required: false,
        defaultValue: "true",
        description: "Abilita hover effect sulle righe",
      },
      {
        name: "striped",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Righe alternate colorate",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione celle e padding",
      },
    ],
    examples: [
      {
        title: "Tabella Base",
        description: "Tabella semplice con colonne basic",
        code: `<Table
  data={users}
  columns={[
    { header: "Nome", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Ruolo", accessor: "role" }
  ]}
  keyExtractor={(user) => user.id}
/>`,
      },
      {
        title: "Con Azioni",
        description: "Tabella con menu azioni per ogni riga",
        code: `<Table
  data={users}
  columns={columns}
  keyExtractor={(user) => user.id}
  rowActions={{
    enabled: true,
    mode: "menu",
    quickActions: {
      edit: { enabled: true, onEdit: handleEdit },
      delete: { enabled: true, onDelete: handleDelete }
    }
  }}
/>`,
      },
      {
        title: "Celle Cliccabili",
        description: "Colonne con celle cliccabili",
        code: `{
  header: "Email",
  accessor: "email",
  clickable: true,
  clickVariant: "primary",
  onCellClick: (user) => openEmail(user.email)
}`,
      },
    ],
    notes: "Per tabelle complesse con sorting/filtering usa TanStack Table. Questa è per casi semplici.",
  },

  // Form Components - Continued
  textarea: {
    id: "textarea",
    title: "TextArea",
    description: "Area di testo con auto-resize, character counter e floating label per input multi-riga",
    category: "form",
    importPath: 'import { TextArea } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: true,
        description: "Etichetta del campo (floating label)",
      },
      {
        name: "autoResize",
        type: "boolean",
        required: false,
        defaultValue: "true",
        description: "Ridimensiona automaticamente l'altezza in base al contenuto",
      },
      {
        name: "minRows",
        type: "number",
        required: false,
        defaultValue: "3",
        description: "Numero minimo di righe visibili",
      },
      {
        name: "maxRows",
        type: "number",
        required: false,
        defaultValue: "8",
        description: "Numero massimo di righe prima dello scroll",
      },
      {
        name: "showCharCount",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Mostra contatore caratteri",
      },
      {
        name: "maxLength",
        type: "number",
        required: false,
        description: "Limite massimo caratteri",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore da visualizzare",
      },
      {
        name: "helperText",
        type: "string",
        required: false,
        description: "Testo di aiuto sotto il campo",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Campo obbligatorio (mostra asterisco rosso)",
      },
    ],
    examples: [
      {
        title: "TextArea Base",
        description: "Area di testo con auto-resize",
        code: `<TextArea 
  label="Descrizione"
  placeholder="Inserisci una descrizione dettagliata..."
  autoResize
/>`,
      },
      {
        title: "Con Character Count",
        description: "TextArea con contatore caratteri e limite",
        code: `<TextArea 
  label="Commento"
  maxLength={500}
  showCharCount
  helperText="Massimo 500 caratteri"
/>`,
      },
      {
        title: "Dimensioni Fisse",
        description: "TextArea con dimensioni controllate",
        code: `<TextArea 
  label="Note"
  autoResize={false}
  minRows={5}
  maxRows={5}
/>`,
      },
    ],
    notes: "L'auto-resize è abilitato di default. Usa showCharCount per dare feedback visivo all'utente.",
  },

  select: {
    id: "select",
    title: "Select",
    description: "Dropdown con Radix UI, floating label e ricerca integrata per selezione di opzioni",
    category: "form",
    importPath: 'import { Select } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: true,
        description: "Etichetta del campo (floating label)",
      },
      {
        name: "options",
        type: "SelectOption[]",
        required: true,
        description: "Array di opzioni selezionabili",
      },
      {
        name: "placeholder",
        type: "string",
        required: false,
        defaultValue: '"Seleziona un\'opzione"',
        description: "Testo placeholder quando nessuna opzione è selezionata",
      },
      {
        name: "value",
        type: "string",
        required: false,
        description: "Valore controllato del select",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        required: false,
        description: "Callback chiamata quando cambia la selezione",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore da visualizzare",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il select",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Campo obbligatorio (mostra asterisco rosso)",
      },
    ],
    examples: [
      {
        title: "Select Base",
        description: "Dropdown semplice con opzioni",
        code: `const options = [
  { value: "it", label: "Italiano" },
  { value: "en", label: "English" },
  { value: "fr", label: "Français" }
];

<Select 
  label="Lingua"
  options={options}
  placeholder="Seleziona una lingua"
/>`,
      },
      {
        title: "Select Controllato",
        description: "Select con stato controllato",
        code: `const [country, setCountry] = useState("");

<Select 
  label="Paese"
  options={countryOptions}
  value={country}
  onValueChange={setCountry}
  required
/>`,
      },
      {
        title: "Con Validazione",
        description: "Select con errore e opzioni disabilitate",
        code: `<Select 
  label="Piano"
  options={[
    { value: "free", label: "Gratuito" },
    { value: "pro", label: "Pro", disabled: true },
    { value: "enterprise", label: "Enterprise" }
  ]}
  error="Seleziona un piano valido"
/>`,
      },
    ],
    notes: "Usa Radix UI per accessibility completa. Le opzioni possono essere disabilitate individualmente.",
  },

  checkbox: {
    id: "checkbox",
    title: "Checkbox",
    description: "Checkbox con Radix UI, stati indeterminate, label e descrizioni per selezioni multiple",
    category: "form",
    importPath: 'import { Checkbox } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: false,
        description: "Etichetta del checkbox",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Descrizione aggiuntiva sotto la label",
      },
      {
        name: "checked",
        type: "boolean",
        required: false,
        description: "Stato controllato del checkbox",
      },
      {
        name: "indeterminate",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Stato indeterminato (per select-all parziali)",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        required: false,
        description: "Callback quando cambia lo stato",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il checkbox",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Campo obbligatorio (mostra asterisco rosso)",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore da visualizzare",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del checkbox",
      },
    ],
    examples: [
      {
        title: "Checkbox Base",
        description: "Checkbox semplice con label",
        code: `<Checkbox 
  label="Accetto i termini e condizioni"
  required
/>`,
      },
      {
        title: "Con Descrizione",
        description: "Checkbox con label e descrizione dettagliata",
        code: `<Checkbox 
  label="Newsletter"
  description="Ricevi aggiornamenti sui nuovi prodotti e offerte speciali"
  defaultChecked={true}
/>`,
      },
      {
        title: "Stato Indeterminate",
        description: "Checkbox per selezione multipla con stato parziale",
        code: `<Checkbox 
  label="Seleziona tutto"
  indeterminate={someSelected && !allSelected}
  checked={allSelected}
  onCheckedChange={handleSelectAll}
/>`,
      },
    ],
    notes: "Usa 'indeterminate' per indicare selezioni parziali in liste. L'errore appare sotto la label.",
  },

  switch: {
    id: "switch",
    title: "Switch",
    description: "Toggle switch iOS-style con Radix UI per impostazioni on/off e preferenze utente",
    category: "form",
    importPath: 'import { Switch } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: false,
        description: "Etichetta del switch",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Descrizione aggiuntiva sotto la label",
      },
      {
        name: "checked",
        type: "boolean",
        required: false,
        description: "Stato controllato del switch",
      },
      {
        name: "onCheckedChange",
        type: "(checked: boolean) => void",
        required: false,
        description: "Callback quando cambia lo stato",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il switch",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del switch",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore da visualizzare",
      },
    ],
    examples: [
      {
        title: "Switch Base",
        description: "Toggle semplice per impostazioni",
        code: `<Switch 
  label="Notifiche push"
  defaultChecked={true}
/>`,
      },
      {
        title: "Con Descrizione",
        description: "Switch con spiegazione dettagliata",
        code: `<Switch 
  label="Modalità scura"
  description="Attiva il tema scuro per ridurre l'affaticamento degli occhi"
  checked={darkMode}
  onCheckedChange={setDarkMode}
/>`,
      },
      {
        title: "Dimensioni Diverse",
        description: "Switch in diverse dimensioni",
        code: `<Switch label="Piccolo" size="sm" />
<Switch label="Medio" size="md" />
<Switch label="Grande" size="lg" />`,
      },
    ],
    notes: "Usa Switch per impostazioni on/off. Design iOS-style con animazioni smooth native.",
  },

  radiogroup: {
    id: "radiogroup",
    title: "RadioGroup",
    description: "Gruppo di radio button con Radix UI, orientazioni multiple e descrizioni per scelte esclusive",
    category: "form",
    importPath: 'import { RadioGroup } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: false,
        description: "Etichetta del gruppo radio",
      },
      {
        name: "options",
        type: "RadioOption[]",
        required: true,
        description: "Array di opzioni radio",
      },
      {
        name: "value",
        type: "string",
        required: false,
        description: "Valore controllato del gruppo",
      },
      {
        name: "onValueChange",
        type: "(value: string) => void",
        required: false,
        description: "Callback quando cambia la selezione",
      },
      {
        name: "orientation",
        type: '"vertical" | "horizontal"',
        required: false,
        defaultValue: '"vertical"',
        description: "Orientazione del layout",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita tutto il gruppo",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Gruppo obbligatorio (mostra asterisco rosso)",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore da visualizzare",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione dei radio button",
      },
    ],
    examples: [
      {
        title: "RadioGroup Base",
        description: "Gruppo radio verticale semplice",
        code: `const options = [
  { value: "credit", label: "Carta di credito" },
  { value: "paypal", label: "PayPal" },
  { value: "bank", label: "Bonifico bancario" }
];

<RadioGroup 
  label="Metodo di pagamento"
  options={options}
  required
/>`,
      },
      {
        title: "Layout Orizzontale",
        description: "Radio button disposti orizzontalmente",
        code: `<RadioGroup 
  label="Dimensione"
  options={[
    { value: "s", label: "S" },
    { value: "m", label: "M" },
    { value: "l", label: "L" },
    { value: "xl", label: "XL" }
  ]}
  orientation="horizontal"
/>`,
      },
      {
        title: "Con Descrizioni",
        description: "Opzioni con descrizioni dettagliate",
        code: `<RadioGroup 
  label="Piano subscription"
  options={[
    { 
      value: "basic", 
      label: "Basic", 
      description: "Per uso personale con funzioni limitate" 
    },
    { 
      value: "pro", 
      label: "Pro", 
      description: "Per professionisti con funzioni avanzate" 
    },
    { 
      value: "team", 
      label: "Team", 
      description: "Per team con collaborazione illimitata" 
    }
  ]}
/>`,
      },
    ],
    notes: "Usa orientation='horizontal' per opzioni brevi. Le descrizioni aiutano nelle scelte complesse.",
  },

  formfield: {
    id: "formfield",
    title: "FormField",
    description: "Wrapper universale per form con gestione label, errori e accessibility automatica",
    category: "form",
    importPath: 'import { FormField } from "../core/components/ui";',
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Componente form da wrappare",
      },
      {
        name: "label",
        type: "string",
        required: false,
        description: "Etichetta del campo (solo se hideLabel=false)",
      },
      {
        name: "hideLabel",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Nasconde label per componenti che hanno label interna",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Campo obbligatorio (mostra asterisco rosso)",
      },
      {
        name: "error",
        type: "string",
        required: false,
        description: "Messaggio di errore (priorità su helperText)",
      },
      {
        name: "helperText",
        type: "string",
        required: false,
        description: "Testo di aiuto (nascosto se c'è errore)",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Descrizione esplicativa prima del campo",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione testi e spaziature",
      },
      {
        name: "spacing",
        type: '"tight" | "normal" | "loose"',
        required: false,
        defaultValue: '"normal"',
        description: "Spaziatura verticale tra elementi",
      },
    ],
    examples: [
      {
        title: "Con Componenti Label Interna",
        description: "Wrapper per Input, Select, TextArea (hanno floating label)",
        code: `<FormField error={errors.email} helperText="Formato email valido" hideLabel>
  <Input label="Email" type="email" required />
</FormField>`,
      },
      {
        title: "Con Componenti Senza Label",
        description: "Wrapper per RadioGroup, Checkbox groups",
        code: `<FormField 
  label="Genere" 
  required 
  description="Informazione demografica opzionale"
>
  <RadioGroup options={genderOptions} />
</FormField>`,
      },
      {
        title: "Gestione Errori",
        description: "Error hierarchy e helper text",
        code: `<FormField 
  label="Password" 
  error={passwordError}
  helperText="Minimo 8 caratteri con numeri e simboli"
  hideLabel
>
  <Input label="Password" type="password" required />
</FormField>`,
      },
    ],
    notes: "Usa hideLabel=true per Input/Select/TextArea. L'errore sovrascrive sempre l'helper text.",
  },

  label: {
    id: "label",
    title: "Label",
    description: "Component label standalone con varianti semantiche, dimensioni e indicatori automatici",
    category: "form",
    importPath: 'import { Label } from "../core/components/ui";',
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Contenuto della label",
      },
      {
        name: "variant",
        type: '"default" | "required" | "disabled" | "error" | "info"',
        required: false,
        defaultValue: '"default"',
        description: "Variante semantica della label",
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del testo",
      },
      {
        name: "weight",
        type: '"normal" | "medium" | "semibold" | "bold"',
        required: false,
        defaultValue: '"medium"',
        description: "Peso del font",
      },
      {
        name: "required",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Mostra asterisco rosso per required",
      },
      {
        name: "optional",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Mostra badge '(opzionale)'",
      },
      {
        name: "htmlFor",
        type: "string",
        required: false,
        description: "ID del campo associato",
      },
    ],
    examples: [
      {
        title: "Label Base",
        description: "Label semplice per campi form",
        code: `<Label htmlFor="username">Nome utente</Label>
<input id="username" type="text" />`,
      },
      {
        title: "Varianti Semantiche",
        description: "Label con diversi stati semantici",
        code: `<Label variant="required" required>Campo obbligatorio</Label>
<Label variant="optional" optional>Campo opzionale</Label>
<Label variant="error">Campo con errore</Label>
<Label variant="disabled">Campo disabilitato</Label>`,
      },
      {
        title: "Dimensioni e Pesi",
        description: "Controllo tipografico avanzato",
        code: `<Label size="lg" weight="bold">Titolo importante</Label>
<Label size="sm" weight="normal">Sottotitolo</Label>
<Label size="xs" variant="info">Info aggiuntiva</Label>`,
      },
    ],
    notes: "Usa quando serve una label standalone. Required e optional sono mutualmente esclusivi.",
  },

  tablelink: {
    id: "tablelink",
    title: "TableLink",
    description: "Link cliccabili per celle di tabella con varianti colore e gestione eventi",
    category: "data",
    importPath: 'import { TableLink } from "../core/components/ui";',
    props: [
      {
        name: "onClick",
        type: "() => void",
        required: true,
        description: "Callback quando il link viene cliccato",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Contenuto del link",
      },
      {
        name: "variant",
        type: '"primary" | "secondary" | "danger" | "success"',
        required: false,
        defaultValue: '"primary"',
        description: "Variante colore del link",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il link",
      },
      {
        name: "icon",
        type: "ReactNode",
        required: false,
        description: "Icona da mostrare prima del testo",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description: "Tooltip del link",
      },
    ],
    examples: [
      {
        title: "Link Base",
        description: "Link semplice in cella tabella",
        code: `<TableLink 
  variant="primary" 
  onClick={() => handleEdit(user)}
>
  {user.email}
</TableLink>`,
      },
      {
        title: "Con Icone",
        description: "Link con icone per azioni specifiche",
        code: `<TableLink 
  variant="success" 
  icon={<Download className="w-4 h-4" />}
  onClick={() => handleDownload(file)}
>
  Scarica
</TableLink>`,
      },
      {
        title: "Stati e Varianti",
        description: "Link con diversi stati e colori",
        code: `<TableLink variant="danger" onClick={handleDelete}>
  Elimina
</TableLink>
<TableLink variant="secondary" disabled>
  Non disponibile
</TableLink>`,
      },
    ],
    notes: "Ottimizzato per uso in tabelle. Previene automaticamente la propagazione degli eventi.",
  },

  infocard: {
    id: "infocard",
    title: "InfoCard",
    description: "Card cliccabili per Component Explorer con sistema di categorie colorate",
    category: "ui",
    importPath: 'import { InfoCard } from "../core/components/ui";',
    props: [
      {
        name: "title",
        type: "string",
        required: true,
        description: "Nome del componente",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Breve descrizione opzionale",
      },
      {
        name: "category",
        type: '"ui" | "form" | "navigation" | "feedback" | "data" | "layout"',
        required: true,
        description: "Categoria del componente per il colore di sfondo",
      },
      {
        name: "onClick",
        type: "() => void",
        required: true,
        description: "Callback quando la card viene cliccata",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Stato disabilitato",
      },
    ],
    examples: [
      {
        title: "Card Base",
        description: "InfoCard per Component Explorer",
        code: `<InfoCard
  title="Button"
  description="Pulsanti per azioni primarie e secondarie"
  category="ui"
  onClick={() => openComponentModal('button')}
/>`,
      },
      {
        title: "Diverse Categorie",
        description: "Card con colori categoria diversi",
        code: `<InfoCard title="Input" category="form" onClick={handleClick} />
<InfoCard title="Table" category="data" onClick={handleClick} />
<InfoCard title="Header" category="layout" onClick={handleClick} />`,
      },
      {
        title: "Con Stato Disabilitato",
        description: "Card non cliccabile",
        code: `<InfoCard
  title="ComingSoon"
  description="Componente in sviluppo"
  category="ui"
  disabled
  onClick={() => {}}
/>`,
      },
    ],
    notes: "Dimensioni fisse (h-32). Ogni categoria ha un colore specifico nel theme system.",
  },

  // Actions Components
  actionMenu: {
    id: "actionmenu",
    title: "ActionMenu",
    description: "Menu dropdown configurabile per azioni contestuali con supporto Radix UI",
    category: "ui",
    importPath: 'import { ActionMenu } from "../core/components/actions";',
    props: [
      {
        name: "actions",
        type: "Action[]",
        required: true,
        description: "Array di azioni da visualizzare nel menu",
      },
      {
        name: "menuButton",
        type: "ReactNode",
        required: false,
        description: "Elemento trigger personalizzato (default: MoreVertical icon)",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        required: false,
        defaultValue: '"end"',
        description: "Allineamento del menu rispetto al trigger",
      },
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        required: false,
        defaultValue: '"bottom"',
        description: "Lato di apertura del menu",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del trigger button",
      },
    ],
    examples: [
      {
        title: "Menu Base",
        description: "ActionMenu con azioni standard",
        code: `const actions = [
  { id: "edit", label: "Modifica", onClick: handleEdit },
  { id: "delete", label: "Elimina", onClick: handleDelete, variant: "danger" }
];

<ActionMenu actions={actions} />`,
      },
      {
        title: "Con Icone Custom",
        description: "Azioni con icone personalizzate",
        code: `import { Copy, Download } from "lucide-react";

const actions = [
  { 
    id: "duplicate", 
    label: "Duplica", 
    icon: <Copy className="w-4 h-4" />,
    onClick: handleDuplicate 
  },
  { 
    id: "export", 
    label: "Esporta", 
    icon: <Download className="w-4 h-4" />,
    onClick: handleExport,
    divider: true 
  }
];`,
      },
    ],
    notes: "Le icone edit, delete, view sono mappate automaticamente. Usa 'divider: true' per separatori.",
  },
};

// Lista ordinata per Component Explorer
export const COMPONENTS_LIST = Object.values(COMPONENTS_DATA).sort((a, b) => a.title.localeCompare(b.title));

// Filtra per categoria
export const getComponentsByCategory = (category: ComponentCategory) =>
  COMPONENTS_LIST.filter((component) => component.category === category);

// Cerca componenti
export const searchComponents = (query: string) =>
  COMPONENTS_LIST.filter(
    (component) =>
      component.title.toLowerCase().includes(query.toLowerCase()) ||
      component.description.toLowerCase().includes(query.toLowerCase())
  );
