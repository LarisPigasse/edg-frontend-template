// src/features/shared/Dashboard.tsx
import React from "react";
import { useAppSelector } from "../../app/hooks";

const Dashboard: React.FC = () => {
  // Test che gli hook Redux funzionino
  const state = useAppSelector((state) => state);
  console.log("Redux state:", state);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-page-title mb-4">EDG Frontend Template</h1>
        <p className="text-page-subtitle ">
          Template professionale con React, TypeScript, Tailwind CSS e Redux Toolkit. Pronto per lo sviluppo rapido di
          applicazioni moderne.
        </p>
      </div>

      {/* Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">React + TypeScript</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Stack tecnologico configurato</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Redux Toolkit</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
            Redux configurato: {Object.keys(state).length === 0 ? "Store vuoto (OK)" : "Store attivo"}
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">Tailwind CSS</h3>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">Styling system attivo</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
