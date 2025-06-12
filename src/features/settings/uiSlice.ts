// src/features/settings/uiSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

// Chiavi per localStorage
const STORAGE_KEYS = {
  DARK_MODE: "edg-dark-mode",
  SIDEBAR_VISIBLE: "edg-sidebar-visible",
  FOOTER_VISIBLE: "edg-footer-visible",
  USER_MENU_OPEN: "edg-user-menu-open", // Non persistente, solo state
} as const;

// Tipi per le impostazioni UI
export interface UIState {
  darkMode: boolean;
  sidebarVisible: boolean;
  footerVisible: boolean;
  userMenuOpen: boolean;
}

// Utility per leggere da localStorage con fallback
const getStoredValue = (key: string, defaultValue: boolean): boolean => {
  try {
    const stored = localStorage.getItem(key);
    if (stored === null) return defaultValue;
    return JSON.parse(stored) === true;
  } catch (error) {
    console.warn(`Error reading ${key} from localStorage:`, error);
    return defaultValue;
  }
};

// Utility per salvare in localStorage
const setStoredValue = (key: string, value: boolean): void => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Error saving ${key} to localStorage:`, error);
  }
};

// Stato iniziale con valori da localStorage
const getInitialState = (): UIState => ({
  darkMode: getStoredValue(STORAGE_KEYS.DARK_MODE, false),
  sidebarVisible: getStoredValue(STORAGE_KEYS.SIDEBAR_VISIBLE, true),
  footerVisible: getStoredValue(STORAGE_KEYS.FOOTER_VISIBLE, true),
  userMenuOpen: false, // Non persistente - sempre chiuso all'avvio
});

// Redux slice
const uiSlice = createSlice({
  name: "ui",
  initialState: getInitialState(),
  reducers: {
    // Toggle dark mode
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      setStoredValue(STORAGE_KEYS.DARK_MODE, state.darkMode);

      // Applica immediatamente la classe al DOM
      if (typeof document !== "undefined") {
        if (state.darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    },

    // Set dark mode to specific value
    setDarkMode: (state, action: PayloadAction<boolean>) => {
      state.darkMode = action.payload;
      setStoredValue(STORAGE_KEYS.DARK_MODE, state.darkMode);

      // Applica immediatamente la classe al DOM
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

    // Set sidebar visibility to specific value
    setSidebarVisible: (state, action: PayloadAction<boolean>) => {
      state.sidebarVisible = action.payload;
      setStoredValue(STORAGE_KEYS.SIDEBAR_VISIBLE, state.sidebarVisible);
    },

    // Toggle footer visibility
    toggleFooter: (state) => {
      state.footerVisible = !state.footerVisible;
      setStoredValue(STORAGE_KEYS.FOOTER_VISIBLE, state.footerVisible);
    },

    // Set footer visibility to specific value
    setFooterVisible: (state, action: PayloadAction<boolean>) => {
      state.footerVisible = action.payload;
      setStoredValue(STORAGE_KEYS.FOOTER_VISIBLE, state.footerVisible);
    },

    // Toggle user menu
    toggleUserMenu: (state) => {
      state.userMenuOpen = !state.userMenuOpen;
    },

    // Set user menu state
    setUserMenuOpen: (state, action: PayloadAction<boolean>) => {
      state.userMenuOpen = action.payload;
    },

    // Chiudi user menu (utility per ESC key, click outside, etc.)
    closeUserMenu: (state) => {
      state.userMenuOpen = false;
    },

    // Reset alle impostazioni di default
    resetUISettings: (state) => {
      state.darkMode = false;
      state.sidebarVisible = true;
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
  toggleFooter,
  setFooterVisible,
  toggleUserMenu,
  setUserMenuOpen,
  closeUserMenu,
  resetUISettings,
} = uiSlice.actions;

// Export reducer
export default uiSlice.reducer;

// Selectors
export const selectDarkMode = (state: { ui: UIState }) => state.ui.darkMode;
export const selectSidebarVisible = (state: { ui: UIState }) => state.ui.sidebarVisible;
export const selectFooterVisible = (state: { ui: UIState }) => state.ui.footerVisible;
export const selectUserMenuOpen = (state: { ui: UIState }) => state.ui.userMenuOpen;
export const selectUIState = (state: { ui: UIState }) => state.ui;

// Utility per inizializzare il tema all'avvio dell'app
export const initializeTheme = (): boolean => {
  const darkMode = getStoredValue(STORAGE_KEYS.DARK_MODE, false);

  if (typeof document !== "undefined") {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return darkMode;
};
