"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun, Sunset } from "lucide-react";

export type ThemeMode = "dark" | "warm" | "light";

const THEME_EVENT = "rri-theme-change";

const THEMES = [
  { id: "dark" as const, label: "Dark", Icon: Moon },
  { id: "warm" as const, label: "Warm", Icon: Sunset },
  { id: "light" as const, label: "Light", Icon: Sun },
];

function isThemeMode(value: string | null): value is ThemeMode {
  return value === "dark" || value === "warm" || value === "light";
}

function getThemeSnapshot(): ThemeMode {
  const attr = document.documentElement.getAttribute("data-theme");
  if (isThemeMode(attr)) return attr;
  try {
    const stored = localStorage.getItem("rri_theme");
    if (isThemeMode(stored)) return stored;
  } catch {
    // Abaikan jika penyimpanan browser dibatasi
  }
  return "dark";
}

function getServerThemeSnapshot(): ThemeMode {
  return "dark";
}

function subscribeTheme(callback: () => void): () => void {
  const handleStorage = (event: StorageEvent) => {
    if (event.key === "rri_theme") {
      callback();
    }
  };
  window.addEventListener(THEME_EVENT, callback);
  window.addEventListener("storage", handleStorage);
  return () => {
    window.removeEventListener(THEME_EVENT, callback);
    window.removeEventListener("storage", handleStorage);
  };
}

export function ThemeSwitcher() {
  const activeTheme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const handleSelect = (mode: ThemeMode) => {
    document.documentElement.setAttribute("data-theme", mode);
    try {
      localStorage.setItem("rri_theme", mode);
    } catch {
      // Abaikan jika penyimpanan browser dibatasi
    }
    window.dispatchEvent(new Event(THEME_EVENT));
  };

  return (
    <div
      role="group"
      aria-label="Pilih tema tampilan"
      className="inline-flex items-center gap-0.5 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-alt)] p-0.5"
    >
      {THEMES.map(({ id, label, Icon }) => {
        const isActive = activeTheme === id;
        return (
          <button
            key={id}
            type="button"
            onClick={() => handleSelect(id)}
            aria-pressed={isActive}
            aria-label={`Tema ${label}`}
            suppressHydrationWarning
            className={`inline-flex cursor-pointer items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] uppercase transition-all duration-200 sm:px-3 ${
              isActive
                ? "bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)] shadow-xs"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span className="hidden min-[400px]:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );
}
