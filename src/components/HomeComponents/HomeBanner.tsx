// "use client"
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Appassets } from '@/constants/Appassets';
// import { useTheme } from '@/context/ThemeContext';

// const Banner = () => {
//     const { darkMode } = useTheme();
//     return (
//         < div className='overflow-hidden w-full mx-auto  py-12 px-14 lg:py-12 lg:px-5' >
//             <div className='flex justify-center items-center flex-wrap md:flex-nowrap'>
//                 <div className='flex flex-col gap-4 order-2 md:order-1 justify-center items-center md:items-start'>
//                     <div className='text-[#2D2D2D] dark:text-white font-bold md:text-5xl text-3xl text-center md:text-start'>Be a chilld <span className='text-[#1DF2F2] '>parent</span>.</div>
//                     <div className='text-[21px] text-center md:text-start'>Chilld is your expert parenting advice and support app.</div>
//                     <div className='text-[21px] text-center md:text-start'>We guide you through all the stages of parenthood.</div>
//                     <div className='flex gap-2'>
//                         <Link href={'/'}><Image
//                             src={darkMode ? Appassets?.darkgooglelogoimg : Appassets?.footerplaylogoimg}
//                             alt="External Image"
//                             className='w-[135px]'
//                         /></Link>
//                         <Link href={'/'}><Image
//                             src={darkMode ? Appassets?.darkappplaylogoimg : Appassets?.footerappplayimg}
//                             alt="External Image"
//                             className='w-[135px]'
//                         /></Link>
//                     </div>
//                 </div>
//                 <div className='w-96 md:w-full md:h-full order-1 md:order-2 lg:w-96 dark:bg-dark'>
//                     <Image
//                         src={Appassets?.frontbannerimg}
//                         alt="External Image"
//                         layout="responsive"
//                         className='h-[200px] w-[300px] '
//                     />
//                 </div>
//             </div>
//         </div >
//     )
// }

// export default Banner
"use client"
import { useTheme } from '@/context/ThemeContext';
import React from 'react'
import Banner from '../Banner';

const HomeBanner = () => {
    const { darkMode } = useTheme();
    return (
        <>
            <Banner
                title="Be a chilld"
                type="Parent"
                subheading1="Chilld is your expert parenting advice and support app."
                subheading2="We guide you through all the stages of parenthood."
                darkMode={darkMode}
            />
        </>
    )
}

export default HomeBanner
