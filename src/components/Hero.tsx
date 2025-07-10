import React from 'react'
import { Montserrat } from 'next/font/google'
import Image from 'next/image';

    
const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500'],
})

interface  Props {
    src: string
    header: string
    p1: string
    p2:string
    text_color:string
}

const Hero: React.FC<Props> = ({src,header,p1,p2,text_color}) => {
  return (
      <div className={`${text_color}`}  >
          <div className='flex justify-between  max-lg:flex-col lg:pl-[5%] max-xl:pb-[5vh] pt-[3%] max-lg:pr-[5%]   '>
              <div className='w-[45%] max-lg:w-[100%] max-lg:text-center flex flex-col gap-5  pt-[5%] max-lg:pl-[5%] max-lg:pr-[5%]'>
                  <h1 className='text-[4vw] max-lg:text-[6vw] max-sm:text-[9vw] font-semibold leading-[69px] '>{header}</h1>
                  <p className={`${font.className} text-[1rem] w-[90%] max-lg:w-[100%] font-normal flex flex-col gap-3`}> <span>{p1}</span> <span>{p2}</span></p>
               <div className='pt-5 flex md:gap-12 max-lg:w-[100%] max-lg:justify-center max-lg:pb-10 max-sm:flex-col max-sm:gap-5'>
                  <button className={`${font.className} bg-[#0045F6FF] text-white pt-3 pb-3 pl-5 pr-5 rounded-[5px] bounce-slow shadow-md  `}>Get started</button>
                </div>
        </div>
        <div className='w-[53%] max-lg:w-[100%] max-sm:pl-2 max-sm:pr-4 '>
          <Image src={src} className='w-full ' alt=''/>
        </div>
          
      </div>
    </div>
  )
}

export default Hero