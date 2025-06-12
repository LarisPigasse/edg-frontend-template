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
    description: "Panoramica e stato del progetto",
  },
  {
    id: "showcase",
    label: "Showcase",
    href: ROUTES.SHOWCASE,
    icon: "components",
    description: "Galleria componenti UI e esempi",
  },
  {
    id: "settings",
    label: "Impostazioni",
    href: ROUTES.SETTINGS,
    icon: "settings",
    description: "Configurazioni applicazione",
  },
] as const;
