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

  // Tooltip
  tooltip: {
    id: "tooltip",
    title: "Tooltip",
    description: "Tooltip con Radix UI per informazioni contestuali con positioning automatico e accessibility completa",
    category: "ui",
    importPath: 'import { Tooltip } from "../core/components/ui";',
    props: [
      {
        name: "content",
        type: "string",
        required: true,
        description: "Testo del tooltip da visualizzare",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Elemento che triggera il tooltip al hover",
      },
      {
        name: "side",
        type: '"top" | "right" | "bottom" | "left"',
        required: false,
        defaultValue: '"top"',
        description: "Posizione del tooltip rispetto al trigger",
      },
      {
        name: "align",
        type: '"start" | "center" | "end"',
        required: false,
        defaultValue: '"center"',
        description: "Allineamento del tooltip",
      },
      {
        name: "delayDuration",
        type: "number",
        required: false,
        defaultValue: "300",
        description: "Delay di apertura in millisecondi",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del tooltip",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il tooltip",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Tooltip Base",
        description: "Tooltip semplice con testo informativo",
        code: `<Tooltip content="Questa azione eliminerà definitivamente l'elemento">
  <Button variant="danger">Elimina</Button>
</Tooltip>`,
      },
      {
        title: "Posizioni Diverse",
        description: "Tooltip con posizionamento personalizzato",
        code: `<Tooltip content="Tooltip a destra" side="right">
  <Button>Hover Right</Button>
</Tooltip>

<Tooltip content="Tooltip in basso" side="bottom">
  <Button>Hover Bottom</Button>
</Tooltip>`,
      },
      {
        title: "Dimensioni e Delay",
        description: "Tooltip con dimensioni e timing personalizzati",
        code: `<Tooltip 
  content="Tooltip piccolo con delay veloce" 
  size="sm" 
  delayDuration={100}
>
  <Button size="sm">Quick Info</Button>
</Tooltip>

<Tooltip 
  content="Tooltip grande con molto testo esplicativo per dare informazioni dettagliate all'utente" 
  size="lg"
>
  <Button size="lg">Detailed Info</Button>
</Tooltip>`,
      },
      {
        title: "Con Icone",
        description: "Tooltip su elementi icon-only",
        code: `import { HelpCircle, Settings } from "lucide-react";

<Tooltip content="Aiuto e documentazione">
  <button className="p-2 rounded hover:bg-bg-hover">
    <HelpCircle className="w-5 h-5 text-text-secondary" />
  </button>
</Tooltip>

<Tooltip content="Impostazioni utente" side="bottom">
  <button className="p-2 rounded hover:bg-bg-hover">
    <Settings className="w-5 h-5 text-text-secondary" />
  </button>
</Tooltip>`,
      },
    ],
    notes: "Usa positioning automatico con collision detection. Ottimo per icone e azioni che necessitano spiegazioni brevi.",
  },

  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  modal: {
    id: "modal",
    title: "Modal",
    description: "Dialog modale generico con Radix UI, dimensioni configurabili e integrazione completa del theme system",
    category: "feedback",
    importPath: 'import { Modal } from "../core/components/ui";',
    props: [
      {
        name: "isOpen",
        type: "boolean",
        required: true,
        description: "Stato aperto/chiuso del modal",
      },
      {
        name: "onClose",
        type: "() => void",
        required: true,
        description: "Callback per chiusura modal",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description: "Titolo del modal",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Descrizione sotto il titolo",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Contenuto principale del modal",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg" | "xl" | "full"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del modal",
      },
      {
        name: "hideCloseButton",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Nasconde il pulsante X di chiusura",
      },
      {
        name: "preventClose",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Previene chiusura con ESC o click backdrop",
      },
      {
        name: "footer",
        type: "ReactNode",
        required: false,
        description: "Footer personalizzato con pulsanti",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive per il contenuto",
      },
      {
        name: "overlayClassName",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive per l'overlay",
      },
    ],
    examples: [
      {
        title: "Modal Base",
        description: "Modal semplice con header, contenuto e footer",
        code: `<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Conferma Azione"
  description="Descrizione dell'azione da confermare"
  footer={
    <div className="flex justify-end space-x-3">
      <Button variant="ghost" onClick={handleClose}>Annulla</Button>
      <Button variant="primary" onClick={handleConfirm}>Conferma</Button>
    </div>
  }
>
  <div className="p-6">
    <p>Contenuto del modal...</p>
  </div>
</Modal>`,
      },
      {
        title: "Modal con Loading",
        description: "Modal che previene chiusura durante operazioni async",
        code: `<Modal
  isOpen={isOpen}
  onClose={handleClose}
  title="Salva Documento"
  preventClose={isLoading}
  footer={
    <div className="flex justify-end space-x-3">
      <Button variant="ghost" disabled={isLoading}>Annulla</Button>
      <Button 
        variant="primary" 
        isLoading={isLoading}
        loadingText="Salvando..."
        onClick={handleSave}
      >
        Salva
      </Button>
    </div>
  }
>
  <div className="p-6">
    <p>Contenuto del modal...</p>
  </div>
</Modal>`,
      },
      {
        title: "Modal Dimensioni",
        description: "Modal con diverse dimensioni",
        code: `<Modal size="sm" title="Small Modal" isOpen={isOpen} onClose={handleClose}>
  <div className="p-6">Contenuto compatto</div>
</Modal>

<Modal size="xl" title="Large Modal" isOpen={isOpen} onClose={handleClose}>
  <div className="p-6">Contenuto esteso</div>
</Modal>`,
      },
    ],
    notes:
      "Usa Radix UI per accessibility completa. ThemedSurface garantisce coerenza visiva. preventClose per operazioni critiche.",
  },

  confirmmodal: {
    id: "confirmmodal",
    title: "ConfirmModal",
    description: "Modal specializzato per conferme con varianti colore, icone semantiche e stati di caricamento",
    category: "feedback",
    importPath: 'import { ConfirmModal } from "../core/components/ui";',
    props: [
      {
        name: "isOpen",
        type: "boolean",
        required: true,
        description: "Stato aperto/chiuso del modal",
      },
      {
        name: "onClose",
        type: "() => void",
        required: true,
        description: "Callback per chiusura modal",
      },
      {
        name: "onConfirm",
        type: "() => void",
        required: true,
        description: "Callback per conferma",
      },
      {
        name: "title",
        type: "string",
        required: true,
        description: "Titolo del modal",
      },
      {
        name: "message",
        type: "string",
        required: true,
        description: "Messaggio di conferma",
      },
      {
        name: "variant",
        type: '"default" | "danger" | "warning" | "success" | "info"',
        required: false,
        defaultValue: '"default"',
        description: "Variante visiva del modal",
      },
      {
        name: "confirmText",
        type: "string",
        required: false,
        description: "Testo del pulsante di conferma (auto-mapping per variant)",
      },
      {
        name: "cancelText",
        type: "string",
        required: false,
        defaultValue: '"Annulla"',
        description: "Testo del pulsante di annullamento",
      },
      {
        name: "isLoading",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Stato loading del pulsante conferma",
      },
      {
        name: "loadingText",
        type: "string",
        required: false,
        defaultValue: '"Elaborazione..."',
        description: "Testo durante loading",
      },
      {
        name: "details",
        type: "string",
        required: false,
        description: "Dettagli aggiuntivi sotto il messaggio",
      },
    ],
    examples: [
      {
        title: "ConfirmModal Danger",
        description: "Modal di conferma per azioni distruttive",
        code: `<ConfirmModal
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleDelete}
  variant="danger"
  title="Elimina Elemento"
  message="Sei sicuro di voler eliminare questo elemento?"
  details="Questa operazione non può essere annullata."
  isLoading={isDeleting}
  loadingText="Eliminando..."
/>`,
      },
      {
        title: "ConfirmModal Success",
        description: "Modal di conferma per azioni positive",
        code: `<ConfirmModal
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleSave}
  variant="success"
  title="Salva Modifiche"
  message="Vuoi salvare le modifiche apportate?"
  confirmText="Salva Ora"
  isLoading={isSaving}
/>`,
      },
      {
        title: "ConfirmModal Warning",
        description: "Modal di avviso per azioni che richiedono attenzione",
        code: `<ConfirmModal
  isOpen={isOpen}
  onClose={handleClose}
  onConfirm={handleProceed}
  variant="warning"
  title="Attenzione"
  message="Questa azione modificherà configurazioni importanti."
  details="Assicurati di aver fatto un backup prima di procedere."
  confirmText="Procedi Comunque"
/>`,
      },
    ],
    notes:
      "Auto-mapping: danger→'Elimina', success→'Conferma', warning→'Procedi'. Usa CSS custom properties per colori variant.",
  },

  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts
  spinner: {
    id: "spinner",
    title: "Spinner",
    description: "Dots spinner con animazione CSS per indicare stati di caricamento e operazioni in corso",
    category: "ui",
    importPath: 'import { Spinner } from "../core/components/ui";',
    props: [
      {
        name: "size",
        type: '"xs" | "sm" | "md"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del spinner",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
      {
        name: "aria-label",
        type: "string",
        required: false,
        defaultValue: '"Caricamento in corso"',
        description: "Aria label per accessibility",
      },
    ],
    examples: [
      {
        title: "Spinner Base",
        description: "Spinner con dimensioni diverse",
        code: `<div className="flex items-center gap-4">
  <Spinner size="xs" />
  <Spinner size="sm" />
  <Spinner size="md" />
</div>`,
      },
      {
        title: "Spinner con Button",
        description: "Spinner integrato in pulsanti durante loading",
        code: `<Button 
  variant="primary" 
  disabled={isLoading}
  leftIcon={isLoading ? <Spinner size="sm" /> : null}
>
  {isLoading ? 'Caricamento...' : 'Salva'}
</Button>`,
      },
      {
        title: "Spinner Centrato",
        description: "Spinner per aree di contenuto",
        code: `<div className="flex items-center justify-center h-32">
  <div className="text-center">
    <Spinner size="md" />
    <p className="mt-2 text-sm text-text-secondary">
      Caricamento dati...
    </p>
  </div>
</div>`,
      },
      {
        title: "Spinner con Accessibility",
        description: "Spinner con aria-label personalizzato",
        code: `<Spinner 
  size="sm" 
  aria-label="Sincronizzazione in corso"
/>`,
      },
    ],
    notes:
      "Usa colore primary (violet-600) fisso. Animazione ottimizzata con transform per performance. Delay progressivo tra dots.",
  },

  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  card: {
    id: "card",
    title: "Card",
    description: "Contenitore versatile per raggruppare contenuti con varianti visive, hover effects e comportamento clickable",
    category: "layout",
    importPath: 'import { Card } from "../core/components/ui";',
    props: [
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Contenuto del card",
      },
      {
        name: "variant",
        type: '"default" | "elevated" | "outlined" | "flat"',
        required: false,
        defaultValue: '"default"',
        description: "Variante visiva del card",
      },
      {
        name: "padding",
        type: '"none" | "sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Padding interno del card",
      },
      {
        name: "hover",
        type: "boolean",
        required: false,
        description: "Abilita hover effects (auto se clickable)",
      },
      {
        name: "clickable",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Rende il card cliccabile con keyboard support",
      },
      {
        name: "onClick",
        type: "() => void",
        required: false,
        description: "Callback per click (abilita automaticamente clickable)",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Card Base",
        description: "Card con varianti diverse",
        code: `<div className="grid grid-cols-2 gap-4">
  <Card variant="default">
    <h3 className="font-semibold mb-2">Default Card</h3>
    <p className="text-sm text-text-secondary">
      Card con ombra leggera e bordo sottile
    </p>
  </Card>
  
  <Card variant="elevated">
    <h3 className="font-semibold mb-2">Elevated Card</h3>
    <p className="text-sm text-text-secondary">
      Card con ombra più prominente
    </p>
  </Card>
</div>`,
      },
      {
        title: "Card Cliccabili",
        description: "Card interattivi con hover effects",
        code: `<div className="space-y-4">
  <Card 
    variant="outlined" 
    clickable 
    onClick={() => alert('Card cliccato!')}
  >
    <h3 className="font-semibold mb-2">Card Cliccabile</h3>
    <p className="text-sm text-text-secondary">
      Click me! Supporta anche navigazione da tastiera.
    </p>
  </Card>
  
  <Card variant="elevated" hover padding="lg">
    <h3 className="font-semibold mb-2">Card con Hover</h3>
    <p className="text-sm text-text-secondary">
      Hover effects senza essere cliccabile
    </p>
  </Card>
</div>`,
      },
      {
        title: "Info Card",
        description: "Card per informazioni e statistiche",
        code: `<Card variant="flat" padding="lg">
  <div className="flex items-center justify-between">
    <div>
      <h3 className="text-2xl font-bold text-text-primary">1,234</h3>
      <p className="text-sm text-text-secondary">Utenti Attivi</p>
    </div>
    <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900 rounded-lg flex items-center justify-center">
      <Users className="w-6 h-6 text-violet-600" />
    </div>
  </div>
</Card>`,
      },
      {
        title: "Product Card",
        description: "Card per prodotti e contenuti",
        code: `<Card variant="default" clickable onClick={handleProductClick}>
  <img 
    src="/product.jpg" 
    alt="Prodotto" 
    className="w-full h-48 object-cover rounded-t-lg -m-4 mb-4"
  />
  <h3 className="font-semibold mb-2">Nome Prodotto</h3>
  <p className="text-sm text-text-secondary mb-4">
    Descrizione del prodotto con dettagli importanti...
  </p>
  <div className="flex items-center justify-between">
    <span className="text-lg font-bold text-text-primary">€99.99</span>
    <Badge variant="success">Disponibile</Badge>
  </div>
</Card>`,
      },
    ],
    notes: "Usa ThemedSurface per coerenza. Focus con border violet (no ring). Auto-hover se clickable. Keyboard accessible.",
  },

  separator: {
    id: "separator",
    title: "Separator",
    description: "Divisore visivo minimalista per organizzare contenuti con supporto testo decorativo e orientazioni multiple",
    category: "layout",
    importPath: 'import { Separator } from "../core/components/ui";',
    props: [
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        required: false,
        defaultValue: '"horizontal"',
        description: "Orientazione del separator",
      },
      {
        name: "variant",
        type: '"default" | "subtle"',
        required: false,
        defaultValue: '"default"',
        description: "Variante visiva del separator",
      },
      {
        name: "children",
        type: "ReactNode",
        required: false,
        description: "Testo decorativo nel separator (solo horizontal)",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Separator Base",
        description: "Separatori orizzontali semplici",
        code: `<div className="space-y-4">
  <p>Contenuto sopra</p>
  <Separator />
  <p>Contenuto sotto</p>
  
  <Separator variant="subtle" />
  <p>Separator più sottile</p>
</div>`,
      },
      {
        title: "Separator con Testo",
        description: "Separator decorativo con testo nel mezzo",
        code: `<div className="space-y-4">
  <div>Contenuto sezione 1</div>
  <Separator>OR</Separator>
  <div>Contenuto sezione 2</div>
  
  <Separator>2024</Separator>
  <div>Contenuto anno precedente</div>
</div>`,
      },
      {
        title: "Separator Verticale",
        description: "Separatori verticali per layout orizzontali",
        code: `<div className="flex items-center space-x-4">
  <span>Item 1</span>
  <Separator orientation="vertical" className="h-6" />
  <span>Item 2</span>
  <Separator orientation="vertical" className="h-6" variant="subtle" />
  <span>Item 3</span>
</div>`,
      },
      {
        title: "Separator in Layout",
        description: "Uso pratico in sidebar e menu",
        code: `<nav className="space-y-2">
  <a href="/dashboard">Dashboard</a>
  <a href="/projects">Progetti</a>
  <Separator className="my-2" />
  <a href="/settings">Impostazioni</a>
  <a href="/help">Aiuto</a>
</nav>`,
      },
    ],
    notes:
      "Children forzano orientation='horizontal'. Usa variant='subtle' per separazioni meno invasive. Height per vertical deve essere specificata.",
  },

  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  alert: {
    id: "alert",
    title: "Alert",
    description: "Componente per messaggi informativi in-page con varianti semantiche, icone automatiche e dismissal opzionale",
    category: "feedback",
    importPath: 'import { Alert } from "../core/components/ui";',
    props: [
      {
        name: "variant",
        type: '"info" | "success" | "warning" | "danger"',
        required: false,
        defaultValue: '"info"',
        description: "Variante semantica dell'alert",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description: "Titolo dell'alert",
      },
      {
        name: "children",
        type: "ReactNode",
        required: true,
        description: "Contenuto dell'alert",
      },
      {
        name: "closable",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Mostra pulsante di chiusura",
      },
      {
        name: "onClose",
        type: "() => void",
        required: false,
        description: "Callback per chiusura alert",
      },
      {
        name: "icon",
        type: "ReactNode",
        required: false,
        description: "Icona personalizzata (sovrascrive quella di default)",
      },
      {
        name: "hideIcon",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Nascondi icona completamente",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Alert Base",
        description: "Alert con le 4 varianti semantiche",
        code: `<div className="space-y-4">
  <Alert variant="info">
    Questa è un'informazione importante per l'utente.
  </Alert>
  
  <Alert variant="success">
    Operazione completata con successo!
  </Alert>
  
  <Alert variant="warning">
    Attenzione: questa azione potrebbe avere conseguenze.
  </Alert>
  
  <Alert variant="danger">
    Errore: impossibile completare l'operazione.
  </Alert>
</div>`,
      },
      {
        title: "Alert con Titolo",
        description: "Alert con titolo e contenuto dettagliato",
        code: `<div className="space-y-4">
  <Alert variant="success" title="Salvataggio Completato">
    Il documento è stato salvato correttamente nel database.
    Tutte le modifiche sono state applicate.
  </Alert>
  
  <Alert variant="warning" title="Attenzione">
    Il sistema verrà riavviato alle 02:00 per manutenzione programmata.
    Salva il tuo lavoro prima di quell'orario.
  </Alert>
</div>`,
      },
      {
        title: "Alert Dismissible",
        description: "Alert con pulsante di chiusura",
        code: `<Alert 
  variant="info" 
  title="Notifica"
  closable 
  onClose={() => console.log('Alert chiuso')}
>
  Questo alert può essere chiuso dall'utente cliccando la X.
</Alert>`,
      },
      {
        title: "Alert Personalizzati",
        description: "Alert con icone custom o senza icone",
        code: `import { Zap, Bell } from "lucide-react";

<div className="space-y-4">
  <Alert variant="warning" icon={<Zap className="w-5 h-5" />}>
    Alert con icona personalizzata
  </Alert>
  
  <Alert variant="info" hideIcon>
    Alert senza icona per design minimale
  </Alert>
</div>`,
      },
    ],
    notes:
      "Usa CSS custom properties per colori varianti. In-page positioning. Auto-mapping icone: Info, CheckCircle, AlertTriangle, XCircle.",
  },

  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  toast: {
    id: "toast",
    title: "Toast",
    description: "Sistema di notifiche temporanee con Radix UI, positioning configurabile e queue management automatico",
    category: "feedback",
    importPath: 'import { useToast } from "../core/hooks";',
    props: [
      {
        name: "variant",
        type: '"default" | "success" | "warning" | "danger"',
        required: false,
        defaultValue: '"default"',
        description: "Variante semantica del toast (gestita automaticamente dai metodi)",
      },
      {
        name: "title",
        type: "string",
        required: false,
        description: "Titolo del toast",
      },
      {
        name: "description",
        type: "string",
        required: false,
        description: "Descrizione del toast",
      },
      {
        name: "duration",
        type: "number",
        required: false,
        defaultValue: "4000",
        description: "Durata in millisecondi (0 per permanente)",
      },
      {
        name: "action",
        type: "{ label: string; onClick: () => void }",
        required: false,
        description: "Azione opzionale (Undo, View, etc.)",
      },
    ],
    examples: [
      {
        title: "Toast Base",
        description: "Utilizzo base del sistema Toast con hook",
        code: `const { toast } = useToast();

// Toast di default
toast("Operazione completata");

// Toast con titolo
toast("Salvato con successo", {
  title: "Documento",
  duration: 6000
});`,
      },
      {
        title: "Toast Semantici",
        description: "Toast con varianti semantiche",
        code: `const { toast } = useToast();

// Success toast
toast.success("File salvato correttamente");

// Warning toast  
toast.warning("Connessione instabile", {
  duration: 8000
});

// Danger toast
toast.danger("Errore durante il salvataggio");

// Info toast
toast.info("Nuova versione disponibile");`,
      },
      {
        title: "Toast con Azioni",
        description: "Toast con action button per interazioni",
        code: `const { toast } = useToast();

// Toast con azione Undo
toast.success("Elemento eliminato", {
  action: {
    label: "Annulla",
    onClick: () => restoreItem()
  }
});

// Toast con azione View
toast.info("Report generato", {
  title: "Export Completato",
  action: {
    label: "Visualizza",
    onClick: () => openReport()
  }
});`,
      },
      {
        title: "Gestione Toast",
        description: "Controllo avanzato dei toast",
        code: `const { toast, dismiss, dismissAll } = useToast();

// Toast permanente (durata 0)
const id = toast.warning("Connessione persa", { 
  duration: 0,
  action: {
    label: "Riconnetti",
    onClick: () => reconnect()
  }
});

// Chiudi toast specifico
dismiss(id);

// Chiudi tutti i toast
dismissAll();`,
      },
    ],
    notes:
      "Configurabile via TOAST_CONFIG. Max 2 toast contemporanei. Position top-center default. Swipe disabled su mobile. Richiede ToastProvider nel root dell'app.",
  },

  accordion: {
    id: "accordion",
    title: "Accordion",
    description: "Contenuti collassibili con Radix UI, keyboard navigation e smooth animations per FAQ e pannelli informativi",
    category: "ui",
    importPath: 'import { Accordion } from "../core/components/ui";',
    props: [
      {
        name: "type",
        type: '"single" | "multiple"',
        required: false,
        defaultValue: '"single"',
        description: "Modalità accordion - single (un item aperto) o multiple (più items aperti)",
      },
      {
        name: "items",
        type: "AccordionItem[]",
        required: true,
        description: "Array di items dell'accordion",
      },
      {
        name: "defaultValue",
        type: "string | string[]",
        required: false,
        description: "Valore/i di default aperti (string per single, string[] per multiple)",
      },
      {
        name: "collapsible",
        type: "boolean",
        required: false,
        defaultValue: "true",
        description: "Se type='single', permette di chiudere tutti gli item",
      },
      {
        name: "variant",
        type: '"default" | "bordered" | "separated"',
        required: false,
        defaultValue: '"default"',
        description: "Variante visiva dell'accordion",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione dell'accordion",
      },
      {
        name: "onValueChange",
        type: "(value: string | string[]) => void",
        required: false,
        description: "Callback per cambi di stato",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Accordion Single",
        description: "Accordion basic con un solo item aperto alla volta",
        code: `const faqItems = [
  {
    value: "item-1",
    title: "Come posso cambiare la mia password?",
    content: "Vai nelle impostazioni del tuo account e clicca su 'Cambia Password'. Inserisci la password attuale e quella nuova."
  },
  {
    value: "item-2", 
    title: "Come posso contattare il supporto?",
    content: "Puoi contattarci tramite email a support@example.com o tramite il modulo di contatto nella sezione Aiuto."
  }
];

<Accordion
  type="single"
  collapsible
  items={faqItems}
  defaultValue="item-1"
/>`,
      },
      {
        title: "Accordion Multiple",
        description: "Accordion con possibilità di aprire più item contemporaneamente",
        code: `const settingsItems = [
  {
    value: "privacy",
    title: "Impostazioni Privacy",
    content: "Gestisci le tue impostazioni di privacy e controlla chi può vedere le tue informazioni."
  },
  {
    value: "notifications",
    title: "Notifiche",
    content: "Configura quando e come ricevere le notifiche dall'applicazione."
  },
  {
    value: "security",
    title: "Sicurezza",
    content: "Attiva l'autenticazione a due fattori e gestisci i dispositivi connessi."
  }
];

<Accordion
  type="multiple"
  items={settingsItems}
  defaultValue={["privacy", "notifications"]}
/>`,
      },
      {
        title: "Accordion Varianti",
        description: "Diverse varianti visive dell'accordion",
        code: `// Default variant
<Accordion variant="default" items={items} />

// Bordered variant
<Accordion variant="bordered" items={items} />

// Separated variant  
<Accordion variant="separated" items={items} />`,
      },
      {
        title: "Accordion Dimensioni",
        description: "Accordion con diverse dimensioni",
        code: `// Small accordion
<Accordion size="sm" items={items} />

// Medium accordion (default)
<Accordion size="md" items={items} />

// Large accordion
<Accordion size="lg" items={items} />`,
      },
    ],
    notes:
      "Usa type='single' per FAQ, type='multiple' per configurazioni. Keyboard navigation: frecce, Home, End, Space, Enter. Chevron ruota automaticamente.",
  },

  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  progress: {
    id: "progress",
    title: "Progress",
    description: "Progress bar con Radix UI per stati di avanzamento, upload files e loading con modalità indeterminata",
    category: "feedback",
    importPath: 'import { Progress } from "../core/components/ui";',
    props: [
      {
        name: "value",
        type: "number",
        required: false,
        defaultValue: "0",
        description: "Valore corrente (0-100)",
      },
      {
        name: "max",
        type: "number",
        required: false,
        defaultValue: "100",
        description: "Valore massimo",
      },
      {
        name: "variant",
        type: '"default" | "success" | "warning" | "danger" | "info"',
        required: false,
        defaultValue: '"default"',
        description: "Variante colore della progress bar",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione della progress bar",
      },
      {
        name: "showLabel",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Mostra label sopra con percentuale o testo custom",
      },
      {
        name: "label",
        type: "string",
        required: false,
        description: "Testo label personalizzato (default: percentuale)",
      },
      {
        name: "indeterminate",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Modalità indeterminata per loading infinito con shimmer",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Progress Base",
        description: "Progress bar con valori diversi",
        code: `<div className="space-y-4">
  <Progress value={25} />
  <Progress value={50} />
  <Progress value={75} />
  <Progress value={100} />
</div>`,
      },
      {
        title: "Progress con Label",
        description: "Progress bar con label e percentuali",
        code: `<div className="space-y-4">
  <Progress value={60} showLabel />
  <Progress value={80} showLabel label="Download in corso..." />
  <Progress value={45} showLabel label="Installazione" />
</div>`,
      },
      {
        title: "Progress Varianti",
        description: "Progress bar con colori semantici",
        code: `<div className="space-y-4">
  <Progress value={70} variant="default" showLabel />
  <Progress value={85} variant="success" showLabel />
  <Progress value={40} variant="warning" showLabel />
  <Progress value={15} variant="danger" showLabel />
  <Progress value={60} variant="info" showLabel />
</div>`,
      },
      {
        title: "Progress Indeterminato",
        description: "Progress bar per loading senza fine definito",
        code: `<div className="space-y-4">
  <Progress indeterminate showLabel label="Caricamento..." />
  <Progress indeterminate variant="info" showLabel label="Sincronizzazione" />
  <Progress indeterminate variant="success" />
</div>`,
      },
      {
        title: "Progress Dimensioni",
        description: "Progress bar con diverse dimensioni",
        code: `<div className="space-y-4">
  <Progress value={60} size="sm" showLabel label="Small" />
  <Progress value={60} size="md" showLabel label="Medium" />
  <Progress value={60} size="lg" showLabel label="Large" />
</div>`,
      },
    ],
    notes:
      "Usa indeterminate per loading senza durata definita. Varianti colore semantiche per diversi stati. Smooth transitions per value changes.",
  },
  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  tabs: {
    id: "tabs",
    title: "Tabs",
    description: "Componente per organizzare contenuti in schede con varianti visive e responsive scroll",
    category: "navigation",
    importPath: 'import { Tabs } from "../core/components/ui";',
    props: [
      {
        name: "items",
        type: "TabItem[]",
        required: true,
        description: "Array di tab items con id, label e content",
      },
      {
        name: "defaultTab",
        type: "string",
        required: false,
        description: "ID del tab attivo di default (primo tab se non specificato)",
      },
      {
        name: "variant",
        type: '"default" | "pills" | "underline"',
        required: false,
        defaultValue: '"default"',
        description: "Variante visiva dei tab",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione dei tab",
      },
      {
        name: "onTabChange",
        type: "(tabId: string) => void",
        required: false,
        description: "Callback chiamata quando cambia il tab attivo",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Tabs Base",
        description: "Tabs semplici con contenuto diverso",
        code: `const tabItems = [
  {
    id: "overview",
    label: "Panoramica",
    content: <div>Contenuto panoramica...</div>
  },
  {
    id: "details", 
    label: "Dettagli",
    content: <div>Contenuto dettagli...</div>
  },
  {
    id: "settings",
    label: "Impostazioni", 
    content: <div>Contenuto impostazioni...</div>
  }
];

<Tabs items={tabItems} defaultTab="overview" />`,
      },
      {
        title: "Tabs Varianti",
        description: "Diverse varianti visive",
        code: `// Default variant (come Showcase)
<Tabs variant="default" items={items} />

// Pills variant (rounded background)
<Tabs variant="pills" items={items} />

// Underline variant (minimal con linea sotto)
<Tabs variant="underline" items={items} />`,
      },
      {
        title: "Tabs con Callback",
        description: "Gestione cambio tab con callback",
        code: `const [currentTab, setCurrentTab] = useState("tab1");

<Tabs
  items={items}
  defaultTab="tab1"
  onTabChange={(tabId) => {
    setCurrentTab(tabId);
    console.log('Tab changed to:', tabId);
  }}
/>`,
      },
      {
        title: "Tabs Responsive",
        description: "Tabs con scroll orizzontale su mobile",
        code: `const manyTabs = [
  { id: "tab1", label: "Dashboard", content: <Dashboard /> },
  { id: "tab2", label: "Analytics", content: <Analytics /> },
  { id: "tab3", label: "Reports", content: <Reports /> },
  { id: "tab4", label: "Settings", content: <Settings /> },
  { id: "tab5", label: "Users", content: <Users /> },
  { id: "tab6", label: "Permissions", content: <Permissions /> }
];

<Tabs items={manyTabs} variant="pills" />`,
      },
      {
        title: "Tabs con Stati",
        description: "Tab disabilitati e gestione stati",
        code: `const tabsWithStates = [
  { id: "active", label: "Attivo", content: <div>Tab attivo</div> },
  { id: "disabled", label: "Disabilitato", content: <div>Non accessibile</div>, disabled: true },
  { id: "normal", label: "Normale", content: <div>Tab normale</div> }
];

<Tabs items={tabsWithStates} />`,
      },
    ],
    notes: "Content management interno automatico. Responsive scroll su mobile. Pattern validato dal Showcase esistente.",
  },
  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  datepicker: {
    id: "datepicker",
    title: "DatePicker",
    description: "Selezione date con calendario popup, input editabile e validazione integrata per form e filtri",
    category: "form",
    importPath: 'import { DatePicker } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: true,
        description: "Etichetta del campo (floating label)",
      },
      {
        name: "value",
        type: "Date",
        required: false,
        description: "Data selezionata controllata",
      },
      {
        name: "onChange",
        type: "(date: Date | undefined) => void",
        required: false,
        description: "Callback chiamata quando cambia la data",
      },
      {
        name: "format",
        type: '"DD/MM/YYYY" | "MM/DD/YYYY" | "YYYY-MM-DD"',
        required: false,
        defaultValue: '"DD/MM/YYYY"',
        description: "Formato di visualizzazione della data",
      },
      {
        name: "minDate",
        type: "Date",
        required: false,
        description: "Data minima selezionabile",
      },
      {
        name: "maxDate",
        type: "Date",
        required: false,
        description: "Data massima selezionabile",
      },
      {
        name: "disabledDates",
        type: "Date[]",
        required: false,
        defaultValue: "[]",
        description: "Array di date non selezionabili",
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
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del componente",
      },
      {
        name: "fullWidth",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Occupa tutta la larghezza disponibile",
      },
      {
        name: "placeholder",
        type: "string",
        required: false,
        description: "Placeholder quando il campo è vuoto",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il DatePicker",
      },
    ],
    examples: [
      {
        title: "DatePicker Base",
        description: "DatePicker semplice con formato italiano",
        code: `<DatePicker 
  label="Data di nascita"
  format="DD/MM/YYYY"
  placeholder="Seleziona una data"
/>`,
      },
      {
        title: "DatePicker Controllato",
        description: "DatePicker con stato controllato e callback",
        code: `const [selectedDate, setSelectedDate] = useState<Date>();

<DatePicker 
  label="Data appuntamento"
  value={selectedDate}
  onChange={setSelectedDate}
  required
  helperText="Seleziona la data dell'appuntamento"
/>`,
      },
      {
        title: "DatePicker con Validazione",
        description: "DatePicker con date minime, massime e validazione",
        code: `const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

const nextMonth = new Date();
nextMonth.setMonth(nextMonth.getMonth() + 1);

<DatePicker 
  label="Data consegna"
  minDate={tomorrow}
  maxDate={nextMonth}
  error={deliveryError}
  format="DD/MM/YYYY"
  required
/>`,
      },
      {
        title: "DatePicker con Date Disabilitate",
        description: "DatePicker con esclusione di weekend e festivi",
        code: `// Genera weekend del mese corrente
const getWeekends = () => {
  const weekends = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  
  for (let day = 1; day <= 31; day++) {
    const date = new Date(year, month, day);
    if (date.getMonth() !== month) break;
    if (date.getDay() === 0 || date.getDay() === 6) {
      weekends.push(date);
    }
  }
  return weekends;
};

const holidays = [
  new Date(2024, 11, 25), // Natale
  new Date(2024, 11, 26), // Santo Stefano
  new Date(2025, 0, 1),   // Capodanno
];

<DatePicker 
  label="Data lavorativa"
  disabledDates={[...getWeekends(), ...holidays]}
  helperText="Weekend e festivi non disponibili"
  format="DD/MM/YYYY"
/>`,
      },
      {
        title: "DatePicker Formati Diversi",
        description: "DatePicker con formati internazionali",
        code: `<div className="space-y-4">
  <DatePicker 
    label="Formato Italiano"
    format="DD/MM/YYYY"
    size="sm"
  />
  
  <DatePicker 
    label="Formato Americano"
    format="MM/DD/YYYY"
    size="md"
  />
  
  <DatePicker 
    label="Formato ISO"
    format="YYYY-MM-DD"
    size="lg"
  />
</div>`,
      },
      {
        title: "DatePicker in Form",
        description: "Integrazione con form validation",
        code: `const [formData, setFormData] = useState({
  birthDate: undefined as Date | undefined,
  appointmentDate: undefined as Date | undefined,
});

const [errors, setErrors] = useState<Record<string, string>>({});

const validateForm = () => {
  const newErrors: Record<string, string> = {};
  
  if (!formData.birthDate) {
    newErrors.birthDate = "Data di nascita obbligatoria";
  }
  
  if (!formData.appointmentDate) {
    newErrors.appointmentDate = "Data appuntamento obbligatoria";
  } else if (formData.appointmentDate < new Date()) {
    newErrors.appointmentDate = "La data deve essere futura";
  }
  
  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

<form className="space-y-4">
  <DatePicker 
    label="Data di nascita"
    value={formData.birthDate}
    onChange={(date) => setFormData(prev => ({ ...prev, birthDate: date }))}
    maxDate={new Date()}
    error={errors.birthDate}
    required
    fullWidth
  />
  
  <DatePicker 
    label="Data appuntamento"
    value={formData.appointmentDate}
    onChange={(date) => setFormData(prev => ({ ...prev, appointmentDate: date }))}
    minDate={new Date()}
    error={errors.appointmentDate}
    helperText="Seleziona una data futura"
    required
    fullWidth
  />
  
  <Button 
    variant="primary" 
    onClick={validateForm}
    fullWidth
  >
    Conferma Date
  </Button>
</form>`,
      },
    ],
    notes:
      "Usa Radix Popover per positioning. Input editabile con parsing automatico. Calendario con navigation mese/anno e Today button. Integrazione completa con theme system e underline states.",
  },
  timepicker: {
    id: "timepicker",
    title: "TimePicker",
    description: "Selezione orario con dropdown scrollabile, formati 12h/24h e step configurabili per working hours",
    category: "form",
    importPath: 'import { TimePicker } from "../core/components/ui";',
    props: [
      {
        name: "label",
        type: "string",
        required: true,
        description: "Etichetta del campo (floating label)",
      },
      {
        name: "value",
        type: "TimeValue",
        required: false,
        description: "Valore dell'orario selezionato ({ hours: number, minutes: number })",
      },
      {
        name: "onChange",
        type: "(time: TimeValue | undefined) => void",
        required: false,
        description: "Callback chiamata quando cambia l'orario",
      },
      {
        name: "format",
        type: '"12h" | "24h"',
        required: false,
        defaultValue: '"24h"',
        description: "Formato di visualizzazione dell'orario",
      },
      {
        name: "step",
        type: "5 | 10 | 15 | 30",
        required: false,
        defaultValue: "15",
        description: "Step in minuti per l'incremento nelle opzioni",
      },
      {
        name: "minTime",
        type: "TimeValue",
        required: false,
        description: "Orario minimo selezionabile",
      },
      {
        name: "maxTime",
        type: "TimeValue",
        required: false,
        description: "Orario massimo selezionabile",
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
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione del componente",
      },
      {
        name: "fullWidth",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Occupa tutta la larghezza disponibile",
      },
      {
        name: "placeholder",
        type: "string",
        required: false,
        description: "Placeholder personalizzato (default: HH:MM o HH:MM AM/PM)",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita il TimePicker",
      },
    ],
    examples: [
      {
        title: "TimePicker Base",
        description: "TimePicker semplice con formato 24h",
        code: `<TimePicker 
  label="Orario apertura"
  format="24h"
  step={30}
  placeholder="Seleziona orario"
/>`,
      },
      {
        title: "TimePicker 12h",
        description: "TimePicker con formato americano AM/PM",
        code: `const [selectedTime, setSelectedTime] = useState<TimeValue>();

<TimePicker 
  label="Orario appuntamento"
  value={selectedTime}
  onChange={setSelectedTime}
  format="12h"
  step={15}
  required
/>`,
      },
      {
        title: "Working Hours",
        description: "TimePicker limitato agli orari di lavoro",
        code: `<TimePicker 
  label="Orario riunione"
  format="24h"
  step={30}
  minTime={{ hours: 9, minutes: 0 }}
  maxTime={{ hours: 17, minutes: 30 }}
  helperText="Solo orari lavorativi (9:00 - 17:30)"
  required
/>`,
      },
      {
        title: "TimePicker Dimensioni",
        description: "TimePicker con diverse dimensioni",
        code: `<div className="space-y-4">
  <TimePicker 
    label="Small Time"
    size="sm"
    format="24h"
  />
  
  <TimePicker 
    label="Medium Time"
    size="md"
    format="12h"
  />
  
  <TimePicker 
    label="Large Time"
    size="lg"
    format="24h"
    fullWidth
  />
</div>`,
      },
      {
        title: "TimePicker con Validazione",
        description: "TimePicker con errori e step personalizzati",
        code: `const [meetingTime, setMeetingTime] = useState<TimeValue>();
const [error, setError] = useState("");

const validateTime = (time: TimeValue | undefined) => {
  if (!time) {
    setError("Orario obbligatorio");
    return;
  }
  
  const timeInMinutes = time.hours * 60 + time.minutes;
  const lunchStart = 12 * 60; // 12:00
  const lunchEnd = 13 * 60;   // 13:00
  
  if (timeInMinutes >= lunchStart && timeInMinutes < lunchEnd) {
    setError("Non è possibile programmare riunioni durante la pausa pranzo");
  } else {
    setError("");
  }
};

<TimePicker 
  label="Orario riunione"
  value={meetingTime}
  onChange={(time) => {
    setMeetingTime(time);
    validateTime(time);
  }}
  step={15}
  error={error}
  minTime={{ hours: 8, minutes: 0 }}
  maxTime={{ hours: 18, minutes: 0 }}
  required
/>`,
      },
    ],
    notes:
      "Usa step=15 per appuntamenti standard, step=30 per slot più lunghi. Format 12h per utenti US, 24h per Europa. minTime/maxTime per working hours.",
  },
  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  avatar: {
    id: "avatar",
    title: "Avatar",
    description: "Avatar utenti con fallback intelligente, status indicators e forme personalizzabili per profili e liste",
    category: "ui",
    importPath: 'import { Avatar } from "../core/components/ui";',
    props: [
      {
        name: "src",
        type: "string",
        required: false,
        description: "URL dell'immagine avatar",
      },
      {
        name: "alt",
        type: "string",
        required: false,
        description: "Testo alternativo per l'immagine",
      },
      {
        name: "initials",
        type: "string",
        required: false,
        description: "Iniziali da mostrare come fallback (max 2 caratteri)",
      },
      {
        name: "fallback",
        type: "ReactNode",
        required: false,
        description: "Fallback personalizzato (icona o elemento)",
      },
      {
        name: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione dell'avatar",
      },
      {
        name: "shape",
        type: '"circle" | "square" | "rounded"',
        required: false,
        defaultValue: '"circle"',
        description: "Forma dell'avatar",
      },
      {
        name: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "danger" | "info"',
        required: false,
        defaultValue: '"primary"',
        description: "Variante colore per initials/fallback",
      },
      {
        name: "status",
        type: '"online" | "offline" | "busy" | "away"',
        required: false,
        description: "Indicatore di stato utente",
      },
      {
        name: "statusPosition",
        type: '"top-right" | "bottom-right" | "top-left" | "bottom-left"',
        required: false,
        defaultValue: '"bottom-right"',
        description: "Posizione dell'indicatore di stato",
      },
      {
        name: "clickable",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Avatar cliccabile con hover effects",
      },
      {
        name: "onClick",
        type: "() => void",
        required: false,
        description: "Callback per click (richiede clickable=true)",
      },
      {
        name: "bordered",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Aggiunge border bianco intorno all'avatar",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive",
      },
    ],
    examples: [
      {
        title: "Avatar Base",
        description: "Avatar con immagine e fallback automatico",
        code: `<div className="flex items-center gap-4">
  <Avatar 
    src="/user1.jpg" 
    alt="John Doe" 
    size="md" 
  />
  
  <Avatar 
    src="/invalid-url.jpg" 
    alt="Jane Smith" 
    initials="JS" 
    variant="primary"
  />
  
  <Avatar 
    initials="AB" 
    variant="secondary" 
    size="md"
  />
</div>`,
      },
      {
        title: "Dimensioni Avatar",
        description: "Avatar in tutte le dimensioni disponibili",
        code: `<div className="flex items-center gap-4">
  <Avatar initials="XS" size="xs" variant="primary" />
  <Avatar initials="SM" size="sm" variant="secondary" />
  <Avatar initials="MD" size="md" variant="success" />
  <Avatar initials="LG" size="lg" variant="warning" />
  <Avatar initials="XL" size="xl" variant="danger" />
</div>`,
      },
      {
        title: "Forme e Varianti",
        description: "Avatar con forme diverse e varianti colore",
        code: `<div className="space-y-4">
  {/* Forme diverse */}
  <div className="flex items-center gap-4">
    <Avatar initials="CI" shape="circle" variant="primary" />
    <Avatar initials="SQ" shape="square" variant="secondary" />
    <Avatar initials="RO" shape="rounded" variant="info" />
  </div>
  
  {/* Varianti colore */}
  <div className="flex items-center gap-4">
    <Avatar initials="PR" variant="primary" />
    <Avatar initials="SC" variant="secondary" />
    <Avatar initials="SU" variant="success" />
    <Avatar initials="WA" variant="warning" />
    <Avatar initials="DA" variant="danger" />
    <Avatar initials="IN" variant="info" />
  </div>
</div>`,
      },
      {
        title: "Status Indicators",
        description: "Avatar con indicatori di stato utente",
        code: `<div className="flex items-center gap-6">
  <Avatar 
    src="/user1.jpg" 
    alt="Online User" 
    status="online" 
    statusPosition="bottom-right"
    size="lg"
  />
  
  <Avatar 
    initials="BU" 
    status="busy" 
    statusPosition="top-right"
    variant="danger"
    size="lg"
  />
  
  <Avatar 
    initials="AW" 
    status="away" 
    statusPosition="bottom-left"
    variant="warning"
    size="lg"
  />
  
  <Avatar 
    initials="OF" 
    status="offline" 
    variant="secondary"
    size="lg"
  />
</div>`,
      },
      {
        title: "Avatar Interattivi",
        description: "Avatar cliccabili con azioni personalizzate",
        code: `const handleAvatarClick = (user: string) => {
  console.log(\`Clicked on \${user} avatar\`);
  // Apri profilo utente, menu, etc.
};

<div className="flex items-center gap-4">
  <Avatar 
    src="/user1.jpg"
    alt="Profile Avatar"
    clickable
    onClick={() => handleAvatarClick('John')}
    bordered
    size="lg"
    status="online"
  />
  
  <Avatar 
    initials="JS"
    variant="primary"
    clickable
    onClick={() => handleAvatarClick('Jane')}
    size="md"
    status="busy"
  />
  
  <Avatar 
    fallback={<Settings className="w-5 h-5" />}
    variant="secondary"
    clickable
    onClick={() => handleAvatarClick('Settings')}
    shape="rounded"
  />
</div>`,
      },
      {
        title: "Avatar in Lista Utenti",
        description: "Uso pratico in liste e tabelle",
        code: `const users = [
  { id: 1, name: "John Doe", avatar: "/john.jpg", status: "online" },
  { id: 2, name: "Jane Smith", avatar: null, initials: "JS", status: "busy" },
  { id: 3, name: "Bob Wilson", avatar: "/bob.jpg", status: "away" },
  { id: 4, name: "Alice Brown", avatar: null, initials: "AB", status: "offline" },
];

<div className="space-y-3">
  {users.map((user) => (
    <div key={user.id} className="flex items-center gap-3 p-3 rounded-lg hover:bg-bg-hover">
      <Avatar
        src={user.avatar}
        alt={user.name}
        initials={user.initials}
        status={user.status}
        clickable
        onClick={() => openUserProfile(user.id)}
        size="md"
        variant={user.status === 'online' ? 'success' : 'secondary'}
      />
      <div>
        <p className="font-medium text-text-primary">{user.name}</p>
        <p className="text-sm text-text-secondary capitalize">{user.status}</p>
      </div>
    </div>
  ))}
</div>`,
      },
      {
        title: "Avatar Group",
        description: "Gruppo di avatar sovrapposti per team/collaboratori",
        code: `<div className="flex -space-x-2">
  <Avatar 
    src="/user1.jpg" 
    alt="User 1" 
    size="md" 
    bordered
    className="z-30"
  />
  <Avatar 
    src="/user2.jpg" 
    alt="User 2" 
    size="md" 
    bordered
    className="z-20"
  />
  <Avatar 
    initials="JS" 
    variant="primary" 
    size="md" 
    bordered
    className="z-10"
  />
  <Avatar 
    initials="+5" 
    variant="secondary" 
    size="md" 
    bordered
    clickable
    onClick={() => showAllMembers()}
  />
</div>`,
      },
    ],
    notes:
      "Initials sono limitate a 2 caratteri e uppercase automatico. Status indicator con border bianco per contrast. Loading state con skeleton per immagini. Keyboard navigation completa per clickable avatars.",
  },
  // Entry da aggiungere in COMPONENTS_DATA nel file components.data.ts

  navigationmenu: {
    id: "navigationmenu",
    title: "NavigationMenu",
    description: "Menu di navigazione professionale con Radix UI, keyboard navigation e layout flessibili per header e sidebar",
    category: "navigation",
    importPath: 'import { NavigationMenu } from "../core/components/ui";',
    props: [
      {
        name: "items",
        type: "NavigationMenuItem[]",
        required: true,
        description: "Array di menu items con trigger e content",
      },
      {
        name: "orientation",
        type: '"horizontal" | "vertical"',
        required: false,
        defaultValue: '"horizontal"',
        description: "Orientamento del menu principale",
      },
      {
        name: "triggerVariant",
        type: '"default" | "ghost" | "minimal"',
        required: false,
        defaultValue: '"default"',
        description: "Stile dei trigger button",
      },
      {
        name: "size",
        type: '"sm" | "md" | "lg"',
        required: false,
        defaultValue: '"md"',
        description: "Dimensione generale del componente",
      },
      {
        name: "disabled",
        type: "boolean",
        required: false,
        defaultValue: "false",
        description: "Disabilita tutto il navigation menu",
      },
      {
        name: "className",
        type: "string",
        required: false,
        description: "Classi CSS aggiuntive per il container",
      },
    ],
    examples: [
      {
        title: "NavigationMenu Base",
        description: "Menu semplice con dropdown list",
        code: `const menuItems = [
  {
    trigger: "Prodotti",
    content: [
      { 
        title: "Web App", 
        href: "/web-app", 
        description: "Applicazione web completa",
        icon: <Globe className="w-4 h-4" />
      },
      { 
        title: "Mobile App", 
        href: "/mobile", 
        description: "App per iOS e Android",
        icon: <Smartphone className="w-4 h-4" />
      },
      { 
        title: "Desktop", 
        href: "/desktop", 
        description: "Applicazione desktop",
        icon: <Monitor className="w-4 h-4" />
      }
    ]
  },
  {
    trigger: "Soluzioni",
    content: [
      { title: "Per Startup", href: "/startup" },
      { title: "Per Enterprise", href: "/enterprise" },
      { title: "Per Sviluppatori", href: "/developers" }
    ]
  }
];

<NavigationMenu items={menuItems} />`,
      },
      {
        title: "Menu con Gruppi",
        description: "NavigationMenu con content raggruppato",
        code: `const groupedMenuItems = [
  {
    trigger: "Risorse",
    triggerIcon: <BookOpen className="w-4 h-4" />,
    content: [
      {
        title: "Documentazione",
        links: [
          { 
            title: "Getting Started", 
            href: "/docs/getting-started",
            badge: { text: "New", variant: "success" }
          },
          { 
            title: "API Reference", 
            href: "/docs/api",
            description: "Documentazione completa API"
          },
          { 
            title: "Examples", 
            href: "/docs/examples",
            description: "Esempi pratici"
          }
        ]
      },
      {
        title: "Community",
        links: [
          { 
            title: "GitHub", 
            href: "https://github.com/company/repo",
            external: true,
            icon: <Github className="w-4 h-4" />
          },
          { 
            title: "Discord", 
            href: "https://discord.com/invite/company",
            external: true,
            icon: <MessageSquare className="w-4 h-4" />
          }
        ]
      }
    ],
    layout: "list"
  }
];

<NavigationMenu items={groupedMenuItems} />`,
      },
      {
        title: "Layout Grid",
        description: "NavigationMenu con layout a griglia",
        code: `const gridMenuItems = [
  {
    trigger: "Features",
    content: [
      { 
        title: "Authentication", 
        href: "/features/auth",
        description: "Sistema di autenticazione",
        icon: <Shield className="w-4 h-4" />
      },
      { 
        title: "Database", 
        href: "/features/database",
        description: "Gestione dati",
        icon: <Database className="w-4 h-4" />
      },
      { 
        title: "Analytics", 
        href: "/features/analytics",
        description: "Analisi e reporting",
        icon: <BarChart className="w-4 h-4" />
      },
      { 
        title: "Integrations", 
        href: "/features/integrations",
        description: "Integrazioni esterne",
        icon: <Zap className="w-4 h-4" />
      }
    ],
    layout: "grid",
    width: "lg"
  }
];

<NavigationMenu 
  items={gridMenuItems}
  triggerVariant="ghost"
  size="lg"
/>`,
      },
      {
        title: "Mega Menu",
        description: "NavigationMenu con layout mega menu",
        code: `const megaMenuItems = [
  {
    trigger: "Solutions",
    content: [
      {
        title: "By Industry",
        links: [
          { title: "E-commerce", href: "/solutions/ecommerce" },
          { title: "Healthcare", href: "/solutions/healthcare" },
          { title: "Education", href: "/solutions/education" },
          { title: "Finance", href: "/solutions/finance" }
        ]
      },
      {
        title: "By Size",
        links: [
          { 
            title: "Startup", 
            href: "/solutions/startup",
            badge: { text: "Popular", variant: "info" }
          },
          { title: "SMB", href: "/solutions/smb" },
          { title: "Enterprise", href: "/solutions/enterprise" }
        ]
      },
      {
        title: "By Use Case",
        links: [
          { title: "CRM", href: "/solutions/crm" },
          { title: "Project Management", href: "/solutions/pm" },
          { title: "Team Collaboration", href: "/solutions/collaboration" }
        ]
      }
    ],
    layout: "mega",
    width: "xl"
  }
];

<NavigationMenu 
  items={megaMenuItems}
  triggerVariant="minimal"
/>`,
      },
      {
        title: "Menu Verticale",
        description: "NavigationMenu con orientamento verticale per sidebar",
        code: `const verticalMenuItems = [
  {
    trigger: "Dashboard",
    triggerIcon: <LayoutDashboard className="w-4 h-4" />,
    content: [
      { title: "Overview", href: "/dashboard" },
      { title: "Analytics", href: "/dashboard/analytics" },
      { title: "Reports", href: "/dashboard/reports" }
    ]
  },
  {
    trigger: "Projects",
    triggerIcon: <FolderOpen className="w-4 h-4" />,
    content: [
      { 
        title: "All Projects", 
        href: "/projects",
        badge: { text: "12", variant: "default" }
      },
      { title: "Active", href: "/projects/active" },
      { title: "Archived", href: "/projects/archived" }
    ]
  },
  {
    trigger: "Settings",
    triggerIcon: <Settings className="w-4 h-4" />,
    content: [
      { title: "Profile", href: "/settings/profile" },
      { title: "Account", href: "/settings/account" },
      { title: "Billing", href: "/settings/billing" }
    ]
  }
];

<NavigationMenu 
  items={verticalMenuItems}
  orientation="vertical"
  triggerVariant="ghost"
  size="md"
  className="w-64"
/>`,
      },
      {
        title: "Menu con Stati",
        description: "NavigationMenu con items disabilitati e badge",
        code: `const stateMenuItems = [
  {
    trigger: "Products",
    content: [
      { 
        title: "Basic Plan", 
        href: "/plans/basic",
        description: "Per iniziare",
        badge: { text: "Free", variant: "success" }
      },
      { 
        title: "Pro Plan", 
        href: "/plans/pro",
        description: "Per professionisti",
        badge: { text: "Popular", variant: "info" }
      },
      { 
        title: "Enterprise", 
        href: "/plans/enterprise",
        description: "Per grandi team",
        badge: { text: "Coming Soon", variant: "warning" },
        disabled: true
      }
    ]
  },
  {
    trigger: "Beta Features",
    disabled: true,
    content: []
  }
];

<NavigationMenu items={stateMenuItems} />`,
      },
    ],
    notes:
      "Usa Radix UI per keyboard navigation completa. Layout 'list' per menu semplici, 'grid' per features, 'mega' per soluzioni complesse. Orientation 'vertical' per sidebar navigation.",
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
