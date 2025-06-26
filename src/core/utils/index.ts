import { Home, Settings, Package, LayoutDashboard, Palette } from "lucide-react";

/**
 * Utility per combinare classi CSS condizionalmente
 * Versione robusta che gestisce stringhe, undefined, null, boolean
 */
export function cn(...inputs: (string | undefined | null | false | 0)[]): string {
  return inputs.filter(Boolean).join(" ");
}

/**
 * Mapping delle icone Lucide per la navigazione
 */
export const iconMap = {
  home: Home,
  dashboard: LayoutDashboard,
  settings: Settings,
  components: Package,
  showcase: Palette, // Icona più appropriata per showcase
} as const;

export type IconName = keyof typeof iconMap;
