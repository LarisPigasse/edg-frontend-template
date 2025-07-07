import React, { useState } from "react";
import { Label, Input, Button, TextArea, Select, Checkbox, Switch, RadioGroup, FormField } from "../../../core/components/ui";
import { ThemedSurface } from "../../../core/components/atomic";
import { HeaderGroup, TitledSurface } from "../../../core/components/layout";

const ShowForms = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
    message: "", // ✨ Per TextArea
    country: "", // ✨ Per Select
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  // Stato per gestire il caricamento del pulsante di submit della form demo
  const [isFormDemoSubmitting, setIsFormDemoSubmitting] = useState(false);

  // ✨ Stati per nuovi componenti
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // ✨ Stati per RadioGroup
  const [gender, setGender] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [plan, setPlan] = useState("");

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSelectChange = (field: string) => (value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateEmail = () => {
    if (!formData.email) {
      setErrors((prev) => ({ ...prev, email: "Email è richiesta" }));
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrors((prev) => ({ ...prev, email: "Email non valida" }));
    }
  };

  const validatePassword = () => {
    if (!formData.password) {
      setErrors((prev) => ({ ...prev, password: "Password è richiesta" }));
    } else if (formData.password.length < 6) {
      setErrors((prev) => ({ ...prev, password: "Password deve essere almeno 6 caratteri" }));
    }
  };

  // Funzione per la Gestione della submit per la Form Demo
  const handleFormDemoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previeni il comportamento predefinito di submit del browser

    setIsFormDemoSubmitting(true); // Imposta lo stato di caricamento a true

    try {
      console.log("Form Demo inviata!");
      // Simula una chiamata API (sostituisci con la tua logica di invio reale)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula un ritardo di 2 secondi

      console.log("Form Demo inviata con successo!");
      // Qui potresti mostrare un messaggio di successo, reindirizzare, ecc.
    } catch (error) {
      console.error("Errore durante l'invio della Form Demo:", error);
      // Qui potresti mostrare un messaggio di errore all'utente
    } finally {
      setIsFormDemoSubmitting(false); // Imposta lo stato di caricamento a false, indipendentemente dal successo/errore
    }
  };

  return (
    <div className="space-y-8">
      {/* Intestazione */}
      <HeaderGroup title="Form Components" subtitle="Showcase dei componenti per form con floating labels" spacing="tight" />

      {/* Input Showcase */}
      <TitledSurface title="Input Components" padding="lg">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Colonna sinistra - Stati base */}
          <div className="space-y-6">
            <div>
              <Label size="xs" weight="medium" variant="info" className="mb-4 block">
                STATI BASE
              </Label>

              <div className="space-y-4">
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  onBlur={validateEmail}
                  error={errors.email}
                  required
                />

                <Input
                  label="Password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  onBlur={validatePassword}
                  error={errors.password}
                  required
                />

                <Input
                  label="Username"
                  value={formData.username}
                  onChange={handleInputChange("username")}
                  helperText="Minimo 3 caratteri, solo lettere e numeri"
                  required
                />
              </div>
            </div>
          </div>

          {/* Colonna centrale - Stati speciali */}
          <div className="space-y-6">
            <div>
              <Label size="xs" weight="medium" variant="info" className="mb-4 block">
                STATI SPECIALI
              </Label>

              <div className="space-y-4">
                <Input label="Campo Disabilitato" value="Non modificabile" disabled />

                <Input label="Campo con Errore" value="valore-errato" error="Questo campo contiene un errore" />

                <Input
                  label="Telefono (Opzionale)"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  helperText="Formato: +39 123 456 7890"
                />

                <Input label="Campo Pre-compilato" defaultValue="Valore preimpostato" />
              </div>
            </div>
          </div>

          {/* Colonna destra - Form Demo */}
          <TitledSurface title="Form Demo" variant="modal" padding="md">
            <div className="max-w-md mx-auto">
              <form className="space-y-4" onSubmit={handleFormDemoSubmit}>
                <Input label="Il tuo nome" required helperText="Come preferisci essere chiamato" />

                <Input label="Email di contatto" type="email" required />

                <Input label="Messaggio" helperText="Racconta qualcosa di te" />

                <div className="pt-4">
                  <Button
                    type="submit"
                    variant="success"
                    isLoading={isFormDemoSubmitting}
                    loadingText="Invio in corso..."
                    disabled={isFormDemoSubmitting}
                  >
                    Salva Modifiche
                  </Button>
                </div>
              </form>
            </div>
          </TitledSurface>
        </div>
      </TitledSurface>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* TextArea Showcase */}
        <TitledSurface title="TextArea Components" padding="lg" className="h-full" as="div">
          <div className="space-y-4">
            <Label size="xs" weight="medium" variant="info" className="block">
              TEXTAREA BASE
            </Label>

            <TextArea
              label="Descrizione"
              value={formData.message}
              onChange={handleInputChange("message")}
              helperText="Racconta la tua esperienza"
            />

            <TextArea label="Commento breve" showCharCount maxLength={128} minRows={2} maxRows={8} />

            <TextArea
              label="Feedback"
              required
              showCharCount
              maxLength={1000}
              helperText="Il tuo feedback è importante per noi"
            />
          </div>
        </TitledSurface>

        {/* Select Showcase */}
        <TitledSurface title="Select Components" padding="lg" className="h-full" as="div">
          <div className="space-y-4">
            <Label size="xs" weight="medium" variant="info" className="block mb-6">
              SELECT BASE
            </Label>

            <Select
              label="Paese"
              value={formData.country}
              onValueChange={handleSelectChange("country")}
              options={[
                { value: "it", label: "Italia" },
                { value: "us", label: "Stati Uniti" },
                { value: "fr", label: "Francia" },
                { value: "de", label: "Germania" },
                { value: "es", label: "Spagna" },
              ]}
              placeholder="Seleziona il tuo paese"
            />

            <Select
              label="Categoria"
              required
              options={[
                { value: "tech", label: "Tecnologia" },
                { value: "design", label: "Design" },
                { value: "marketing", label: "Marketing" },
                { value: "sales", label: "Vendite" },
              ]}
              helperText="Seleziona la categoria principale"
            />
          </div>

          <div className="space-y-4 mt-8 mb-3">
            <Label size="xs" weight="medium" variant="info" className="block mb-6">
              SELECT SPECIALI
            </Label>

            <Select
              label="Piano"
              options={[
                { value: "free", label: "Free" },
                { value: "pro", label: "Pro" },
                { value: "enterprise", label: "Enterprise", disabled: true },
              ]}
              helperText="Enterprise disponibile su richiesta"
              error="Selezione richiesta"
            />

            <Select
              label="Select Disabilitato"
              disabled
              options={[{ value: "option1", label: "Opzione 1" }]}
              defaultValue="option1"
            />
          </div>
        </TitledSurface>
      </div>
      {/*  Checkbox, Switch e RadioGroup Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TitledSurface title="Checkbox & Switch Components" padding="lg" className="lg:col-span-1">
          <div className="grid gap-6">
            <div className="space-y-6">
              <Label size="xs" weight="medium" variant="info" className="block">
                CHECKBOX COMPONENTS
              </Label>

              <div className="space-y-4">
                <Checkbox
                  label="Accetto i termini e condizioni"
                  required
                  checked={acceptTerms}
                  onCheckedChange={setAcceptTerms}
                />

                <Checkbox
                  label="Newsletter"
                  description="Ricevi aggiornamenti sui nostri prodotti"
                  checked={newsletter}
                  onCheckedChange={setNewsletter}
                />
                <Checkbox label="Checkbox disabilitato" disabled defaultChecked />
              </div>
              <Label size="xs" weight="medium" variant="info" className="block mt-14">
                SWITCH COMPONENTS
              </Label>
              <div className="space-y-4">
                <Switch
                  label="Dark Mode"
                  description="Usa il tema scuro per l'interfaccia"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                />

                <Switch
                  label="Notifiche push"
                  description="Ricevi notifiche quando sei offline"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />

                <Switch label="Switch richiesto" error="Configurazione richiesta" required />

                <Switch label="Switch disabilitato" disabled />
              </div>
            </div>
          </div>
        </TitledSurface>
        {/* RadioGroup Showcase */}
        <TitledSurface title="RadioGroup Components" padding="lg" className="lg:col-span-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-6">
              <Label size="xs" weight="medium" variant="info" className="block">
                RADIOGROUP VERTICAL
              </Label>

              <div className="space-y-6">
                <RadioGroup
                  label="Genere"
                  value={gender}
                  onValueChange={setGender}
                  options={[
                    { value: "male", label: "Maschio" },
                    { value: "female", label: "Femmina" },
                    { value: "other", label: "Altro" },
                  ]}
                  required
                />

                <RadioGroup
                  label="Piano di abbonamento"
                  value={plan}
                  onValueChange={setPlan}
                  options={[
                    { value: "free", label: "Free", description: "Funzionalità di base gratuite" },
                    { value: "pro", label: "Pro", description: "Tutte le funzionalità avanzate" },
                    {
                      value: "enterprise",
                      label: "Enterprise",
                      description: "Supporto dedicato e personalizzazioni",
                      disabled: true,
                    },
                  ]}
                />

                <RadioGroup
                  label="Dimensione piccola"
                  size="sm"
                  options={[
                    { value: "option1", label: "Opzione 1" },
                    { value: "option2", label: "Opzione 2" },
                  ]}
                  defaultValue="option1"
                />
              </div>
            </div>

            <div className="space-y-6">
              <Label size="xs" weight="medium" variant="info" className="block">
                RADIOGROUP HORIZONTAL & STATI
              </Label>

              <div className="space-y-6">
                <RadioGroup
                  label="Metodo di pagamento"
                  orientation="horizontal"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                  options={[
                    { value: "card", label: "Carta" },
                    { value: "paypal", label: "PayPal" },
                    { value: "bank", label: "Bonifico" },
                  ]}
                  required
                />

                <RadioGroup
                  label="RadioGroup con errore"
                  options={[
                    { value: "yes", label: "Sì" },
                    { value: "no", label: "No" },
                  ]}
                  error="Selezione obbligatoria"
                  required
                />

                <RadioGroup
                  label="RadioGroup disabilitato"
                  disabled
                  options={[
                    { value: "disabled1", label: "Opzione disabilitata 1" },
                    { value: "disabled2", label: "Opzione disabilitata 2" },
                  ]}
                  defaultValue="disabled1"
                />

                <RadioGroup
                  label="Dimensione grande"
                  size="lg"
                  options={[
                    { value: "large1", label: "Opzione grande 1" },
                    { value: "large2", label: "Opzione grande 2" },
                  ]}
                />
              </div>
            </div>
          </div>
        </TitledSurface>
      </div>

      {/* ✨ NUOVA SEZIONE: FormField Showcase */}
      <TitledSurface title="FormField Wrapper Examples" variant="primary" padding="lg">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <Label size="xs" weight="medium" variant="info" className="block">
              FORMFIELD CON COMPONENTI INTERNI
            </Label>

            <div className="space-y-6">
              {/* FormField con Input (hideLabel perché Input ha già floating label) */}
              <FormField error={errors.email} helperText="Usa il formato: nome@dominio.com" hideLabel>
                <Input
                  label="Email con FormField"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                />
              </FormField>

              {/* FormField con Select */}
              <FormField helperText="Il paese influenza le opzioni di spedizione" hideLabel>
                <Select
                  label="Paese con FormField"
                  value={formData.country}
                  onValueChange={handleSelectChange("country")}
                  options={[
                    { value: "it", label: "Italia" },
                    { value: "us", label: "Stati Uniti" },
                    { value: "fr", label: "Francia" },
                  ]}
                  placeholder="Seleziona paese"
                />
              </FormField>

              {/* FormField con TextArea */}
              <FormField helperText="Massimo 1000 caratteri per il messaggio" hideLabel>
                <TextArea
                  label="Messaggio con FormField"
                  value={formData.message}
                  onChange={handleInputChange("message")}
                  showCharCount
                  maxLength={1000}
                  minRows={8}
                />
              </FormField>
            </div>
          </div>

          <div className="space-y-6">
            <Label size="xs" weight="medium" variant="info" className="block">
              FORMFIELD CON LABEL ESTERNA
            </Label>

            <div className="space-y-6">
              {/* FormField con RadioGroup (label esterna) */}
              <FormField
                label="Preferenze di contatto"
                required
                description="Scegli come preferisci essere contattato"
                helperText="Puoi modificare questa preferenza in qualsiasi momento"
              >
                <RadioGroup
                  options={[
                    { value: "email", label: "Solo Email", description: "Comunicazioni via email" },
                    { value: "phone", label: "Solo Telefono", description: "Chiamate dirette" },
                    { value: "both", label: "Entrambi", description: "Email e telefono" },
                  ]}
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                />
              </FormField>

              {/* FormField con Checkbox group */}
              <FormField
                label="Consensi privacy"
                required
                description="Leggi e accetta i termini necessari"
                error={!acceptTerms ? "Devi accettare i termini per continuare" : undefined}
              >
                <div className="space-y-3">
                  <Checkbox label="Accetto i termini e condizioni" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
                  <Checkbox label="Accetto la privacy policy" checked={newsletter} onCheckedChange={setNewsletter} />
                </div>
              </FormField>

              {/* FormField con Switch */}
              <FormField
                label="Impostazioni notifiche"
                description="Configura come ricevere le notifiche"
                helperText="Puoi modificare queste impostazioni dal tuo profilo"
                spacing="loose"
              >
                <div className="space-y-4">
                  <Switch
                    label="Notifiche push"
                    description="Ricevi notifiche immediate sul dispositivo"
                    checked={notifications}
                    onCheckedChange={setNotifications}
                  />
                  <Switch
                    label="Email giornaliera"
                    description="Riepilogo giornaliero via email"
                    checked={darkMode}
                    onCheckedChange={setDarkMode}
                  />
                </div>
              </FormField>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Label Showcase */}
      <TitledSurface title="Label Components" padding="lg">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Varianti Label */}
          <div className="space-y-4">
            <Label size="xs" weight="medium" variant="info" className="block">
              VARIANTI DI STILE
            </Label>

            <div className="space-y-3">
              <Label>Label Standard</Label>
              <Label required>Label Obbligatorio</Label>
              <Label optional>Label Opzionale</Label>
              <Label variant="disabled">Label Disabilitato</Label>
              <Label variant="error">Label con Errore</Label>
            </div>
          </div>

          {/* Dimensioni Label */}
          <div className="space-y-4">
            <Label size="xs" weight="medium" variant="info" className="block">
              DIMENSIONI
            </Label>

            <div className="space-y-3">
              <Label size="xs">Label Molto Piccolo</Label>
              <Label size="sm">Label Piccolo</Label>
              <Label size="md">Label Medio</Label>
              <Label size="lg">Label Grande</Label>
            </div>
          </div>
          {/* Pesi Label */}
          <div className="space-y-4">
            <Label size="xs" weight="medium" variant="info" className="block">
              PESI
            </Label>

            <div className="space-y-3">
              <Label weight="normal">Peso Normale</Label>
              <Label weight="medium">Peso Medio</Label>
              <Label weight="semibold">Peso Semi-Bold</Label>
              <Label weight="bold">Peso Bold</Label>
            </div>
          </div>
        </div>
      </TitledSurface>

      {/* Debug Info */}
      <ThemedSurface variant="info" className="p-4 rounded-lg">
        <Label size="sm" weight="semibold" className="mb-2 block">
          Debug - Stato Form
        </Label>
        <pre className="text-xs text-content-secondary overflow-x-auto">
          {JSON.stringify(
            {
              formData,
              errors,
              isFormDemoSubmitting,
              checkboxStates: { acceptTerms, newsletter },
              switchStates: { darkMode, notifications },
            },
            null,
            2
          )}
        </pre>
      </ThemedSurface>
    </div>
  );
};

export default ShowForms;
