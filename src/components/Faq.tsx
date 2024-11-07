"use client"
import React, { useContext, useState } from 'react'
import Faqcomponent from './FaqsComponent';
import { LanguageContext } from '@/constants/providers/LanguageContext';
import { static_text } from '@/constants/translations/Translations';
const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { slug } = useContext(LanguageContext);
    const handleOpen = (id: number) => {
        if (openIndex === id) {
            setOpenIndex(null);
        } else {
            setOpenIndex(id);
        }
    };
    // const data = [
    //     {
    //         id: 1,
    //         faqs: static_text.find(item => item.id === 86)?.data.find(dataItem => dataItem.language === slug)?.text || 'How much will it cost me?',
    //         ans: static_text.find(item => item.id === 87)?.data.find(dataItem => dataItem.language === slug)?.text || `Parents can test Chilld one week for free. Then you will have to pay our subscription fee. LINK. Additional session costs will apply.`
    //     },
    //     {
    //         id: 2,
    //         faqs: 'Will I need to register?',
    //         ans: `Yes. A registration is necessary to make the most out of the app experience.`
    //     },
    //     {
    //         id: 3,
    //         faqs: 'Why shouldn’t I use LinkedIn to find a coach?',
    //         ans: `You can totally do that. In our experience, mouth-to-mouth recommendations between friends work better than finding strangers on LinkedIn. If you want to get parenting experts on different topics, we have some recommendations for you, and you can even bring your friends.`
    //     },
    //     {
    //         id: 4,
    //         faqs: 'Why do I need to pay in advance?',
    //         ans: `We want to have the best possible experience for all, both parents and experts. Additionally, group sessions and events only have a limited number of seats. Therefore we require reliable bookings, so your seat will only be reserved after payment.`
    //     },
    //     {
    //         id: 5,
    //         faqs: 'How safe are my data with Chilld?',
    //         ans: `Protecting your data is one of our top priorities. That’s why we only process essential data, which again we do with absolute care to avoid any leaks and mishaps. All Chilld data are stored and processed on German or EU servers in line with the GDPR. You can find more details in our privacy statement.`
    //     },
    //     {
    //         id: 6,
    //         faqs: 'How much does Chilld cost?',
    //         ans: `Chilld parents can use Chilld for free. You just pay for the coaching or workshops you book. For coaches, we offer two attractive memberships at very low rates: the Basic and Premium membership.`
    //     },
    //     {
    //         id: 7,
    //         faqs: 'When is the payment due for a coaching session?',
    //         ans: `Chilld parents pay for sessions before, using Stripe, PayPal, credit card, or in-app payment.`
    //     },
    //     {
    //         id: 8,
    //         faqs: 'What happens if the parent cancels a session at the last minute?',
    //         ans: `If the session is canceled 24h+ before the session, the cancellation won’t invoke costs. If the cancellation takes place after, the full fee may be charged.`
    //     },
    //     {
    //         id: 9,
    //         faqs: 'What happens if the expert cancels at the last minute?',
    //         ans: `If the expert cancels 24h+ before the session, the cancellation is valid. If he cancels after, he is contractually obliged to hold the session or offer an alternative timeslot.`
    //     },
    //     {
    //         id: 10,
    //         faqs: 'Who is my contractual partner?',
    //         ans: `For parents and experts, the contractual partner is always Chilld GmbH & Co.KG, the operator of Chilld. We will handle all payments and be your contact for all upcoming issues.`
    //     },
    // ]
    const data = [
        // FAQ 1
        {
            id: 1,
            faqs: static_text.find(item => item.id === 86)?.data.find(dataItem => dataItem.language === slug)?.text || 'How much will it cost me?',
            ans: static_text.find(item => item.id === 87)?.data.find(dataItem => dataItem.language === slug)?.text || 'Parents can test Chilld one week for free. Then you will have to pay our subscription fee. LINK. Additional session costs will apply.',
        },
        // FAQ 2
        {
            id: 2,
            faqs: static_text.find(item => item.id === 88)?.data.find(dataItem => dataItem.language === slug)?.text || 'Will I need to register?',
            ans: static_text.find(item => item.id === 89)?.data.find(dataItem => dataItem.language === slug)?.text || 'Yes. A registration is necessary to make the most out of the app experience.',
        },
        // FAQ 3
        {
            id: 3,
            faqs: static_text.find(item => item.id === 90)?.data.find(dataItem => dataItem.language === slug)?.text || 'Why shouldn’t I use LinkedIn to find a coach?',
            ans: static_text.find(item => item.id === 91)?.data.find(dataItem => dataItem.language === slug)?.text || 'You can totally do that. In our experience, mouth-to-mouth recommendations between friends work better than finding strangers on LinkedIn. If you want to get parenting experts on different topics, we have some recommendations for you, and you can even bring your friends.',
        },
        // FAQ 4
        {
            id: 4,
            faqs: static_text.find(item => item.id === 92)?.data.find(dataItem => dataItem.language === slug)?.text || 'Why do I need to pay in advance?',
            ans: static_text.find(item => item.id === 93)?.data.find(dataItem => dataItem.language === slug)?.text || 'We want to have the best possible experience for all, both parents and experts. Additionally, group sessions and events only have a limited number of seats. Therefore we require reliable bookings, so your seat will only be reserved after payment.',
        },
        // FAQ 5
        {
            id: 5,
            faqs: static_text.find(item => item.id === 94)?.data.find(dataItem => dataItem.language === slug)?.text || 'How safe are my data with Chilld?',
            ans: static_text.find(item => item.id === 95)?.data.find(dataItem => dataItem.language === slug)?.text || 'Protecting your data is one of our top priorities. That’s why we only process essential data, which again we do with absolute care to avoid any leaks and mishaps. All Chilld data are stored and processed on German or EU servers in line with the GDPR. You can find more details in our privacy statement.',
        },
        // FAQ 6
        {
            id: 6,
            faqs: static_text.find(item => item.id === 96)?.data.find(dataItem => dataItem.language === slug)?.text || 'How much does Chilld cost?',
            ans: static_text.find(item => item.id === 97)?.data.find(dataItem => dataItem.language === slug)?.text || 'Chilld parents can use Chilld for free. You just pay for the coaching or workshops you book. For coaches, we offer two attractive memberships at very low rates: the Basic and Premium membership.',
        },
        // FAQ 7
        {
            id: 7,
            faqs: static_text.find(item => item.id === 98)?.data.find(dataItem => dataItem.language === slug)?.text || 'When is the payment due for a coaching session?',
            ans: static_text.find(item => item.id === 99)?.data.find(dataItem => dataItem.language === slug)?.text || 'Chilld parents pay for sessions before, using Stripe, PayPal, credit card, or in-app payment.',
        },
        // FAQ 8
        {
            id: 8,
            faqs: static_text.find(item => item.id === 100)?.data.find(dataItem => dataItem.language === slug)?.text || 'What happens if the parent cancels a session at the last minute?',
            ans: static_text.find(item => item.id === 101)?.data.find(dataItem => dataItem.language === slug)?.text || 'If the session is canceled 24h+ before the session, the cancellation won’t invoke costs. If the cancellation takes place after, the full fee may be charged.',
        },
        // FAQ 9
        {
            id: 9,
            faqs: static_text.find(item => item.id === 102)?.data.find(dataItem => dataItem.language === slug)?.text || 'What happens if the expert cancels at the last minute?',
            ans: static_text.find(item => item.id === 103)?.data.find(dataItem => dataItem.language === slug)?.text || 'If the expert cancels 24h+ before the session, the cancellation is valid. If he cancels after, he is contractually obliged to hold the session or offer an alternative timeslot.',
        },
        // FAQ 10
        {
            id: 10,
            faqs: static_text.find(item => item.id === 104)?.data.find(dataItem => dataItem.language === slug)?.text || 'Who is my contractual partner?',
            ans: static_text.find(item => item.id === 105)?.data.find(dataItem => dataItem.language === slug)?.text || 'For parents and experts, the contractual partner is always Chilld GmbH & Co.KG, the operator of Chilld. We will handle all payments and be your contact for all upcoming issues.',
        },
    ];

    return (
        <>
            <div className="overflow-hidden w-full h-auto mx-auto pt-12 md:px-14 lg:py-12 lg:px-5 flex-wrap gap-14 my-6">
                <div className="my-3 text-center font-semibold text-2xl lg:text-4xl mb-12 text-gray-800 dark:text-white">
                    {slug === 'en' ? 'Todo: FAQ' : 'Todo: FAQ '}
                </div>

                {/* {data.map((item) =>
                    <div key={item.id} className="group flex flex-col  justify-center items-center w-full cursor-pointer">
                        <div
                            onClick={handleopen}
                            className="group flex flex-row gap-5 justify-between items-center w-2/3 "
                            aria-expanded={isopen}
                            aria-controls="faq-answer"
                        >
                            <p className="text-2xl group-hover:scale-110 opacity-100 transition-all ease-in-out duration-500 ">{item.faqs}</p>
                            <HiOutlineLightBulb
                                color={isopen ? 'cyan' : 'white'}
                                className={`h-6 w-6 transition-transform delay-75 ${isopen ? 'rotate-180' : ''}`}
                            />
                        </div>
                        <div onClick={handleclose} className={`w-full sm:w-[80%] md:w-[60%] text-base overflow-hidden transition-all duration-500 ease-in-out h-full 
                        ${isopen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0'} `}
                        >
                            <p className={`text-start transition-all ease-in-out duration-500 cursor-pointer
                        ${isopen ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                                {item.ans}
                            </p>
                        </div>

                        <div className="h-[1px] w-2/3 bg-content mt-7"></div>
                    </div>
                )} */}
                {data.map((item) => (
                    <Faqcomponent key={item.id} item={item} isOpen={openIndex === item.id}
                        onToggle={() => handleOpen(item.id)} />
                ))}
            </div>
        </>
    )
}

export default Faq