import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import hero from '../../../public/img/hero_2.svg'
    
const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

const Hero = () => {
  return (
      <div className={`${font.className}`}>
          <div className='flex justify-between max-lg:flex-col lg:pl-[7%] pb-[20vh] max-xl:pb-[5vh] pt-[3%]'>
              <div className='w-[35%] max-lg:w-[100%] max-lg:text-center flex flex-col gap-5   max-lg:pl-[5%] max-lg:pr-[5%] max-sm:text-left'>
                <h1 className='text-[3.5vw] pb-3 max-lg:text-[6vw] max-sm:text-[9vw] font-semibold '>We Go Above And Beyond For Your Success</h1>
          <p className={`${font.className} text-[1rem] w-[100%] flex flex-col gap-2`}>
            <span>When it comes to helping successful people establish their presence in the  U.S, we go the extra mile.</span>
            <span>Transform your career with VeriPass’ exclusive O-1 Visa Accelerator Program. Designed for exceptional professionals like you, our program doesn’t  just help you apply—it builds your success story from the ground up. </span>
            <span className='pt-3'>This isn’t a standard visa service. It’s a premium, done-for-you system, backed by expert legal teams, former USCIS officers, and marketing  specialists committed to your approval.</span>
                </p>
               <div className='pt-5 flex md:gap-12 max-lg:w-[100%] max-lg:justify-center max-lg:pb-10 max-sm:flex-col max-sm:gap-5'>
                  <button className={`${font.className} bg-[#0045F6FF] text-white pt-3 pb-3 pl-5 pr-5 rounded-[5px] bounce-slow shadow-md  `}>Get Started</button>
                </div>
        </div>
        <div className='w-[60%] max-lg:w-[100%]'>
          <Image src={hero} className='w-[100%] ' alt=''/>
        </div>
          
      </div>
      <div className='w-[100%] items-center text-center flex justify-center'>
        <span className='w-[80%] self-center border-b block text-[#E6E6E6FF]'></span>
      </div>
    </div>
  )
}

export default Hero