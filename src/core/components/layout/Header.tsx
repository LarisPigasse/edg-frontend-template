// src/core/components/layout/Header.tsx
import React from "react";
import { Logo } from "./";

interface HeaderProps {
  theme?: "light" | "dark";
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ theme = "light", className = "" }) => {
  // Classi per i temi
  const themeClasses = {
    light: "bg-white border-gray-200 text-gray-900",
    dark: "bg-gray-800 border-gray-700 text-gray-100",
  };

  const currentTheme = themeClasses[theme];

  return (
    <header className={`border-b ${currentTheme} sticky top-0 z-40 ${className}`}>
      <div className="w-full px-2 sm:px-4">
        <div className="flex justify-between items-center h-10">
          {/* Logo */}
          <Logo theme={theme} />

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/dashboard" className="text-sm font-medium hover:text-violet-500 transition-colors duration-200">
              Dashboard
            </a>
            <a href="/settings" className="text-sm font-medium hover:text-violet-500 transition-colors duration-200">
              Impostazioni
            </a>
            <a href="/showcase" className="text-sm font-medium hover:text-violet-500 transition-colors duration-200">
              Showcase
            </a>
          </nav>

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle Placeholder */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              title="Cambia tema"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>

            {/* User Avatar */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm">
                U
              </div>

              {/* User Menu Dropdown Placeholder */}
              <button
                className="hidden sm:flex items-center text-sm font-medium hover:text-violet-500 transition-colors duration-200"
                title="Menu utente"
              >
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
              title="Menu mobile"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
