import React from 'react'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import hero_3 from '../../../public/img/hero_3.svg'
import asterik from '../../../public/img/asterik.svg'
    
const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','700'],
})

const info = [{text:'Gain U.S. residency, opening doors to a world of opportunities and a secure future.', id:1},
  {text:'Travel freely to anywhere in the world without restrictions or visa hassles.', id:2},
  {text:'Secure a green card, giving you and your family the stability to build your dream life.', id:3},
  {text:'Establish global credibility as a thought leader through professionally written and published books.', id:4},
  {text:'Book sales and exposure to an audience of over 1 million readers through targeted email marketing campaigns.', id:5},
  {text:'Gain international recognition through published articles on platforms like Yahoo Finance, positioning you as a leader in your industry.', id:6},
 {text:'Expand your professional network and unlock new business opportunities in the U.S. and globally.', id:7},
  {text:'Create a legacy for yourself and your family by becoming part of the top 5% of exceptional professionals making an impact worldwide.', id:8},
]



const Achieve = () => {
  return (
    <div className={`${font.className} pl-[5%] pr-[5%] pb-[5%] flex flex-col gap-[5rem] max-sm:gap-[3.5rem]`}>
      <div className='mx-auto w-[60%] max-sm:w-[100%] flex flex-col justify-center text-center gap-2'>
        <h1 className='font-semibold text-[4vw] max-sm:text-[8vw] -tracking-tight'>Achieve Your American Dream in Just 6 months</h1>
        <p className='text-[18px] text-[#4d4d5a]'>These are the reasons why the top 1% choose to work with us.</p>
      </div>
      <div className=''>
        <Image src={hero_3} alt='' className='max-lg:h-[15rem] ' />
      </div>
      <div className='flex flex-wrap justify-center gap-5 max-lg:flex-col max-sm:gap-8'>
        {info.map((i) => {
            return (
              <div key={i.id} className='w-[23%] max-lg:w-[100%]  font-light flex flex-col gap-2 max-sm:gap-4   text-[#6e6c6c] items-start'>
                <div className='flex gap-5 lg:h-[10rem] '>
                  <div>
                     <Image src={asterik} alt='' className='pb-2' />
                      <p className='pb-3'>{i.text}</p>
                  </div>
                  <span className={`${i.id > 3 ? "block h-full w-[2px] bg-gradient-to-b from-white via-white to-white" : "block h-[200%] z-10 w-[2px] bg-gradient-to-b from-white via-[#9BAAF1] to-white"} max-sm:hidden`} />
                </div>
                <span className={`${i.id > 4 ? '' : i.id == 1 ? " w-[200%] from-white via-[#9BAAF1] to-[#9BAAF1]" : i.id === 4 ? " w-[100%] from-[#9BAAF1] via-[#9BAAF1] to-white" : "w-[200%] from-[#9BAAF1] via-[#9BAAF1] to-[#9BAAF1]"} block h-[0.1vh]  bg-gradient-to-r max-lg:hidden`} />
                <span className=" h-[0.05rem] w-full bg-gradient-to-r from-white via-[#6379ea] to-white hidden max-lg:block" />
          </div>
          )
        })}
      </div>
            <button className={`${font.className} bg-[#0045F6FF] text-white pt-3 pb-3 pl-5 pr-5 rounded-[5px] bounce-slow shadow-md  md:mx-auto`}>Get Started</button>
    </div>
  )
}

export default Achieve