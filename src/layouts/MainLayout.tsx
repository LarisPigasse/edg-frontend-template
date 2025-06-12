// src/layouts/MainLayout.tsx
import React from "react";
import { APP_CONFIG } from "../config";
import { Header, Footer } from "../core/components/layout";

interface MainLayoutProps {
  children: React.ReactNode;
  theme?: "light" | "dark";
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, theme = APP_CONFIG.DEFAULT_THEME as "light" | "dark" }) => {
  const showFooter = APP_CONFIG.APP_FOOTER;

  // Classi per i temi
  const themeClasses = {
    light: {
      container: "bg-gray-50 text-gray-900",
      header: "bg-white border-gray-200 text-gray-900",
      content: "bg-gray-50",
      footer: "bg-gray-100 border-gray-200 text-gray-600",
    },
    dark: {
      container: "bg-gray-900 text-gray-100",
      header: "bg-gray-800 border-gray-700 text-gray-100",
      content: "bg-gray-900",
      footer: "bg-gray-800 border-gray-700 text-gray-300",
    },
  };

  const currentTheme = themeClasses[theme];

  return (
    <div className={`min-h-screen flex flex-col ${currentTheme.container}`}>
      {/* Header */}
      <Header theme={theme} />

      {/* Main Content */}
      <main className={`flex-1 ${currentTheme.content}`}>
        <div className="w-full px-2 sm:px-4 py-8">{children}</div>
      </main>

      {/* Footer - condizionale */}
      {showFooter && <Footer theme={theme} />}
    </div>
  );
};

export default MainLayout;
