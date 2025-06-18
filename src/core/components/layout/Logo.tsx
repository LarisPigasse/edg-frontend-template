// src/core/components/layout/Logo.tsx
import React from "react";
import { Link } from "react-router-dom";
import { APP_CONFIG } from "../../../config";

interface LogoProps {
  theme?: "light" | "dark";
  compact?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ theme = "light", compact = false, className = "" }) => {
  // Classi per i temi
  const themeClasses = {
    light: "text-gray-900",
    dark: "text-gray-100",
  };

  const currentTheme = themeClasses[theme];

  if (compact) {
    // Versione compatta - solo icona
    return (
      <Link
        to="/"
        className={`flex items-center text-2xl font-bold transition-colors ${currentTheme} ${className}`}
        title={APP_CONFIG.NAME}
      >
        {/* Logo immagine con fallback */}
        <img
          src={APP_CONFIG.BRAND_ICON}
          alt={`${APP_CONFIG.NAME} Logo`}
          className="h-5 mr-2"
          onError={(e) => {
            // Nasconde l'immagine se non trovata
            e.currentTarget.style.display = "none";
          }}
        />
      </Link>
    );
  }

  // Versione completa - icona + testo
  return (
    <Link to="/" className={`flex items-center text-2xl font-bold transition-colors ${currentTheme} ${className}`}>
      {/* Logo immagine con fallback */}
      <img
        src={APP_CONFIG.BRAND_ICON}
        alt={`${APP_CONFIG.NAME} Logo`}
        className="h-5 mr-2"
        onError={(e) => {
          // Nasconde l'immagine se non trovata
          e.currentTarget.style.display = "none";
        }}
      />

      {/* Testo del logo con colori branded */}
      <span className="text-sky-500">ed</span>
      <span className="text-stone-600 dark:text-stone-400">g</span>
      <span className="text-violet-600 font-bold ms-0">Start</span>
    </Link>
  );
};

export default Logo;
