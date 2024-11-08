// import Link from 'next/link'
// import React, { useRef, useState } from 'react'
// import { CiGlobe } from 'react-icons/ci'
// import { RiEnglishInput } from 'react-icons/ri'
// import { useClickAway } from 'react-use';
// const Language = () => {

//     const [isOpen, setIsOpen] = useState(false);
//     const dropdownRef = useRef(null);
//     useClickAway(dropdownRef, () => setIsOpen(false));

//     return (
//         <div ref={dropdownRef} className="relative ">
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="flex flex-row gap-1 p-2 border border-black dark:border-white rounded-3xl cursor-pointer"
//             >
//                 <CiGlobe />
//                 <RiEnglishInput />
//             </div>

//             {isOpen && (
//                 <div className="absolute left-0 mt-2  p-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform">
//                     <ul className="space-y-2">
//                         <li onClick={() => setIsOpen(false)} className='hover:scale-105 transform transition-transform duration-200 ease-in-out'><Link href="/">English</Link></li>
//                         <li onClick={() => setIsOpen(false)} className='hover:scale-105 transform transition-transform duration-200 ease-in-out'><Link href="/">German</Link></li>
//                         <li onClick={() => setIsOpen(false)} className='hover:scale-105 transform transition-transform duration-200 ease-in-out'><Link href="/">French</Link></li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Language;

"use client";
import React, { useContext, useState, useRef, FC } from 'react';
import { CiGlobe } from 'react-icons/ci';
import { useClickAway } from 'react-use';
import { useRouter } from 'next/navigation';
import { LanguageContext } from '@/constants/providers/LanguageContext';
type Language = 'en' | 'de';
const translations = {
    en: {
        english: "English",
        german: "German",
    },
    de: {
        english: "Englisch",
        german: "Deutsch",
    },
};

const languageIcons = {
    en: 'En',
    de: 'De',
};

const LanguageToggle: FC = () => {
    const { slug, changeLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useClickAway(dropdownRef, () => setIsOpen(false));

    const handleLanguageChange = (language: string) => {
        changeLanguage(language);
        setIsOpen(false);

        const newPathname = window.location.pathname.replace(`/${slug}`, `/${language}`);
        router.push(newPathname);
    };

    return (
        <div ref={dropdownRef} className="relative">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row gap-1 p-2 border border-black dark:border-white rounded-3xl cursor-pointer justify-center items-center"
            >
                <div className='text-s flex flex-row justify-between items-center gap-1 h-3'>
                    <CiGlobe />
                    {languageIcons[slug as Language]}
                </div>
            </div>

            {isOpen && (
                <div className="absolute left-0 mt-2 p-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg w-fit z-50">
                    <ul className="space-y-2">
                        <li
                            onClick={() => handleLanguageChange('en')}
                            className=' hover:scale-105 transition-transform duration-200 justify-center ease-in-out flex items-center gap-2 cursor-pointer'
                        >
                            {languageIcons['en']}
                            <div>|</div>
                            <span>{translations[slug as Language].english}</span>
                        </li>
                        <li
                            onClick={() => handleLanguageChange('de')}
                            className=' hover:scale-105 transition-transform duration-200 ease-in-out flex items-center gap-2 cursor-pointer'
                        >
                            {languageIcons['de']}
                            <div>|</div>
                            <span> {translations[slug as Language].german}</span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default LanguageToggle;
