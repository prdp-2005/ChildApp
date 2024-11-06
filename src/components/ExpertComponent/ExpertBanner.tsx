"use client"
import { useTheme } from 'next-themes';
import React, { useContext } from 'react'
import Banner from '../Banner';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';

const ExpertBanner = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const { slug } = useContext(LanguageContext);

    const title = static_text.find(item => item.id === 17)?.data.find(dataItem => dataItem.language === slug)?.text || "Be a chilld";
    const type = static_text.find(item => item.id === 62)?.data.find(dataItem => dataItem.language === slug)?.text || "Expert";
    const subheading1 = static_text.find(item => item.id === 63)?.data.find(dataItem => dataItem.language === slug)?.text || "Use Chilld to find clients, host events and";
    const subheading2 = static_text.find(item => item.id === 64)?.data.find(dataItem => dataItem.language === slug)?.text || "manage bookings and invoices.";
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

export default ExpertBanner
