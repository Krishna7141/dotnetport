import React from 'react'
import { TbBrandTelegram } from 'react-icons/tb'


const ContactSection = () => {
  return (
    <div id='contact' className='max-w-[1280px] min-h-[700px] mt-10 mb-10 mx-auto'>
        <div className='flex flex-col gap-2 mb-16'>
            <p className='text-4xl font-semibold text-center'>Contact Me</p>
            {/* <p className='text-lg text-center opacity-70'>Proof of Work</p> */}
        </div>
        <form className='w-[90%] md:w-1/2 flex flex-col gap-6 items-center justify-center mx-auto' action='https://formsubmit.co/kvchelluboina@gmail.com' target='_blank' method='POST'>
            <div className='flex flex-col sm:flex-row gap-3 w-full'>
                <label className='w-full sm:w-1/2'>
                    <p className='mb-1'>Name</p>
                    <input
                        placeholder='Enter your Name'
                        className='border-2 border-[#1D4ED8] p-3 rounded-lg w-full'
                        type='text'
                        name='name'
                        required
                    />
                </label>
                <label className='w-full sm:w-1/2'>
                    <p className='mb-1'>Email Address</p>
                    <input
                        className='border-2 border-[#1D4ED8] p-3 rounded-lg w-full'
                        placeholder='Enter your Email Address'
                        type='email'
                        name='email'
                        required
                    />
                </label>
            </div>
            <label className='w-full'>
                <p className='mb-1'>Subject <span className='text-black opacity-60'>(Optional)</span></p>
                <input
                    className='border-2 border-[#1D4ED8] p-3 rounded-lg w-full'
                    placeholder='Write the Subject'
                    type='text'
                    name='subject'
                />
            </label>
            <label className='w-full'>
                <p className='mb-1'>Message</p>
                <textarea
                    name='message'
                    required
                    placeholder='Hey Krishna “Im interested in hiring you”'
                    className='border-2 border-[#1D4ED8] h-[200px] p-3 rounded-lg w-full'
                />
            </label>
            <button className='border bg-[#1D4ED8] text-white flex items-center gap-2 p-3 px-5 rounded-lg hover:bg-blue-800'>
                <p>Send</p>
                <TbBrandTelegram className='text-white' size={23}/>
            </button>
        </form>
    </div>
  )
}

export default ContactSection