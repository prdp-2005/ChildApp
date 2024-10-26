"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Appassets } from '@/constants/Appassets'
const Sidebar = () => {
    const menus = ['Experts', 'About', 'Try Child Today'];
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="sm:hidden block overflow-hidden ">
                <div className="w-full h-full flex justify-between items-center p-4">
                    <div className='px-1'>
                        <Link href='/'>
                            <Image
                                src={Appassets?.logo}
                                alt="External Image"
                                height={40}
                                width={130}
                            />
                        </Link>
                    </div>
                    <button className="focus:outline-none" onClick={toggleMenu}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="bg-white rounded-lg shadow-md p-4 ">
                        <ul className="flex flex-col space-y-2">
                            {menus.map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="font-bold hover:bg-[#1DF2F2] py-2 px-4 rounded-full transition-transform duration-500 ease-in-out "
                                        onClick={toggleMenu}
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>


        </>
    )
}

export default Sidebar
