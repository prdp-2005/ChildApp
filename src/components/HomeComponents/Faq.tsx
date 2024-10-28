import Link from 'next/link'
import React from 'react'
import { FaRegUser, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ImBehance2 } from "react-icons/im";
import { MdOutlineMail } from "react-icons/md";
import { TiSocialDribbble } from 'react-icons/ti'

const Faq = () => {
    return (
        <div className='overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 flex flex-col justify-center items-center flex-wrap gap-14'>
            <div className=' my-3 text-center font-semibold text-2xl lg:text-4xl mb-6 text-gray-800 dark:text-white '>Todo: FAQ</div>
            <div className='flex flex-col w-full md:w-auto  justify-center items-start gap-14 md:border md:border-[#E5F4F2] md:p-14 p-2 rounded-2xl'>
                <div className='flex flex-col justify-center text-start gap-3'>
                    <p className='font-semibold text-2xl md:text-4xl text-[#2D2D2D] text-wrap text-center md:text-start dark:text-white'>Let’s get in touch!</p>
                    <p className='md:text-lg font-normal text-justify text-xs sm:text-lg px-2'>Got questions about the chilld app? Our team is here to help. Contact us for quick and friendly support.</p>
                </div>
                <div className='flex flex-row flex-wrap justify-center md:justify-between w-full items-center gap-12'>
                    <div className='flex flex-col gap-7 justify-center items-center'>
                        <p className='text-[24px] text-start font-semibold text-[#2D2D2D] dark:text-white'>Connect with us</p>
                        <div className='flex gap-[16px]'>
                            <Link href={'/'}><FaInstagram size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                            <Link href={'/'}><TiSocialDribbble size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                            <Link href={'/'}><ImBehance2 size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                            <Link href={'/'}><FaTwitter size={30} className='bg-cyan-50 dark:bg-[#1DF2F2] dark:text-black shadow-md rounded-full p-1' /></Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 items-start '>
                        <form className='flex flex-col gap-5 items-start'>
                            <div className='flex items-center gap-3 h-14 px-5 py-2 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[460px]'>
                                <FaRegUser className="text-cyan-300 h-[27px] w-[27px] p-1" />
                                <input
                                    className='text-[#2D2D2D] font-normal text-base outline-none border-l-[1px] pl-2 w-full dark:bg-dark dark:text-white'
                                    placeholder='Full Name'
                                    type="text"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className='flex items-center gap-3 h-14 px-5 py-2 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[460px]'>
                                <MdOutlineMail className="text-cyan-300 h-[30px] w-[30px] p-1" />
                                <input
                                    className='text-[#2D2D2D] font-normal text-base outline-none border-l-[1px] pl-2 w-full dark:bg-dark dark:text-white'
                                    placeholder='Email'
                                    type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className='flex items-start gap-3 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[460px] h-28 py-2 px-5'>
                                <textarea
                                    className='text-[#2D2D2D] font-normal text-base outline-none w-full dark:bg-dark dark:text-white'
                                    placeholder='Message'
                                    name="message"
                                    required
                                />
                            </div>
                            <button type="submit" className='bg-content rounded-3xl py-4 px-12 dark:text-black font-semibold text-center text-lg'>
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq