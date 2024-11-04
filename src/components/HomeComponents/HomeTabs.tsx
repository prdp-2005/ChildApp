"use client"
import React from 'react';
import TabBanners from '../TabBanner';
import { Appassets } from '@/constants/Appassets';
import { useTheme } from 'next-themes';

const Tabs = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';

    const data = [
        {
            id: 1,
            title: 'Join Free Events',
            desc: 'Join our free events to solve common parenting problems.',
            image: Appassets?.fronttabbanner1img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 2,
            title: 'Speak to experts',
            desc: 'Our coaches and experts can help with any parenting issue.',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 3,
            title: 'Create Group Sessions for you and your friends.',
            desc: 'Your parents-friends have the same problems. Create a group session and share the costs.',
            image: Appassets?.fronttabbanner3img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 4,
            title: 'Everything at your fingertip!',
            desc: 'Connect, message, pay, get reminders and more, all in your pocket.',
            image: Appassets?.fronttabbanner4img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
    ];

    return (
        <div>
            <TabBanners data={data} darkMode={darkMode} heading='What can you do with the Chilld app?' />
        </div>
    );
};

export default Tabs;
