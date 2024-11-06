"use client"
import { useTheme } from 'next-themes';
import React, { useContext } from 'react'
import Banner from '../Banner';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
 
const HomeBanner = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const { slug } = useContext(LanguageContext)

    const title = static_text.find(item => item.id === 17)?.data.find(dataItem => dataItem.language === slug)?.text || "Be a chilld"; 
    const type = static_text.find(item => item.id === 18)?.data.find(dataItem => dataItem.language === slug)?.text || "Parent"; 
    const subheading1 = static_text.find(item => item.id === 19)?.data.find(dataItem => dataItem.language === slug)?.text || "Certified experts and coaches at your fingertips 24/7."; 
    const subheading2 = static_text.find(item => item.id === 20)?.data.find(dataItem => dataItem.language === slug)?.text || "We guide you through all the stages of parenthood."; 
    return (
        <>
            <Banner
                title={title}
                type={type}
                subheading1={subheading1}
                subheading2={subheading2}
                darkMode={darkMode}
            />
        </>
    )
}

export default HomeBanner


