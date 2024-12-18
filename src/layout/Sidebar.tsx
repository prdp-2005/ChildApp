// 'use client';
// import React, { useRef, useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Appassets } from '@/constants/Appassets';
// import ThemeToggle from '@/components/ThemeToggle';
// import { useTheme } from 'next-themes';
// import Lanugauge from '@/components/Language';
// import { usePathname } from 'next/navigation';
// import { useClickAway } from 'react-use';
// const Sidebar = () => {
//     const { theme, systemTheme } = useTheme();
//     const currentTheme = theme === 'system' ? systemTheme : theme;
//     const darkMode = currentTheme === 'dark';
//     const dropdownRef = useRef(null);
//     useClickAway(dropdownRef, () => setMenuOpen(false));
//     const pathname = usePathname();
//     const menus = ['Experts', 'About', 'TryChildToday'];
//     const [isMenuOpen, setMenuOpen] = useState(false);

//     const toggleMenu = () => {
//         setMenuOpen(prev => !prev);
//     };
//     return (
//         <div ref={dropdownRef} className="relative">
//             <div className="sm:hidden block fixed top-2  z-50 w-full">
//                 <div className="border border-black dark:border dark:border-[#1DF2F2] z-50 w-full flex justify-between items-center p-4 bg-white shadow-sm dark:bg-dark rounded-full">
//                     <Link href="/">
//                         <Image
//                             src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
//                             alt="Logo"
//                             height={40}
//                             width={130}
//                         />
//                     </Link>
//                     <Lanugauge />
//                     <button
//                         className="focus:outline-none"
//                         onClick={toggleMenu}
//                     >
//                         <svg
//                             className="w-6 h-6"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                         >
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//                         </svg>
//                     </button>

//                 </div>


//                 <div
//                     className={`mt-1 mx-1 flex  absolute bg-white rounded-lg w-[98%] border border-dark dark:border-content shadow-md p-4  dark:bg-dark transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
//                 >
//                     <ul className="flex flex-col space-y-2 gap-2">
//                         {menus.map((item) => {
//                             const href = `/${item.toLowerCase()}`;
//                             const isActive = pathname === href;
//                             const ismain = pathname === '/';

//                             return (
//                                 <li onClick={() => setMenuOpen(false)} key={item}>
//                                     {item === 'TryChildToday' ? (
//                                         <Link href={'/'}><button
//                                             className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${(isActive || ismain) ? 'bg-[#1DF2F2] text-white' : 'hover:bg-[#1DF2F2] hover:text-white'
//                                                 }`}
//                                         >
//                                             {item}
//                                         </button>
//                                         </Link>
//                                     ) : (
//                                         <Link
//                                             href={href}
//                                             className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${isActive ? 'bg-[#1DF2F2] text-white' : 'hover:bg-[#1DF2F2] hover:text-white'
//                                                 }`}
//                                         >
//                                             {item}
//                                         </Link>
//                                     )}
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                     <div className='absolute right-2 '>
//                         <ThemeToggle />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;

'use client';
import React, { useContext, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Appassets } from '@/constants/Appassets';
import { useTheme } from 'next-themes';
import Lanugauge from '@/components/Language';
import { usePathname } from 'next/navigation';
import { useClickAway } from 'react-use';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
const Sidebar = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => setMenuOpen(false));
    const pathname = usePathname();
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { slug } = useContext(LanguageContext);

    const menus = static_text.slice(0, 3).map((item) => {
        const translatedText = item.data.find((dataItem) => dataItem.language === slug)?.text || "";
        return { id: item.id, text: translatedText };

    });

    const menus2 = static_text.slice(0, 3).map((item) => {
        const englishText = item.data.find((dataItem) => dataItem.language === 'en')?.text || "";
        return { id: item.id, text: englishText };
    });

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    return (
        <div ref={dropdownRef} className="relative">
            <div className="sm:hidden block fixed top-2  z-50 w-full">
                <div className="border border-black dark:border dark:border-[#1DF2F2] z-50 w-full flex justify-between items-center p-4 bg-white shadow-sm dark:bg-dark rounded-full">
                    <Link href={`/${slug}`}>
                        <Image
                            src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
                            alt="Logo"
                            height={40}
                            width={130}
                        />
                    </Link>
                    <Lanugauge />
                    <button
                        className="focus:outline-none"
                        onClick={toggleMenu}
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
                    className={`mt-1 mx-1 flex  absolute bg-white rounded-lg w-[98%] border border-dark dark:border-content shadow-md p-4  dark:bg-dark transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                >
                    <ul className="flex flex-col space-y-2 gap-2">
                        {menus.map((menu, index) => {
                            const href = `/${slug}/${menus2[index].text.toLowerCase()}`;
                            const isActive = pathname === href;
                            const isMain = pathname === `/${slug}`;

                            return (
                                <li onClick={() => setMenuOpen(false)} key={menu.id}>
                                    {menu.id === 3 ? (
                                        <Link href={`/${slug}`}>
                                            <button
                                                className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${(isActive || isMain) ? 'bg-[#1DF2F2] dark:text-white text-black' : 'hover:bg-[#1DF2F2] hover:dark:text-white hover:text-black'
                                                    }`}
                                            >
                                                {menu.text}
                                            </button>
                                        </Link>
                                    ) : (
                                        <Link
                                            href={href}
                                            className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${isActive ? 'bg-[#1DF2F2] dark:text-white text-black' : 'hover:bg-[#1DF2F2] hover:dark:text-white hover:text-black'
                                                }`}
                                        >
                                            {menu.text}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>

                </div>

            </div>
        </div>
    );
};

export default Sidebar;
