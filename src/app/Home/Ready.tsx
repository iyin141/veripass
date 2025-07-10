import React from 'react'
import { LuArrowRight } from 'react-icons/lu';

const Ready = () => {
  return (
      <div className='pt-[5%] pl-[5%] pr-[5%]'>
          <div className='w-[100%] bg-white shadow-md h-[350px] max-xl:h-[400px] max-sm:h-[500px] rounded-[10px]  flex flex-col items-center pt-11 gap-4'>
              <h1 className='text-[2.5rem] max-sm:text-[2rem] font-semibold text-center'>Ready to Get Started?</h1>
              <p className='text-[16px] font-normal text-[#464646] w-[60%] max-sm:w-[80%] text-center'  >Don’t let your dreams of U.S. residency remain just that—dreams. With our  proven system and expert support, VeriPass is your trusted partner on  the journey to securing your O-1 or EB-2 NIW visa. Start now by watching our video and booking your consultation!</p>
              <p className='text-[16px] font-normal text-[#464646] w-[60%] text-center'>Let’s get your future in the U.S. started today. <span className='font-semibold'>Time is limited—act fast.</span></p>
              <div className='pt-5 flex md:gap-8 max-lg:w-[100%] max-sm:w-[80%] max-lg:justify-center max-lg:pb-10 max-sm:flex-col max-sm:gap-5'>
                     <button className={` bg-[#0045F6FF] text-white pt-2 pb-2 pl-4 pr-4 rounded-[5px] bounce-slow shadow-md  `}>Begin Your Journey</button>
                 <h1 className={` hover:border-b-[1px] flex  gap-2 self-center `}>See Pricing  <LuArrowRight  className="text-black mt-[6px] lg:left" /></h1>
            </div>
          </div>
    </div>
  )
}

export default Ready