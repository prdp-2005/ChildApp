"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Appassets } from '@/constants/Appassets';
import { FaEnvelope } from 'react-icons/fa';
import { RiEnglishInput } from "react-icons/ri";
import { CiGlobe } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { FaBehance } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { useTheme } from '@/context/ThemeContext';
const Footer = () => {
    const { darkMode } = useTheme();
    return (
        <div className='w-full overflow-hidden flex flex-wrap pb-3 lg:pb-5 lg:pt-28 lg:px-14 pt-12 px-5 justify-center items-center'>
            <div className=' flex flex-col gap-10 sm:gap-24 md:items-start items-center'>
                <div className='w-full md:flex md:justify-between md:items-start  sm:flex sm:justify-between gap-5 lg:gap-11'>
                    <div className='flex flex-col gap-3 justify-center items-center lg:items-start'>
                        <Link href='/'>
                            <Image
                                src={Appassets?.footerimg}
                                alt="External Image"
                                height={100}
                            /></Link>
                        <p className='text-[#58595D] dark:text-white md:text-[32px] font-semibold text-2xl my-2 md:my-0'>
                            Parenting made easy!
                        </p>
                        <p className='text-[#58595D] dark:text-white md:text-[18px]'>
                            Made with ❤️️️ from Twin Mom Carolin.
                        </p>
                        <div className='flex gap-2 mb-3 md:mb-0'>
                            <Link href='/'><Image
                                src={darkMode ? Appassets?.darkgooglelogoimg : Appassets?.footerplaylogoimg}
                                alt="External Image"
                                className='w-[135px]'
                            /></Link>
                            <Link href='/'><Image
                                src={darkMode ? Appassets?.darkappplaylogoimg : Appassets?.footerappplayimg}
                                alt="External Image"
                                className='w-[135px]'
                            /></Link>
                        </div>
                    </div>
                    <div className='flex  mx-auto flex-wrap md:flex-nowrap justify-center items-start  gap-16 md:gap-8 lg:gap-40 mt-6 lg:flex-row'>
                        <div className='flex flex-col gap-[27px] flex-wrap'>
                            <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-xl'>COMPANY</p></Link>

                            <div className='flex flex-col gap-[13px]'>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white '>Experts</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>Pricing</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>About us</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>Contact us</p></Link>
                            </div>

                        </div>
                        <div className='flex flex-col gap-[27px] flex-wrap'>
                            <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold'>Information</p></Link>

                            <div className='flex flex-col gap-[13px]'>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>FAQ</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>Terms & conditions</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>Privacy Policy</p></Link>
                            </div>

                        </div>
                        <div className='flex flex-col gap-[27px] flex-wrap -mt-12 sm:mt-0'>
                            <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold'>Contact</p></Link>

                            <div className='flex  gap-2'>
                                <FaEnvelope size={24} className="text-[#2E2F35] dark:text-white" />
                                <p className='text-[#2E2F35] dark:text-white'>
                                    info@chilld.de</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-wrap justify-center md:justify-between  gap-3 items-center'>
                    <div className='flex flex-col gap-9 border-t-[1px] border-t-solid dark:border-custom-gray border-[#E1E4EA]'>
                        <div className='mt-10'>
                            <Link href={"/"}>
                                <Image
                                    src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
                                    alt="External Image"
                                    className='w-[154px]'
                                /></Link>
                            <p className='text-[#000] dark:text-white font-normal mt'>Parenting made easy</p>
                        </div>
                        <div className='flex gap-1 justify-center items-center '>
                            <div className=' flex flex-row gap-1 p-2 border border-black dark:border-white rounded-3xl'>
                                <Link href={'/'}><CiGlobe /></Link>
                                <Link href={'/'}><RiEnglishInput /></Link>
                            </div>
                            <p className='text-[#58595D] text-[14px font-medium] dark:text-white'>© 2024 Chilld GmbH, All rights reserved.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 md:flex-row  items-center justify-center'>
                        <div className='flex gap-[16px]'>
                            <Link href={'/'}><FaInstagram size={24} /></Link>
                            <Link href={'/'}><TiSocialDribbble size={24} /></Link>
                            <Link href={'/'}><FaBehance size={24} /></Link>
                            <Link href={'/'}><FaTwitter size={24} /></Link>
                        </div>
                        <Link href={'/'}><div className='  bg-[#1DF2F2] p-[8px] px-4 rounded-full cursor-pointer flex justify-center items-start '><p className='text-[16px] font-semibold text'>Try chilld today</p>
                        </div></Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer
