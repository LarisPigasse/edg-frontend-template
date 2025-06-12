// src/core/components/layout/Logo.tsx
import { APP_CONFIG, ROUTES } from "../../../config";

interface LogoProps {
  theme?: "light" | "dark";
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ theme = "light", className = "" }) => {
  // Classi per i temi
  const themeClasses = {
    light: "text-gray-800 hover:text-gray-900",
    dark: "text-gray-100 hover:text-gray-50",
  };

  return (
    <a
      href={ROUTES.HOME}
      className={`flex items-center text-2xl font-bold transition-colors ${themeClasses[theme]} ${className}`}
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

      {/* Testo del logo con colori branded */}
      <span className="text-sky-500">ed</span>
      <span className="text-stone-600 dark:text-stone-400">g</span>
      <span className="text-violet-600 font-bold ms-0">Start</span>
    </a>
  );
};

export default Logo;
