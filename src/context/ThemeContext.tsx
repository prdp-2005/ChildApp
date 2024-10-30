"use client";
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean | undefined>(undefined);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            setDarkMode(storedTheme === "dark");
            console.log("Stored theme detected:", storedTheme);
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setDarkMode(systemPrefersDark);
            console.log("System preference detected:", systemPrefersDark ? "dark" : "light");
        }
    }, []);

    useEffect(() => {
        const handleSystemThemeChange = (e: MediaQueryListEvent) => {
            if (!localStorage.getItem("theme")) {
                setDarkMode(e.matches);
                console.log("System theme changed:", e.matches ? "dark" : "light");
            }
        };
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        mediaQuery.onchange = handleSystemThemeChange;

        return () => {
            mediaQuery.onchange = null;
        };
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            console.log("Dark mode enabled");
        } else if (darkMode !== undefined) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            console.log("Light mode enabled");
        }
    }, [darkMode]);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);

    if (darkMode === undefined) return null;

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
