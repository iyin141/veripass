import Hero from '@/components/Hero'
import React from 'react'
import hero from '../../../public/img/hero_4.svg'
import Journey from './Journey'
import Option from './Option'
import Ready from './Ready'


const Main = () => {
  return (
    
    <div className="bg-[#F8F7F5] relative">
        <div className=' absolute top-0 left-0 w-full h-[40%] bg-white z-0'></div>
        <div className="flex flex-col z-10 relative gap-12 pb-12">
          <Hero src={hero} header='Secure Your Future In The US With Ease And Peace Of Mind' text_color='text-black' p1='We understand that navigating the visa application process can be overwhelming, that is why we’ve created a seamless, efficient process designed to get you closer to securing your O-1 or EB-2 NIW visa quickly and smoothly.' p2='We hold you by the hand and make sure you feel supported every step of the way. Here’s how it works:' />
        <Journey />
        <Option />
        <Ready />
      </div>
     
    </div>
  )
}

export default Main