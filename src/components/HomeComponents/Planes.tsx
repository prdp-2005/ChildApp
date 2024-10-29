import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
const Planes = () => {
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
    ]
    return (
        <div className="overflow-hidden w-full mx-auto py-12 px-14 lg:py-12 lg:px-5 flex justify-center items-center flex-wrap">
            <div className="flex flex-col items-center w-full lg:w-[90%] gap-10 justify-center max-w-7xl">
                <h2 className="text-center font-semibold text-2xl lg:text-4xl mb-6 text-gray-800 dark:text-white ">
                    Pick Your Perfect Plan
                </h2>
                <div className="flex flex-wrap gap-8 justify-center sm:w-[100%]">
                    {planesdata.map((item) => (
                        <div key={item.id} className="flex flex-col items-start justify-center gap-5 w-80 flex-wrap p-6 border rounded-[20px]  dark:bg-dark active:bg-[#1DF2F2] dark:active:bg-[#1DF2F2] active:border-[1px] active:border-black hover:shadow-teal cursor-pointer shadow-[34.854px_29.626px_48.34px_rgba(51,102,255,0.05)]">
                            <p className="text-lg lg:text-xl font-medium text-gray-700 dark:text-white">{item.planetype}</p>
                            <div className="flex items-baseline gap-2">
                                <p className="text-gray-800 dark:text-white text-4xl lg:text-5xl font-bold">{item.price}</p>
                                <p className="text-gray-500 dark:text-white text-sm font-bold">/month</p>
                            </div>
                            <p className="text-gray-600 text-sm dark:text-white">{item.desc}</p>
                            <div className='flex flex-col gap-1'>
                                <p className='flex flex-row gap-2 items-center dark:text-white text-[#2D2D2D] font-bold'><FaCheck color='#1DF2F2' /> Write feature details here</p>
                                <p className='flex flex-row gap-2 items-center dark:text-white text-[#2D2D2D] font-bold'><FaCheck color='#1DF2F2' /> Write feature details here</p>
                                <p className='flex flex-row gap-2 items-center dark:text-white text-[#2D2D2D] font-bold'><FaCheck color='#1DF2F2' /> Write feature details here</p>
                            </div>
                            <div className='py-4 px-12 flex justify-center active:bg-white dark:bg-white items-center border border-[#0E121B] rounded-[20px] w-full dark:text-black'>
                                <p className='flex flex-row gap-2 items-center bg-transparent'> Get Started <FaArrowRightLong className='hover:text-black' /> </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Planes
