// src/App.tsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import { initializeTheme } from "./features/settings/uiSlice";
import MainLayout from "./layouts/MainLayout";
import { Dashboard, Showcase, NotFound } from "./features/shared";
import { UserMenu } from "./core/components/navigation";
import { ROUTES } from "./config";

// Componente per inizializzazione tema
const ThemeInitializer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    // Inizializza il tema all'avvio dell'app
    initializeTheme();
  }, []);

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeInitializer>
        <Router>
          <div className="App">
            {/* Layout principale con routing */}
            <MainLayout>
              <Routes>
                <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.DASHBOARD} replace />} />
                <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
                <Route path={ROUTES.SHOWCASE} element={<Showcase />} />
                <Route path={ROUTES.SETTINGS} element={<NotFound />} />
                <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>

            {/* User Menu - renderizzato al root level per z-index corretto */}
            <UserMenu />
          </div>
        </Router>
      </ThemeInitializer>
    </Provider>
  );
};

export default App;
