import React, { useState, useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { Link, NavLink } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  // console.log(isNavOpen)
  const navLinks = [
    { id: 1, name: 'Home', path: '#home' },
    { id: 2, name: 'Skills', path: '#skills' },
    { id: 3, name: 'Work', path: '#work' },
    { id: 4, name: 'About', path: '#about' },
    { id: 5, name: 'Contact', path: '#contact' }
  ];

  const [activeLink, setActiveLink] = useState('');

  const scrollActive = () => {
    const scrollY = window.scrollY;
    navLinks.forEach((current) => {
      const section = document.querySelector(current.path);
      if (section) {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveLink(current.path);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollActive);
    return () => {
      window.removeEventListener('scroll', scrollActive);
    };
  }, []);

  return (
    <>
      <div id='navbar' className='shadow-md bg-white p-2 px-3 sticky top-0 z-50'>
        <div className='max-w-[1280px] mx-auto hidden md:flex flex-row px-10 items-center justify-between'>
          <Link to={'https://www.linkedin.com/in/krishna-chelluboina/'} target='_blank'><img src={Logo} className='h-16' alt='Logo' /></Link>
          <div className='flex gap-2'>
            {navLinks.map((item) => (
              <div key={item.id} className=''>
                <button
                  className={`px-4 rounded-lg text-base transition-all duration-100 font-medium hover:text-blue-600 ${
                    activeLink === item.path ? 'text-blue-600' : ''
                  }`}
                >
                  <a href={item.path}><div>{item.name}</div></a>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className='flex md:hidden justify-between items-center px-5'>
          <img src={Logo} className='h-16' alt='Logo' />
          <div>
              <AiOutlineMenu className='cursor-pointer' onClick={() => setIsNavOpen(isNavOpen ? false : true)} size={30}/>
          </div>
        </div>
        {
          isNavOpen && (
            <div className='h-screen bg-white w-11/12 mx-auto absolute'>
              <div className='flex flex-col mt-12 mx-auto items-center justify-center gap-5'>
                {navLinks.map((item) => (
                  <div key={item.id} className='border w-11/12 mx-auto text-center shadow-sm p-3 rounded-lg'>
                    <button
                      onClick={() => setIsNavOpen(false)}
                      className={`px-4 rounded-lg text-base transition-all duration-100 font-medium hover:text-blue-600 ${
                        activeLink === item.path ? 'text-blue-600' : ''
                      }`}
                    >
                      <a href={item.path}>{item.name}</a>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Navbar