import React from 'react'
import shield from '../../../public/img/sheild.svg'
import green from '../../../public/img/green.svg'
import code from '../../../public/img/code.svg'
import letter from '../../../public/img/letter.svg'
import Image from 'next/image'
import { LuArrowRight } from 'react-icons/lu';


const info = [{ img: shield, header: 'Comprehensive Approach', p: 'From legal counsel to branding and exposure, we offer a complete strategy for your success, not just a visa application.' },
    { img: green, header: 'Expert Team', p: 'Our team includes former USCIS officers, seasoned immigration lawyers, and marketing professionals who understand exactly what’s needed to ensure your approval.' },
    { img: code, header: 'Cutting-Edge Technology', p: 'Our premium software simplifies the process, allowing for easy communication, document management, and tracking of your progress.' },
        {img:letter,header:'Proven Track Record',p:'Our clients consistently see results, and our customized approach significantly increases your chances of approval.'}
]

const Option = () => {
  return (
      <div className='pl-[5%] pr-[5%] flex flex-col gap-20  pb-12 pt-[10%]'>
          <div className='w-[45%] max-xl:w-[70%] max-sm:w-[100%] text-center self-center pb-2 '>
              <h1 className='text-[3rem] font-semibold leading-[56px] pb-5 flex flex-col max-sm:text-[2.2rem] '><span>Why VeriPass is the</span> <span>Best Option for You.</span></h1>
              <p className='text-[18px]  text-[#464646] leading-[28px] tracking-wide'>While many visa service providers only handle basic documentation, VeriPass offers a full-service, done-for-you experience. Here’s what sets us apart:</p>
          </div>
          <div className='flex flex-wrap gap-8 justify-center '>
              {info.map((i) => (
                  <div key={i.header} className='bg-[#00000005] w-[48%] max-sm:w-[100%] rounded-[10px] h-[400px] flex flex-col gap-8 items-center pt-20 pl-5 pr-5'>
                      <Image src={i.img} alt="" className='w-[5.5rem]' />
                      <div className='flex flex-col gap-4 text-center'>
                          <h1 className='font-semibold text-[20px]'>{i.header}</h1>
                      <p className='text-[16px] font-normal text-[#464646]'>{i.p}</p>
                      </div>
                  </div>
              ))}
          </div>
            <button className={` flex pt-3 gap-2 font-semibold text-[15px]  bg-[#0045F6FF] text-white  pb-3 pl-5 pr-5 rounded-[5px] mx-auto text-center shadow-md`}>Book a Free Consultation  <LuArrowRight  className="text-white mt-[5px] left" /></button>
    </div>
  )
}

export default Option