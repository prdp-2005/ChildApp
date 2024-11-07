// "use client"
// import React from 'react'
// import StoryComponent from '../StoryComponent'
// import { Appassets } from '@/constants/Appassets'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import Image from 'next/image';
// const Stories = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         arrows: false,

//     };
//     const data = [
//         {
//             id: 1,
//             image: Appassets?.storyimg1,
//             title: 'Sarah K.',
//             subtitle: 'UX Designer @Brello',
//             desc: '"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"',
//         },
//         {
//             id: 2,
//             image: Appassets?.storyimg2,
//             title: 'Michael L.',
//             subtitle: 'Creative Director @Yo',
//             desc: '“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"',
//         },
//         {
//             id: 3,
//             image: Appassets?.storyimg3,
//             title: 'Lauren M.',
//             subtitle: 'UI Designer @Boo',
//             desc: `"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."`
//         },
//     ]
//     return (
//         <div className='overflow-hidden w-full mx-auto py-12 px-4 lg:px-0 flex justify-center items-center'>
//             <div className=' flex-col items-center w-[90%]'>
//                 <h2 className='text-center font-semibold text-2xl lg:text-4xl mb-4'>
//                     Real Stories from Satisfied Customers
//                 </h2>
//                 <p className='text-[#2D2D2D] text-center text-base mb-6 dark:text-white'>
//                     See how Chilld is making an impact.
//                 </p>
//                 <div className='hidden md:block'>
//                     <StoryComponent storydata={data} />
//                 </div>
//                 <div className='block md:hidden'>
//                     <div className="carousel border  rounded-[20px] ">
//                         <Slider {...settings}>

//                             {data.map((item, index) => (
//                                 <div key={index} className=''>
//                                     <div className=' flex flex-col gap-3 p-5 justify-center items-center   mx-2 my-2 '>
//                                         <Image
//                                             src={item.image || Appassets.fronttabbanner4img}
//                                             alt={item.title || "Story Image"}
//                                             className='rounded h-14 w-14'
//                                         />
//                                         <h3 className='text-lg font-semibold'>{item.title}</h3>
//                                         <p className='text-sm text-[#374151] dark:text-white text-center'>{item.subtitle}</p>
//                                         <p className='text-justify text-[#2D2D2D] dark:text-white text-base  '>{item.desc}</p>
//                                         <div className='py-3'>
//                                             <Image
//                                                 src={Appassets.starratingimg}
//                                                 alt={"Story Image"}
//                                             />
//                                         </div>

//                                     </div></div>

//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Stories

// "use client"
// import React from 'react'
// import StoryComponent from '../StoryComponent'
// import { Appassets } from '@/constants/Appassets'
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from 'react-slick';
// import Image from 'next/image';
// const Stories = () => {
//     const settings = {
//         dots: false,
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         speed: 2000,
//         autoplaySpeed: 2000,
//         arrows: false,

//     };
//     const data = [
//         {
//             id: 1,
//             image: Appassets?.storyimg1,
//             title: 'Sarah K.',
//             subtitle: 'UX Designer @Brello',
//             desc: '"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"',
//         },
//         {
//             id: 2,
//             image: Appassets?.storyimg2,
//             title: 'Michael L.',
//             subtitle: 'Creative Director @Yo',
//             desc: '“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"',
//         },
//         {
//             id: 3,
//             image: Appassets?.storyimg3,
//             title: 'Lauren M.',
//             subtitle: 'UI Designer @Boo',
//             desc: `"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."`
//         },
//     ]
//     return (
//         <div className='overflow-hidden w-full mx-auto py-12 px-4 lg:px-0 flex justify-center items-center'>
//             <div className=' flex-col items-center w-[90%]'>
//                 <h2 className='text-center font-semibold text-2xl lg:text-4xl mb-4'>
//                     Real Stories from Satisfied Customers
//                 </h2>
//                 <p className='text-[#2D2D2D] text-center text-base mb-6 dark:text-white'>
//                     See how Chilld is making an impact.
//                 </p>
//                 <div className='hidden md:block'>
//                     <StoryComponent storydata={data} />
//                 </div>
//                 <div className='block md:hidden'>
//                     <div className="carousel border  rounded-[20px] ">
//                         <Slider {...settings}>

