import React from 'react'

const One = () => {
  return (
      <div className='w-[100%] flex justify-around max-sm:flex-col max-sm:gap-3 pt-[5%] pl-[5%] pr-[5%] pb-[5%]'>
          <div className='w-[45%] max-sm:w-[100%]'>
              <h1 className='text-[3.5vw] max-sm:text-[7vw] font-semibold flex flex-col'><span className='text-transparent bg-clip-text bg-gradient-to-r from-[#87dcfb] to-[#2900f6]'>Carving Out A Path</span> <span>To The U.S For You</span></h1>
          </div>
          <div className='w-[45%] max-sm:w-[100%] md:text-center'>
              <p ><span className='font-bold max-sm:text-[4vw]'>VeriPass</span> isn{`'`}t just about visas{`;`} it{`'`}s about doing the heavy-lifting for you to guarantee a seamless entry into one of the world{`'`}s most dynamic markets. Whether you{`'`}re an innovator shaping industries, a creator inspiring audiences, or a leader driving change, we handle the complexities so you can focus on what you do best—being extraordinary.</p>
          </div>
    </div>
  )
}

export default One