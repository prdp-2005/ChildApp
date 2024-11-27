"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets';
import { useTheme } from 'next-themes';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';

const Banner = () => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    const { slug } = useContext(LanguageContext)
    return (
        < div className={`overflow-hidden w-full  px-3 md:px-11  lg:px-5 flex justify-center items-center ${slug === 'en' ? '' : 'mt-14'}`} >
            <div className='flex justify-between items-center flex-wrap md:flex-nowrap w-[70%] mt-2 lg:-mt-4 '>
                <div className='flex flex-col gap-4 order-2 md:order-1 justify-between items-start md:items-start'>
                    <div className='text-[#2D2D2D] dark:text-white font-semibold xl:text-5xl lg:text-3xl text-2xl  sm:text-start text-center md:text-start items-stretch xl:leading-[64px] xl:tracking-[-0.56px]'>{static_text.find(item => item.id === 75)?.data.find(dataItem => dataItem.language === slug)?.text || '“Parenthood isn’t easy,'}<br />
                        {static_text.find(item => item.id === 76)?.data.find(dataItem => dataItem.language === slug)?.text || 'We all need support raising children.”'}</div>
                    <div className=' text-lg md:text-xl lg:text-2xl text-center md:text-left'>
                        {static_text.find(item => item.id === 77)?.data.find(dataItem => dataItem.language === slug)?.text || 'Carolin Neumann, Founder of Chilld and Twin Mom'}
                    </div>

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
