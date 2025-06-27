import React from 'react'
import { Inter } from 'next/font/google'
import one from '../../../../public/img/one.png'
import two from '../../../../public/img/two.png'
import three from '../../../../public/img/three.png'
import Image from 'next/image'
    
const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','700'],
})

const info = [{ img: one, header: 'Unmatched Expertise', text: 'Our team specializes in the intricate world of U.S. immigration, creating tailored strategies that amplify your accomplishments. With VeriPass, youre not navigating alone—we position your brilliance for global recognition.' },
  { img: two, header: 'White-Glove Service', text: 'From paperwork to positioning, our concierge-style support ensures every detail is managed with precision and care. We understand your time is invaluable, and we are here to make your journey seamless, discreet, and efficient.' },
  {img:three,header:'Designed for Visionaries',text:'VeriPass partners exclusively with individuals whose achievements set them apart. If you’re driven to make an impact and rise above, we’ll help you leverage your success for new opportunities in the U.S.'}
]

const Qualities = () => {
  return (
    <div className={`${font.className} pl-[5%] pr-[5%] pb-[5%] flex flex-col gap-[5rem]`}>
      <div className='w-[50%] flex flex-col justify-center text-center mx-auto gap-4 max-sm:w-[100%]'>
        <h1 className='text-[4vw] max-sm:text-[8vw] font-semibold'>Why High Achievers Trust VeriPass</h1>
        <p className='text-[1.2rem] text-[#0000009d]'>While many visa service providers only handle basic documentation, VeriPass offers a full-service, done-for-you experience. Here{`'`}s what sets us apart:</p>
      </div>
      <div className='flex flex-wrap justify-between max-sm:gap-10 '>
        {info.map((i) => (
          <div key={i.header} className='flex flex-col gap-5 w-[30%] max-sm:w-[100%] pb-7 border-b border-[#dbd8d8]'>
            <Image src={i.img} alt='' />
            <h1 className='font-semibold'>{i.header}</h1>
            <p className='text-left text-[#00000094]'>{i.text}</p>
            </div>
          ))}
      </div>
      <div className='w-[100%] flex flex-col md:items-center'>
         <button className=' bg-[#0045F6FF] text-white pt-2 pb-2 pl-5 pr-5 rounded-[5px] text-[1.2rem] shadow-md'>Get started</button>
      </div>
    </div>
  )
}

export default Qualities