"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Appassets } from '@/constants/Appassets';
import Sidebar from './Sidebar';
const Header = () => {
    const menus = ['Experts', 'About', 'Try Child Today']
    return (
        <>
            <div className="sm:block hidden overflow-hidden ">
                <div className="w-full h-full flex justify-center items-center p-4">
                    <div className="lg:w-[58%] xl:w-2/4  bg-white rounded-full flex justify-between items-center border border-black p-2 shadow-md">
                        <div className='px-1'>
                            <Link href='/'>
                                <Image
                                    src={Appassets?.logo}
                                    alt="External Image"
                                    height={35}
                                /></Link>
                        </div>
                        <div>

                            <ul className="flex space-x-4">
                                {menus.map((item) => (
                                    <li key={item}>
                                        <Link
                                            href={`/${item.toLowerCase()}`}
                                            className="font-bold hover:bg-[#1DF2F2] py-2 px-4 rounded-full transition-colors duration-200"
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                ))}

                            </ul>

                        </div>
                    </div>
                </div>
            </div>

            <Sidebar />
        </>
    )
}

export default Header
