import Footer from "./Footer";
import Blog from "./Blog";
import Hero from "./Hero";
import Nav from "./Nav";
import One from "./One";
import Join from "./Join";
import Qualities from "./Qualities";


import React from 'react'

const Main = () => {
  return (
    <div className="bg-[#F8F7F5] ">
      <div className="flex flex-col gap-6">
        <Nav />
        <div className="flex flex-col gap-[20vh] max-xl:gap-[5vh]">
          <Hero />
          <One />
          <Qualities />
          <Join />
          <Blog />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Main