import React from 'react'
// import { FaHtml5, FaCss3Alt, FaNode, FaNodeJs, FaReact, FaGitAlt, FaGithub } from 'react-icons/fa'
// import { SiJavascript, SiExpress, SiRedux, SiSocketdotio, SiTailwindcss, SiMongodb, SiMongoose, SiPostman, SiMysql, SiCplusplus, SiAppwrite, SiFirebase, SiVercel } from 'react-icons/si'
import imgs from '../utils/skillImgs'

const totalImgs = imgs.length;

function extractLanguageName(path) {
  const parts = path.split('/');  
  const fileName = parts[parts.length - 1];
  const languageName = fileName.split('-')[0].split('.')[0]; 
  return languageName;
}

const SkillsSection = () => {
  return (
    <div id='skills' className='max-w-[1280px] min-h-[600px] mx-auto mt-10 mb-10'>
        <div className='flex flex-col gap-2 mb-16'>
            <p className='text-4xl font-semibold text-center'>Skills</p>
            <p className='text-lg text-center opacity-70'>Tools and Technologies</p>
        </div>
        <div>
            {/*
                <div className='flex flex-row mx-auto max-w-[1000px] items-center justify-center flex-wrap gap-8 md:gap-14 transition-all duration-300'>
                    <SiJavascript className='text-[#FFDF00] bg-black hover:drop-shadow-lg' size={120}/>
                    <FaReact className='text-[#61DBFB] hover:drop-shadow-lg' size={120}/>
                    <FaNodeJs className='text-[#539E43] hover:drop-shadow-lg' size={120}/>
                    <SiExpress className='text-black hover:drop-shadow-lg' size={120}/>
                    <SiMongodb className='text-[#47A248] hover:drop-shadow-lg' size={120}/>
                    <SiRedux className='text-[#764ABC] hover:drop-shadow-lg' size={120}/>
                    <SiSocketdotio className='text-[#010101]  hover:drop-shadow-lg' size={120}/>
                    <SiTailwindcss className='text-[#01B7D6] hover:drop-shadow-lg' size={120}/>
                    <SiMongoose className='text-[#880000] hover:drop-shadow-lg' size={120}/>
                    <SiCplusplus className='text-[#084A85] hover:drop-shadow-lg' size={120}/>
                    <SiAppwrite className='text-[#FD366E] hover:drop-shadow-lg' size={120}/>
                    <SiFirebase className='text-[#FFCC2F] hover:drop-shadow-lg' size={120}/>
                    <FaHtml5 className='text-[#FF4C1E] hover:drop-shadow-lg' size={120}/>
                    <FaCss3Alt className='text-[#0065F4] hover:drop-shadow-lg' size={120}/>
                    <FaGitAlt className='text-[#F05032] hover:drop-shadow-lg' size={120}/>
                    <FaGithub className='text-black hover:drop-shadow-lg' size={120}/>
                    <SiPostman className='text-[#FF6C37] hover:drop-shadow-lg' size={120}/>
                    <SiMysql className='text-[#015B85] hover:drop-shadow-lg' size={120}/>
                    <SiVercel className='text-black hover:drop-shadow-lg' size={120}/>
                </div>
            */}
            <div className='mb-24 flex flex-row mx-auto max-w-[1280px] px-0 md:px-16 items-center justify-center flex-wrap gap-7 md:gap-7 transition-all duration-300'>
                {
                    imgs.map((icon, i) => {
                        return (
                            <div className='flex flex-col items-center' key={i}>
                                <img className='h-[95px] md:h-[104px] drop-shadow-lg hover:drop-shadow-2xl hover:scale-110 transition-all duration-300 cursor-pointer' src={icon}/>
                                <p className='text-center pt-1 text-[16px] font-medium'>{extractLanguageName(icon)}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default SkillsSection