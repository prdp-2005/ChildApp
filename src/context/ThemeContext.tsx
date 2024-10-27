// "use client";
// import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

// interface ThemeContextProps {
//     darkMode: boolean;
//     toggleDarkMode: () => void;
// }

// const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// export const useTheme = () => {
//     const context = useContext(ThemeContext);
//     if (!context) {
//         throw new Error("useTheme must be used within a ThemeProvider");
//     }
//     return context;
// };

// export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//     const [darkMode, setDarkMode] = useState(() => {
//         const theme = localStorage.getItem("theme");
//         return theme === "dark";
//     });

//     useEffect(() => {
//         if (darkMode) {
//             document.documentElement.classList.add("dark");
//             localStorage.setItem("theme", "dark");
//         } else {
//             document.documentElement.classList.remove("dark");
//             localStorage.setItem("theme", "light");
//         }
//     }, [darkMode]);

//     const toggleDarkMode = () => setDarkMode((prev) => !prev);

//     return (
//         <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
//             {children}
//         </ThemeContext.Provider>
//     );
// };

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
        const theme = localStorage.getItem("theme");
        setDarkMode(theme === "dark");

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (darkMode !== undefined) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
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
