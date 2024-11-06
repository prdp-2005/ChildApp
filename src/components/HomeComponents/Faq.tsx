"use client"
import React, { useContext } from 'react'
import { FaInstagram, FaMedium, FaLinkedin, FaFacebook, FaRegUser } from 'react-icons/fa'
import Link from 'next/link'
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
import { MdOutlineMail } from 'react-icons/md';

const Faq = () => {
    const { slug } = useContext(LanguageContext);

    const heading = static_text.find(item => item.id === 55)?.data.find(dataItem => dataItem.language === slug)?.text || 'Let’s get in touch!';
    const description = static_text.find(item => item.id === 56)?.data.find(dataItem => dataItem.language === slug)?.text || 'Got questions about the chilld app? Our team is here to help. Contact us for quick and friendly support.';
    const connectWithUs = static_text.find(item => item.id === 57)?.data.find(dataItem => dataItem.language === slug)?.text || 'Connect with us';
    const fullNamePlaceholder = static_text.find(item => item.id === 58)?.data.find(dataItem => dataItem.language === slug)?.text || 'Full Name';
    const emailPlaceholder = static_text.find(item => item.id === 59)?.data.find(dataItem => dataItem.language === slug)?.text || 'Email';
    const messagePlaceholder = static_text.find(item => item.id === 60)?.data.find(dataItem => dataItem.language === slug)?.text || 'Message';
    const submitButton = static_text.find(item => item.id === 61)?.data.find(dataItem => dataItem.language === slug)?.text || 'Submit';
    return (
        <div className='overflow-hidden w-[80%] h-auto mx-auto pt-12  md:px-14 lg:py-12 lg:px-5 flex-wrap gap-14 my-6'>
            {/* <div className=' my-3 text-center font-semibold text-2xl lg:text-4xl mb-6 text-gray-800 dark:text-white '>Todo: FAQ</div> */}
            <div className='flex flex-col w-full md:w-auto  justify-center items-start gap-14 md:border md:border-[#E5F4F2] md:px-14 py-8 p-2 rounded-2xl'>
                <div className='flex flex-col justify-center text-start gap-3 md:items-start'>
                    <p className='font-semibold text-2xl sm:text-3xl md:text-4xl text-[#2D2D2D] text-wrap text-center md:text-start dark:text-white'>{heading}</p>
                    <p className='md:text-lg font-normal text-justify md:text-start text-xs sm:text-lg md:px-0 px-10 '>{description}</p>
                </div>
                <div className='flex flex-row flex-wrap lg:flex-nowrap justify-center md:justify-around w-full  items-center gap-12 h-auto'>
                    <div className='flex flex-col gap-7 justify-center items-center'>
                        <p className='text-xl text-start font-semibold text-[#2D2D2D] dark:text-white'>{connectWithUs}</p>
                        <div className='flex gap-[16px]'>
                            <Link href={'/'}><FaInstagram size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                            <Link href={'/'}><FaMedium size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                            <Link href={'/'}><FaLinkedin size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                            <Link href={'/'}><FaFacebook size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 items-center w-full justify-center xl:items-end h-full'>
                        <form className='flex flex-col gap-5 items-center justify-center md:items-start'>
                            <div className='flex items-center gap-3 h-14 px-5 py-2 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[420px]'>
                                <FaRegUser className="text-cyan-300 h-[27px] w-[27px] p-1" />
                                <input
                                    className='text-[#2D2D2D] font-normal text-base outline-none border-l-[1px] pl-2 w-full dark:bg-dark dark:text-white'
                                    placeholder={fullNamePlaceholder}
                                    type="text"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className='flex items-center gap-3 h-14 px-5 py-2 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[420px]'>
                                <MdOutlineMail className="text-cyan-300 h-[30px] w-[30px] p-1" />
                                <input
                                    className='text-[#2D2D2D] font-normal text-base outline-none border-l-[1px] pl-2 w-full dark:bg-dark dark:text-white'
                                    placeholder={emailPlaceholder}
                                    type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className='flex items-start gap-3 border border-[#D8D8D8] rounded-lg w-full sm:w-[420px] h-auto px-2 py-2 '>
                                <textarea
                                    className='text-[#2D2D2D] font-normal text-base outline-none w-full dark:bg-dark dark:text-white h-auto overflow-hidden'
                                    placeholder={messagePlaceholder}
                                    name="message"
                                    required
                                />
                            </div>
                            <button type="submit" className='bg-content rounded-3xl py-4 px-12 dark:text-black font-semibold text-center text-lg'>
                                {submitButton}
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
