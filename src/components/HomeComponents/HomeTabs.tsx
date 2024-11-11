// "use client"
// import React, { useContext } from 'react';
// import TabBanners from '../TabBanner';
// import { Appassets } from '@/constants/Appassets';
// import { useTheme } from 'next-themes';
// import { static_text } from '@/constants/translations/Translations';
// import { LanguageContext } from '@/constants/providers/LanguageContext';

// const Tabs = () => {
//     const { slug } = useContext(LanguageContext);
//     const { theme, systemTheme } = useTheme();
//     const currentTheme = theme === 'system' ? systemTheme : theme;
//     const darkMode = currentTheme === 'dark';

//     const data = [
//         {
//             id: 1,
//             title: static_text.find(item => item.id === 21)?.data.find(dataItem => dataItem.language === slug)?.text || 'Certified experts and coaches at your fingertip!',
//             desc: static_text.find(item => item.id === 51)?.data.find(dataItem => dataItem.language === slug)?.text || 'Find, connect, message, pay, get reminders and more, all in your pocket.',
//             image: Appassets?.fronttabbanner1img,
//             darkImage: Appassets?.darkfronttabbanner2img,
//         },
//         {
//             id: 2,
//             title: static_text.find(item => item.id === 22)?.data.find(dataItem => dataItem.language === slug)?.text || '24/7 help with Chillo',
//             desc: static_text.find(item => item.id === 52)?.data.find(dataItem => dataItem.language === slug)?.text || 'Our AI-Expert “Chillo” can help you 24/7 with your most urgent questions.',
//             image: Appassets?.fronttabbanner2img,
//             darkImage: Appassets?.darkfronttabbanner2img,
//         },
//         {
//             id: 3,
//             title: static_text.find(item => item.id === 23)?.data.find(dataItem => dataItem.language === slug)?.text || 'Create Group Sessions for you and your friends.',
//             desc: static_text.find(item => item.id === 53)?.data.find(dataItem => dataItem.language === slug)?.text || 'Your parents-friends have the same problems. Create a group session and share the costs.',
//             image: Appassets?.fronttabbanner3img,
//             darkImage: Appassets?.darkfronttabbanner2img,
//         },
//         {
//             id: 4,
//             title: static_text.find(item => item.id === 24)?.data.find(dataItem => dataItem.language === slug)?.text || 'Individual milestones explained',
//             desc: static_text.find(item => item.id === 54)?.data.find(dataItem => dataItem.language === slug)?.text || 'Get notifications about your child’s milestones and why they are amazing.',
//             image: Appassets?.fronttabbanner4img,
//             darkImage: Appassets?.darkfronttabbanner2img,
//         },
//         {
//             id: 5,
//             title: static_text.find(item => item.id === 78)?.data.find(dataItem => dataItem.language === slug)?.text || 'Join Free Events',
//             desc: static_text.find(item => item.id === 79)?.data.find(dataItem => dataItem.language === slug)?.text || 'Join our free events to solve common parenting problems.',
//             image: Appassets?.fronttabbanner4img,
//             darkImage: Appassets?.darkfronttabbanner2img,
//         },
//     ];
//     const mheading = static_text.find(item => item.id === 25)?.data.find(dataItem => dataItem.language === slug)?.text || 'What can you do with the Chilld app?';
//     return (
//         <div>
//             <TabBanners data={data} darkMode={darkMode} heading={mheading} />
//         </div>
//     );
// };

// export default Tabs;


"use client"
import React, { useContext } from 'react';
import TabBanners from '../TabBanner';
import { Appassets } from '@/constants/Appassets';
import { useTheme } from 'next-themes';
import { static_text } from '@/constants/translations/Translations';
import { LanguageContext } from '@/constants/providers/LanguageContext';

const Tabs = () => {
    const { slug } = useContext(LanguageContext);
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';

    const data = [
        {
            id: 1,
            title: static_text.find(item => item.id === 21)?.data.find(dataItem => dataItem.language === slug)?.text || 'Certified experts and coaches at your fingertip!',
            desc: static_text.find(item => item.id === 51)?.data.find(dataItem => dataItem.language === slug)?.text || 'Find, connect, message, pay, get reminders and more, all in your pocket.',
            image: Appassets?.fronttabbanner1img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 2,
            title: static_text.find(item => item.id === 22)?.data.find(dataItem => dataItem.language === slug)?.text || '24/7 help with Chillo',
            desc: static_text.find(item => item.id === 52)?.data.find(dataItem => dataItem.language === slug)?.text || 'Our AI-Expert “Chillo” can help you 24/7 with your most urgent questions.',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 3,
            title: static_text.find(item => item.id === 23)?.data.find(dataItem => dataItem.language === slug)?.text || 'Create Group Sessions for you and your friends.',
            desc: static_text.find(item => item.id === 53)?.data.find(dataItem => dataItem.language === slug)?.text || 'Your parents-friends have the same problems. Create a group session and share the costs.',
            image: Appassets?.fronttabbanner3img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 4,
            title: static_text.find(item => item.id === 24)?.data.find(dataItem => dataItem.language === slug)?.text || 'Individual milestones explained',
            desc: static_text.find(item => item.id === 54)?.data.find(dataItem => dataItem.language === slug)?.text || 'Get notifications about your child’s milestones and why they are amazing.',
            image: Appassets?.fronttabbanner4img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 5,
            title: static_text.find(item => item.id === 78)?.data.find(dataItem => dataItem.language === slug)?.text || 'Join Free Events',
            desc: static_text.find(item => item.id === 79)?.data.find(dataItem => dataItem.language === slug)?.text || 'Join our free events to solve common parenting problems.',
            image: Appassets?.fronttabbanner4img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
    ];
    const mheading = static_text.find(item => item.id === 25)?.data.find(dataItem => dataItem.language === slug)?.text || 'What can you do with the Chilld app?';
    return (
        <div>
            <TabBanners data={data} darkMode={darkMode} heading={mheading} />
        </div>
    );
};

export default Tabs;
