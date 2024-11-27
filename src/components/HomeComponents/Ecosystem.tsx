"use client"
import { Appassets } from '@/constants/Appassets'
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
import Image from 'next/image'
import React, { useContext } from 'react'

const Ecosystem = () => {
    const { slug } = useContext(LanguageContext);
    const heading = static_text.find(item => item.id === 106)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    const content = static_text.find(item => item.id === 107)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    return (
        <>
            <div className='overflow-hidden w-full mx-auto pb-12 px-7 my-9 md:px-14 lg:py-12 lg:px-5 flex flex-col 
            md:gap-8 justify-center items-center'>
                <p className='font-semibold text-2xl md:text-4xl flex justify-center text-center items-center my-5'>
                    {heading}
                </p>
                <div className='flex h-full w-[70vw] justify-around flex-col md:flex-row items-center gap-5 my-5 md:mx-auto'>
                    <div className=' flex md:w-[50%] justify-center items-center order-2 md:order-1 '>
                        <p className='font-normal text-sm sm:text-base text-justify md:text-left text-wrap w-fit sm:w-80 xl:w-96 '>
                            {content}
                        </p>
                    </div>
                    <div className='md:w-[50%] flex justify-center items-center order-1 md:order-2'>
                        <Image
                            src={Appassets?.Ecoimage}
                            alt="External Image"
                            className='w-60 sm:w-96'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Ecosystem