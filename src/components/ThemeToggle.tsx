"use client";
import React from 'react';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from '@/context/ThemeContext';

const ThemeToggle = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div
            className='relative w-16 h-8 flex items-center cursor-pointer bg-medium dark:bg-[#1DF2F2] rounded-full p-1'
            onClick={toggleDarkMode}
        >
            <MdLightMode className='text-black' size={18} />
            <div
                className='absolute bg-white h-6 w-6 rounded-full shadow-md transform transition-transform duration-300'
                style={darkMode ? { right: '2px' } : { left: '2px' }}
            />
            <MdDarkMode className='ml-auto text-white' size={18} />
        </div>
    );
};

export default ThemeToggle;
