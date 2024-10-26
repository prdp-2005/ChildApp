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
const Footer = () => {
    return (
        <div className='w-full overflow-hidden flex flex-wrap  lg:py-28 lg:px-14 py-12 px-5'>
            <div className='h-full w-full flex flex-col gap-10 sm:gap-24 md:items-start items-center'>
                <div className='w-full md:flex md:justify-between md:items-start  sm:flex sm:justify-between lg:gap-11'>
                    <div className='flex flex-col gap-3 justify-center items-center lg:items-start'>
                        <Link href='/'>
                            <Image
                                src={Appassets?.footerimg}
                                alt="External Image"
                                className='w-[354px]'
                            /></Link>
                        <p className='text-[#58595D] text-[32px] font-semibold'>
                            Parenting made easy!
                        </p>
                        <p className='text-[#58595D] text-[18px]'>
                            Made with ❤️️️ from Twin Mom Carolin.
                        </p>
                        <div className='flex gap-2'>
                            <Link href='/'><Image
                                src={Appassets?.footerappplayimg}
                                alt="External Image"
                                className='w-[135px]'
                            /></Link>
                            <Link href='/'><Image
                                src={Appassets?.footerplaylogoimg}
                                alt="External Image"
                                className='w-[135px]'
                            /></Link>
                        </div>
                    </div>
                    <div className='flex  mx-auto flex-wrap md:flex-nowrap justify-center items-start  gap-16 md:gap-8 lg:gap-40 mt-6 lg:flex-row'>
                        <div className='flex flex-col gap-[27px] flex-wrap'>
                            <Link href={'/'}><p className='text-[#2E2F35] font-semibold'>COMPANY</p></Link>

                            <div className='flex flex-col gap-[13px]'>
                                <Link href={'/'}><p className='text-[#2E2F35] '>Experts</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35]'>Pricing</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] '>About us</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] '>Contact us</p></Link>
                            </div>

                        </div>
                        <div className='flex flex-col gap-[27px] flex-wrap'>
                            <Link href={'/'}><p className='text-[#2E2F35] font-semibold'>Information</p></Link>

                            <div className='flex flex-col gap-[13px]'>
                                <Link href={'/'}><p className='text-[#2E2F35] '>FAQ</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35]'>Terms & conditions</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] '>Privacy Policy</p></Link>
                            </div>

                        </div>
                        <div className='flex flex-col gap-[27px] flex-wrap -mt-12 sm:mt-0'>
                            <Link href={'/'}><p className='text-[#2E2F35] font-semibold'>Contact</p></Link>

                            <div className='flex  gap-2'>
                                <FaEnvelope size={24} className="text-[#2E2F35]" />
                                <p className='text-[#2E2F35] '>
                                    info@chilld.de</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-wrap justify-center md:justify-between md:items-start gap-3'>
                    <div className='flex flex-col gap-9'>
                        <div>
                            <Link href={"/"}><Image
                                src={Appassets?.footerbottomimg}
                                alt="External Image"
                                className='w-[154px]'
                            /></Link>
                            <p className='text-[#000] font-normal mt'>Parenting made easy</p>
                        </div>
                        <div className='flex gap-1 justify-center items-center'>
                            <Link href={'/'}><CiGlobe /></Link>
                            <Link href={'/'}><RiEnglishInput /></Link>
                            <p className='text-[#58595D] text-[14px font-medium]'>© 2024 Chilld GmbH, All rights reserved.</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 md:flex-row  items-center justify-center'>
                        <div className='flex gap-[16px]'>
                            <Link href={'/'}><FaInstagram size={24} /></Link>
                            <Link href={'/'}><TiSocialDribbble size={24} /></Link>
                            <Link href={'/'}><FaBehance size={24} /></Link>
                            <Link href={'/'}><FaTwitter size={24} /></Link>
                        </div>
                        <Link href={'/'}><div className='  bg-[#1DF2F2] p-[8px] px-4 rounded-full cursor-pointer flex justify-center items-start '><p className='text-[16px] font-semibold'>Try chilld today</p>
                        </div></Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer
