import { Home, Settings, Layout, Menu, Github } from "lucide-react";

export const iconMap = {
  dashboard: Home,
  settings: Settings,
  showcase: Layout,
  menu: Menu,
  github: Github,
} as const;

export type IconName = keyof typeof iconMap;
