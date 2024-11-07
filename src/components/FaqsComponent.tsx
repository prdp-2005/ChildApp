"use client"
import React from 'react';
import { HiOutlineLightBulb } from "react-icons/hi";

interface Data {
    id: number;
    faqs: string;
    ans: string;
}

interface FaqcomponentProps {
    item: Data;
    isOpen: boolean;
    onToggle: () => void;
}

const Faqcomponent: React.FC<FaqcomponentProps> = ({ item, isOpen, onToggle }) => {
    return (
        <div key={item.id} className="group flex flex-col gap-5 justify-center items-center cursor-pointer px-2  lg:px-0 w-full">
            <div
                onClick={onToggle}
                className="group flex flex-row gap-5 justify-between items-center w-full px-2 lg:px-0 lg:w-2/3"
                aria-expanded={isOpen}
            >
                <p className={`text-md  md:text-xl text-wrap w-full ${isOpen ? 'dark:text-cyan-300' : ''} group-hover:text-medium dark:group-hover:text-cyan-300`}>
                    {item.faqs}
                </p>
                <HiOutlineLightBulb
                    color={isOpen ? 'cyan' : 'white'}
                    className={`bg-medium dark:bg-slate-700 h-7 w-7 transition-transform delay-75 rounded-full p-1 ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            <div
                className={`w-[90%] sm:w-[80%] lg:w-[60%] text-base overflow-hidden transition-all duration-500 ease-in-out h-full ${isOpen ? 'max-h-[500px] opacity-100 my-3' : 'max-h-0 opacity-0'}`}
            >
                <p
                    className={` text-sm md:text-base lg:text-base text-start transition-all ease-in-out duration-500 cursor-pointer ${isOpen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}
                >
                    {item.ans}
                </p>
            </div>

            <div className="h-[1px]  w-full lg:w-2/3 bg-slate-400 dark:bg-content mb-5"></div>
        </div>
    );
};

export default Faqcomponent;
