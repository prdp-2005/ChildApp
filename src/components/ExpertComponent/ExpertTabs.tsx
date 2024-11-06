"use client"
import React, { useContext } from 'react'
import { Appassets } from '@/constants/Appassets'
import { useTheme } from 'next-themes';
import TabBanners from '../TabBanner';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';

const Tabs = () => {
    const { slug } = useContext(LanguageContext);
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const data = [
        {
            id: 1,
            title: static_text.find(item => item.id === 65)?.data.find(dataItem => dataItem.language === slug)?.text || 'Create Events ',
            desc: static_text.find(item => item.id === 70)?.data.find(dataItem => dataItem.language === slug)?.text || 'Offer global digital events, invite unlimited guests and further experts. Enjoy our in-app marketing.',
            image: Appassets?.fronttabbanner1img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 2,
            title: static_text.find(item => item.id === 66)?.data.find(dataItem => dataItem.language === slug)?.text || 'Reach parents globally, effortlessly!',
            desc: static_text.find(item => item.id === 71)?.data.find(dataItem => dataItem.language === slug)?.text || 'Your expert profil is accessable by parents world-wide. ',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 3,
            title: static_text.find(item => item.id === 67)?.data.find(dataItem => dataItem.language === slug)?.text || 'Offer group sessions',
            desc: static_text.find(item => item.id === 72)?.data.find(dataItem => dataItem.language === slug)?.text || 'Have friend groups book group sessions and have all session information right at hand. ',
            image: Appassets?.fronttabbanner3img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 4,
            title: static_text.find(item => item.id === 68)?.data.find(dataItem => dataItem.language === slug)?.text || 'Helping parents without stress.',
            desc: static_text.find(item => item.id === 73)?.data.find(dataItem => dataItem.language === slug)?.text || 'Connect, message, pay, get reminders, send automated invoices, and more, all in your pocket.',
            image: Appassets?.fronttabbanner4img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 5,
            title: static_text.find(item => item.id === 69)?.data.find(dataItem => dataItem.language === slug)?.text || 'Client Statistics',
            desc: static_text.find(item => item.id === 74)?.data.find(dataItem => dataItem.language === slug)?.text || 'Your client stats show you how to keep parents coming back.',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
    ];
    const mheading = static_text.find(item => item.id === 25)?.data.find(dataItem => dataItem.language === slug)?.text || 'What can you do with the Chilld app?';
    return (
        <div className='overflow-hidden w-full  px-3 md:px-11  lg:px-5 flex flex-col justify-center items-center gap-20 md:gap-28 my-10'>
            <TabBanners data={data} darkMode={darkMode} heading={mheading} />
        </div>
    )
}

export default Tabs
