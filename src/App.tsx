// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Dashboard, Showcase, NotFound } from "./features/shared";
import { ROUTES } from "./config";

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Home route - redirect to dashboard */}
          <Route path={ROUTES.HOME} element={<Dashboard />} />

          {/* Dashboard route */}
          <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />

          {/* Showcase route */}
          <Route path={ROUTES.SHOWCASE} element={<Showcase />} />

          {/* Catch all - 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
