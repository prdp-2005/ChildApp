"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets';
import { useTheme } from '@/context/ThemeContext';


interface BannerProps {
    title: string;
    type: string;
    subheading1: string;
    subheading2: string;
    darkMode: boolean;
}

const Banner: React.FC<BannerProps> = ({ title, type, subheading1, subheading2 }) => {
    const { darkMode } = useTheme();
    return (
        < div className='overflow-hidden w-full mx-auto  py-12 px-14 lg:py-12 lg:px-5' >
            <div className='flex justify-center items-center flex-wrap md:flex-nowrap'>
                <div className='flex flex-col gap-4 order-2 md:order-1 justify-center items-center md:items-start'>
                    <div className='text-[#2D2D2D] dark:text-white font-bold md:text-5xl text-3xl text-center md:text-start'>{title} <span className='text-[#1DF2F2] '>{type}</span>.</div>
                    <div className='text-[21px] text-center md:text-start'>{subheading1}</div>
                    <div className='text-[21px] text-center md:text-start'>{subheading2}</div>
                    <div className='flex gap-2'>
                        <Link href={'/'}><Image
                            src={darkMode ? Appassets?.darkgooglelogoimg : Appassets?.footerplaylogoimg}
                            alt="External Image"
                            className='w-[135px]'
                        /></Link>
                        <Link href={'/'}><Image
                            src={darkMode ? Appassets?.darkappplaylogoimg : Appassets?.footerappplayimg}
                            alt="External Image"
                            className='w-[135px]'
                        /></Link>
                    </div>
                </div>
                <div className='w-96 md:w-full md:h-full order-1 md:order-2 lg:w-96 dark:bg-dark'>
                    <Image
                        src={Appassets?.frontbannerimg}
                        alt="External Image"
                        layout="responsive"
                        className='h-[200px] w-[300px] '
                    />
                </div>
            </div>
        </div >
    )
}

export default Banner
