import React from "react";
import { ThemedSurface, ThemedText } from "../atomic";
import { APP_CONFIG } from "../../../config";

interface FooterProps {
  className?: string;
  showVersionInfo?: boolean;
}

const Footer: React.FC<FooterProps> = ({ className = "", showVersionInfo = true }) => {
  return (
    <ThemedSurface variant="primary" borderVariant="default" as="footer" className={`border-t ${className}`}>
      <div className="w-full px-4 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          {/* Copyright e Info Versione */}
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4">
            <ThemedText variant="secondary" className="text-xs">
              {APP_CONFIG.COPYRIGHT}
            </ThemedText>

            {showVersionInfo && (
              <ThemedSurface variant="info" className="flex items-center text-xs px-2 py-0.5 rounded">
                <ThemedText variant="primary" className="font-medium text-xs">
                  v{APP_CONFIG.VERSION}
                </ThemedText>
                {/* Indicatore ambiente di sviluppo */}
                {APP_CONFIG.VERSION.includes("dev") && (
                  <span className="ml-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full" title="Ambiente di sviluppo"></span>
                )}
              </ThemedSurface>
            )}
          </div>

          {/* Links Footer */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center space-x-4 text-xs">
            <ThemedText variant="secondary" as="a" href="/privacy" className="hover:text-violet-500 transition-colors">
              Privacy
            </ThemedText>
            <ThemedText variant="secondary" as="a" href="/terms" className="hover:text-violet-500 transition-colors">
              Termini
            </ThemedText>
            <ThemedText variant="secondary" as="a" href="/support" className="hover:text-violet-500 transition-colors">
              Supporto
            </ThemedText>

            {/* Link social */}
            <ThemedText
              variant="secondary"
              as="a"
              href="https://github.com"
              className="hover:text-violet-500 transition-colors"
              title="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </ThemedText>
          </div>
        </div>
      </div>
    </ThemedSurface>
  );
};

export default Footer;
