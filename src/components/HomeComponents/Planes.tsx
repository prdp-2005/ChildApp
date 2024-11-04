"use client";
import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const Planes = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    };

    const planesdata = [
        {
            id: 1,
            planetype: 'Free',
            price: '$0',
            desc: 'Best for Small Teams or Individuals.',
        },
        {
            id: 2,
            planetype: 'Professional',
            price: '$19',
            desc: 'Ideal for Growing Companies.',
        },
        {
            id: 3,
            planetype: 'Enterprise',
            price: '$49',
            desc: 'Ultimate for Enterprise Solutions.',
        },
    ];

    return (
        <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 flex justify-center items-center flex-wrap">
            <div className="flex flex-col items-center w-full lg:w-[90%] gap-10 justify-center max-w-7xl">
                <h2 className="text-center font-semibold text-2xl lg:text-4xl mb-6 text-gray-800 dark:text-white">
                    Pick Your Perfect Plan
                </h2>
                <div className="flex flex-wrap gap-8 justify-center sm:w-[100%]">
                    {planesdata.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleClick(index)}
                            className={`flex flex-col items-start justify-center gap-5 w-80 p-6 border rounded-[20px] cursor-pointer shadow-[34.854px_29.626px_48.34px_rgba(51,102,255,0.05)] ${selectedIndex === index
                                ? "bg-[#1DF2F2] border-[1px] border-black text-black"
                                : "dark:bg-dark"
                                }`}
                        >
                            <p className={`text-lg lg:text-xl font-medium ${selectedIndex === index ? "text-black" : "text-gray-700 dark:text-white"}`}>
                                {item.planetype}
                            </p>
                            <div className="flex items-baseline gap-2">
                                <p className={`text-4xl lg:text-5xl font-bold ${selectedIndex === index ? "text-black" : "text-gray-800 dark:text-white"}`}>
                                    {item.price}
                                </p>
                                <p className={`text-sm font-bold ${selectedIndex === index ? "text-black" : "text-gray-500 dark:text-white"}`}>
                                    /month
                                </p>
                            </div>
                            <p className={`${selectedIndex === index ? "text-black" : "text-gray-600 dark:text-white"} text-sm`}>
                                {item.desc}
                            </p>
                            <div className="flex flex-col gap-1">
                                <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
                                    <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
                                    Write feature details here
                                </p>
                                <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
                                    <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
                                    Write feature details here
                                </p>
                                <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
                                    <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
                                    Write feature details here
                                </p>
                            </div>
                            <div className={`py-4 px-12 flex justify-center items-center border border-[#0E121B] rounded-[20px] w-full ${selectedIndex === index ? "bg-white text-black" : "dark:bg-white dark:text-black"}`}>
                                <p className="flex flex-row gap-2 items-center bg-transparent">
                                    Get Started <FaArrowRightLong className="hover:text-black" />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Planes;
