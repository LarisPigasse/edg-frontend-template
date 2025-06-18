// src/core/components/layout/Sidebar.tsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";
import { selectSidebarExpanded } from "../../../features/settings/uiSlice";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import { Logo } from "./";
import { iconMap } from "../../utils/";
import type { IconName } from "../../utils/";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const location = useLocation();
  const isExpanded = useAppSelector(selectSidebarExpanded);
  const { components, utils } = useThemeStyles();

  // Determina se un link è attivo
  const isActiveLink = (href: string) => {
    return location.pathname === href;
  };

  // Genera le icone per i menu items
  const getMenuIcon = (iconType: IconName) => {
    const IconComponent = iconMap[iconType];
    return <IconComponent className="w-4 h-4" />;
  };

  // const getMenuIcon = (iconType: string) => {
  //   const iconClasses = "w-5 h-5 flex-shrink-0";

  //   switch (iconType) {
  //     case "dashboard":
  //       return (
  //         <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
  //           />
  //         </svg>
  //       );
  //     case "settings":
  //       return (
  //         <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
  //           />
  //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  //         </svg>
  //       );
  //     case "showcase":
  //       return (
  //         <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
  //           />
  //         </svg>
  //       );
  //     default:
  //       return (
  //         <svg className={iconClasses} fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             strokeWidth={2}
  //             d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
  //           />
  //         </svg>
  //       );
  //   }
  // };

  // 🎨 Crea le classi per menu item usando il design system
  const getMenuItemClasses = (isActive: boolean) => {
    const baseClasses = `flex items-center rounded-lg text-sm font-medium ${utils.transition.normal}`;
    const paddingClasses = isExpanded ? "px-3 py-3" : "px-2 py-2 justify-center";

    if (isActive) {
      return `${baseClasses} ${paddingClasses} ${components.sidebar.menuItemActive}`;
    } else {
      return `${baseClasses} ${paddingClasses} ${components.sidebar.menuItem}`;
    }
  };

  return (
    <aside
      className={`
        fixed left-0 top-0 h-screen z-30 transition-all duration-300 ease-in-out
        ${isExpanded ? "w-64" : "w-12"}
        ${components.sidebar.container}
        ${className}
      `}
    >
      {/* Logo Area */}
      <div className={`h-10 flex items-center ${isExpanded ? "ps-4" : "justify-center"} transition-all duration-300`}>
        <Logo compact={!isExpanded} />
      </div>

      {/* Navigation Menu */}
      <nav className="pt-6">
        <ul className={`space-y-2 ${isExpanded ? "px-2" : "px-2"}`}>
          <li>
            <Link
              to="/dashboard"
              className={getMenuItemClasses(isActiveLink("/dashboard"))}
              title={isExpanded ? undefined : "Dashboard"}
            >
              {getMenuIcon("dashboard")}
              {isExpanded && <span className="ml-3 transition-opacity duration-300">Dashboard</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/settings"
              className={getMenuItemClasses(isActiveLink("/settings"))}
              title={isExpanded ? undefined : "Impostazioni"}
            >
              {getMenuIcon("settings")}
              {isExpanded && <span className="ml-3 transition-opacity duration-300">Impostazioni</span>}
            </Link>
          </li>
          <li>
            <Link
              to="/showcase"
              className={getMenuItemClasses(isActiveLink("/showcase"))}
              title={isExpanded ? undefined : "Showcase"}
            >
              {getMenuIcon("showcase")}
              {isExpanded && <span className="ml-3 transition-opacity duration-300">Showcase</span>}
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
