// "use client"
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const LanguageContext = createContext();

// export const LanguageProvider = ({ children }) => {
//     const [currentLanguage, setCurrentLanguage] = useState(() => {
//         return localStorage.getItem('language') || 'en';
//     });

//     const changeLanguage = (language) => {
//         setCurrentLanguage(language);
//         localStorage.setItem('language', language);
//     };

//     return (
//         <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
//             {children}
//         </LanguageContext.Provider>
//     );
// };

// export const useLanguage = () => {
//     return useContext(LanguageContext);
// };

// "use client"
// import { createContext, ReactNode, useState, useContext } from 'react';

// type LanguageContextType = {
//   currentLanguage: string;
//   changeLanguage: (lang: string) => void;
// };

// export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider = ({ children }: { children: ReactNode }) => {
//   const [currentLanguage, setCurrentLanguage] = useState<string>('en');

//   const changeLanguage = (lang: string) => {
//     setCurrentLanguage(lang);
//   };

//   return (
//     <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };
