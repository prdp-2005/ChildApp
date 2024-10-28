"use client";
import React from 'react';
import { useTheme } from '@/context/ThemeContext';
import { MdOutlineMail } from 'react-icons/md';
import { FaRegUser } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const { darkMode } = useTheme();

    const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <>
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300 ${darkMode ? 'bg-opacity-75' : 'bg-opacity-50'}`}
                    onClick={handleOutsideClick}
                >
                    <div className={`dark:bg-medium bg-cyan-50 p-8 rounded-lg shadow-lg transition-transform transform ${isOpen ? 'scale-100' : 'scale-0'}`}>
                        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
                        <form className='flex flex-col gap-5 items-start'>
                            <div className='flex items-center gap-3 h-14 px-5 py-2 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[460px]'>
                                <FaRegUser className="text-cyan-300 h-[27px] w-[27px] p-1" />
                                <input
                                    className='text-[#2D2D2D] font-normal text-base outline-none border-l-[1px] pl-2 w-full dark:bg-medium bg-cyan-50 dark:text-white'
                                    placeholder='Full Name'
                                    type="text"
                                    name="name"
                                    required
                                />
                            </div>
                            <div className='flex items-center gap-3 h-14 px-5 py-2 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[460px]'>
                                <MdOutlineMail className="text-cyan-300 h-[30px] w-[30px] p-1" />
                                <input
                                    className='text-[#2D2D2D] font-normal text-base outline-none border-l-[1px] pl-2 w-full dark:bg-medium bg-cyan-50 dark:text-white'
                                    placeholder='Email'
                                    type="email"
                                    name="email"
                                    required
                                />
                            </div>
                            <div className='flex items-start gap-3 border border-[#D8D8D8] rounded-[20px] w-full sm:w-[460px] h-28 py-2 px-5'>
                                <textarea
                                    className='text-[#2D2D2D] font-normal text-base outline-none w-full bg-cyan-50 dark:bg-medium dark:text-white'
                                    placeholder='Message'
                                    name="message"
                                    required
                                />
                            </div>
                            <div className='flex flex-row justify-between items-center w-full'>
                                <button type="submit" className='bg-content rounded-3xl md:py-4 text-white px-6 py-2 md:px-12 dark:text-black font-semibold text-center text-lg'>
                                    Submit
                                </button>
                                <button type="submit" onClick={onClose} className='bg-content text-white rounded-3xl md:py-4 md:px-12 px-6 py-2  dark:text-black font-semibold text-center text-lg'>
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
