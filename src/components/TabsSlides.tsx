"use client"
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

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

    const handleTabClick = (index: number) => {
        setSelectedIndex(index);
    };

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
        <div className='block md:hidden flex-col gap-5 justify-center items-start w-full'>
            <div className='md:w-[29%] h-full flex justify-center items-center'>
                <Image
                    src={darkMode ? data[selectedIndex]?.darkImage || data[selectedIndex].image : data[selectedIndex].image}
                    alt="Tab Image"
                    width={1920}
                    height={1080}
                    className='w-80 h-full'
                />
            </div>
            <div className="slider-container mx-auto">
                <Slider {...settings}>
                    {data.map((item, index) => (
                        <div key={item.id} onClick={() => handleTabClick(index)} className="flex flex-col gap-5 cursor-pointer justify-center items-start shadow-sm rounded-lg p-5 flex-wrap bg-primary-alpha-10 hover:shadow-md hover:bg-teal-100 dark:hover:bg-[#15ACAC]">
                            <div className='font-semibold text-xl mb-6'>{item.title}</div>
                            <div className='font-normal text-sm text-justify'>{item.desc}</div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TabsSlides;
