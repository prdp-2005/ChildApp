"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setTheme('system')
    }, []);

    const currentTheme = mounted ? (theme === "system" ? systemTheme : theme) : "light";

    const toggleDarkMode = () => {
        setTheme(currentTheme === "dark" ? "light" : "dark");
    };

    if (!mounted) {
        return null;
    }

    return (
        <div
            className="relative w-16 h-8 flex items-center cursor-pointer bg-medium dark:bg-[#1DF2F2] rounded-full p-1"
            onClick={toggleDarkMode}
        >
            <MdLightMode className="text-black" size={18} />
            <div
                className="absolute bg-white h-6 w-6 rounded-full shadow-md transition-transform duration-300"
                style={currentTheme === "dark" ? { right: '2px' } : { left: '2px' }}
            />
            <MdDarkMode className="ml-auto text-white" size={18} />
        </div>
    );
};

export default ThemeSwitcher;
