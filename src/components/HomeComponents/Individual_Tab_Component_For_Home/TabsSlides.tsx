// "use client"
// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { Appassets } from '@/constants/Appassets';
// import Image from 'next/image';
// import { useTheme } from '@/context/ThemeContext';

// const TabsSlides = () => {
//     const { darkMode } = useTheme();
//     const data = [
//         {
//             id: 1,
//             title: 'Join Free Events',
//             desc: 'Join our free events to solve common parenting problems.',
//             image: Appassets?.fronttabbanner1img
//         },
//         {
//             id: 2,
//             title: 'Speak to experts',
//             desc: 'Our coaches and experts can help with any parenting issue.',
//             image: Appassets?.fronttabbanner2img
//         },
//         {
//             id: 3,
//             title: 'Create Group Sessions for you and your friends.',
//             desc: 'Your parents-friends have the same problems. Create a group session and share the costs.',
//             image: Appassets?.fronttabbanner3img
//         },
//         {
//             id: 4,
//             title: 'Everything at your fingertip!',
//             desc: 'Connect, message, pay, get reminders and more, all in your pocket.',
//             image: Appassets?.fronttabbanner4img
//         },
//     ]

//     const [issameIndex, SetissameIndex] = useState(0);
//     const handleTabClick = (index: number) => {
//         SetissameIndex(index)
//     }
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         arrows: false,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };
//     return (
//         <div className='block md:hidden flex-col  gap-5 justify-center items-start w-full'>
//             <div className='  md:w-[29%] h-full flex justify-center items-center'>
//                 <Image
//                     src={darkMode ? Appassets?.darkfronttabbanner2img : data[issameIndex].image}
//                     alt="External Image"
//                     width={1920}
//                     height={1080}
//                     className='w-80 h-full'
//                 />
//             </div>
//             <div className="slider-container  mx-auto   ">
//                 <Slider {...settings}>
//                     {data.map((item, index) => (
//                         <div key={item.id} onClick={() => handleTabClick(index)} className="flex flex-col gap-5 cursor-pointer justify-center items-start shadow-sm rounded-lg p-5 flex-wrap bg-primary-alpha-10 hover:shadow-md hover:bg-teal-100 dark:hover:bg-[#15ACAC]">
//                             <div className='font-semibold text-xl  mb-6'>{item.title}</div>
//                             <div className='font-normal text-sm text-justify'>{item.desc}</div>
//                         </div>
//                     ))}
//                 </Slider>
//             </div>
//         </div>

//     )
// }

// export default TabsSlides
