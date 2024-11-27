// "use client";
// import { LanguageContext } from '@/constants/providers/LanguageContext';
// import { static_text } from '@/constants/translations/Translations';
// import React, { useContext, useState } from 'react';
// import { FaCheck } from "react-icons/fa6";
// import { FaArrowRightLong } from "react-icons/fa6";

// const Planes = () => {
//     const { slug } = useContext(LanguageContext);
//     const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//     const handleClick = (index: number) => {
//         setSelectedIndex(index);
//     };

//     const planesdata = [
//         {
//             id: 1,
//             planetype: static_text.find(item => item.id === 42)?.data.find(dataItem => dataItem.language === slug)?.text || "Free",
//             price: static_text.find(item => item.id === 43)?.data.find(dataItem => dataItem.language === slug)?.text || '$0',
//             desc: static_text.find(item => item.id === 44)?.data.find(dataItem => dataItem.language === slug)?.text || 'Best for Small Teams or Individuals.',
//         },
//         {
//             id: 2,
//             planetype: static_text.find(item => item.id === 45)?.data.find(dataItem => dataItem.language === slug)?.text || 'Professional',
//             price: static_text.find(item => item.id === 46)?.data.find(dataItem => dataItem.language === slug)?.text || '$19',
//             desc: static_text.find(item => item.id === 47)?.data.find(dataItem => dataItem.language === slug)?.text || 'Ideal for Growing Companies.',
//         },
//         {
//             id: 3,
//             planetype: static_text.find(item => item.id === 48)?.data.find(dataItem => dataItem.language === slug)?.text || 'Enterprise',
//             price: static_text.find(item => item.id === 49)?.data.find(dataItem => dataItem.language === slug)?.text || '$49',
//             desc: static_text.find(item => item.id === 50)?.data.find(dataItem => dataItem.language === slug)?.text || 'Ultimate for Enterprise Solutions.',
//         },
//     ];

//     return (
//         <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 flex justify-center items-center flex-wrap">
//             <div className="flex flex-col items-center w-full lg:w-[90%] gap-10 justify-center max-w-7xl">
//                 <h2 className="text-center font-semibold text-2xl lg:text-4xl mb-6 text-gray-800 dark:text-white">
//                     {slug === 'en' ? "Pick Your Perfect Plan" : "Wählen Sie Ihren perfekten Plan"}
//                 </h2>
//                 <div className="flex flex-wrap gap-8 justify-center sm:w-[100%]">
//                     {planesdata.map((item, index) => (
//                         <div
//                             key={item.id}
//                             onClick={() => handleClick(index)}
//                             className={`flex flex-col items-start justify-center gap-5 w-80 p-6 border rounded-[20px] cursor-pointer shadow-[34.854px_29.626px_48.34px_rgba(51,102,255,0.05)] ${selectedIndex === index
//                                 ? "bg-[#1DF2F2] border-[1px] border-black text-black"
//                                 : "dark:bg-dark"
//                                 }`}
//                         >
//                             <p className={`text-lg lg:text-xl font-medium ${selectedIndex === index ? "text-black" : "text-gray-700 dark:text-white"}`}>
//                                 {item.planetype}
//                             </p>
//                             <div className="flex items-baseline gap-2">
//                                 <p className={`text-4xl lg:text-5xl font-bold ${selectedIndex === index ? "text-black" : "text-gray-800 dark:text-white"}`}>
//                                     {item.price}
//                                 </p>
//                                 <p className={`text-sm font-bold ${selectedIndex === index ? "text-black" : "text-gray-500 dark:text-white"}`}>
//                                     {slug === 'en' ? "/month" : "/Monat"}
//                                 </p>
//                             </div>
//                             <p className={`${selectedIndex === index ? "text-black" : "text-gray-600 dark:text-white"} text-sm`}>
//                                 {item.desc}
//                             </p>
//                             <div className="flex flex-col gap-1">
//                                 <p className={`flex flex-row gap-2 items-center font-bold text-nowrap ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
//                                     <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
//                                     {slug === 'en' ? "Write feature details here" : "Fügen Sie hier Feature-Details ein"}
//                                 </p>
//                                 <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
//                                     <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
//                                     {slug === 'en' ? "Write feature details here" : "Fügen Sie hier Feature-Details ein"}
//                                 </p>
//                                 <p className={`flex flex-row gap-2 items-center font-bold ${selectedIndex === index ? "text-black" : "text-[#2D2D2D] dark:text-white"}`}>
//                                     <FaCheck className={selectedIndex === index ? "bg-black" : ""} color="#1DF2F2" />
//                                     {slug === 'en' ? "Write feature details here" : "Fügen Sie hier Feature-Details ein"}
//                                 </p>
//                             </div>
//                             <div className={`py-4 px-12 flex justify-center items-center border border-[#0E121B] rounded-[20px] w-full ${selectedIndex === index ? "bg-white text-black" : "dark:bg-white dark:text-black"}`}>
//                                 <p className="flex flex-row gap-2 items-center bg-transparent">
//                                     {slug === 'en' ? "Get Started" : "Loslegen"}
//                                     <FaArrowRightLong className="hover:text-black" />
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Planes;

