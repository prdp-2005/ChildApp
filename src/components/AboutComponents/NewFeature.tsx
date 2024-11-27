"use client"
import { Appassets } from '@/constants/Appassets'
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React, { useContext } from 'react'

const NewFeature = () => {
    const { slug } = useContext(LanguageContext);
    const { theme, systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;
    const darkMode = currentTheme === 'dark';
    console.log(darkMode)
    const heading = static_text.find(item => item.id === 112)?.data.find(dataItem => dataItem.language === slug)?.text || "";
    const data = [
        {
            id: 1,
            title: `${slug === 'en' ? 'Tell us what you need!' : `Sagen Sie uns, was Sie brauchen!`}`,
            desc: `${slug === 'en' ? 'We are still in the early stages of our app. Help us make Chilld even better! ' : `Wir befinden uns noch in der Anfangsphase unserer App. Helfen Sie uns, Chilld noch besser zu machen!`}`
        },
        {
            id: 2,
            title: `${slug === 'en' ? 'Join our Expert Board and receive premium offers.' : `Treten Sie unserem Expertenforum bei und erhalten Sie Premium-Angebote.`}`,
            desc: `${slug === 'en' ? 'Our Expert Board helps us make our app as seamless and useful as possible for all parents. In return, they get special offers.' : `Unser Expertengremium hilft uns, unsere App für alle Eltern so nahtlos und nützlich wie möglich zu gestalten. Im Gegenzug erhalten sie Sonderangebote.`}`,
        },
        {
            id: 3,
            title: `${slug === 'en' ? 'Report problems and bugs.' : `Melden Sie Probleme und Fehler.`}`,
            desc: `${slug === 'en' ? 'If you spot a problem please let us know!' : `Wenn Sie ein Problem entdecken, teilen Sie uns dies bitte mit!`}`
        },

    ];
    return (
        <div className='overflow-hidden w-full mx-auto md:my-10  px-7 md:px-14 lg:py-12 lg:px-5'>
            <div className='font-semibold text-2xl md:text-4xl my-5 xl:mb-10 text-center '>
                {heading}
            </div>
            <div className='w-full flex flex-col lg:flex-row  justify-around items-center gap-8 my-10'>
                <div className="w-full lg:w-[40%] flex justify-center items-center">
                    <Image
                        src={darkMode ? Appassets?.featuredarkimg : Appassets?.featureimg}
                        alt="Founder"
                        className="rounded-lg object-cover"
                    />
                </div>
                <div className="flex-col w-fit sm:w-[80%]  lg:w-[50%] gap-5 justify-center items-center h-full">
                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={`flex flex-col gap-2 cursor-pointer justify-center bg-primary-alpha-10 shadow-sm items-start rounded-lg my-2 p-5 w-full transition-all duration-300 ease-in-out 
                                 hover:dark:bg-[#15ACAC] hover:bg-teal-100`}
                        >
                            <div className="font-semibold lg:text-2xl">{item.title}</div>
                            <div className="font-normal lg:text-xl">{item.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewFeature