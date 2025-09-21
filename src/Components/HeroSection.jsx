import React, {useEffect, useState} from 'react'
import Typed from 'typed.js'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi'
import { RiTwitterXLine, RiGoogleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import KrishImg from '../assets/picture1.png'
import Blob from '../assets/others/blob.svg'
import { TypeAnimation } from 'react-type-animation'
import signatureImg from '../assets/signature1.png';


const HeroSection = () => {


  return (
    <>
        <div id='home' className='hidden md:flex min-h-[530px] gap-12 max-w-[1280px] mt-10 mb-8 mx-auto px-20 justify-between items-center'>
            <div className='flex flex-row w-[57%] gap-20 items-center'>
                <div className='flex flex-col gap-7 justify-center'>
                    <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'>
                        <FiLinkedin className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'mailto:kvchelluboina@gmail.com'} target='_blank'>
                        <FiMail className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://x.com/krish127228?s=21'} target='_blank'>
                        <RiTwitterXLine className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                </div>
                <div className='flex flex-col gap-7 w-full'>
                    <p className='text-5xl font-poppins md:font-[800] lg:font-[900] text-blue-700'><span className='font-semibold text-black'>I'm, </span>Krishna Chelluboina</p>
                    <TypeAnimation
                        sequence={[
                            'Senior Full-Stack .NET Developer', 2000,
                            '.NET Cloud & Microservices Engineer', 1000,
                            '.NET Solutions Architect / Technical Lead', 1000,
                            'Full-Stack Web Application Developer', 1000,
                            /*'MERN Developer', 1000,*/
                            'Problem Solver', 1000,
                            'Coder', 1000
                        ]}
                        wrapper='span'
                        speed={40}
                        className='text-3xl font-medium text-blue-950 /*text-[#000080]*/'
                        repeat={Infinity}
                    />
                    {/* <p className='text-xl text-justify'>A Engineer Working on Actively Learning the Skills Required to be an Efficient Software Engineer, Flexible to Learn New Technologies.</p> */}
                    <p className='text-xl text-justify'>A Senior Full Stack .NET Developer Contractor with 10+ years of experience. I love turning complex problems into clean, scalable solutions and believe great code is as much about people as it is about tech. Dark mode isnt a feature for me its a lifestyle.</p>
                    <div className='flex gap-4'>
                        <button className='border p-2 hover:bg-blue-900 bg-blue-700 rounded-lg text-white text-lg px-4 w-fit text-center'><a href='#contact'>Contact Me</a></button>
                    </div>
                </div>
            </div>
            <div className=''>
                {/* <img src={Blob} className='absolute z-50 h-[500px] -translate-x-5 translate-y-10 scale-150 opacity-80'/> */}
                <img src={KrishImg} className='z-50 contrast-125 scale-95 transition-all duration-1000 max-h-[430px]'/>
                <img src={signatureImg} alt="Signature"
                     className="w-40 mx-auto mt-2 opacity-90 drop-shadow-md transition-opacity duration-700 hover:opacity-100" />
            </div>
        </div>


        <div id='home' className='flex flex-col md:hidden max-w-[1280px] mt-10 mb-8 mx-auto justify-between'>
            <div className='flex flex-row w-full px-10 mx-auto items-center justify-around'>
                <div className='flex flex-col gap-7 items-center justify-center'>
                    <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'>
                        <FiLinkedin className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'mailto:kvchelluboina@gmail.com'} target='_blank'>
                        <FiMail className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                    <Link to={'https://x.com/krish127228?s=21'} target='_blank'>
                        <RiTwitterXLine className='text-blue-700 hover:drop-shadow-md' size={30}/>
                    </Link>
                </div>
                <div className='flex mt-9 flex-col pl-10 gap-4 w-full'>
                    <p className='text-4xl font-poppins font-[900] text-blue-600'><span className='font-semibold text-black'>I'm, </span>Krishna Vamsi</p>
                    <TypeAnimation
                        sequence={[
                            'Senior Full-Stack .NET Developer', 2000,
                            '.NET Cloud & Microservices Engineer', 1000,
                            '.NET Solutions Architect / Technical Lead', 1000,
                            'Full-Stack Web Application Developer', 1000,
                            /*'MERN Developer', 1000,*/
                            'Problem Solver', 1000,
                            'Coder', 1000
                        ]}
                        wrapper='span'
                        speed={40}
                        className='text-xl font-medium text-blue-950 /*text-[#000080]*/'
                        repeat={Infinity}
                    />
                    {/* <p className='text-base text-justify'>A Engineer Working on Actively Learning the Skills Required to be an Efficient Software Engineer, Flexible to Learn New Technologies.</p> */}
                    <p className='text-base text-justify'>A Senior Full Stack .NET Developer Contractor with 10+ years of experience. I love turning complex problems into clean, scalable solutions and believe great code is as much about people as it is about tech. Dark mode isnt a feature for me its a lifestyle.</p>
                    <div className='flex gap-4'>
                         <a href="#contact" className="border p-2 hover:bg-blue-900 bg-blue-700 rounded-lg text-white text-lg px-4 w-fit text-center">Contact Me</a>
                    </div>    
                </div>
            </div>
            </div>
            <div className='flex items-center justify-center'>
                {/* <img src={Blob} className='absolute z-50 h-[500px] -translate-x-5 translate-y-10 scale-150 opacity-80'/> */}
                <img src={KrishImg} className='z-10 mb-10 flex md:hidden contrast-125 scale-95 transition-all duration-1000 h-[350px]'/>
            </div>
    </>
  )
}

export default HeroSection
