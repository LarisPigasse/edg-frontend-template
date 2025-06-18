// src/layouts/MainLayout.tsx
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectFooterVisible, selectDarkMode, selectSidebarVisible, selectSidebarExpanded } from "../features/settings/uiSlice";
import { Header, Footer, Sidebar } from "../core/components/layout";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Usa gli stati dal Redux store
  const footerVisible = useAppSelector(selectFooterVisible);
  const darkMode = useAppSelector(selectDarkMode);
  const sidebarVisible = useAppSelector(selectSidebarVisible);
  const sidebarExpanded = useAppSelector(selectSidebarExpanded);

  // Determina il tema basato sullo stato Redux
  const theme = darkMode ? "dark" : "light";

  // Determina la larghezza della sidebar
  const sidebarWidth = sidebarVisible ? (sidebarExpanded ? "ml-64" : "ml-12") : "ml-0";

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

  if (sidebarVisible) {
    // Layout con sidebar
    return (
      <div className={`min-h-screen flex ${currentTheme.container}`}>
        {/* Sidebar - occupa tutta l'altezza a sinistra */}
        <Sidebar theme={theme} />

        {/* Contenuto principale - larghezza dinamica basata su sidebar */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarWidth}`}>
          {/* Header - ridotto, senza logo e navigation */}
          <Header theme={theme} showLogo={false} showNavigation={false} />

          {/* Main Content */}
          <main className={`flex-1 ${currentTheme.content}`}>
            <div className="w-full px-2 sm:px-4 py-8">{children}</div>
          </main>

          {/* Footer (se visibile) */}
          {footerVisible && <Footer theme={theme} />}
        </div>
      </div>
    );
  } else {
    // Layout senza sidebar (normale)
    return (
      <div className={`min-h-screen flex flex-col ${currentTheme.container}`}>
        {/* Header - completo con logo e navigation */}
        <Header theme={theme} showLogo={true} showNavigation={true} />

        {/* Main Content */}
        <main className={`flex-1 ${currentTheme.content}`}>
          <div className="w-full px-2 sm:px-4 py-8">{children}</div>
        </main>

        {/* Footer (se visibile) */}
        {footerVisible && <Footer theme={theme} />}
      </div>
    );
  }
};

export default MainLayout;
