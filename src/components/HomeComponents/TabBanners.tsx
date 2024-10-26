"use client"
import React from 'react'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets'
const TabBanners = () => {
    const data = [
        {
            id: 1,
            title: 'Join Free Events',
            desc: 'Join our free events to solve common parenting problems.'
        },
        {
            id: 2,
            title: 'Speak to experts',
            desc: 'Our coaches and experts can help with any parenting issue.'
        },
        {
            id: 3,
            title: 'Create Group Sessions for you and your friends.',
            desc: 'Your parents-friends have the same problems. Create a group session and share the costs.'
        },
        {
            id: 4,
            title: 'Everything at your fingertip!',
            desc: 'Connect, message, pay, get reminders and more, all in your pocket.'
        },
    ]
    return (
        <div className='overflow-hidden w-full mx-auto  py-12 px-14 lg:py-12 lg:px-5'>
            <div className='flex flex-col  items-center justify-center flex-wrap md:flex-nowrap'>
                <p className='font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5'>
                    What can you do with the Chilld app?
                </p>
                <div className='flex px-10  md:flex-nowrap flex-row  items-center md:w-[70%] w-[80%qqqq] justify-between'>
                    <div className='  md:w-[29%] h-full flex justify-center '>
                        <Image
                            src={Appassets?.fronttabbanner1img}
                            alt="External Image"
                            width={1920}
                            height={1080}
                            className='w-80 h-full'
                        />
                    </div>
                    <div className='hidden md:block  flex-col w-[60%] gap-5 justify-center items-start '>
                        {data.map((item) =>
                            <div key={item.id} className='flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg hover:bg-teal-100 hover:shadow-md p-5 w-full flex-wrap'>
                                <div className='font-semibold text-2xl' >{item.title}</div>
                                <div className='font-normal text-xl'>{item.desc}</div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabBanners
