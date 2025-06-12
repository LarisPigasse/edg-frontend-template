import { configureStore } from "@reduxjs/toolkit";
// Per ora partiamo con uno store vuoto, aggiungeremo i reducer man mano

export const store = configureStore({
  reducer: {
    // Aggiungeremo i reducer qui quando li creiamo
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
