// "use client"
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import TabsSlides from './TabsSlides';

// interface DataItem {
//     id: number;
//     title: string;
//     desc: string;
//     image: string;
//     darkImage?: string;
// }

// interface TabBannersProps {
//     data: DataItem[];
//     darkMode: boolean;
//     heading: string;
// }

// const TabBanners: React.FC<TabBannersProps> = ({ data, darkMode, heading }) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);

//     useEffect(() => {
//         if (!isHovered) {
//             const interval = setInterval(() => {
//                 setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length);
//             }, 3000);
//             return () => clearInterval(interval);
//         }

//     }, [data.length, isHovered]);

//     const handleTabClick = (index: number) => {
//         setSelectedIndex(index);
//     };
//     const handleMouseEnter = () => {
//         setIsHovered(true)
//     }
//     const handleMouseleave = () => {
//         setIsHovered(false)
//     }
//     return (
//         <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 my-6">
//             <div className="flex flex-col items-center justify-center md:flex-nowrap">
//                 <p className="font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5 mx-3 text-wrap">
//                     {heading}
//                 </p>
//                 <div className="hidden md:block justify-center">
//                     <div className="mt-16 flex px-10 md:flex-nowrap flex-row items-start justify-center md:items-center gap-9">
//                         <div className="w-fit h-full lg:flex flex-col items-center justify-center">
//                             <Image
//                                 src={darkMode ? data[selectedIndex]?.darkImage || data[selectedIndex].image : data[selectedIndex].image}
//                                 alt="Tab Image"
//                                 width={1920}
//                                 height={1080}
//                                 className="w-80 h-full"
//                             />
//                             <div className="flex flex-row gap-4 justify-center">
//                                 {data.map((dots, index) => (
//                                     <div
//                                         key={index}
//                                         className={`w-3 h-3 rounded-full dark:border-white border border-dark ${selectedIndex === index ? 'bg-dark dark:bg-content' : 'bg-transparent'}`}
//                                     ></div>
//                                 ))}
//                             </div>
//                         </div>
//                         <div className="flex-col w-[50%] gap-5 justify-center items-center h-full">
//                             {data.map((item, index) => (
//                                 <div
//                                     key={item.id}
//                                     onClick={() => handleTabClick(index)}
//                                     onMouseEnter={handleMouseEnter}
//                                     onMouseLeave={handleMouseleave}
//                                     className={`flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg my-2 p-5 w-full flex-wrap transition-all duration-300 ease-in-out ${selectedIndex === index ? 'dark:bg-[#15ACAC] bg-teal-100' : 'bg-transparent hover:shadow-md hover:shadow-content'}`}
//                                 >
//                                     <div className="font-semibold lg:text-2xl">{item.title}</div>
//                                     <div className="font-normal lg:text-xl">{item.desc}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <TabsSlides data={data} darkMode={darkMode} />
//             </div>
//         </div>
//     );
// };

// export default TabBanners;




// "use client";
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';
// import TabsSlides from './TabsSlides';

// interface DataItem {
//     id: number;
//     title: string;
//     desc: string;
//     image: string;
//     darkImage?: string;
// }

// interface TabBannersProps {
//     data: DataItem[];
//     darkMode: boolean;
//     heading: string;
// }

// const TabBanners: React.FC<TabBannersProps> = ({ data, darkMode, heading }) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);
//     const [isHovered, setIsHovered] = useState(false);

//     useEffect(() => {
//         if (!isHovered) {
//             const interval = setInterval(() => {
//                 setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length);
//             }, 3000);
//             return () => clearInterval(interval);
//         }
//     }, [data.length, isHovered]);

//     const handleTabClick = (index: number) => {
//         setSelectedIndex(index);
//     };
//     const handleMouseEnter = () => setIsHovered(true);
//     const handleMouseLeave = () => setIsHovered(false);

//     return (
//         <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 my-6">
//             <div className="flex flex-col items-center justify-center md:flex-nowrap">
//                 <p className="font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5 mx-3 text-wrap">
//                     {heading}
//                 </p>
//                 <div className="hidden md:flex justify-center items-center">
//                     <div className="mt-16 flex px-10 flex-row items-center justify-center gap-9">
//                         <div className="w-80 h-full overflow-hidden relative">
//                             <div
//                                 className=" flex transform translate-x-full transition-transform duration-1000 ease-in-out hover:translate-x-0"
//                                 style={{
//                                     transform: `translateX(-${selectedIndex * 100}%)`,
//                                 }}
//                             >
//                                 {data.map((item, index) => (
//                                     <div key={index} className="min-w-full h-full ">
//                                         <Image
//                                             src={darkMode ? item.darkImage || item.image : item.image}
//                                             alt="Tab Image"
//                                             width={320}
//                                             height={400}
//                                             className="object-cover w-full h-full "
//                                         />
//                                     </div>
//                                 ))}
//                             </div>