//                             {data.map((item, index) => (
//                                 <div key={index} className=''>
//                                     <div className=' flex flex-col gap-3 p-5 justify-center items-center   mx-2 my-2 '>
//                                         <Image
//                                             src={item.image || Appassets.fronttabbanner4img}
//                                             alt={item.title || "Story Image"}
//                                             className='rounded h-14 w-14'
//                                         />
//                                         <h3 className='text-lg font-semibold'>{item.title}</h3>
//                                         <p className='text-sm text-[#374151] dark:text-white text-center'>{item.subtitle}</p>
//                                         <p className='text-justify text-[#2D2D2D] dark:text-white text-base  '>{item.desc}</p>
//                                         <div className='py-3'>
//                                             <Image
//                                                 src={Appassets.starratingimg}
//                                                 alt={"Story Image"}
//                                             />
//                                         </div>

//                                     </div></div>

//                             ))}
//                         </Slider>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Stories

"use client";
import React, { useContext } from 'react';
import StoryComponent from '../StoryComponent';
import { Appassets } from '@/constants/Appassets';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';

interface StoriesProps {
    text: string;
    gtext: string;
}
const Stories: React.FC<StoriesProps> = ({ text, gtext }) => {
    const { slug } = useContext(LanguageContext);

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        arrows: false,
    };
    const title = slug === 'en' ? text : gtext;
    const data = [
        {
            id: 1,
            image: Appassets?.storyimg1,
            title: static_text.find(item => item.id === 32)?.data.find(dataItem => dataItem.language === slug)?.text || "Sarah K.",
            subtitle: static_text.find(item => item.id === 33)?.data.find(dataItem => dataItem.language === slug)?.text || "UX Designer @Brello",
            desc: static_text.find(item => item.id === 34)?.data.find(dataItem => dataItem.language === slug)?.text || "I was looking for a way to streamline my design process...",
        },
        {
            id: 2,
            image: Appassets?.storyimg2,
            title: static_text.find(item => item.id === 35)?.data.find(dataItem => dataItem.language === slug)?.text || "Michael L.",
            subtitle: static_text.find(item => item.id === 36)?.data.find(dataItem => dataItem.language === slug)?.text || "Creative Director @Yo",
            desc: static_text.find(item => item.id === 37)?.data.find(dataItem => dataItem.language === slug)?.text || "The Landing Page UI Kit has been a game changer...",
        },
        {
            id: 3,
            image: Appassets?.storyimg3,
            title: static_text.find(item => item.id === 38)?.data.find(dataItem => dataItem.language === slug)?.text || "Lauren M.",
            subtitle: static_text.find(item => item.id === 39)?.data.find(dataItem => dataItem.language === slug)?.text || "UI Designer @Boo",
            desc: static_text.find(item => item.id === 40)?.data.find(dataItem => dataItem.language === slug)?.text || "Anima’s Landing Page UI Kit has become a staple...",
        },
    ];

    return (
        <div className='overflow-hidden w-full mx-auto py-12 px-4 lg:px-0 flex justify-center items-center'>
            <div className='flex-col items-center w-[90%]'>
                <h2 className='text-center font-semibold text-2xl lg:text-4xl mb-4'>
                    {title}
                </h2>
                <p className='text-[#2D2D2D] text-center text-base mb-6 md:my-12 dark:text-white'>
                    {slug === 'en' ? "See how Chilld is making an impact." : "Sehen Sie, wie Chilld einen Unterschied macht."}
                </p>
                <div className='hidden md:block '>
                    <StoryComponent storydata={data} />
                </div>
                <div className='block md:hidden'>
                    <div className="carousel border rounded-[20px]">
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index}>
                                    <div className='flex flex-col gap-3 p-5 justify-center items-center mx-2 my-2'>
                                        <Image
                                            src={item.image || Appassets.fronttabbanner4img}
                                            alt={item.title || "Story Image"}
                                            className='rounded h-14 w-14'
                                        />
                                        <h3 className='text-lg font-semibold'>{item.title}</h3>
                                        <p className='text-sm text-[#374151] dark:text-white text-center'>{item.subtitle}</p>
                                        <p className='text-justify text-[#2D2D2D] dark:text-white text-base'>{item.desc}</p>
                                        <div className='py-3'>
                                            <Image
                                                src={Appassets.starratingimg}
                                                alt="Star Rating"
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stories;
