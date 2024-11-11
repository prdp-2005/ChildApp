// "use client"
// import React, { useContext } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import { Appassets } from '@/constants/Appassets';
// import { FaEnvelope } from 'react-icons/fa';
// import Language from '@/components/Language';
// import { FaInstagram } from "react-icons/fa";
// import { FaMedium } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { useTheme } from 'next-themes';
// import { static_text } from '@/constants/translations/Translations';
// import { LanguageContext } from '@/constants/providers/LanguageContext';

// const Footer = () => {
//     const { slug } = useContext(LanguageContext);
//     const { theme, systemTheme } = useTheme();
//     const currentTheme = theme === 'system' ? systemTheme : theme;
//     const darkMode = currentTheme === 'dark';

//     const getText = (id: number) => {
//         return static_text.find((item) => item.id === id)?.data.find((dataItem) => dataItem.language === slug)?.text || "";
//     };
//     return (
//         <div className='w-full overflow-hidden flex flex-wrap pb-3 lg:pb-5 lg:pt-28 lg:px-14 pt-12 px-5 justify-center items-center'>
//             <div className=' flex flex-col gap-10 sm:gap-24 md:items-start items-center xl:w-[100%]'>
//                 <div className='w-full md:flex md:justify-between md:items-start  sm:flex sm:justify-between gap-5 lg:gap-11'>
//                     <div className='flex flex-col gap-3 justify-center items-center lg:items-start'>
//                         <Link href='/'>
//                             <Image
//                                 src={Appassets?.footerimg}
//                                 alt="External Image"
//                                 className='h-full w-full'
//                             /></Link>
//                         <p className='text-[#58595D] dark:text-white md:text-[32px] font-semibold text-2xl my-2 md:my-0'>
//                             {getText(14)}
//                         </p>
//                         <p className='text-[#58595D] dark:text-white md:text-[18px]'>
//                             {getText(15)}
//                         </p>
//                         <div className='flex gap-2 mb-3 md:mb-0'>
//                             <Link href='/'><Image
//                                 src={darkMode ? Appassets?.darkgooglelogoimg : Appassets?.footerplaylogoimg}
//                                 alt="External Image"
//                                 className='w-[135px]'
//                             /></Link>
//                             <Link href='/'><Image
//                                 src={darkMode ? Appassets?.darkappplaylogoimg : Appassets?.footerappplayimg}
//                                 alt="External Image"
//                                 className='w-[135px]'
//                             /></Link>
//                         </div>
//                     </div>
//                     <div className='flex  mx-auto flex-wrap md:flex-nowrap  sm:justify-center items-start  gap-16 md:gap-8 lg:gap-40 mt-8 lg:flex-row'>
//                         <div className='flex flex-col gap-[27px] flex-wrap'>
//                             <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-lg'>{getText(4)}</p></Link>

//                             <div className='flex flex-col gap-[13px]'>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white '>{getText(7)}</p></Link>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(8)}</p></Link>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(9)} </p></Link>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(10)} </p></Link>
//                             </div>

//                         </div>
//                         <div className='flex flex-col gap-[27px] flex-wrap'>
//                             <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-lg'>{getText(5)}</p></Link>

//                             <div className='flex flex-col gap-[13px]'>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(11)}</p></Link>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(12)}</p></Link>
//                                 <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(13)}</p></Link>
//                             </div>

//                         </div>
//                         <div className='flex flex-col gap-[27px] flex-wrap  sm:mt-0'>
//                             <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-lg'>{getText(6)}</p></Link>

//                             <div className='flex  gap-2 cursor-pointer'>
//                                 <FaEnvelope size={24} className="text-[#2E2F35] dark:text-white" />
//                                 <p className='text-[#2E2F35] dark:text-white'>
//                                     info@chilld.de</p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='w-full h-full flex flex-wrap justify-center md:justify-between  gap-3 items-center'>
//                     <div className='flex flex-col gap-9 border-t-[1px] border-t-solid dark:border-custom-gray border-[#E1E4EA]'>
//                         <div className='mt-10'>
//                             <Link href={"/"}>
//                                 <Image
//                                     src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
//                                     alt="External Image"
//                                     className='w-[154px]'
//                                 /></Link>
//                             <p className='text-[#000] dark:text-white font-normal mt'>{getText(14)}</p>
//                         </div>
//                         <div className=' sm:block hidden w-fit '>
//                             <Language />
//                         </div>
//                         <div className='  flex gap-2 justify-center items-center h-8'>
//                             <div className=' sm:hidden block '>
//                                 <Language />
//                             </div>
//                             <p className='text-[#58595D] text-[14px font-medium] dark:text-white'>© 2024 Chilld GmbH, {getText(16)}</p>
//                         </div>
//                     </div>
//                     <div className='flex flex-col gap-5 md:flex-row  items-center justify-center mb-11 md:mb-0'>
//                         <div className='flex gap-[16px]'>
//                             <Link href={'https://www.instagram.com/chilld_official/'} target='_blank'><FaInstagram size={24} /></Link>
//                             <Link href={'https://www.facebook.com/people/Chilld/61566926630273/'} target='_blank'><FaFacebook size={24} /></Link>
//                             <Link href={'https://www.linkedin.com/company/chilld-app/'} target='_blank'><FaLinkedin size={24} /></Link>
//                             <Link href={'https://medium.com/@chilld_official'} target='_blank'><FaMedium size={24} /></Link>
//                         </div>
//                         <Link href={'/'} ><div className='  bg-[#1DF2F2] p-[8px] px-4 rounded-full cursor-pointer flex justify-center items-start '><p className='text-[16px] font-semibold text'>{getText(3)}</p>
//                         </div></Link>
//                     </div>
//                 </div>
//             </div>

