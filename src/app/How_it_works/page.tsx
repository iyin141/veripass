
import Blog from "./Blog";
import Hero from "./Hero";
import One from "./One";
import Join from "./Join";
import Qualities from "./Qualities";


import React from 'react'

const Main = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col gap-6">
      
        <div className="flex flex-col gap-[20vh] max-xl:gap-[5vh]">
          <Hero />
          <One />
          <Qualities />
          <Join />
          <Blog />
        </div>
      </div>
    </div>
  )
}

export default Main