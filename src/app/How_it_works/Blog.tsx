import React from 'react'
import { LuArrowRight } from 'react-icons/lu';
import { Montserrat } from 'next/font/google'
import Image from 'next/image';
import eight from '../../../public/img/blog.svg'
import nine from '../../../public/img/nine.png'
import ten from '../../../public/img/ten.png'
import { LuArrowUpRight } from 'react-icons/lu';

const font = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})

const info = [{ img: nine, header: 'Top Careers That Qualify for the EB2 NIW Visa in 2025', date: 'January 14, 2025' , id:1 },
    { img: ten, header: 'Renewing Or Extending an O-1 Visa: A Step-by-Step Guide', date: 'January 15, 2025', id:2 },
    { img: ten, header: 'Top Careers That Qualify for the EB2 NIW Visa in 2025', date: 'January 16, 2025', id:3 },
    { img: ten, header:'Top Careers That Qualify for the EB2 NIW Visa in 2025',date:'January 17, 2025', id:4},
]

const Blog = () => {
  return (
      <div className='pl-[6%] pr-[6%] flex-col flex gap-12 pb-12'>
          <div className='flex w-[100%] justify-between'>
              <h1 className='text-[3vw] font-semibold text-[#0045F6]'>Our blog</h1>
              <button className={`${font.className} hover:border-b-[1px] flex pt-5  gap-2 `}>See Pricing  <LuArrowRight  className="text-black mt-1 left" /></button>
          </div>
          <div className='flex justify-between w-[100%] max-sm:flex-col max-sm:gap-8'>
              <div className='w-[55%] max-sm:w-[100%] flex flex-col '>
                  <Image src={eight} alt='' className='w-[100%] pb-6 h-[90%] max-lg:h-[75%]' />
                  <h1 className='font-semibold text-[1.5vw] max-sm:text-[3.5vw] flex md:gap-5  '>Does the U.S. Immigration System Favor Wealth Over Talent? <span className="pl-12 pt-1 "><LuArrowUpRight size={20} className='rotate-[0deg]'/></span></h1>
                  <h2 className='text-[#00000094] font-medium'>January 14, 2025</h2>
              </div>
              <div className='w-[42%] max-sm:w-[100%] flex flex-col gap-10 ' >
                  {info.map((i) => (
                      <div key={i.date} className={ ` ${i.id === 4 ? 'flex gap-5 pb-3' :  ' flex gap-5 pb-3 border-[#dbd8d8] border-b-[1px]'} `}>
                          <Image src={i.img} alt='' className='h-[4rem]'/>
                          <div className='flex flex-col  '>
                              <h1 className='font-semibold text-[1.2vw] max-sm:text-[4vw]'>{i.header}</h1>
                              <h2 className='text-[#00000094] font-light'>January 14, 2025</h2>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
    </div>
  )
}

export default Blog