import React from 'react'
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants'
import DarkModeToggle from './DarkToggle'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full dark:bg-black bg-white '>
        <nav className='flex justify-between items-center  max-container '>
            <a href="/">
                <img src={headerLogo} alt="Nike-logo" />
            </a>
            <div className='flex items-center justify-between max-sm:gap-4 gap-16'>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((link) => (
                    <li key={link.label}>
                        <a href={link.href} className="font-montserrat  dark:text-slate-100 border-slate-gray  leading-normal text-lg text-slate-gray" >
                            {link.label}
                        </a>
                    </li>
                ))}
                

            </ul>
            <div>
                <DarkModeToggle/>
            </div>
            <div className='hidden max-lg:block '>
                <img className='' src={hamburger} width={25} height={25} alt="=" />
            </div>
            </div>
            
            
        </nav>
    </header>
  )
}

export default Nav