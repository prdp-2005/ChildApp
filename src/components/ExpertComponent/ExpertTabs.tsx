"use client"
import React from 'react'
import { Appassets } from '@/constants/Appassets'
import { useTheme } from '@/context/ThemeContext';
import TabBanners from '../TabBanner';

const Tabs = () => {
    const { darkMode } = useTheme();
    const data = [
        {
            id: 1,
            title: 'Create Events ',
            desc: 'Offer global digital events, invite unlimited guests and further experts. Enjoy our in-app marketing.',
            image: Appassets?.fronttabbanner1img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 2,
            title: 'Reach parents globally, effortlessly!',
            desc: 'Your expert profil is accessable by parents world-wide. ',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 3,
            title: 'Offer group sessions',
            desc: 'Have friend groups book group sessions and have all session information right at hand. ',
            image: Appassets?.fronttabbanner3img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 4,
            title: 'Helping parents without stress.',
            desc: 'Connect, message, pay, get reminders, send automated invoices, and more, all in your pocket.',
            image: Appassets?.fronttabbanner4img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 5,
            title: 'Client Statistics',
            desc: 'Your client stats show you how to keep parents coming back.',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
    ];
    return (
        <div className='overflow-hidden w-full  px-3 md:px-11  lg:px-5 flex flex-col justify-center items-center gap-20 md:gap-28 my-10'>
            <div className='flex flex-col gap-8 justify-center items-center '>
                <div className='text-black dark:text-white font-semibold xl:text-5xl lg:text-3xl text-xl'>Help me create new features!</div>
                <div className='text-[16px] text-center font-semibold bg-content rounded-3xl w-fit py-2 px-4 flex justify-center items-center hover:shadow-md cursor-pointer '>
                    Become a  partner
                </div>
            </div>

            <TabBanners data={data} darkMode={darkMode} heading='What can you do with the Chilld app?' />
        </div>
    )
}

export default Tabs