"use client";
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
import React, { useContext, useState } from 'react';

import Plane from '../Plane';
interface StoriesProps {
    text: string;
    gtext: string;
}

const Planes: React.FC<StoriesProps> = ({ text, gtext }) => {
    const { slug } = useContext(LanguageContext);
    const [mounted, setMounted] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    const handleToggle = () => {
        setMounted(!mounted);
    }

    const handleClick = (index: number) => {
        setSelectedIndex(index);
    }
    const title = slug === 'en' ? text : gtext;
    
    // const planesdata = [
    //     {
    //         id: 1,
    //         planetype: static_text.find(item => item.id === 42)?.data.find(dataItem => dataItem.language === slug)?.text || "Free",
    //         price: static_text.find(item => item.id === 43)?.data.find(dataItem => dataItem.language === slug)?.text || '$0',
    //         desc: static_text.find(item => item.id === 44)?.data.find(dataItem => dataItem.language === slug)?.text || 'Best for Small Teams or Individuals.',
    //     },
    //     {
    //         id: 2,
    //         planetype: static_text.find(item => item.id === 45)?.data.find(dataItem => dataItem.language === slug)?.text || 'Professional',
    //         price: static_text.find(item => item.id === 46)?.data.find(dataItem => dataItem.language === slug)?.text || '$19',
    //         desc: static_text.find(item => item.id === 47)?.data.find(dataItem => dataItem.language === slug)?.text || 'Ideal for Growing Companies.',
    //     },
    //     {
    //         id: 3,
    //         planetype: static_text.find(item => item.id === 48)?.data.find(dataItem => dataItem.language === slug)?.text || 'Enterprise',
    //         price: static_text.find(item => item.id === 49)?.data.find(dataItem => dataItem.language === slug)?.text || '$49',
    //         desc: static_text.find(item => item.id === 50)?.data.find(dataItem => dataItem.language === slug)?.text || 'Ultimate for Enterprise Solutions.',
    //     },
    // ];

    const planesdata = [
        {
            id: 0,
            planetype: static_text.find(item => item.id === 42)?.data.find(dataItem => dataItem.language === slug)?.text || "Free",
            price: static_text.find(item => item.id === 43)?.data.find(dataItem => dataItem.language === slug)?.text || '$0',
            desc: static_text.find(item => item.id === 44)?.data.find(dataItem => dataItem.language === slug)?.text || 'No-brainer for every parent',
            f1: static_text.find(item => item.id === 80)?.data.find(dataItem => dataItem.language === slug)?.text || 'Milestone notifications',
            f2: static_text.find(item => item.id === 81)?.data.find(dataItem => dataItem.language === slug)?.text || 'Library of qualified experts',
            f3: static_text.find(item => item.id === 82)?.data.find(dataItem => dataItem.language === slug)?.text || 'Join free events',
        },
        {
            id: 1,
            planetype: static_text.find(item => item.id === 45)?.data.find(dataItem => dataItem.language === slug)?.text || 'Child Parent',
            price: mounted
                ? (slug === 'en' ? '$83.20 ' : '€83.20 ')
                : (slug === 'en' ? '$8.32 ' : '€8.32 '),
            desc: static_text.find(item => item.id === 47)?.data.find(dataItem => dataItem.language === slug)?.text || 'For parents who care',
            f1: static_text.find(item => item.id === 83)?.data.find(dataItem => dataItem.language === slug)?.text || 'Everything from “Free”',
            f2: static_text.find(item => item.id === 84)?.data.find(dataItem => dataItem.language === slug)?.text || 'Ad free',
            f3: static_text.find(item => item.id === 85)?.data.find(dataItem => dataItem.language === slug)?.text || '24/7 Expert “Chillo” (AI Assistant)',
        }

    ];
    return (
        <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 flex justify-center items-center flex-wrap">
            <div className="flex flex-col items-center w-full lg:w-[90%] gap-10 justify-center max-w-7xl">
                <h2 className="text-center font-semibold text-2xl lg:text-4xl mb-6 text-gray-800 dark:text-white">
                    {title}
                </h2>
                <div className='flex flex-row gap-6 justify-between items-center'>
                    <p className='text-base font-semibold'>{slug === 'en' ? "Month" : "Monat"}</p>
                    <div
                        onClick={handleToggle}
                        className={`relative w-16 h-8 flex items-center cursor-pointer rounded-full p-1 ${mounted ? 'bg-content dark:bg-[#65558F]' : 'bg-gray-300'
                            }`}
                    >
                        <div
                            className={`absolute bg-white h-6 w-6 rounded-full shadow-md transition-transform duration-300 ${mounted ? 'transform translate-x-8' : ''
                                }`}
                        />
                    </div>
                    <p className='text-base font-semibold'>{slug === 'en' ? "Year" : "Jahr"}</p>
                </div>
                <div className="flex flex-wrap gap-12 justify-center sm:w-[100%]">
                    {planesdata.map((item) => (
                        <Plane
                            key={item.id}
                            item={item}
                            slug={slug}
                            selectedIndex={selectedIndex}
                            onClick={handleClick}
                            mounted={mounted}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Planes;
