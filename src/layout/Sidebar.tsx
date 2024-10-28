// "use client"
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Appassets } from '@/constants/Appassets'
// import ThemeToggle from '@/components/ThemeToggle'
// import { useTheme } from '@/context/ThemeContext'

// const Sidebar = () => {
//     const { darkMode } = useTheme();

//     const menus = ['Experts', 'About', 'Try Child Today'];
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(!isMenuOpen);
//     };

//     return (
//         <>
//             <div className="relative">
//                 <div className="sm:hidden block overflow-hidden">
//                     <div className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-dark rounded-lg">
//                         <Link href="/" aria-label="Home">
//                             <Image
//                                 src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
//                                 alt="Logo"
//                                 height={40}
//                                 width={130}
//                             />
//                         </Link>
//                         <ThemeToggle />
//                         <button
//                             className="focus:outline-none"
//                             onClick={toggleMenu}
//                             aria-label="Toggle menu"
//                         >
//                             <svg
//                                 className="w-6 h-6"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                             </svg>
//                         </button>
//                     </div>

//                     {isMenuOpen && (
//                         <div className="bg-white rounded-lg shadow-md p-4 mt-2 dark:bg-dark transition-transform duration-300 ease-in-out">
//                             <ul className="flex flex-col space-y-2">
//                                 {menus.map((item) => (
//                                     <li key={item}>
//                                         <Link
//                                             href={`/${item.toLowerCase()}`}
//                                             className="font-bold hover:bg-[#1DF2F2] py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out dark:text-white dark:hover:bg-[#1DF2F2] dark:hover:text-black"
//                                             onClick={toggleMenu}
//                                             aria-label={`Navigate to ${item}`}
//                                         >
//                                             {item}
//                                         </Link>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     )}
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Sidebar

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Appassets } from '@/constants/Appassets';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Sidebar = () => {
    const { darkMode } = useTheme();
    const menus = ['Experts', 'About', 'TryChildToday'];
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div className="relative">
            <div className="sm:hidden block">
                <div className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-dark rounded-lg">
                    <Link href="/" aria-label="Home">
                        <Image
                            src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
                            alt="Logo"
                            height={40}
                            width={130}
                        />
                    </Link>
                    <ThemeToggle />
                    <button
                        className="focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>


                <div
                    className={`absolute bg-white rounded-lg w-full border border-content shadow-md p-4  dark:bg-dark transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                    <ul className="flex flex-col space-y-2">
                        {menus.map((item) => (
                            <li key={item}>
                                <Link
                                    href={`/${item.toLowerCase()}`}
                                    className="font-bold hover:bg-[#1DF2F2] py-2 px-4 rounded-lg transition-colors duration-200 ease-in-out dark:text-white dark:hover:bg-[#1DF2F2] dark:hover:text-black"
                                    onClick={() => {
                                        toggleMenu();
                                    }}
                                    aria-label={`Navigate to ${item}`}
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
