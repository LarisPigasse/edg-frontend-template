// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "../features/settings/uiSlice";

// Configura lo store Redux
export const store = configureStore({
  reducer: {
    ui: uiReducer,
    // Aggiungi qui altri reducers future
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignora queste action types per serializability check
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// Tipi per TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Export store come default
export default store;
