import Achieve from "./Achieve"
import Choice from "./Choice"
import Footer from "./Footer"
import Hero from "./Hero"
import Nav from "./Nav"
import Vision from "./Vision"

const Main_2 = () => {
  return (
    <div className="flex flex-col gap-[20vh] max-xl:gap-[5vh] bg-[#F8F7F5]">
      <div className="bg-black text-white">
        <Nav />
          <Hero />
      </div>
      <Achieve />
      <Choice />
      <Vision />
      <Footer />
    </div>
  )
}

export default Main_2