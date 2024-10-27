import { Appassets } from '@/constants/Appassets'
import Image from 'next/image'
import React from 'react'
// import ReactStars from "react-rating-stars-component";

interface Story {
    image?: string;
    title: string;
    subtitle: string;
    desc: string;
}
interface StoryComponentProps {
    storydata: Story[];
}

const StoryComponent: React.FC<StoryComponentProps> = ({ storydata }) => {
    return (
        <div className='flex md:flex-row flex-col justify-center gap-4  mt-5 '>
            {storydata.map((story: Story, index: number) => (
                <div key={index} className='rounded-[20px] border border-[#E5F4F2] shadow-[34.854px_29.626px_48.34px_rgba(51,102,255,0.05)] flex flex-col gap-3 p-5 justify-center items-center bg-white w-[33%] dark:bg-dark hover:shadow-teal cursor-pointer'>
                    <Image
                        src={story.image || Appassets.fronttabbanner4img}
                        alt={story.title || "Story Image"}
                        className='rounded h-14 w-14 '
                    />
                    <h3 className='text-lg font-semibold'>{story.title}</h3>
                    <p className='text-sm text-[#374151] dark:text-white text-center'>{story.subtitle}</p>
                    <p className='text-justify text-[#2D2D2D] dark:text-white text-base'>{story.desc}</p>
                    <div className='py-3'>
                        {/* <ReactStars
                            count={5}
                            size={24}
                            activeColor="#F8D57E"
                            color='red'
                        /> */}
                        <Image
                            src={Appassets.starratingimg}
                            alt={story.title || "Story Image"}
                        />
                    </div>

                </div>
            ))}
        </div>
    )
}

export default StoryComponent
