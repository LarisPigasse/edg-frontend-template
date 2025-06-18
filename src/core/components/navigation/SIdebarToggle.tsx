// src/core/components/navigation/SidebarToggle.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleSidebarExpansion, selectSidebarExpanded } from "../../../features/settings/uiSlice";
import { ChevronRight } from "lucide-react";

interface SidebarToggleProps {
  className?: string;
  theme?: "light" | "dark";
}

const SidebarToggle: React.FC<SidebarToggleProps> = ({ className = "", theme = "light" }) => {
  const dispatch = useAppDispatch();
  const isExpanded = useAppSelector(selectSidebarExpanded);

  const handleToggle = () => {
    dispatch(toggleSidebarExpansion());
  };

  // Classi per i temi
  const themeClasses = {
    light: "text-gray-600 hover:text-violet-600 hover:bg-gray-100",
    dark: "text-gray-300 hover:text-violet-400 hover:bg-gray-700",
  };

  return (
    <button
      onClick={handleToggle}
      className={`
        p-1.5 rounded-full transition-all duration-200
        ${themeClasses[theme]}
        ${className}
      `}
      title={isExpanded ? "Comprimi sidebar" : "Espandi sidebar"}
      aria-label={isExpanded ? "Comprimi sidebar" : "Espandi sidebar"}
    >
      <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`} />
    </button>
  );
};

export default SidebarToggle;
