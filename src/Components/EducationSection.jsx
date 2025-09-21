import React from 'react'
import { SlCalender } from 'react-icons/sl'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { GoMortarBoard } from 'react-icons/go'


const EducationSection = () => {
  return (
    <div id='about' className='max-w-[1280px] min-h-[650px] w-3/4 lg:w-1/2 mt-4 mb-6 mx-auto'>
        <div className='flex flex-col gap-2 mb-8'>
            <p className='text-4xl font-semibold text-center'>Education</p>
            <p className='text-lg text-center opacity-70'>Academics and Educational Qualifications</p>
        </div>
        <div className='flex items-center justify-center mx-auto gap-28'>
            <div className=''>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-medium text-base md:text-xl'>Bachelor of Technology in Computer Science and Engineering</p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Lovely Professional University</p>
                        <p className='text-black opacity-80 flex items-center gap-1 text-base md:text-lg'>
                            <FaRegCalendarAlt/>
                            <p>2012-2016</p>
                        </p>
                        <p className='text-black opacity-80 text-base md:text-lg'>Aggregate: 89.9 %</p>
                    </div>
                </div>
            </div>
            <GoMortarBoard className='text-[#1D4ED8] hidden md:flex' size={200}/>
        </div>
    </div>
  )
}

export default EducationSection