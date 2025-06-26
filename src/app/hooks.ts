// src/app/hooks.ts
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import {
  toggleDarkMode,
  setDarkMode,
  toggleSidebar,
  setSidebarVisible,
  toggleSidebarExpanded,
  setSidebarExpanded,
  toggleFooter,
  setFooterVisible,
  toggleUserMenu,
  setUserMenuOpen,
  closeUserMenu,
  toggleMobileMenu, // ⭐ NUOVO
  setMobileMenuOpen, // ⭐ NUOVO
  closeMobileMenu, // ⭐ NUOVO
  closeAllMenus, // ⭐ NUOVO
  resetUISettings,
  selectDarkMode,
  selectSidebarVisible,
  selectSidebarExpanded,
  selectFooterVisible,
  selectUserMenuOpen,
  selectMobileMenuOpen, // ⭐ NUOVO
} from "../features/settings/uiSlice";

// Hooks tipizzati per Redux
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Hook personalizzato per gestire tutte le impostazioni UI
export const useUISettings = () => {
  const dispatch = useAppDispatch();

  // Selectors
  const darkMode = useAppSelector(selectDarkMode);
  const sidebarVisible = useAppSelector(selectSidebarVisible);
  const sidebarExpanded = useAppSelector(selectSidebarExpanded);
  const footerVisible = useAppSelector(selectFooterVisible);
  const userMenuOpen = useAppSelector(selectUserMenuOpen);
  const mobileMenuOpen = useAppSelector(selectMobileMenuOpen); // ⭐ NUOVO

  return {
    // State
    darkMode,
    sidebarVisible,
    sidebarExpanded,
    footerVisible,
    userMenuOpen,
    mobileMenuOpen, // ⭐ NUOVO

    // Dark Mode Actions
    toggleDarkMode: () => dispatch(toggleDarkMode()),
    setDarkMode: (value: boolean) => dispatch(setDarkMode(value)),

    // Sidebar Actions
    toggleSidebar: () => dispatch(toggleSidebar()),
    setSidebarVisible: (value: boolean) => dispatch(setSidebarVisible(value)),
    toggleSidebarExpanded: () => dispatch(toggleSidebarExpanded()),
    setSidebarExpanded: (value: boolean) => dispatch(setSidebarExpanded(value)),

    // Footer Actions
    toggleFooter: () => dispatch(toggleFooter()),
    setFooterVisible: (value: boolean) => dispatch(setFooterVisible(value)),

    // User Menu Actions
    toggleUserMenu: () => dispatch(toggleUserMenu()),
    setUserMenuOpen: (value: boolean) => dispatch(setUserMenuOpen(value)),
    closeUserMenu: () => dispatch(closeUserMenu()),

    // ⭐ NUOVE Mobile Menu Actions
    toggleMobileMenu: () => dispatch(toggleMobileMenu()),
    setMobileMenuOpen: (value: boolean) => dispatch(setMobileMenuOpen(value)),
    closeMobileMenu: () => dispatch(closeMobileMenu()),
    closeAllMenus: () => dispatch(closeAllMenus()),

    // Utility Actions
    resetUISettings: () => dispatch(resetUISettings()),
  };
};
