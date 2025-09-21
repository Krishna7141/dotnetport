// import React from 'react'

// const Footer = () => {
//   return (
//     <div className='bg-[#1D4ED8] pt-28 h-[500px] text-white'>
//         <div className='max-w-[1280px] mx-auto px-20'>
//             Footer
//         </div>
//     </div>
//   )
// }

// export default Footer




import React from 'react'
import { AiFillLinkedin, AiOutlineLinkedin, AiFillGithub, AiOutlineTwitter, AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai'
import { RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { SiOpenai } from 'react-icons/si'


const Footer = () => {
  return (
    <div className='bg-blue-900 text-white pt-5 pb-8'>
      <div className='max-w-[1280px] mx-auto'>
        <div className='flex justify-normal items-center gap-10 flex-col md:flex-row md:justify-between pt-20 pb-16 px-10'>
          <p className='font-normal text-md'>© KrishnaChelluboina.</p>
          {/* <img className='h-20' src={Gods}/> */}
          <div className='flex gap-x-2 items-center'>
            <Link className='hover:text-[#1E40AF]' to='https://www.linkedin.com/in/krishna-chelluboina/' target='_blank'><AiFillLinkedin size={40}/></Link>
            <Link className='hover:text-[#1E40AF]' to='mailto:kvchelluboina@gmail.com' target='_blank'><AiOutlineGoogle size={40}/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
