"use client"
import React from 'react'
import StoryComponent from '../StoryComponent'
import { Appassets } from '@/constants/Appassets'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'next/image';
const Stories = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        arrows: false,

    };
    const data = [
        {
            id: 1,
            image: Appassets?.storyimg1,
            title: 'Sarah K.',
            subtitle: 'UX Designer @Brello',
            desc: '"I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!"',
        },
        {
            id: 2,
            image: Appassets?.storyimg2,
            title: 'Michael L.',
            subtitle: 'Creative Director @Yo',
            desc: '“The Landing Page UI Kit has been a game changer for my agency. The pre-designed components and templates have helped us deliver projects faster and with more consistency. Great job!"',
        },
        {
            id: 3,
            image: Appassets?.storyimg3,
            title: 'Lauren M.',
            subtitle: 'UI Designer @Boo',
            desc: `"Anima’s Landing Page UI Kit has become a staple in my design toolkit. Whether I'm working on a new project or need to make updates to an existing one, this kit has everything I need to get the job done quickly and efficiently."`
        },
    ]
    return (
        <div className='overflow-hidden w-full mx-auto py-12 px-4 lg:px-14 flex justify-center items-center'>
            <div className=' flex-col items-center w-[90%]'>
                <h2 className='text-center font-semibold text-2xl lg:text-4xl mb-4'>
                    Real Stories from Satisfied Customers
                </h2>
                <p className='text-[#2D2D2D] text-center text-base mb-6'>
                    See how Chilld is making an impact.
                </p>
                <div className='hidden md:block'>
                    <StoryComponent storydata={data} />
                </div>
                <div className='block md:hidden'>
                    <div className="carousel ">
                        <Slider {...settings}>
                            {data.map((item, index) => (
                                <div key={index} className='rounded-[20px] border  flex flex-col gap-3 p-5 justify-center items-center h-[21rem] '>
                                    <Image
                                        src={item.image || Appassets.fronttabbanner4img}
                                        alt={item.title || "Story Image"}
                                        className='rounded h-14 w-14'
                                    />
                                    <h3 className='text-lg font-semibold'>{item.title}</h3>
                                    <p className='text-sm text-[#374151] text-center'>{item.subtitle}</p>
                                    <p className='text-justify text-[#2D2D2D] text-base'>{item.desc}</p>
                                    <div className='py-3'>
                                        {/* <ReactStars
                                        count={5}
                                        size={24}
                                        activeColor="#F8D57E"
                                        color='red'
                                         /> */}
                                        <Image
                                            src={Appassets.starratingimg}
                                            alt={"Story Image"}
                                        />
                                    </div>

                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stories
