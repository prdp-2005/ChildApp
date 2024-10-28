"use client"
import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import Banner from '../Banner';

const ExpertBanner = () => {
    const { darkMode } = useTheme();
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
