// src/app/hooks.ts
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Hook tipizzati per Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Hook personalizzato per le impostazioni UI
export const useUISettings = () => {
  const dispatch = useAppDispatch();
  const uiState = useAppSelector((state) => state.ui);

  return {
    // Stato corrente
    ...uiState,

    // Actions wrapped per convenienza
    toggleDarkMode: () => dispatch({ type: "ui/toggleDarkMode" }),
    setDarkMode: (value: boolean) => dispatch({ type: "ui/setDarkMode", payload: value }),

    toggleSidebar: () => dispatch({ type: "ui/toggleSidebar" }),
    setSidebarVisible: (value: boolean) => dispatch({ type: "ui/setSidebarVisible", payload: value }),

    toggleFooter: () => dispatch({ type: "ui/toggleFooter" }),
    setFooterVisible: (value: boolean) => dispatch({ type: "ui/setFooterVisible", payload: value }),

    toggleUserMenu: () => dispatch({ type: "ui/toggleUserMenu" }),
    setUserMenuOpen: (value: boolean) => dispatch({ type: "ui/setUserMenuOpen", payload: value }),
    closeUserMenu: () => dispatch({ type: "ui/closeUserMenu" }),

    resetUISettings: () => dispatch({ type: "ui/resetUISettings" }),
  };
};
