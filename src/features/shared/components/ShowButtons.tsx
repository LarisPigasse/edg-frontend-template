// src/features/shared/components/ShowButtons.tsx
import React, { useState } from "react";
import { Button, SubmitButton } from "../../../core/components/ui";

const ShowButtons: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoadingTest = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="space-y-8">
      {/* Button Variants */}
      <div>
        <h3 className="text-element-title mb-2">Varianti</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="info">Info</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      {/* Button Sizes */}
      <div>
        <h3 className="text-element-title mb-2">Dimensioni</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="xs" variant="info">
            Extra Small
          </Button>
          <Button size="sm" variant="info">
            Small
          </Button>
          <Button size="md" variant="info">
            Medium
          </Button>
          <Button size="lg" variant="info">
            Large
          </Button>
        </div>
      </div>

      {/* Button States */}
      <div>
        <h3 className="text-element-title mb-2">Stati</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Normale</Button>
          <Button variant="primary" disabled>
            Disabilitato
          </Button>
          <Button variant="primary" isLoading={isLoading} onClick={handleLoadingTest}>
            {isLoading ? "Caricamento..." : "Test Loading"}
          </Button>
        </div>
      </div>

      {/* Button with Icons */}
      <div>
        <h3 className="text-element-title mb-2">Con Icone</h3>
        <div className="flex flex-wrap gap-3">
          <Button
            variant="primary"
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            }
          >
            Aggiungi
          </Button>
          <Button
            variant="outline"
            rightIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            }
          >
            Continua
          </Button>
          <Button
            variant="danger"
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            }
          >
            Elimina
          </Button>
        </div>
      </div>

      {/* Submit Button Variants */}
      <div>
        <h3 className="text-element-title mb-2">Submit Button</h3>
        <div className="flex flex-wrap gap-3">
          <SubmitButton>Salva</SubmitButton>
          <SubmitButton variant="success">Conferma</SubmitButton>
          <SubmitButton variant="outline">Bozza</SubmitButton>
          <SubmitButton isLoading={isLoading} loadingText="Salvando..." onClick={handleLoadingTest}>
            Salva con Loading
          </SubmitButton>
        </div>
      </div>
    </div>
  );
};

export default ShowButtons;