//                             <div className="flex gap-4 justify-center ">
//                                 {data.map((_, index) => (
//                                     <div
//                                         key={index}
//                                         onClick={() => handleTabClick(index)}
//                                         onMouseEnter={handleMouseEnter}
//                                         onMouseLeave={handleMouseLeave}
//                                         className={`cursor-pointer w-3 h-3 rounded-full ${selectedIndex === index
//                                             ? 'bg-dark dark:bg-content'
//                                             : 'bg-transparent border border-dark dark:border-white'
//                                             }`}
//                                     ></div>
//                                 ))}
//                             </div>
//                         </div>


//                         <div className="flex-col w-[50%] gap-5 justify-center items-center h-full">
//                             {data.map((item, index) => (
//                                 <div
//                                     key={item.id}
//                                     onClick={() => handleTabClick(index)}
//                                     onMouseEnter={handleMouseEnter}
//                                     onMouseLeave={handleMouseLeave}
//                                     className={`flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg my-2 p-5 w-full transition-all duration-300 ease-in-out ${selectedIndex === index
//                                         ? 'dark:bg-[#15ACAC] bg-teal-100'
//                                         : 'bg-transparent hover:shadow-md hover:shadow-content'
//                                         }`}
//                                 >
//                                     <div className="font-semibold lg:text-2xl">{item.title}</div>
//                                     <div className="font-normal lg:text-xl">{item.desc}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//                 <TabsSlides data={data} darkMode={darkMode} />
//             </div>
//         </div>
//     );
// };

// export default TabBanners;



"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import TabsSlides from './TabsSlides';
import { Appassets } from '@/constants/Appassets';

interface DataItem {
    id: number;
    title: string;
    desc: string;
    image: string;
    darkImage?: string;
}

interface TabBannersProps {
    data: DataItem[];
    darkMode: boolean;
    heading: string;
}

const TabBanners: React.FC<TabBannersProps> = ({ data, darkMode, heading }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!isHovered) {
            const interval = setInterval(() => {
                setSelectedIndex((prevIndex) => (prevIndex + 1) % data.length);
            }, 3000);
            return () => clearInterval(interval);
        }
    }, [data.length, isHovered]);

    const handleTabClick = (index: number) => {
        setSelectedIndex(index);
    };
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 my-6">
            <div className="flex flex-col items-center justify-center md:flex-nowrap">
                <p className="font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5 mx-3 text-wrap">
                    {heading}
                </p>
                <div className="hidden md:flex justify-center items-center">
                    <div className="mt-16 flex px-10 flex-row items-center justify-center gap-9">
                        <div className="w-80 h-full overflow-hidden relative -mx-2">
                            <Image
                                src={Appassets.frame}
                                alt="Tab Image"
                                width={380}
                                height={400}
                                className="object-cover  absolute z-20 overflow-hidden"
                            />
                            <div
                                className=" flex transform translate-x-full transition-transform duration-1000 ease-in-out hover:translate-x-0 w-fit h-fit"
                                style={{
                                    transform: `translateX(-${selectedIndex * 100}%)`,
                                }}
                            >

                                {data.map((item, index) => (
                                    <div key={index} className="min-w-full h-full px-7 py-10">
                                        <Image
                                            src={darkMode ? item.darkImage || item.image : item.image}
                                            alt="Tab Image"
                                            width={202}
                                            height={448}
                                            className="object-cover w-full h-full "
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 justify-center mt-3">
                                {data.map((_, index) => (
                                    <div
                                        key={index}
                                        onClick={() => handleTabClick(index)}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        className={`cursor-pointer w-3 h-3 rounded-full ${selectedIndex === index
                                            ? 'bg-dark dark:bg-content'
                                            : 'bg-transparent border border-dark dark:border-white'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                        </div>


                        <div className="flex-col w-[50%] gap-5 justify-center items-center h-full">
                            {data.map((item, index) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleTabClick(index)}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    className={`flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg my-2 p-5 w-full transition-all duration-300 ease-in-out ${selectedIndex === index
                                        ? 'dark:bg-[#15ACAC] bg-teal-100'
                                        : 'bg-transparent hover:shadow-md hover:shadow-content'
                                        }`}
                                >
                                    <div className="font-semibold lg:text-2xl">{item.title}</div>
                                    <div className="font-normal lg:text-xl">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <TabsSlides data={data} darkMode={darkMode} />
            </div>
        </div>
    );
};

export default TabBanners;
