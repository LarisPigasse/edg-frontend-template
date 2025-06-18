// src/core/styles/tokens.ts

export type ThemeMode = "light" | "dark";

// 🎨 Design tokens semplificati - usa classi Tailwind esistenti
export const designTokens = {
  // Superficie base
  surface: {
    light: {
      bg: "bg-gray-50",
      bgElevated: "bg-white",
      border: "border-gray-200",
      text: "text-gray-900",
      textSecondary: "text-gray-600",
    },
    dark: {
      bg: "bg-gray-900",
      bgElevated: "bg-gray-800",
      border: "border-gray-700",
      text: "text-gray-100",
      textSecondary: "text-gray-300",
    },
  },

  // Stati interattivi UNIFICATI
  interactive: {
    light: {
      hover: {
        bg: "hover:bg-gray-100",
        text: "hover:text-violet-600",
        border: "hover:border-gray-300",
      },
      active: {
        bg: "bg-violet-100",
        text: "text-violet-700",
        border: "border-violet-200",
      },
      focus: {
        ring: "focus:ring-violet-500",
        bg: "focus:bg-violet-50",
      },
    },
    dark: {
      hover: {
        bg: "hover:bg-gray-700",
        text: "hover:text-violet-400",
        border: "hover:border-gray-600",
      },
      active: {
        bg: "bg-violet-900",
        text: "text-violet-300",
        border: "border-violet-800",
      },
      focus: {
        ring: "focus:ring-violet-400",
        bg: "focus:bg-gray-800",
      },
    },
  },

  // Componenti specifici
  components: {
    sidebar: {
      light: {
        bg: "bg-white",
        border: "border-gray-200",
      },
      dark: {
        bg: "bg-gray-800",
        border: "border-gray-700",
      },
    },
    header: {
      light: {
        bg: "bg-white",
        border: "border-gray-200",
      },
      dark: {
        bg: "bg-gray-800",
        border: "border-gray-700",
      },
    },
    footer: {
      light: {
        bg: "bg-gray-100",
        border: "border-gray-200",
        text: "text-gray-600",
      },
      dark: {
        bg: "bg-gray-800",
        border: "border-gray-700",
        text: "text-gray-300",
      },
    },
  },

  // Transizioni standardizzate
  transitions: {
    fast: "transition-all duration-200 ease-in-out",
    normal: "transition-all duration-300 ease-in-out",
    slow: "transition-all duration-500 ease-in-out",
  },
} as const;

// Tipi per TypeScript
export type DesignTokens = typeof designTokens;
export type SurfaceTokens = DesignTokens["surface"][ThemeMode];
export type InteractiveTokens = DesignTokens["interactive"][ThemeMode];
export type ComponentTokens = DesignTokens["components"];
