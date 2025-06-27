import React from 'react'
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','700'],
})


const Vision = () => {
  return (
      <div className={`${font.className} pl-[7%] pr-[5%] pb-[5%] flex flex-col justify-center`}>
          <div className='bg-white  p-12 max-sm:p-10 flex justify-around rounded-[10px] shadow-md max-lg:flex-col max-lg:gap-6'>
              <div className='w-[45%] max-lg:w-[100%] flex flex-col gap-3'>
                  <h1 className='text-[2.5vw] max-sm:text-[5vw] font-semibold'>VeriPass Vision Statement</h1>
                  <p className='text-[#686879]'>“To empower exceptional individuals worldwide to achieve their American dream by unlocking opportunities for extraordinary talent to thrive in the United States.”</p>
              </div>
            <span className="block border-r-1 max-lg:border-b-[1px]  border-[#4d4d5a]" ></span>
              <div className='w-[45%] max-lg:w-[100%] flex flex-col gap-3'>
                  <h1 className='text-[2.5vw] max-sm:text-[5vw] font-semibold'>VeriPass Mission Statement</h1>
                  <p className='text-[#4d4d5a]'>VeriPass provides a seamless, technology-driven, and luxurious experience for high-achieving professionals and entrepreneurs seeking O-1 visas. Through expert guidance, comprehensive documentation, and strategic media outreach, we simplify the immigration process, enabling our clients to showcase their extraordinary abilities and realize their aspirations in six months or less.</p>
              </div>
          </div>
    </div>
  )
}

export default Vision