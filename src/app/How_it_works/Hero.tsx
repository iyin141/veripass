import React from 'react'
import { LuArrowRight } from 'react-icons/lu';
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import hero from '../../../public/img/hero.svg'
    
const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

const Hero = () => {
  return (
      <div >
          <div className='flex justify-between  max-lg:flex-col lg:pl-[5%] pb-[20vh] max-xl:pb-[5vh] pt-[3%]'>
              <div className='w-[45%] max-lg:w-[100%] max-lg:text-center flex flex-col gap-5  pt-[6%] max-lg:pl-[5%] max-lg:pr-[5%]'>
                <h1 className='text-[4vw] max-lg:text-[6vw] max-sm:text-[9vw] font-semibold '>Empowering High Achievers <span className='text-[#0045F6FF]'>Establish Presence In THE U.S</span></h1>
                <p className={`${font.className} text-[1rem] w-[90%] max-lg:w-[100%]`}>Exceptional professionals deserve global recognition, and the U.S is your gateway to the global stage. At VeriPass, we are dedicated to helping high achievers like you gain residence and prominence in America by navigating every step of the immigration process on your behalf.</p>
               <div className='pt-5 flex md:gap-12 max-lg:w-[100%] max-lg:justify-center max-lg:pb-10 max-sm:flex-col max-sm:gap-5'>
                  <button className={`${font.className} bg-[#0045F6FF] text-white pt-3 pb-3 pl-5 pr-5 rounded-[5px] bounce-slow shadow-md  `}>Begin Your Journey</button>
                  <h1 className={`${font.className} hover:border-b-[1px] flex pt-3 gap-2 self-center `}>See Pricing  <LuArrowRight  className="text-black mt-1 lg:left" /></h1>
                </div>
        </div>
        <div className='w-[55%] max-lg:w-[100%]  '>
          <Image src={hero} className='w-full ' alt=''/>
        </div>
          
      </div>
      <div className='w-[100%] items-center text-center flex justify-center'>
        <span className='w-[80%] self-center border-b block text-[#E6E6E6FF]'></span>
      </div>
    </div>
  )
}

export default Hero