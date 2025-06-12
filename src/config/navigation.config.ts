// src/config/navigation.config.ts
import { ROUTES } from "./routes.config";

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon: "home" | "components" | "settings";
  description?: string;
}

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: "home",
    description: "Panoramica e dashboard principale",
  },
  {
    id: "showcase",
    label: "Esempi",
    href: ROUTES.SHOWCASE,
    icon: "components",
    description: "Showcase dei componenti UI disponibili",
  },
  {
    id: "settings",
    label: "Impostazioni",
    href: ROUTES.SETTINGS,
    icon: "settings",
    description: "Configurazioni e impostazioni applicazione",
  },
];

// Type exports
export type NavigationIconType = NavigationItem["icon"];
export type NavigationItemId = NavigationItem["id"];
