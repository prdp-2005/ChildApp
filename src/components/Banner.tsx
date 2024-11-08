"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets';
import { useTheme } from 'next-themes';


interface BannerProps {
    title: string;
    type: string;
    subheading1: string;
    subheading2: string;
    darkMode: boolean;
}

const Banner: React.FC<BannerProps> = ({ title, type, subheading1, subheading2 }) => {
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    return (
        <div className="overflow-hidden w-full mt-24  px-3 md:px-11  lg:px-5 flex justify-center items-center">
            <div className="flex justify-center  gap-3  xl:gap-12 2xl:gap-48 items-center flex-wrap md:flex-nowrap w-full 2xl:w-[80vw] lg:-mt-4">

                <div className="flex flex-col gap-4 order-2 md:order-1 justify-between items-center md:items-start w-fit ">
                    <h1 className="text-[#2D2D2D] text-wrap dark:text-white font-bold text-3xl md:text-4xl my-4 lg:text-[50px] xl:text-[55px] text-center md:text-left ">
                        {title} <span className="text-[#1DF2F2]">{type}</span>.
                    </h1>
                    <p className="text-lg md:text-xl lg:text-xl text-center md:text-left">{subheading1}</p>
                    <p className="text-lg md:text-xl lg:text-xl text-center md:text-left">{subheading2}</p>

                    <div className="flex gap-2 justify-center md:justify-start">
                        <Link href="/">
                            <Image
                                src={darkMode ? Appassets?.darkgooglelogoimg : Appassets?.footerplaylogoimg}
                                alt="Google Play Logo"
                                className="w-[120px] md:w-[135px]"
                            />
                        </Link>
                        <Link href="/">
                            <Image
                                src={darkMode ? Appassets?.darkappplaylogoimg : Appassets?.footerappplayimg}
                                alt="App Store Logo"
                                className="w-[120px] md:w-[135px]"
                            />
                        </Link>
                    </div>
                </div>

                <div className=" w-full sm:w-[500px] order-1 md:order-2">
                    <Image
                        src={Appassets?.frontbannerimg}
                        alt="Banner Image"
                        layout="responsive"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </div>

    )
}

export default Banner


// "use client"
// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import { Appassets } from '@/constants/Appassets';
// import { useTheme } from 'next-themes';


// interface BannerProps {
//     title: string;
//     type: string;
//     subheading1: string;
//     subheading2: string;
//     darkMode: boolean;
// }

// const Banner: React.FC<BannerProps> = ({ title, type, subheading1, subheading2 }) => {
//     const { theme, systemTheme } = useTheme();
//     const currentTheme = theme === 'system' ? systemTheme : theme;
//     const darkMode = currentTheme === 'dark';
//     return (
//         <div className="overflow-hidden w-full mt-11 mx-auto pt-24 px-2 lg:pb-12 lg:px-5 flex justify-center items-center">
//             <div className="flex justify-center md:w-[90%] items-center flex-wrap md:flex-nowrap  w-full max-w-screen-lg">

//                 <div className="flex flex-col w-full  gap-4 order-2 md:order-1 justify-center items-center md:items-start px-4 md:px-0">
//                     <h1 className="text-[#2D2D2D] dark:text-white font-bold text-3xl md:text-4xl my-4 lg:text-5xl text-center md:text-left ">
//                         {title} <span className="text-[#1DF2F2]">{type}</span>.
//                     </h1>
//                     <p className="text-lg md:text-xl lg:text-2xl text-center md:text-left">{subheading1}</p>
//                     <p className="text-lg md:text-xl lg:text-2xl text-center md:text-left">{subheading2}</p>

//                     <div className="flex gap-2 justify-center md:justify-start">
//                         <Link href="/">
//                             <Image
//                                 src={darkMode ? Appassets?.darkgooglelogoimg : Appassets?.footerplaylogoimg}
//                                 alt="Google Play Logo"
//                                 className="w-[120px] md:w-[135px]"
//                             />
//                         </Link>
//                         <Link href="/">
//                             <Image
//                                 src={darkMode ? Appassets?.darkappplaylogoimg : Appassets?.footerappplayimg}
//                                 alt="App Store Logo"
//                                 className="w-[120px] md:w-[135px]"
//                             />
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="w-full sm:w-[46rem] lg:w-[100%] order-1 md:order-2">
//                     <Image
//                         src={Appassets?.frontbannerimg}
//                         alt="Banner Image"
//                         layout="responsive"
//                         className="rounded-lg"
//                     />
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Banner

