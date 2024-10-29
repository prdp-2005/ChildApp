"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Appassets } from '@/constants/Appassets'
const Whychild = () => {
    const data = [
        { id: 1, img: Appassets?.whychildimg1, text: 'Certified experts for every age.' },
        { id: 2, img: Appassets?.whychildimg2, text: 'Affordable expert knowledge.' },
        { id: 3, img: Appassets?.whychildimg3, text: 'Free knowledge in your pocket.' },
        { id: 4, img: Appassets?.whychildimg4, text: 'Your data is safe.' }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div className='overflow-hidden w-full mx-auto  pb-12 px-7 md:px-14 lg:py-12 lg:px-5'>
            <div className='md:flex  flex-col  items-center justify-center flex-wrap md:flex-nowrap gap-7'>
                <p className='font-semibold text-2xl md:text-4xl  flex justify-center items-center my-5'>
                    Why Chilld?
                </p>
                <p className='md:text-lg text-sm font-normal text-center lg:text-start px-2 sm:px-0'>These are just a few reasons why you’ll love the Chilld app!</p>

                <div className='hidden md:block xl:mx-6'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center items-start '>
                        <div className='cursor-pointer dark:hover:shadow-teal flex flex-col gap-3 w-60 justify-between items-center py-10 px-7 rounded-[20px] border border-white  dark:bg-[#0E121B] shadow-md hover:shadow-teal'>
                            <Image
                                src={Appassets?.whychildimg1}
                                alt="External Image"
                                height={50}
                            />
                            <p className='text-xs font-semibold [line-height: 24px;]'>Certified experts for every age.</p>
                        </div>

                        <div className='cursor-pointer dark:hover:shadow-teal flex flex-col gap-3 w-60 justify-between items-center py-10 px-7 rounded-[20px] border border-white  dark:bg-[#0E121B] shadow-md hover:shadow-teal'>
                            <Image
                                src={Appassets?.whychildimg2}
                                alt="External Image"
                                height={50}
                            />

                            <p className='text-xs font-semibold [line-height: 24px;]'>Affordable expert knowledge.</p>
                        </div>
                        <div className='cursor-pointer dark:hover:shadow-teal flex flex-col gap-3 h-40 justify-between items-center py-10 px-7 rounded-[20px] border border-white  dark:bg-[#0E121B] shadow-md hover:shadow-teal'>
                            <Image
                                src={Appassets?.whychildimg3}
                                alt="External Image"
                                className='w-[65px] '
                            />

                            <p className='text-xs font-semibold [line-height: 24px;]'>Free knowledge in your pocket.</p>
                        </div>
                        <div className='cursor-pointer dark:shadow-custom flex dark:hover:shadow-teal flex-col w-60 h-40  justify-between items-center py-10 px-7 rounded-[20px] border border-white  dark:bg-[#0E121B]  shadow-md hover:shadow-teal'>
                            <Image
                                src={Appassets?.whychildimg4}
                                alt="External Image"
                                className='w-[90px] '
                            />

                            <p className='text-xs font-semibold [line-height: 24px;]'>Your data is save.</p>
                        </div>

                    </div>
                </div>
                {/* slider for mobile  */}
                <div className='block md:hidden text-center'>
                    <Slider {...settings}>
                        {data.map(item => (
                            <div key={item.id}>
                                <Link href={'/'}>
                                    <div className='flex flex-col gap-3 w-60 h-40 justify-between items-center py-10 md:px-7 rounded-2xl  border border-white bg-white  dark:bg-[#0E121B]  hover:shadow-teal  my-5 rounded-20px shadow-md  mx-auto'>
                                        <Image
                                            src={item.img}
                                            alt={item.text}
                                            height={50}
                                            width={50}
                                            className='w-auto'
                                        />
                                        <p className='text-xs font-semibold [line-height: 24px;]'>{item.text}</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>
        </div>
    )
}

export default Whychild
