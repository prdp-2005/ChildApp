"use client"
import { useTheme } from 'next-themes';
import React from 'react'
import Banner from '../Banner';

const ExpertBanner = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    return (
        <>
            <Banner
                title="Be a chilld"
                type="Expert"
                subheading1="Use Chilld to find clients, host events and"
                subheading2="manage bookings and invoices."
                darkMode={darkMode}
            />
        </>
    )
}

export default ExpertBanner
