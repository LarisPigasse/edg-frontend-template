// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/settings/uiSlice";
import persistenceMiddleware from "./middleware/persistenceMiddleware";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora le action di inizializzazione che potrebbero contenere funzioni
        ignoredActions: ["ui/initializeFromStorage"],
      },
    }).concat(persistenceMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export default per compatibilità con App.tsx
export default store;
