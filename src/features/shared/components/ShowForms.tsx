// src/features/shared/components/ShowForms.tsx
import React, { useState } from "react";
import { Input, SubmitButton } from "../../../core/components/ui";

const ShowForms: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    search: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form inviato con successo!");
    }, 2000);
  };

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const triggerValidation = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Il nome è obbligatorio";
    if (!formData.email) newErrors.email = "L'email è obbligatoria";
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Formato email non valido";
    }
    setErrors(newErrors);
  };

  return (
    <div className="space-y-8">
      {/* Input Variants */}
      <div>
        <h3 className="text-element-title mb-4">Input Variants</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Input Base" placeholder="Inserisci testo..." helperText="Testo di aiuto sotto l'input" />
          <Input
            label="Input con Errore"
            placeholder="Campo con errore"
            error="Questo campo contiene un errore"
            defaultValue="Valore non valido"
          />
          <Input
            label="Input Success"
            variant="success"
            placeholder="Campo validato"
            defaultValue="valore.corretto@email.com"
          />
          <Input label="Input Disabilitato" placeholder="Campo disabilitato" disabled defaultValue="Non modificabile" />
        </div>
      </div>

      {/* Input Sizes */}
      <div>
        <h3 className="text-element-title mb-4">Dimensioni Input</h3>
        <div className="space-y-3">
          <Input inputSize="sm" label="Small Input" placeholder="Input piccolo" />
          <Input inputSize="md" label="Medium Input (Default)" placeholder="Input medio" />
          <Input inputSize="lg" label="Large Input" placeholder="Input grande" />
        </div>
      </div>

      {/* Input with Icons */}
      <div>
        <h3 className="text-element-title mb-4">Input con Icone</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Ricerca"
            placeholder="Cerca..."
            value={formData.search}
            onChange={handleInputChange("search")}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            }
          />
          <Input
            label="Email"
            type="email"
            placeholder="nome@example.com"
            rightIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            }
          />
        </div>
      </div>

      {/* SubmitButton Variants */}
      <div>
        <h3 className="text-element-title mb-4">Submit Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          <SubmitButton>Salva</SubmitButton>
          <SubmitButton variant="success">Conferma</SubmitButton>
          <SubmitButton variant="secondary">Bozza</SubmitButton>
          <SubmitButton variant="outline">Annulla</SubmitButton>
        </div>
      </div>

      {/* SubmitButton Sizes */}
      <div>
        <h3 className="text-element-title mb-4">Submit Button Sizes</h3>
        <div className="flex flex-wrap gap-3">
          <SubmitButton size="md">Medium Submit</SubmitButton>
          <SubmitButton size="lg">Large Submit</SubmitButton>
        </div>
      </div>

      {/* Complete Form Example */}
      <div>
        <h3 className="text-element-title mb-4">Esempio Form Completo</h3>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="Nome"
                placeholder="Il tuo nome"
                value={formData.name}
                onChange={handleInputChange("name")}
                error={errors.name}
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                }
              />
              <Input
                label="Email"
                type="email"
                placeholder="nome@example.com"
                value={formData.email}
                onChange={handleInputChange("email")}
                error={errors.email}
                leftIcon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                }
              />
            </div>

            <Input
              label="Password"
              type="password"
              placeholder="La tua password"
              value={formData.password}
              onChange={handleInputChange("password")}
              helperText="Minimo 8 caratteri"
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              }
            />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <SubmitButton isLoading={isSubmitting} loadingText="Invio in corso..." disabled={isSubmitting}>
                Registrati
              </SubmitButton>
              <SubmitButton variant="outline" type="button" onClick={triggerValidation} disabled={isSubmitting}>
                Valida Form
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>

      {/* Code Examples */}
      <div>
        <h3 className="text-element-title mb-4">Esempi di Codice</h3>
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 text-sm font-mono overflow-x-auto">
          <div className="space-y-2 text-gray-800 dark:text-gray-200">
            <div>
              <span className="text-gray-500 dark:text-gray-400">// Input con label e helper</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;Input</span>
              <span className="text-green-600 dark:text-green-400"> label</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"Nome"</span>
              <span className="text-green-600 dark:text-green-400"> helperText</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"Campo obbligatorio"</span>
              <span className="text-blue-600 dark:text-blue-400"> /&gt;</span>
            </div>
            <div className="mt-3">
              <span className="text-gray-500 dark:text-gray-400">// SubmitButton con loading</span>
            </div>
            <div>
              <span className="text-blue-600 dark:text-blue-400">&lt;SubmitButton</span>
              <span className="text-green-600 dark:text-green-400"> isLoading</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-purple-600 dark:text-purple-400">{"{loading}"}</span>
              <span className="text-green-600 dark:text-green-400"> loadingText</span>
              <span className="text-gray-800 dark:text-gray-200">=</span>
              <span className="text-orange-600 dark:text-orange-400">"Salvando..."</span>
              <span className="text-blue-600 dark:text-blue-400">&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowForms;
