"use client"
import React from 'react'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets'
const Whychild = () => {
    return (
        <div className='overflow-hidden w-full mx-auto  py-12 px-14 lg:py-12 lg:px-5'>
            <div className='flex flex-col  items-center justify-center flex-wrap md:flex-nowrap gap-7'>
                <p className='font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5'>
                    Why Chilld?
                </p>
                <p className='text-lg font-normal text-center md:text-start'>These are just a few reasons why you’ll love the Chilld app!</p>

                <div className='flex flex-row gap-8 justify-center items-start flex-wrap'>
                    <div className='flex flex-col gap-3 w-60 justify-between items-center py-10 px-7 rounded-[20px] border border-white bg-white shadow-md'>
                        <Image
                            src={Appassets?.whychildimg1}
                            alt="External Image"
                            height={50}
                        />

                        <p className='text-xs font-semibold [line-height: 24px;]'>Certified experts for every age.</p>
                    </div>
                    <div className='flex flex-col gap-3 w-60 justify-between items-center py-10 px-7 rounded-[20px] border border-white bg-white shadow-md'>
                        <Image
                            src={Appassets?.whychildimg2}
                            alt="External Image"
                            height={50}
                        />

                        <p className='text-xs font-semibold [line-height: 24px;]'>Affordable expert knowledge.</p>
                    </div>
                    <div className='flex flex-col gap-3 h-40 justify-between items-center py-10 px-7 rounded-[20px] border border-white bg-white shadow-md'>
                        <Image
                            src={Appassets?.whychildimg3}
                            alt="External Image"
                            className='w-[65px] '
                        />

                        <p className='text-xs font-semibold [line-height: 24px;]'>Free knowledge in your pocket.</p>
                    </div>
                    <div className='flex flex-col w-60 h-40  justify-between items-center py-10 px-7 rounded-[20px] border border-white bg-white shadow-md'>
                        <Image
                            src={Appassets?.whychildimg4}
                            alt="External Image"
                            className='w-[90px] '
                        />

                        <p className='text-xs font-semibold [line-height: 24px;]'>Your data is save.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whychild
