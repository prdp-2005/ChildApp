"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets'
import TabsSlides from './TabsSlides'
import { useTheme } from '@/context/ThemeContext'
const TabBanners = () => {
    const { darkMode } = useTheme();
    const data = [
        {
            id: 1,
            title: 'Join Free Events',
            desc: 'Join our free events to solve common parenting problems.',
            image: Appassets?.fronttabbanner1img,
        },
        {
            id: 2,
            title: 'Speak to experts',
            desc: 'Our coaches and experts can help with any parenting issue.',
            image: Appassets?.fronttabbanner2img
        },
        {
            id: 3,
            title: 'Create Group Sessions for you and your friends.',
            desc: 'Your parents-friends have the same problems. Create a group session and share the costs.',
            image: Appassets?.fronttabbanner3img
        },
        {
            id: 4,
            title: 'Everything at your fingertip!',
            desc: 'Connect, message, pay, get reminders and more, all in your pocket.',
            image: Appassets?.fronttabbanner4img
        },
    ]
    const [issameIndex, SetissameIndex] = useState(0);
    const handleTabClick = (index: number) => {
        SetissameIndex(index)
    }
    return (
        <div className='overflow-hidden w-full mx-auto  py-12 px-14 lg:py-12 lg:px-5'>
            <div className='flex flex-col  items-center justify-center flex-wrap md:flex-nowrap'>
                <p className='font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5'>
                    What can you do with the Chilld app?
                </p>
                <div className='hidden md:block '>
                    <div className=' mt-16 flex px-10  md:flex-nowrap flex-row  items-start justify-center '>
                        <div className='w-[50%] h-full lg:flex justify-center '>
                            <Image
                                src={darkMode ? Appassets?.darkfronttabbanner2img : data[issameIndex].image}
                                alt="External Image"
                                width={1920}
                                height={1080}
                                className='w-80 h-full'
                            />
                        </div>
                        <div className='flex-col w-[50%] gap-5 justify-center items-center '>
                            {data.map((item, index) =>
                                <div key={item.id} onClick={() => handleTabClick(index)} className='flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg hover:bg-teal-100 hover:shadow-md p-5 w-full flex-wrap dark:hover:bg-[#15ACAC]'>
                                    <div className='font-semibold lg:text-2xl' >{item.title}</div>
                                    <div className='font-normal lg:text-xl'>{item.desc}</div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <TabsSlides />
            </div>
        </div>
    )
}

export default TabBanners
