// src/core/components/navigation/UserMenu.tsx
import React, { useEffect } from "react";
import { useUISettings } from "../../../app/hooks";
import { ThemedSurface, ThemedText } from "../atomic";
import { X } from "lucide-react";

interface UserMenuProps {
  className?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ className = "" }) => {
  const { userMenuOpen, closeUserMenu, darkMode, sidebarVisible, footerVisible, toggleDarkMode, toggleSidebar, toggleFooter } =
    useUISettings();

  // Chiudi menu con ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && userMenuOpen) {
        closeUserMenu();
      }
    };

    if (userMenuOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Blocca scroll del body quando menu è aperto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [userMenuOpen, closeUserMenu]);

  // Handler per click su backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeUserMenu();
    }
  };

  if (!userMenuOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/70 z-40 
          transition-all duration-400 ease-out
          ${userMenuOpen ? "opacity-100" : "opacity-0"}
        `}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Panel Container */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="flex justify-end h-full">
          {/* Panel */}
          <ThemedSurface
            variant="primary"
            borderVariant="default"
            className={`
              pointer-events-auto w-80 h-full shadow-2xl transform transition-all duration-400 ease-out
              ${userMenuOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"}
              border-l
              ${className}
            `}
            style={{
              transitionTimingFunction: userMenuOpen
                ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            }}
          >
            {/* Header */}
            <ThemedSurface
              variant="secondary"
              borderVariant="default"
              className={`
                flex items-center justify-between p-6 border-b
                transform transition-all duration-500 ease-out
                ${userMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
              `}
              style={{ transitionDelay: userMenuOpen ? "200ms" : "0ms" }}
            >
              <ThemedText variant="primary" className="text-xl font-semibold">
                Impostazioni
              </ThemedText>
              <button
                onClick={closeUserMenu}
                className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-hover rounded-lg transition-colors"
                aria-label="Chiudi menu"
              >
                <X className="w-5 h-5" />
              </button>
            </ThemedSurface>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
              <div
                className={`
                  transform transition-all duration-600 ease-out
                  ${userMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                style={{ transitionDelay: userMenuOpen ? "450ms" : "0ms" }}
              >
                <div className="space-y-4">
                  {/* Dark Mode Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <ThemedText variant="primary" className="font-medium">
                        Dark mode
                      </ThemedText>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ToggleSwitch checked={darkMode} onChange={toggleDarkMode} id="darkMode" />
                    </div>
                  </div>
                  {/* Sidebar Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <ThemedText variant="primary" className="font-medium">
                        Sidebar
                      </ThemedText>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ToggleSwitch checked={sidebarVisible} onChange={toggleSidebar} id="sidebar" />
                    </div>
                  </div>

                  {/* Footer Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <ThemedText variant="primary" className="font-medium">
                        Footer
                      </ThemedText>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ToggleSwitch checked={footerVisible} onChange={toggleFooter} id="footer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ThemedSurface>
        </div>
      </div>
    </>
  );
};

// Componente ToggleSwitch riutilizzabile - AGGIORNATO
interface ToggleSwitchProps {
  checked: boolean;
  onChange: () => void;
  id: string;
  disabled?: boolean;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ checked, onChange, id, disabled = false }) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-labelledby={`${id}-label`}
      onClick={onChange}
      disabled={disabled}
      className={`
        relative inline-flex h-6 w-11 items-center rounded-full 
        transition-all duration-300 ease-out transform hover:scale-105
        focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
        dark:focus:ring-offset-bg-primary focus:scale-105
        ${
          checked
            ? "bg-violet-600 dark:bg-violet-500 shadow-lg shadow-violet-600/25"
            : "bg-gray-300 dark:bg-gray-600 shadow-inner border border-border-default"
        }
        ${disabled ? "opacity-50 cursor-not-allowed transform-none hover:scale-100" : "cursor-pointer active:scale-95"}
      `}
      style={{
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <span
        className={`
          inline-block h-4 w-4 transform rounded-full bg-white 
          transition-all duration-300 ease-out shadow-sm
          ${checked ? "translate-x-6 shadow-md" : "translate-x-1"}
        `}
        style={{
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease",
        }}
      />
    </button>
  );
};

export default UserMenu;
