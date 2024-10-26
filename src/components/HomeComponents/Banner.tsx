"use client"
import React from 'react'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets'
const Banner = () => {
    return (
        < div className='overflow-hidden w-full mx-auto  py-12 px-14 lg:py-12 lg:px-5' >
            <div className='flex justify-center items-center flex-wrap md:flex-nowrap'>
                <div className='flex flex-col gap-4 order-2 md:order-1 justify-center '>
                    <div className='text-[#2D2D2D] font-bold md:text-5xl text-3xl text-center md:text-start'>Be a chilld <span className='text-[#1DF2F2]'>parent</span>.</div>
                    <div className='text-[21px] text-center md:text-start'>Chilld is your expert parenting advice and support app.</div>
                    <div className='text-[21px] text-center md:text-start'>We guide you through all the stages of parenthood.</div>
                    <div className='flex gap-2'>
                        <Image
                            src={Appassets?.footerappplayimg}
                            alt="External Image"
                            className='w-[135px]'
                        />
                        <Image
                            src={Appassets?.footerplaylogoimg}
                            alt="External Image"
                            className='w-[135px]'
                        />
                    </div>
                </div>
                <div className=' w-full h-full order-1 md:order-2 lg:w-96'>
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
