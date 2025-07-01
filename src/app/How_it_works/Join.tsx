import Image from 'next/image'
import React from 'react'
import four from '../../../public/img/four.svg'
import five from '../../../public/img/calender.svg'
import six from '../../../public/img/camera.svg'
import seven from '../../../public/img/clock.svg'
import { LuArrowRight } from 'react-icons/lu';

const info = [{ img: five, header: 'Schedule Your Consultation', p: 'Speak to our team and see how we can help craft your success story.',id:1 },
  { img: six, header: 'Join Our Exclusive Webinar', p: 'Get insider insights on the process and learn from our proven track record.',id:2 },
  {img:seven,header:'Take Action Now',p:'Your future starts with a single step. Click below to get started.',id:3},
]


const Join = () => {
  return (
      <div className='bg-black w-[100%] pl-[5%] pr-[5%] pt-[7%] pb-[7%] text-white flex flex-col gap-[5rem]'>
          <div className='w-[100%] flex justify-between max-sm:flex-col   '>
              <Image src={four} alt='' className='w-[50%] h-auto max-lg:h-[100%] max-lg:pt-12 max-sm:w-[100%]' />
              <div className='w-[45%] max-sm:w-[100%] text-left pt-12 flex flex-col gap-5 md:items-start'>
                  <h1 className='text-[3.4vw] max-sm:text-[7.5vw] font-semibold '>Your Future, Delivered in Just <span className='text-[#1c82ef]'>60 Days</span>.</h1>
                  <p className='text-[#b3aeae] pb-3 text-[16px] leading-[24px] font-normal'>The journey to global recognition doesn{`'`}t have to be complicated. In as little as 60 days, VeriPass will guide you through a transformative process that aligns your achievements with the requirements of U.S. immigration. From strategy to execution, we provide unparalleled expertise so you can focus on expanding your influence and building your legacy.</p>
                  <button className=' bg-[#0045F6FF] text-white pt-3 pb-3 pl-5 pr-5 rounded-[5px] text-[1.2rem]   '>Start your Journey now</button>
              </div>
      </div>
      <span className="block h-[1px] w-full bg-gradient-to-r from-black via-[#6379ea] to-black" />
      <div className='text-center flex flex-col gap-4 mx-auto w-[60%] max-sm:w-[100%]'>
        <h1 className='font-semibold text-[4vw] flex flex-col max-sm:text-[8.5vw]'><span>Start A New Chapter</span> <span>In Your Success Story Today</span></h1>
        <p className='text-[#b3aeae] text-[1.2rem] font-light'>Your tomorrow depends on the choices you make today. This is your moment. A future filled with opportunities, recognition, and success awaits. Don{`'`}t leave your dreams to chance—partner with VeriPass and take the first step toward the life you deserve.</p>
      </div>
      <div className='flex flex-col gap-12  '>
        <h1 className='text-[1.5rem] font-semibold text-center'>Let{`'`}s begin here:</h1>
        <div className='flex justify-center gap-12 md:pl-12 flex-wrap   '>
          {info.map((i) => (
            <div key={i.header} className=' w-[30%] max-lg:w-[45%] max-sm:w-[100%] md:grid md:grid-cols-[90%_10%] max-sm:flex max-sm:flex-col max-sm:gap-12  '>
              <div className='bg-[#FFFFFF0F]  pt-6 pl-5 pr-5 pb-7 text-left flex flex-col gap-6 rounded-[10px] shadow-sm shadow-[#3d3c3c]'>
                <div className='h-[2.5rem]'>
                  <Image src={i.img} alt=''  />
              </div>
              <h1 className='font-semibold'>{i.header}</h1>
              <p className='text-[#b3aeae] max-sm:text-[1.1rem] text-[18px] leading-[26px] font-normal'>{i.p}</p>
              </div>
              <span className={`${i.id === 3 ? 'hidden' : ' pl-9 flex flex-col justify-center max-xl:hidden max-sm:block max-sm:pl-[50%] '}`}><LuArrowRight  className="text-white mt-1 left max-sm:rotate-[90deg]" size={20} /></span>
            </div>
            ))}
        </div>
      </div>
               <button className=' bg-[#0045F6FF] text-white pt-3 pb-3 pl-6 pr-6 rounded-[5px] text-[1.3rem] max-sm:w-[100%] mx-auto'>Get started</button>
    </div>
  )
}

export default Join