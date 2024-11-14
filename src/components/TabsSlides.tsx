// "use client";
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Image from 'next/image';

// interface DataItem {
//     id: number;
//     title: string;
//     desc: string;
//     image: string;
//     darkImage?: string;
// }

// interface TabsSlidesProps {
//     data: DataItem[];
//     darkMode: boolean;
// }

// const TabsSlides: React.FC<TabsSlidesProps> = ({ data, darkMode }) => {
//     const [selectedIndex, setSelectedIndex] = useState(0);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         beforeChange: (current: number, next: number) => setSelectedIndex(next),
//     };

//     return (
//         <div className="block md:hidden flex-col gap-5 justify-center items-start w-full">
//             <div className="md:w-[29%] h-full flex justify-center items-center">
//                 <Image
//                     src={darkMode ? data[selectedIndex]?.darkImage || data[selectedIndex].image : data[selectedIndex].image}
//                     alt="Tab Image"
//                     width={1920}
//                     height={1080}
//                     className="w-80 h-full transition-all duration-500"
//                 />
//             </div>
//             <div className="slider-container mx-auto">
//                 <Slider {...settings}>
//                     {data.map((item) => (
//                         <div key={item.id} className="flex flex-col gap-5 cursor-pointer justify-center items-start shadow-sm rounded-lg p-5 flex-wrap bg-primary-alpha-10 hover:shadow-md hover:bg-teal-100 dark:hover:bg-[#15ACAC]">
//                             <div className="font-semibold text-xl mb-6">{item.title}</div>
//                             <div className="font-normal text-sm text-justify">{item.desc}</div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>
//     );
// };

// export default TabsSlides;


"use client";
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { Appassets } from '@/constants/Appassets';

interface DataItem {
    id: number;
    title: string;
    desc: string;
    image: string;
    darkImage?: string;
}

interface TabsSlidesProps {
    data: DataItem[];
    darkMode: boolean;
}

const TabsSlides: React.FC<TabsSlidesProps> = ({ data, darkMode }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        beforeChange: (current: number, next: number) => {
            setIsAnimating(true);
            setNextIndex(next);
        },
    };

    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => {
                setSelectedIndex(nextIndex);
                setIsAnimating(false);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [isAnimating, nextIndex]);

    const imageStyles = {
        transform: isAnimating ? 'scale(0.9)' : 'scale(1)',
        opacity: isAnimating ? 0 : 1,
        transition: 'transform 0.5s ease, opacity 0.5s ease',
    };

    return (
        <div className="block md:hidden flex-col gap-5 justify-center items-center w-full">
            <div className="md:w-[29%] h-full flex justify-center items-center mt-7">
                <div className='absolute z-20 w-[250px] h-[520px]'>
                    <Image
                        src={Appassets.frame}
                        alt="Tab Image"
                        className="object-cover "
                    />
                </div>
                <div className='sm:p-7 '>
                    <Image
                        src={darkMode ? data[selectedIndex]?.darkImage || data[selectedIndex].image : data[selectedIndex].image}
                        alt="Tab Image"
                        width={1920}
                        height={1080}
                        style={imageStyles}
                        className="w-[202px] h-[438px]"
                    />
                </div>
            </div>
            <div className="slider-container mx-auto mt-4">
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} className="flex flex-col gap-5 cursor-pointer justify-center items-start  rounded-lg p-5 flex-wrap bg-primary-alpha-10 hover:shadow-md hover:bg-teal-100 dark:hover:bg-[#15ACAC] mt-5">
                            <div className="font-semibold text-xl mb-6">{item.title}</div>
                            <div className="font-normal text-sm text-justify">{item.desc}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TabsSlides;
