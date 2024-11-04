"use client"
import React from 'react'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets';
import { useTheme } from 'next-themes';

const Banner = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    return (
        < div className='overflow-hidden w-full mt-5  px-3 md:px-11  lg:px-5 flex justify-center items-center' >
            <div className='flex justify-between items-center flex-wrap md:flex-nowrap w-[70%] lg:-mt-4 '>
                <div className='flex flex-col gap-4 order-2 md:order-1 justify-between items-start md:items-start'>
                    <div className='text-[#2D2D2D] dark:text-white font-semibold xl:text-5xl lg:text-3xl text-xl sm:text-2xl  text-start md:text-start items-stretch xl:leading-[64px] xl:tracking-[-0.56px]'>“Parenthood isn’t easy,<br /> We all need support
                        raising children.”</div>
                    <div className=' text-xs lg:text-[21px] lg:text-center md:text-start'>Carolin Neumann, Founder of Chilld and Twin Mom</div>

                </div>
                <div className='w-96 md:w-full  order-1 md:order-2 lg:w-[600px] dark:bg-dark'>
                    <Image
                        src={darkMode ? Appassets?.maindarkbanner : Appassets?.mainlightbanner}
                        alt="External Image"
                        layout="responsive"
                    />
                </div>
            </div>
        </div >
    )
}

export default Banner
