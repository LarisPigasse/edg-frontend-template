// src/config/routes.config.ts

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  SHOWCASE: "/showcase",
  SETTINGS: "/settings",
  NOT_FOUND: "/404",
} as const;

export type RouteKeys = keyof typeof ROUTES;
export type RouteValues = (typeof ROUTES)[RouteKeys];
