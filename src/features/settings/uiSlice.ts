// src/features/settings/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Chiavi per localStorage
const STORAGE_KEYS = {
  DARK_MODE: "edg-dark-mode",
  SIDEBAR_VISIBLE: "edg-sidebar-visible",
  SIDEBAR_EXPANDED: "edg-sidebar-expanded",
  FOOTER_VISIBLE: "edg-footer-visible",
  USER_MENU_OPEN: "edg-user-menu-open", // Non persistente, solo state
} as const;

// Tipi per le impostazioni UI
export interface UIState {
  darkMode: boolean;
  sidebarVisible: boolean;
  sidebarExpanded: boolean;
  footerVisible: boolean;
  userMenuOpen: boolean;
}

// Utility per localStorage
const getStoredValue = (key: string, defaultValue: boolean): boolean => {
  if (typeof window === "undefined") return defaultValue;
  try {
    const stored = localStorage.getItem(key);
    return stored !== null ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const setStoredValue = (key: string, value: boolean): void => {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Fallback silenzioso se localStorage non disponibile
  }
};

// Stato iniziale con valori da localStorage
const getInitialState = (): UIState => ({
  darkMode: getStoredValue(STORAGE_KEYS.DARK_MODE, false),
  sidebarVisible: getStoredValue(STORAGE_KEYS.SIDEBAR_VISIBLE, true), // Default visibile
  sidebarExpanded: getStoredValue(STORAGE_KEYS.SIDEBAR_EXPANDED, true), // Default espansa
  footerVisible: getStoredValue(STORAGE_KEYS.FOOTER_VISIBLE, true),
  userMenuOpen: false, // Non persistente - sempre chiuso all'avvio
});

// Slice per le impostazioni UI
const uiSlice = createSlice({
  name: "ui",
  initialState: getInitialState(),
  reducers: {
    // Dark Mode
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      setStoredValue(STORAGE_KEYS.DARK_MODE, state.darkMode);

      // Aggiorna la classe 'dark' nel DOM
      if (typeof document !== "undefined") {
        if (state.darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },

    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      setStoredValue(STORAGE_KEYS.DARK_MODE, state.darkMode);

      // Aggiorna la classe 'dark' nel DOM
      if (typeof document !== "undefined") {
        if (state.darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },

    // Toggle sidebar visibility
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
      setStoredValue(STORAGE_KEYS.SIDEBAR_VISIBLE, state.sidebarVisible);
    },

    // Toggle sidebar expansion
    toggleSidebarExpansion: (state) => {
      state.sidebarExpanded = !state.sidebarExpanded;
      setStoredValue(STORAGE_KEYS.SIDEBAR_EXPANDED, state.sidebarExpanded);
    },

    // Set sidebar expansion to specific value
    setSidebarExpanded: (state, action: PayloadAction<boolean>) => {
      state.sidebarExpanded = action.payload;
      setStoredValue(STORAGE_KEYS.SIDEBAR_EXPANDED, state.sidebarExpanded);
    }, // src/features/settings/uiSlice.ts

    // Set sidebar visibility to specific value
    setSidebarVisible: (state, action: PayloadAction<boolean>) => {
      state.sidebarVisible = action.payload;
      setStoredValue(STORAGE_KEYS.SIDEBAR_VISIBLE, state.sidebarVisible);
    },

    // Footer
    toggleFooter: (state) => {
      state.footerVisible = !state.footerVisible;
      setStoredValue(STORAGE_KEYS.FOOTER_VISIBLE, state.footerVisible);
    },

    setFooterVisible: (state, action: PayloadAction<boolean>) => {
      state.footerVisible = action.payload;
      setStoredValue(STORAGE_KEYS.FOOTER_VISIBLE, state.footerVisible);
    },

    // User Menu
    toggleUserMenu: (state) => {
      state.userMenuOpen = !state.userMenuOpen;
    },

    setUserMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.userMenuOpen = action.payload;
    },

    closeUserMenu: (state) => {
      state.userMenuOpen = false;
    },

    // Reset alle impostazioni di default
    resetUISettings: (state) => {
      state.darkMode = false;
      state.sidebarVisible = true;
      state.sidebarExpanded = true;
      state.footerVisible = true;
      state.userMenuOpen = false;

      // Pulisci localStorage
      Object.values(STORAGE_KEYS).forEach((key) => {
        if (key !== STORAGE_KEYS.USER_MENU_OPEN) {
          localStorage.removeItem(key);
        }
      });

      // Reset dark mode nel DOM
      if (typeof document !== "undefined") {
        document.documentElement.classList.remove("dark");
      }
    },
  },
});

// Export actions
export const {
  toggleDarkMode,
  setDarkMode,
  toggleSidebar,
  setSidebarVisible,
  toggleSidebarExpansion,
  setSidebarExpanded,
  toggleFooter,
  setFooterVisible,
  toggleUserMenu,
  setUserMenuOpen,
  closeUserMenu,
  resetUISettings,
} = uiSlice.actions;

// Selectors
export const selectDarkMode = (state: { ui: UIState }) => state.ui.darkMode;
export const selectSidebarVisible = (state: { ui: UIState }) => state.ui.sidebarVisible;
export const selectSidebarExpanded = (state: { ui: UIState }) => state.ui.sidebarExpanded;
export const selectFooterVisible = (state: { ui: UIState }) => state.ui.footerVisible;
export const selectUserMenuOpen = (state: { ui: UIState }) => state.ui.userMenuOpen;
export const selectUIState = (state: { ui: UIState }) => state.ui;

// Funzione di inizializzazione tema (da chiamare all'avvio app)
export const initializeTheme = (): boolean => {
  if (typeof window === "undefined") return false;

  const isDark = getStoredValue(STORAGE_KEYS.DARK_MODE, false);

  if (isDark) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  return isDark;
};

// Export del reducer
export default uiSlice.reducer;
