import ExpertBanner from '@/components/ExpertComponent/ExpertBanner'
import Tabs from '@/components/ExpertComponent/ExpertTabs'
import Contact from '@/components/HomeComponents/contact'
import Planes from '@/components/HomeComponents/Planes'
import Stories from '@/components/HomeComponents/Stories'
import React from 'react'

const Experts = () => {
    return (
        <>
            <ExpertBanner />
            <Tabs />
            <Stories text='Real Stories from Satisfied Experts and Coaches' gtext='Echte Geschichten von zufriedenen Experten und Coaches' />
            <Planes text='Pick Your Perfect Plan' gtext='Wählen Sie Ihren perfekten Plan' />
            <Contact />
        </>
    )
}

export default Experts
