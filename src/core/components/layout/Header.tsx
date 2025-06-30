// src/core/components/layout/Header.tsx
import React from "react";
import { ThemedSurface, ThemedText } from "../atomic";
import { UserAvatar, Logo } from "../info";
import { Menu, Settings, Bell } from "lucide-react";
import { useUISettings } from "../../../app/hooks";
import { useIsMobile } from "../../hooks";

interface HeaderProps {
  showLogo?: boolean;
  showNavigation?: boolean;
  userInitials?: string;
  userName?: string;
  userEmail?: string;
}

const Header: React.FC<HeaderProps> = ({ showNavigation = true, userInitials = "AD" }) => {
  const { toggleSettingsMenu, toggleUserMenu, toggleMobileMenu } = useUISettings();
  const isMobile = useIsMobile();

  return (
    <ThemedSurface variant="primary" borderVariant="default" as="header" className="border-b">
      <div className="w-full px-2 sm:px-4">
        <div className="flex justify-between items-center h-12">
          {/* LEFT AREA - Logo + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Logo />
            {/* Mobile Hamburger Menu */}
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

          {/* CENTER AREA - Navigation Menu (Desktop Only) */}
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

          {/* RIGHT AREA - User Actions */}
          <div className="flex items-center space-x-2">
            {/* Notifications (Future) - Solo Desktop */}
            {!isMobile && (
              <button
                className="p-2 rounded-lg hover:bg-bg-hover transition-colors relative"
                title="Notifiche"
                aria-label="Notifiche"
              >
                <Bell className="w-5 h-5" />
                {/* Badge per notifiche non lette */}
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center opacity-0">
                  {/* Count quando ci saranno notifiche */}
                </span>
              </button>
            )}

            {/* User Avatar + Menu */}
            <UserAvatar initials={userInitials} size="md" onClick={toggleUserMenu} className="ml-2" />

            {/* Settings Menu Toggle */}
            <button
              onClick={toggleSettingsMenu}
              className="p-2 rounded-lg hover:bg-bg-hover transition-colors"
              title="Impostazioni app"
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
