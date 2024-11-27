// import React, { useState } from 'react'
// import { FaCheck } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

// interface DataItem {
//     id: number;
//     planetype: string;
//     desc: string;
//     price: string;
// }

// interface PlanesProps {
//     planesdata: DataItem[];
//     slug: string
// }

// const Plane: React.FC<PlanesProps> = ({ planesdata, slug }) => {
//     const handleClick = (index: number) => {
//         setSelectedIndex(index);
//     };
//     const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
//     return (
//         <>
//             <div className="flex flex-wrap gap-8 justify-center sm:w-[100%]">
//                 {planesdata.map((item, index) => (
//                     <div
//                         key={item.id}
//                         onClick={() => handleClick(index)}
//                         className={`flex flex-col items-start justify-center gap-5 w-80 p-6 border rounded-[20px] cursor-pointer shadow-[34.854px_29.626px_48.34px_rgba(51,102,255,0.05)] ${selectedIndex === index
//                             ? "bg-[#1DF2F2] border-[1px] border-black text-black"
//                             : "dark:bg-dark"
//                             }`}
//                     >
//                         <p className={`text-lg lg:text-xl font-medium ${selectedIndex === index ? "text-black" : "text-gray-700 dark:text-white"}`}>
//                             {item.planetype}
//                         </p>
//                         <div className="flex items-baseline gap-2">
//                             <p className={`text-4xl lg:text-5xl font-bold ${selectedIndex === index ? "text-black" : "text-gray-800 dark:text-white"}`}>
//                                 {item.price}
//                             </p>
//                             <p className={`text-sm font-bold ${selectedIndex === index ? "text-black" : "text-gray-500 dark:text-white"}`}>
//                                 {slug === 'en' ? "/month" : "/Monat"}
//                             </p>
//                         </div>
//                         <p className={`${selectedIndex === index ? "text-black" : "text-gray-600 dark:text-white"} text-sm`}>
//                             {item.desc}
//                         </p>
//                         <div className="flex flex-col gap-1">
//                             <p className={`flex flex-row gap-2 items-center font-bold text-nowrap ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
//                                 <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
//                                 {slug === 'en' ? "Write feature details here" : "Fügen Sie hier Feature-Details ein"}
//                             </p>
//                             <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
//                                 <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
//                                 {slug === 'en' ? "Write feature details here" : "Fügen Sie hier Feature-Details ein"}
//                             </p>
//                             <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
//                                 <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
//                                 {slug === 'en' ? "Write feature details here" : "Fügen Sie hier Feature-Details ein"}
//                             </p>
//                         </div>
//                         <div className={`py-4 px-12 flex justify-center items-center border border-[#0E121B] rounded-[20px] w-full ${selectedIndex === index ? "bg-white text-black" : "dark:bg-white dark:text-black"}`}>
//                             <p className="flex flex-row gap-2 items-center bg-transparent">
//                                 {slug === 'en' ? "Get Started" : "Loslegen"}
//                                 <FaArrowRightLong className="hover:text-black" />
//                             </p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Plane

import React from 'react';
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

interface DataItem {
    id: number;
    planetype: string;
    desc: string;
    price: string;
    f1: string;
    f2: string;
    f3: string;
}

interface PlaneProps {
    item: DataItem;
    slug: string;
    selectedIndex: number | null;
    onClick: (index: number) => void;
    mounted: boolean;
}

const Plane: React.FC<PlaneProps> = ({ item, slug, selectedIndex, onClick, mounted }) => {
    return (
        <div
            onClick={() => onClick(item.id)}
            className={`flex flex-col items-start justify-center gap-5 w-80 p-6 border rounded-[20px] cursor-pointer shadow-[34.854px_29.626px_48.34px_rgba(51,102,255,0.05)]
                transition-transform duration-300 ease-in-out transform hover:scale-105
                ${selectedIndex === item.id
                    ? "bg-[#1DF2F2] border-[1px] border-black text-black animate-selected"
                    : "dark:bg-dark"
                }`}
        >
            <p className={`text-lg lg:text-xl font-medium ${selectedIndex === item.id ? "text-black" : "text-gray-700 dark:text-white"}`}>
                {item.planetype}
            </p>
            <div className="flex items-baseline gap-2">
                <p className={`text-4xl lg:text-5xl font-bold ${selectedIndex === item.id ? "text-black" : "text-gray-800 dark:text-white"}`}>
                    {mounted ? item.price : item.price}
                </p>
                <p className={`text-sm font-bold ${selectedIndex === item.id ? "text-black" : "text-gray-500 dark:text-white"}`}>
                    {slug === 'en' ? (mounted ? "/year" : "/month") : (mounted ? "/Jahr" : "/Monat")}
                </p>
            </div>
            <p className={`${selectedIndex === item.id ? "text-black" : "text-gray-600 dark:text-white"} text-sm`}>
                {item.desc}
            </p>
            <div className="flex flex-col gap-1 transition-all duration-500">
                {mounted && (item.planetype === 'Chilld Parent' || item.planetype === 'Kind-Elternteil') && (
                    <p className={`flex flex-row gap-2 items-center transition-all duration-300 font-bold ${selectedIndex === item.id ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
                        <FaCheck
                            className="rounded-full transition-all duration-300"
                            color={selectedIndex === item.id ? "black" : "#1DF2F2"}
                        />
                        {slug === 'en' ? (mounted ? "2 months for free" : "") : (mounted ? "2 Monate gratis" : "")}
                    </p>)}
                {[item.f1, item.f2, item.f3].map((feature, index) => (
                    feature && (
                        <p
                            key={index}
                            className={`flex flex-row gap-2 items-center font-bold text-wrap ${selectedIndex === item.id ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}
                        >
                            <FaCheck
                                className="rounded-full transition-all duration-200"
                                color={selectedIndex === item.id ? "black" : "#1DF2F2"}
                            />
                            {feature}
                        </p>
                    )
                ))}
            </div>
            <div className={`py-4 px-12 flex justify-center items-center border border-[#0E121B] rounded-[20px] w-full ${selectedIndex === item.id ? "bg-white text-black" : "dark:bg-white dark:text-black"} transition-all duration-300`}>
                <p className="flex flex-row gap-2 items-center bg-transparent">
                    {slug === 'en' ? "Get Started" : "Loslegen"}
                    <FaArrowRightLong className="hover:text-black transition-all duration-300" />
                </p>
            </div>
        </div>
    );
}

export default Plane;
