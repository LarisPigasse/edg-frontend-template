// src/core/components/layout/Header.tsx
import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { selectSidebarVisible } from "../../../features/settings/uiSlice";
import { useThemeStyles } from "../../hooks/useThemeStyles";
import { Logo } from "./";
import { UserMenuTrigger, SidebarToggle } from "../navigation";
import { Menu } from "lucide-react";

interface HeaderProps {
  className?: string;
  showLogo?: boolean;
  showNavigation?: boolean;
}

const Header: React.FC<HeaderProps> = ({ className = "", showLogo = true, showNavigation = true }) => {
  const sidebarVisible = useAppSelector(selectSidebarVisible);
  const { components, utils } = useThemeStyles();

  return (
    <header className={`${components.header.container} ${className}`}>
      <div className="w-full px-1 sm:px-2">
        <div className="flex justify-between items-center h-10">
          {/* Sezione Sinistra - Sidebar Toggle (se sidebar visibile) + Logo (condizionale) */}
          <div className="flex items-center space-x-2">
            {/* Sidebar Toggle - solo se sidebar è visibile */}
            {sidebarVisible && <SidebarToggle />}

            {/* Logo - solo se showLogo è true */}
            {showLogo && <Logo />}
          </div>

          {/* Navigation - Desktop (condizionale) */}
          {showNavigation && (
            <nav className="hidden md:flex items-center space-x-8">
              <a href="/dashboard" className={`text-sm font-medium hover:text-violet-500 ${utils.transition.fast}`}>
                Dashboard
              </a>
              <a href="/settings" className={`text-sm font-medium hover:text-violet-500 ${utils.transition.fast}`}>
                Impostazioni
              </a>
              <a href="/showcase" className={`text-sm font-medium hover:text-violet-500 ${utils.transition.fast}`}>
                Showcase
              </a>
            </nav>
          )}

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* User Avatar */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm">
                U
              </div>

              {/* User Menu Trigger */}
              <UserMenuTrigger variant="icon" size="sm" className="hidden sm:flex" />
            </div>

            {/* Mobile Menu Toggle */}
            <button className={`md:hidden p-2 rounded-lg ${components.header.button}`} title="Menu mobile">
              <Menu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
