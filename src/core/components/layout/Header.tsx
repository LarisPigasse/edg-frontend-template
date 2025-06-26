import React from "react";
import { ThemedSurface, ThemedText } from "../atomic";
import { Logo } from "./";
import { ThemedImage } from "../atomic";
import { Menu, Settings } from "lucide-react";
import { useUISettings } from "../../../app/hooks";
import { useIsMobile } from "../../hooks";

interface HeaderProps {
  showLogo?: boolean;
  showNavigation?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNavigation = true }) => {
  const { toggleUserMenu, toggleMobileMenu } = useUISettings();
  const isMobile = useIsMobile();

  return (
    <ThemedSurface variant="primary" borderVariant="default" as="header" className="border-b">
      <div className="w-full px-2 sm:px-4">
        <div className="flex justify-between items-center h-12">
          {/* Sezione Sinistra - Logo */}
          <div className="flex items-center space-x-4">
            <Logo />
            {/* Mobile Hamburger Menu - Solo su mobile */}
            {isMobile && (
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-bg-hover transition-colors md:hidden"
                title="Apri menu navigazione"
                aria-label="Menu navigazione"
              >
                <Menu className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Navigation - Desktop Solo quando non mobile */}
          {showNavigation && !isMobile && (
            <nav className="hidden md:flex items-center space-x-8">
              <ThemedText
                variant="primary"
                as="a"
                href="/dashboard"
                className="text-sm font-medium hover:text-violet-500 transition-colors"
              >
                Dashboard
              </ThemedText>
              <ThemedText
                variant="primary"
                as="a"
                href="/settings"
                className="text-sm font-medium hover:text-violet-500 transition-colors"
              >
                Impostazioni
              </ThemedText>
              <ThemedText
                variant="primary"
                as="a"
                href="/showcase"
                className="text-sm font-medium hover:text-violet-500 transition-colors"
              >
                Showcase
              </ThemedText>
            </nav>
          )}

          {/* User Section */}
          <div className="flex items-center space-x-4">
            {/* User Avatar - Solo su desktop o quando non c'è hamburger */}
            {!isMobile && (
              <div className="flex items-center space-x-3">
                <ThemedImage imageKey="icon" alt="User Avatar" className="w-8 h-8 rounded-full" />
              </div>
            )}

            {/* Settings Menu Toggle */}
            <button
              onClick={toggleUserMenu}
              className="p-2 rounded-lg hover:bg-bg-hover transition-colors"
              title="Apri menu impostazioni"
              aria-label="Menu impostazioni"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </ThemedSurface>
  );
};

export default Header;
