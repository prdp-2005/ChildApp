"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import TabsSlides from './TabsSlides';

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
    heading: string
}

const TabBanners: React.FC<TabBannersProps> = ({ data, darkMode, heading }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setSelectedIndex(index);
    };

    return (
        <div className='overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5'>
            <div className='flex flex-col items-center justify-center  md:flex-nowrap'>
                <p className='font-semibold text-2xl lg:text-4xl flex justify-center items-center my-5 mx-3 text-wrap'>
                    {heading}
                </p>
                <div className='hidden md:block'>
                    <div className='mt-16 flex px-10 md:flex-nowrap flex-row items-start justify-center md:items-center'>
                        <div className='w-[50%] h-full lg:flex justify-center'>
                            <Image
                                src={darkMode ? data[selectedIndex]?.darkImage || data[selectedIndex].image : data[selectedIndex].image}
                                alt="Tab Image"
                                width={1920}
                                height={1080}
                                className='w-80 h-full'
                            />
                        </div>
                        <div className='flex-col w-[50%] gap-5 justify-center items-center h-full'>
                            {data.map((item, index) => (
                                <div key={item.id} onClick={() => handleTabClick(index)} className='flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg hover:bg-teal-100 hover:shadow-md p-5 w-full flex-wrap dark:hover:bg-[#15ACAC]'>
                                    <div className='font-semibold lg:text-2xl'>{item.title}</div>
                                    <div className='font-normal lg:text-xl'>{item.desc}</div>
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
