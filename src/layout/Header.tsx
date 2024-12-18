// "use client";
// import React from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Appassets } from '@/constants/Appassets';
// import Sidebar from './Sidebar';
// import ThemeToggle from '@/components/ThemeToggle';
// import { useTheme } from 'next-themes';
// import Language from '@/components/Lanugauge';
// import { usePathname } from 'next/navigation';
// const Header = () => {
//     const { theme, systemTheme } = useTheme();
//     const currentTheme = theme === 'system' ? systemTheme : theme;
//     const darkMode = currentTheme === 'dark';
//     const pathname = usePathname();
//     const menus = ['Experts', 'About', 'TryChildToday'];
//     return (
//         <>
//             <div className="sm:block hidden overflow-hidden">
//                 <div className="w-full h-full flex justify-center items-center p-4 ">
//                     <div className="w-full fixed top-2 shadow-dark dark:border-content z-50 md:w-[85%] lg:w-[64%] xl:w-[55%] bg-white dark:bg-dark dark:text-white rounded-full flex justify-between items-center border border-black  p-2 ">
//                         <div className='px-1'>
//                             <Link href='/'>
//                                 <Image
//                                     src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
//                                     alt="External Image"
//                                     height={35}
//                                 />
//                             </Link>
//                         </div>
//                         <div>

//                             <ul className="flex space-x-4 justify-center items-center">
//                                 {menus.map((item) => {
//                                     const href = `/${item.toLowerCase()}`;
//                                     const isActive = pathname === href;
//                                     const ismain = pathname === '/';

//                                     return (
//                                         <li key={item}>
//                                             {item === 'TryChildToday' ? (
//                                                 <Link href={'/'}><button
//                                                     className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${(isActive || ismain) ? 'bg-[#1DF2F2] dark:text-white text-black' : 'hover:bg-[#1DF2F2] hover:dark:text-white hover:text-black'
//                                                         }`}
//                                                 >
//                                                     {item}
//                                                 </button>
//                                                 </Link>
//                                             ) : (
//                                                 <Link
//                                                     href={href}
//                                                     className={`font-bold py-2 px-4 rounded-full transition-colors duration-200 ${isActive ? 'bg-[#1DF2F2] dark:text-white  text-black' : 'hover:bg-[#1DF2F2] hover:dark:text-white  hover:text-black'
//                                                         }`}
//                                                 >
//                                                     {item}
//                                                 </Link>
//                                             )}
//                                         </li>
//                                     );
//                                 })}
//                             </ul>
//                         </div>
//                         <Language />
//                         <ThemeToggle />
//                     </div>
//                 </div>
//             </div>
//             <Sidebar />
//         </>
//     );
// };

// export default Header;

"use client"
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Appassets } from '@/constants/Appassets';
import Sidebar from './Sidebar';
import ThemeToggle from '@/components/ThemeToggle';
import { useTheme } from 'next-themes';
import Language from '@/components/Language';
import { usePathname } from 'next/navigation';
import { static_text } from '@/constants/translations/Translations';
import { LanguageContext } from '@/constants/providers/LanguageContext';

const Header = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const pathname = usePathname();
    const { slug } = useContext(LanguageContext);

    const menus = static_text.slice(0, 3).map((item) => {
        const translatedText = item.data.find((dataItem) => dataItem.language === slug)?.text || "";
        return { id: item.id, text: translatedText };

    });
    const menus2 = static_text.slice(0, 3).map((item) => {
        const englishText = item.data.find((dataItem) => dataItem.language === 'en')?.text || "";
        return { id: item.id, text: englishText };
    });

    return (
        <>
            <div className="sm:block hidden overflow-hidden">
                <div className="w-full h-full flex justify-center items-center p-4">
                    <div className="w-full fixed top-2 shadow-dark dark:border-content z-50 md:w-[85%] lg:w-[64%] xl:w-[55%] bg-white dark:bg-dark dark:text-white rounded-full flex justify-between items-center border border-black p-2">
                        <div className='px-1'>
                            <Link href={`/${slug}`}>
                                <Image
                                    src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
                                    alt="External Image"
                                    height={35}
                                />
                            </Link>
                        </div>
                        <div>
                            <ul className="flex space-x-4 justify-center items-center">
                                {menus.map((menu, index) => {
                                    const href = `/${slug}/${menus2[index].text.toLowerCase()}`;
                                    const isActive = pathname === href;
                                    const isMain = pathname === `/${slug}`;
                                    return (
                                        <li key={menu.id}>
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
                        <Language />
                        <ThemeToggle />
                    </div>
                </div>
            </div>
            <Sidebar />
        </>
    );
};

export default Header;
