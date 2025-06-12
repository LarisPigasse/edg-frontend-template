// src/features/shared/NotFound.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../core/components/ui";
import { CenteredPage } from "../../core/components/layout";
import { ROUTES } from "../../config";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <CenteredPage maxWidth="lg" background="default" padding="md">
      <div className="text-center">
        {/* 404 Error */}
        <div className="mb-8">
          <h1 className="text-8xl font-bold text-violet-600 dark:text-violet-400 mb-4">404</h1>
          <h2 className="text-page-title mb-4">Pagina non trovata</h2>
          <p className="text-page-subtitle">La pagina che stai cercando non esiste o è stata spostata.</p>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to={ROUTES.DASHBOARD}>
              <Button variant="primary" size="lg" fullWidth>
                Vai alla Dashboard
              </Button>
            </Link>
            <Button variant="outline" size="lg" onClick={handleGoBack} fullWidth>
              Torna Indietro
            </Button>
          </div>
        </div>

        {/* Help Footer */}
        <div className="mt-12 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-center space-x-6 text-sm">
            <a
              href="/docs"
              className="text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
            >
              Documentazione
            </a>
            <a
              href="/support"
              className="text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
            >
              Supporto
            </a>
            <a
              href="/contact"
              className="text-gray-600 hover:text-violet-600 dark:text-gray-400 dark:hover:text-violet-400 transition-colors"
            >
              Contatti
            </a>
          </div>
        </div>
      </div>
    </CenteredPage>
  );
};

export default NotFound;
