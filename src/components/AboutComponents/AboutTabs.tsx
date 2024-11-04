"use client"
import React from 'react'
import { Appassets } from '@/constants/Appassets'
import { useTheme } from 'next-themes';
import TabBanners from '../TabBanner';

const Tabs = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const data = [
        {
            id: 1,
            title: 'Milestone information',
            desc: 'Get milestone infos on your phone, depending on your childs age. ',
            image: Appassets?.fronttabbanner1img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 2,
            title: 'Courses',
            desc: 'Learn parenting from experts right on your phone without extra costs.',
            image: Appassets?.fronttabbanner2img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },
        {
            id: 3,
            title: 'AI Support by Chillo',
            desc: 'Ask Chillo 24/7 for instant parenting advice.',
            image: Appassets?.fronttabbanner3img,
            darkImage: Appassets?.darkfronttabbanner2img,
        },

    ];
    return (
        <div className='overflow-hidden w-full  px-3 md:px-11  lg:px-5 flex flex-col justify-center items-center gap-28 my-10'>
            <div className='flex flex-col gap-8 justify-center items-center '>
                <div className='text-black dark:text-white font-semibold xl:text-5xl lg:text-3xl text-xl'>Help me create new features!</div>
                <div className='text-[16px] text-center font-semibold bg-content rounded-3xl w-fit py-2 px-4 flex justify-center items-center hover:shadow-md cursor-pointer '>
                    Become a  partner
                </div>
            </div>

            <TabBanners data={data} darkMode={darkMode} heading='Coming soon' />
        </div>
    )
}

export default Tabs
