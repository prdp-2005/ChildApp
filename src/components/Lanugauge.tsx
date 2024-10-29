import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { CiGlobe } from 'react-icons/ci'
import { RiEnglishInput } from 'react-icons/ri'
import { useClickAway } from 'react-use';
const Language = () => { 

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    useClickAway(dropdownRef, () => setIsOpen(false));

    return (
        <div ref={dropdownRef} className="relative ">
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="flex flex-row gap-1 p-2 border border-black dark:border-white rounded-3xl cursor-pointer"
            >
                <CiGlobe />
                <RiEnglishInput />
            </div>

            {isOpen && (
                <div className="absolute left-0 mt-2  p-2 bg-white dark:bg-black border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform">
                    <ul className="space-y-2">
                        <li className='hover:scale-105 transform transition-transform duration-200 ease-in-out'><Link href="/">English</Link></li>
                        <li className='hover:scale-105 transform transition-transform duration-200 ease-in-out'><Link href="/">German</Link></li>
                        <li className='hover:scale-105 transform transition-transform duration-200 ease-in-out'><Link href="/">French</Link></li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Language;