//         </div >
//     )
// }

// export default Footer

"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Appassets } from '@/constants/Appassets';
import { FaEnvelope } from 'react-icons/fa';
import Language from '@/components/Language';
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useTheme } from 'next-themes';
import { static_text } from '@/constants/translations/Translations';
import { LanguageContext } from '@/constants/providers/LanguageContext';

const Footer = () => {
    const { slug } = useContext(LanguageContext);
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';

    const getText = (id: number) => {
        return static_text.find((item) => item.id === id)?.data.find((dataItem) => dataItem.language === slug)?.text || "";
    };
    return (
        <div className='w-full overflow-hidden flex flex-wrap pb-3 lg:pb-5 lg:pt-28 lg:px-14 pt-12 px-5 justify-center items-center'>
            <div className=' flex flex-col gap-10 sm:gap-24 md:items-start items-center xl:w-[100%]'>
                <div className='w-full md:flex md:justify-between md:items-start  sm:flex sm:justify-between gap-5 lg:gap-11 '>
                    <div className='flex flex-col gap-3 justify-center items-center lg:items-start '>
                        <Link href='/'>
                            <Image
                                src={Appassets?.footerimg}
                                alt="External Image"
                                className='lg:w-[350px]'
                            /></Link>
                        <p className='text-[#58595D] dark:text-white md:text-[32px] font-semibold text-2xl my-2 md:my-0'>
                            {getText(14)}
                        </p>
                        <p className='text-[#58595D] dark:text-white md:text-[18px]'>
                            {getText(15)}
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
                    <div className='flex flex-wrap md:flex-nowrap w-fit ml-2 sm:justify-center items-start  gap-16 md:gap-8 lg:gap-40 mt-8 lg:flex-row'>
                        <div className='flex flex-col gap-[27px] flex-wrap'>
                            <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-lg'>{getText(4)}</p></Link>

                            <div className='flex flex-col gap-[13px]'>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white '>{getText(7)}</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(8)}</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(9)} </p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(10)} </p></Link>
                            </div>

                        </div>
                        <div className='flex flex-col gap-[27px] flex-wrap'>
                            <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-lg'>{getText(5)}</p></Link>

                            <div className='flex flex-col gap-[13px]'>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(11)}</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(12)}</p></Link>
                                <Link href={'/'}><p className='text-[#2E2F35] dark:text-white'>{getText(13)}</p></Link>
                            </div>

                        </div>
                        <div className='flex flex-col gap-[27px] flex-wrap  sm:mt-0'>
                            <Link href={'/'}><p className='text-[#2E2F35] dark:text-white font-semibold text-sm md:text-lg'>{getText(6)}</p></Link>

                            <div className='flex  gap-2 cursor-pointer'>
                                <FaEnvelope size={24} className="text-[#2E2F35] dark:text-white" />
                                <p className='text-[#2E2F35] dark:text-white'>
                                    info@chilld.de</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='w-full h-full flex flex-wrap justify-center md:justify-between  gap-3 items-center'>
                    <div className='flex flex-col w-[100%] md:w-auto gap-9 border-t-[1px] border-t-solid dark:border-custom-gray border-[#E1E4EA]'>
                        <div className='mt-10'>
                            <Link href={"/"}>
                                <Image
                                    src={darkMode ? Appassets?.darkmodelogo : Appassets?.logo}
                                    alt="External Image"
                                    className='w-[154px]'
                                /></Link>
                            <p className='text-[#000] dark:text-white font-normal mt'>{getText(14)}</p>
                        </div>
                        <div className=' sm:block hidden w-fit '>
                            <Language />
                        </div>
                        <div className='  flex gap-2 justify-center items-center h-8'>
                            <div className=' sm:hidden block '>
                                <Language />
                            </div>
                            <p className='text-[#58595D] text-[14px] font-medium dark:text-white'>© 2024 Chilld GmbH, {getText(16)}</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-5 md:flex-row  items-center justify-center mb-11 md:mb-0'>
                        <div className='flex gap-[16px]'>
                            <Link href={'https://www.instagram.com/chilld_official/'} target='_blank'><FaInstagram size={24} /></Link>
                            <Link href={'https://www.facebook.com/people/Chilld/61566926630273/'} target='_blank'><FaFacebook size={24} /></Link>
                            <Link href={'https://www.linkedin.com/company/chilld-app/'} target='_blank'><FaLinkedin size={24} /></Link>
                            <Link href={'https://medium.com/@chilld_official'} target='_blank'><FaMedium size={24} /></Link>
                        </div>
                        <Link href={'/'} ><div className='  bg-[#1DF2F2] p-[8px] px-4 rounded-full cursor-pointer flex justify-center items-start '><p className='text-[16px] font-semibold text'>{getText(3)}</p>
                        </div></Link>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Footer
