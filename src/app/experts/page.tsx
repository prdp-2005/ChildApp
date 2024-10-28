import ExpertBanner from '@/components/ExpertComponent/ExpertBanner'
import Tabs from '@/components/ExpertComponent/ExpertTabs'
import Faq from '@/components/HomeComponents/Faq'
import Planes from '@/components/HomeComponents/Planes'
import Stories from '@/components/HomeComponents/Stories'
import React from 'react'

const Experts = () => {
    return (
        <>
            <ExpertBanner />
            <Tabs />
            <Stories />
            <Planes />
            <Faq />
        </>
    )
}

export default Experts
