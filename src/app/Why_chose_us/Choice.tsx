import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import twelve from '../../../public/img/twelve.png'
import thirteen from '../../../public/img/thirteen.png'
import fourteen from '../../../public/img/fourteen.png'

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','700'],
})

const info = [{ logo: twelve, header: 'Comprehensive, Done-For-You Service', text: 'Our team does the heavy lifting, handling everything from legal case preparation to brand building. We make sure you stand out.' },
  { logo: thirteen, header: 'Quality Over Quantity', text: 'We understand the volume of work that goes into achieving results and we focus on only giving our best. With only 20 clients per month, we provide personalized attention to ensure the best possible outcome for your application.' },
  {logo:fourteen,header:'Proven Success System',text:'From powerful media exposure to expertly crafted legal briefs, our approach  ensures your application is not just filed—but strategically built for  approval.'}
]

const Choice = () => {
  return (
    <div className={`${font.className} pl-[5%] pr-[5%] pb-[5%] flex flex-col gap-[5rem]`}>
      <div className='flex justify-between gap-12 max-sm:flex-col max-sm:text-center max-sm:gap-6'>
        <h1 className='font-semibold text-[4vw] w-[45%] whitespace-nowrap max-sm:text-[5vw]  max-sm:w-[100%]'>Why Choose VeriPass?</h1>
        <p className=' max-sm:w-[100%] w-[45%] text-[18px] leading-[28px] '>While many visa service providers only handle basic documentation, VeriPass offers a full-service, done-for-you experience. Here’s what sets us apart:</p>
      </div>
      <div className='flex justify-between max-sm:flex-col max-sm:gap-5 max-sm:justify-center'>
        {info.map((i) => (
          <div key={i.header} className='w-[30%] max-sm:w-[90%] mx-auto flex flex-col gap-5 justify-center items-center text-center bg-[#F2F2F2] md:h-[480px]  max-sm:p-12 pt-5 pb-5 pr-6 pl-6 rounded-[40px]'>
            <Image src={i.logo} className='w-[3rem]' alt='' />
            <h1 className='font-semibold text-[1.2rem] max-sm:text-[5vw]'>{i.header}</h1>
            <p className=' text-[0.9rem]  text-[#686879]'>{i.text}</p>
          </div>
        ))}
      </div>
                  <button className={`${font.className} bg-[#0045F6FF] text-white pt-3 pb-3 pl-5 pr-5 rounded-[5px] bounce-slow shadow-md  md:mx-auto`}>Get Started</button>
    </div>
  )
}

export default Choice