// src/core/hooks/useThemeStyles.ts
import { useAppSelector } from "../../app/hooks";
import { selectDarkMode } from "../../features/settings/uiSlice";
import { designTokens } from "../styles/tokens";
import type { ThemeMode } from "../styles/tokens";

/**
 * Hook centralizzato per gestire tutti gli stili del tema
 * Elimina la necessità di check condizionali sui temi nei componenti
 */
export const useThemeStyles = () => {
  const isDarkMode = useAppSelector(selectDarkMode);
  const currentTheme: ThemeMode = isDarkMode ? "dark" : "light";

  // Token del tema corrente
  const tokens = {
    surface: designTokens.surface[currentTheme],
    interactive: designTokens.interactive[currentTheme],
    components: designTokens.components,
  };

  // Tipo per i token di stile (ora sono classi Tailwind)
  interface StyleTokens {
    bg?: string;
    text?: string;
    border?: string;
    ring?: string;
  }

  // Combina classi Tailwind dai token
  const combineClasses = (tokenPath: StyleTokens): string => {
    const classes: string[] = [];

    if (tokenPath.bg) classes.push(tokenPath.bg);
    if (tokenPath.text) classes.push(tokenPath.text);
    if (tokenPath.border) classes.push(tokenPath.border);
    if (tokenPath.ring) classes.push(tokenPath.ring);

    return classes.join(" ");
  };

  return {
    // Info tema corrente
    theme: currentTheme,
    isDark: isDarkMode,

    // Token raw (per logica custom)
    tokens,

    // 🎯 STILI UNIFICATI - Usa questi invece di check condizionali

    // Stati interattivi base (per menu, icone, buttons)
    interactive: {
      // Per stati normali con hover
      base: `${combineClasses(tokens.surface)} ${designTokens.transitions.fast} ${tokens.interactive.hover.bg} ${
        tokens.interactive.hover.text
      }`,

      // Per stati attivi/selezionati
      active: `${combineClasses(tokens.interactive.active)} ${designTokens.transitions.fast}`,

      // Hover isolato (per casi specifici)
      hover: `${tokens.interactive.hover.bg} ${tokens.interactive.hover.text} ${designTokens.transitions.fast}`,

      // Focus per accessibilità
      focus: `${tokens.interactive.focus.ring} ${tokens.interactive.focus.bg} focus:outline-none focus:ring-2`,
    },

    // Superfici base
    surface: {
      // Contenitore principale
      base: combineClasses(tokens.surface),

      // Elementi elevati (cards, modals, etc)
      elevated: `${tokens.components.sidebar[currentTheme].bg} ${tokens.components.sidebar[currentTheme].border} border`,

      // Solo border
      border: `border ${tokens.surface.border}`,
    },

    // Componenti specifici
    components: {
      sidebar: {
        container: `${tokens.components.sidebar[currentTheme].bg} ${tokens.components.sidebar[currentTheme].border} border-r`,

        // Menu item normale
        menuItem: `flex items-center rounded-lg text-sm font-medium ${designTokens.transitions.normal} ${tokens.interactive.hover.bg} ${tokens.interactive.hover.text}`,

        // Menu item attivo
        menuItemActive: `flex items-center rounded-lg text-sm font-medium ${combineClasses(tokens.interactive.active)}`,
      },

      header: {
        container: `${tokens.components.header[currentTheme].bg} ${tokens.components.header[currentTheme].border} border-b sticky top-0 z-40`,

        // Button generico nell'header
        button: `p-2 rounded-lg ${designTokens.transitions.fast} ${tokens.interactive.hover.bg} ${tokens.interactive.hover.text}`,
      },

      footer: {
        container: `${tokens.components.footer[currentTheme].bg} ${tokens.components.footer[currentTheme].border} border-t`,
      },
    },

    // Utilities
    utils: {
      // Transizioni standard
      transition: {
        fast: designTokens.transitions.fast,
        normal: designTokens.transitions.normal,
        slow: designTokens.transitions.slow,
      },

      // Helper per text colors
      text: {
        primary: tokens.surface.text,
        secondary: tokens.surface.textSecondary,
        interactive: tokens.interactive.hover.text,
      },
    },
  };
};

// Hook specifico per componenti che hanno bisogno solo dell'info tema
export const useCurrentTheme = (): ThemeMode => {
  const isDarkMode = useAppSelector(selectDarkMode);
  return isDarkMode ? "dark" : "light";
};

// Hook per ottenere token specifici senza stili
export const useThemeTokens = () => {
  const currentTheme = useCurrentTheme();
  return {
    theme: currentTheme,
    surface: designTokens.surface[currentTheme],
    interactive: designTokens.interactive[currentTheme],
    components: designTokens.components,
  };
};
