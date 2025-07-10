import React from 'react'
import { LuArrowRight } from 'react-icons/lu';
import { Inter } from 'next/font/google'
const font = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500','600','700'],
})


const info = [
  { bg:'bg-[#EBF7EC]', id: 1, header: 'Book a Call with Our Consultants', p: 'After watching the VSL, you’ll schedule a one-on-one consultation with someone on our team. We have former USCIS officials on our team who are in the best position to help you. During this call, we’ll assess your eligibility for the O-1 or EB-2 NIW visa, discuss your specific needs, and walk you through the exact benefits of working with VeriPass. By the end of the call, you’ll commit with a fee that gets the process started.' },
  { bg:'bg-[#F8FAED]', id: 2, header: 'Onboard with Our Premium Software Application', p: 'Once eligible, we’ll onboard you onto our exclusive software application—your personalized portal for the entire visa process. This easy-to-use tool allows you to upload documents, communicate with our team, and track your progress in real-time. Everything you need will be in one place for your convenience.' },
  { bg:'bg-[#FAFAFA]', id: 3, header: 'Consultation with Expert Immigration Lawyers', p: 'Next, we’ll connect you with a seasoned immigration lawyer who specializes in your specific visa type. These consultations will help us gather the essential details to understand your needs and begin collecting the required documentation. You’ll get professional guidance on every step.' },
  { bg:'bg-[#FBFAFD]', id: 4, header: 'Upload Your Documents', p: 'Once your consultation is complete, you’ll upload your personalized documents directly to the application portal. These documents are carefully tailored to your specific visa and situation, ensuring we get everything right from the start.' },
  { bg:'bg-[#F7FCFB]', id: 5, header: 'VeriPass Helps You Source And Sort Necessary Documents', p: 'We are familiar with immigration nuances and know what is often required which may be out of your reach. This is where we come in. We help you source and sort documentations that would guarantee your immigration to the U.S and help establish you as an exceptional professional.' },
  { bg:'bg-[#FFECEC]', id: 6, header: 'Document Review and Feedback', p: 'Our expert immigration lawyers will meticulously review your submitted documents to ensure they’re perfectly aligned with USCIS requirements. If any issues arise, they’ll provide clear, actionable feedback, and you’ll have the opportunity to make revisions and re-upload the corrected files.' },
]

const Journey = () => {
  return (
    <div className={` ${font.className} pl-[4%]  max-xl:pb-[5vh]  pr-[4%]`}>
      <div className='bg-white flex flex-col gap-12 pt-12 pb-8 rounded-[10px] '>
        <h1 className='text-[48px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#72CDFF]  to-[#0246F6] text-center pb-8'>The VeriPass Journey</h1>
      <div className='flex flex-wrap gap-8 justify-center '>
        {info.map((i) => (
        <div key={i.id} className={`${i.bg} h-[480px] w-[30%] max-lg:w-[45%] max-sm:w-[100%] rounded-[10px] flex flex-col gap-2 pl-5 pr-5  `}>
            <h1 className='bg-gradient-to-b from-[#00000030] to-black/0 bg-clip-text text-transparent text-[10rem] font-bold  leading-none self-end'>{i.id}</h1>
            <h2 className='font-semibold text-[18px]'>{i.header}</h2>
            <p className='text-[15px] font-normal leading-[24px] text-[#464646]'>{i.p}</p>
        </div>
        ))}
        <div  className={` h-[380px] max-sm:h-[430px] w-[95%] rounded-[10px] flex flex-col pl-7 pr-5 pb-5 bg-[#F8F7F5]  `}>
            <h1 className='bg-gradient-to-b from-[#00000030] to-black/0 bg-clip-text text-transparent text-[10rem] font-bold  leading-none self-end '>7</h1>
            <h2 className='font-semibold text-[1.3rem] pb-2 text-blue-600'>Petition Writing and Submission</h2>
            <p className='text-[15px] font-normal leading-[24px] text-[#464646] md:w-[65%]'>After the document review, our legal team will craft a powerful and personalized petition that strengthens your case.Once we have everything in place, we submit your petition to USCIS for approval. You can rest easy knowing your application is in expert hands, ensuring that no detail is overlooked.</p>
            <button className={` flex pt-5  gap-2 font-semibold text-[15px] text-[#1E1E1E] `}>See How it Works  <LuArrowRight  className="text-black mt-[5px] left" /></button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Journey