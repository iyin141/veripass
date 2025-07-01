'use client'
import React, { useState } from 'react'
import logo from "../../public/img/logo.png"
import logo_white from "../../public/img/logo_2.png"
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Menu, X } from "lucide-react";
import { usePathname } from 'next/navigation';



const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})
const link_style = 'bounce-slow hover:border-b border-[#0045F6FF] max-sm:border-b max-sm:border-[#beb7b7] max-sm:pb-2 '

const links = [{ text: 'How it works', path: 'How_it_works/' },
  { text: 'Why choose us?', path: 'Why_chose_us/' },
  { text: 'Pricing', path: 'Why_chose_us/' },
  { text: 'FAQs', path: 'Why_chose_us/' }
]

const Nav = () => {
  const [show, setshow] = useState(false)
  const pathname = usePathname();


  return (
      <div className={`${font.className}`}>
      <div className={`${pathname === '/Why_chose_us' ? 'bg-black text-white' : ''} pt-5 lg:pl-[5%] pr-[5%] flex pb-4 justify-between `}>
             
              <Link href='/'><Image src={pathname === '/Why_chose_us' ? logo_white : logo} className='w-[9.5rem] lg:w-[8rem] max-sm:w-[7.5rem] h-[1.8rem] max-lg:pl-[8%]' alt='' /></Link>
              <div className={`${show ? 'max-sm:absolute max-sm:flex-col max-sm:w-[100%]  max-sm:mt-10 max-sm:pb-4 max-sm:items-center max-sm:pt-3 border-t-1 border-[#beb7b7]' : 'max-sm:hidden' } ${pathname === '/Why_chose_us' ? 'bg-black' : 'bg-white'}  flex gap-6 pt-1  `}>
          {links.map((l) => (
                 <Link href={l.path} key={l.text} className={`${link_style}`}>{ l.text}</Link>
                  ))}
              </div>
              <div className='flex gap-8'>
                  <button className=' border-b-[1px] '>Contact us</button>
                  <button className=' bg-[#0045F6FF] text-white pt-2 pb-2 pl-5 pr-5 rounded-[5px] max-lg:hidden'>Get started</button>
                  <button className='max-lg:block hidden' onClick={() => show ? setshow(false) : setshow(true)}>{show ? <X /> : <Menu />} </button>
        </div>
          </div>
    </div>
  )
}

export default Nav