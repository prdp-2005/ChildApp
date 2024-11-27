"use client"
import { Appassets } from "@/constants/Appassets";
import { LanguageContext } from "@/constants/providers/LanguageContext";
import { static_text } from "@/constants/translations/Translations";
import Image from "next/image";
import React, { useContext, useState } from "react";

const AboutChild = () => {
    const { slug } = useContext(LanguageContext);
    const [isExpanded, setIsExpanded] = useState(false);
    const heading = static_text.find(item => item.id === 108)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    const paragraph1 = static_text.find(item => item.id === 109)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    const paragraph2 = static_text.find(item => item.id === 110)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    const paragraph3 = static_text.find(item => item.id === 111)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    const toggleExpansion = () => setIsExpanded((prev) => !prev);

    return (
        <div className="overflow-hidden w-full mx-auto md:my-10 pb-12 px-7 md:px-14 lg:py-12 lg:px-5">
            <div className="w-full flex flex-col lg:flex-row lg:mx-10 justify-around items-center gap-8 my-10">
                <div className="flex flex-col gap-4 justify-center md:items-start w-full lg:w-[60%]">
                    <h1 className="font-semibold text-2xl md:text-4xl my-5 text-center lg:text-left">
                        {heading}
                    </h1>

                    <p className={`text-balance sm:text-left overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px]" : "max-h-[75px]"
                        }`}>
                        {paragraph1}
                    </p>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px]" : "max-h-[106px] "
                            }`}
                    >
                        <p className="text-xl font-semibold my-3">{slug === 'en' ? `About the Founder:` : `Über den Gründer:`}</p>
                        <p className="text-balance sm:text-left transition-transform duration-500">
                            {paragraph2}
                        </p>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[1000px] " : "max-h-[75px] "
                            }`}
                    >
                        <p className="text-balance sm:text-left transition-transform duration-500">
                            {paragraph3}
                        </p>
                    </div>

                    <button
                        onClick={toggleExpansion}
                        className="mt-3 dark:text-content text-dark underline hover:text-black dark:hover:text-cyan-100"
                    >
                        {isExpanded ? "Show Less" : "Read More"}
                    </button>
                </div>

                <div className="w-full lg:w-[40%] flex justify-center items-center">
                    <Image
                        src={Appassets.founderimg}
                        alt="Founder"
                        className="rounded-lg shadow-lg object-cover"
                        width={354}
                        height={560}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutChild;
