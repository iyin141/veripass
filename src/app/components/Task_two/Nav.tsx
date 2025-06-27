'use client'
import React, { useState } from 'react'
import logo from '../../../../public/img/logo_2.png'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import { Menu, X } from "lucide-react";
    
    
const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
})
const link_style = 'bounce-slow hover:border-b border-[#0045F6FF]'


const Nav = () => {
   const [show, setshow] = useState(false)
  return (
      <div className={`${font.className}`}>
      <div className='pt-5 lg:pl-[5%] pr-[5%] flex pb-3 justify-between  '>
              <div className={`${show ? 'flex flex-col justify-center w-[100%] bg-black border-t-1 border-white text-center gap-12 pt-5 absolute lg:hidden pb-5 mt-12 ' : 'hidden'}`}>
                  <Link href='components/Task_two/' className={`${link_style} border-b border-[#beb7b7] pb-2 mx-auto`}>How it works</Link >
                  <Link href='' className={`${link_style} border-b border-[#beb7b7] pb-2 mx-auto`}>Why choose us?</Link >
                  <Link href='' className={`${link_style} border-b border-[#beb7b7] pb-2 mx-auto`}>Pricing</Link >
                  <Link href='' className={`${link_style} border-b border-[#beb7b7] pb-2 mx-auto`}>FAQs</Link >
                  <button className=' bg-[#0045F6FF] text-white pt-2 pb-2 pl-5 pr-5 rounded-[5px] mx-auto w-[90%] '>Get started</button>
              </div>
              <Link href='/'><Image src={logo} className='w-[9.5rem] lg:w-[7.5rem] h-[2rem] max-lg:pl-[5%]' alt='' /></Link>
              <div className='flex gap-6 pt-1 max-lg:hidden '>
                  <Link href='components/Task_two/' className={`${link_style}`}>How it works</Link >
                  <Link href='' className={`${link_style}`}>Why choose us?</Link >
                  <Link href='' className={`${link_style}`}>Pricing</Link >
                  <Link href='' className={`${link_style}`}>FAQs</Link >
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