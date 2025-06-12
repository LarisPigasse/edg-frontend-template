// src/core/components/navigation/UserMenu.tsx
import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { selectUserMenuOpen, closeUserMenu, selectUIState } from "../../../features/settings/uiSlice";

interface UserMenuProps {
  className?: string;
}

const UserMenu: React.FC<UserMenuProps> = ({ className = "" }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectUserMenuOpen);
  const uiState = useAppSelector(selectUIState);

  // Chiudi menu con ESC key
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        dispatch(closeUserMenu());
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscKey);
      // Blocca scroll del body quando menu è aperto
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, dispatch]);

  // Handler per click su backdrop
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      dispatch(closeUserMenu());
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/70  z-40 
          transition-all duration-400 ease-out
          ${isOpen ? "opacity-100" : "opacity-0"}
        `}
        onClick={handleBackdropClick}
        aria-hidden="true"
      />

      {/* Panel Container */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        <div className="flex justify-end h-full">
          {/* Panel */}
          <div
            className={`
              pointer-events-auto w-80 h-full bg-white dark:bg-neutral-900 
              shadow-2xl transform transition-all duration-400 ease-out
              ${isOpen ? "translate-x-0 scale-100" : "translate-x-full scale-95"}
              border-l border-neutral-200 dark:border-neutral-700
              ${className}
            `}
            style={{
              transitionTimingFunction: isOpen
                ? "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                : "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
            }}
          >
            {/* Header */}
            <div
              className={`
                flex items-center justify-between p-6 border-b border-neutral-200 dark:border-neutral-700
                transform transition-all duration-500 ease-out
                ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"}
              `}
              style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
            >
              <h2 className="text-section-title">Impostazioni</h2>
              <button
                onClick={() => dispatch(closeUserMenu())}
                className="p-2 text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200 
                         hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg transition-colors"
                aria-label="Chiudi menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-80px)]">
              {/* Sezione Aspetto */}
              <div
                className={`
                  transform transition-all duration-600 ease-out
                  ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                style={{ transitionDelay: isOpen ? "350ms" : "0ms" }}
              >
                <h3 className="text-element-title mb-4">Aspetto</h3>
                <div className="space-y-4">
                  {/* Dark Mode Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-label">Modalità Scura</label>
                      <p className="text-helper">Attiva tema scuro per ridurre l'affaticamento degli occhi</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ToggleSwitch
                        checked={uiState.darkMode}
                        onChange={() => dispatch({ type: "ui/toggleDarkMode" })}
                        id="darkMode"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sezione Layout */}
              <div
                className={`
                  transform transition-all duration-600 ease-out
                  ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                `}
                style={{ transitionDelay: isOpen ? "450ms" : "0ms" }}
              >
                <h3 className="text-element-title mb-4">Layout</h3>
                <div className="space-y-4">
                  {/* Sidebar Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-label">Sidebar</label>
                      <p className="text-helper">Mostra o nascondi la barra laterale</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ToggleSwitch
                        checked={uiState.sidebarVisible}
                        onChange={() => dispatch({ type: "ui/toggleSidebar" })}
                        id="sidebar"
                      />
                    </div>
                  </div>

                  {/* Footer Toggle */}
                  <div className="flex items-center justify-between">
                    <div>
                      <label className="text-label">Footer</label>
                      <p className="text-helper">Mostra o nascondi il footer della pagina</p>
                    </div>
                    <div className="flex-shrink-0 ml-4">
                      <ToggleSwitch
                        checked={uiState.footerVisible}
                        onChange={() => dispatch({ type: "ui/toggleFooter" })}
                        id="footer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Sezione Debug (solo in development) */}
              {process.env.NODE_ENV === "development" && (
                <div
                  className={`
                    transform transition-all duration-600 ease-out
                    ${isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
                  `}
                  style={{ transitionDelay: isOpen ? "550ms" : "0ms" }}
                >
                  <h3 className="text-element-title mb-4">Debug</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => dispatch({ type: "ui/resetUISettings" })}
                      className="w-full text-left px-3 py-2 text-sm text-red-600 dark:text-red-400 
                               hover:bg-red-50 dark:hover:bg-red-950 rounded-lg transition-colors"
                    >
                      Reset Impostazioni
                    </button>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 p-2 bg-neutral-50 dark:bg-neutral-800 rounded">
                      <pre>{JSON.stringify(uiState, null, 2)}</pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Componente ToggleSwitch riutilizzabile
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
        dark:focus:ring-offset-neutral-900 focus:scale-105
        ${
          checked
            ? "bg-violet-600 dark:bg-violet-500 shadow-lg shadow-violet-600/25"
            : "bg-neutral-200 dark:bg-neutral-700 shadow-inner"
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
