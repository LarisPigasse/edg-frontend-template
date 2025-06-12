// src/core/components/layout/Header.tsx - Esempio integrazione
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Logo } from "./"; // Import del componente Logo esistente
import { UserMenuTrigger } from "../navigation";
import { ROUTES, NAVIGATION_ITEMS } from "../../../config";

interface HeaderProps {
  theme?: "light" | "dark";
}

const Header: React.FC<HeaderProps> = ({ theme = "light" }) => {
  const location = useLocation();

  // Determina se un link è attivo
  const isActiveLink = (href: string) => {
    if (href === ROUTES.HOME || href === ROUTES.DASHBOARD) {
      return location.pathname === ROUTES.HOME || location.pathname === ROUTES.DASHBOARD;
    }
    return location.pathname === href;
  };

  // Classi per il tema (esistenti)
  const themeClasses = {
    light: "bg-white border-gray-200 text-gray-900",
    dark: "bg-gray-800 border-gray-700 text-gray-100",
  };

  return (
    <header className={`w-full border-b sticky top-0 z-40 ${themeClasses[theme]}`}>
      <div className="w-full px-2 sm:px-4 lg:px-4">
        <div className="flex justify-between items-center h-10">
          {/* Sezione Sinistra - Logo (invariata) */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Sezione Centro - Navigation (se esiste) */}
          <nav className="hidden md:flex space-x-4">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium transition-colors
                    ${isActive ? "bg-violet-100 text-violet-700" : "text-gray-600 hover:text-violet-600 hover:bg-gray-100"}
                  `}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Sezione Destra - User Menu Trigger (NUOVO) */}
          <div className="flex items-center">
            <UserMenuTrigger variant="icon" size="md" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
