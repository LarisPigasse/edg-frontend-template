// src/core/components/navigation/UserMenuTrigger.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { toggleUserMenu, selectUserMenuOpen } from "../../../features/settings/uiSlice";

interface UserMenuTriggerProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "icon" | "avatar" | "button";
}

const UserMenuTrigger: React.FC<UserMenuTriggerProps> = ({ className = "", size = "md", variant = "icon" }) => {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(selectUserMenuOpen);

  // Dimensioni per diverse varianti
  const sizeClasses = {
    sm: {
      icon: "w-8 h-8",
      button: "px-2 py-1 text-sm",
      avatar: "w-8 h-8",
    },
    md: {
      icon: "w-10 h-10",
      button: "px-3 py-2 text-base",
      avatar: "w-10 h-10",
    },
    lg: {
      icon: "w-12 h-12",
      button: "px-4 py-2 text-lg",
      avatar: "w-12 h-12",
    },
  };

  const handleClick = () => {
    dispatch(toggleUserMenu());
  };

  // Variante Icon (default)
  if (variant === "icon") {
    return (
      <button
        onClick={handleClick}
        className={`
          ${sizeClasses[size].icon}
          flex items-center justify-center rounded-lg
          text-neutral-600 dark:text-neutral-300
          hover:text-violet-600 dark:hover:text-violet-400
          hover:bg-neutral-100 dark:hover:bg-neutral-800
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
          dark:focus:ring-offset-neutral-900
          ${isOpen ? "bg-violet-100 dark:bg-violet-900 text-violet-600 dark:text-violet-400" : ""}
          ${className}
        `}
        aria-label="Apri menu impostazioni"
        aria-expanded={isOpen}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
    );
  }

  // Variante Avatar
  if (variant === "avatar") {
    return (
      <button
        onClick={handleClick}
        className={`
          ${sizeClasses[size].avatar}
          flex items-center justify-center rounded-full
          bg-violet-100 dark:bg-violet-900
          text-violet-600 dark:text-violet-400
          hover:bg-violet-200 dark:hover:bg-violet-800
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
          dark:focus:ring-offset-neutral-900
          ${isOpen ? "ring-2 ring-violet-500" : ""}
          ${className}
        `}
        aria-label="Apri menu impostazioni"
        aria-expanded={isOpen}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </button>
    );
  }

  // Variante Button
  return (
    <button
      onClick={handleClick}
      className={`
        ${sizeClasses[size].button}
        flex items-center gap-2 rounded-lg
        text-neutral-700 dark:text-neutral-200
        hover:text-violet-600 dark:hover:text-violet-400
        hover:bg-neutral-100 dark:hover:bg-neutral-800
        border border-neutral-200 dark:border-neutral-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
        dark:focus:ring-offset-neutral-900
        ${isOpen ? "bg-violet-100 dark:bg-violet-900 border-violet-300 dark:border-violet-700" : ""}
        ${className}
      `}
      aria-label="Apri menu impostazioni"
      aria-expanded={isOpen}
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      Impostazioni
    </button>
  );
};

export default UserMenuTrigger;
