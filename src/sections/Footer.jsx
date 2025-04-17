import React from 'react'
import footerLogo from '../assets/images/footer-logo.svg'
import {footerLinks, socialMedia} from '../constants'
import copyrightSign from '../assets/icons/copyright-sign.svg'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex item-start justify-between gap-20 flex-wrap max-lg:flex-col' >
        <div className='flex flex-col items-start'>
          <a href="/">
          <img src={footerLogo} alt="logo" width={150} height={46} /></a>
          <p className='text-base font-montserrat leading-7 mt-6 text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size in Store. Get Rewards</p>
          <div className='flex items-center gap-5 mt-8'>
            {socialMedia.map((icon) => (
              <div key={icon.src} className='rounded-full bg-white flex items-center justify-center w-12 h-12'>
                <img src={icon.src} alt={icon.alt} />
              </div> ))}

          </div>
        </div>
        <div className='flex flex-1 justify-between gap-20 flex-wrap lg:gap-10 '>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className='text-white font-montserrat text-2xl leading-normal mb-6 '>
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li key={link.name} className=' text-base font-montserrat leading-normal text-white-400 mt-3 hover:text-slate-gray' >
                    <a className='cursor-pointer'  >
                      {link.name}
                    </a>
                  </li>))}
              </ul>
            </div>
              ))}        
        </div>
      </div>
      <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
        <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
          <img
            src={copyrightSign}
            alt='copyright sign'
            width={20}
            height={20}
            className='rounded-full m-0'
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className='font-montserrat cursor-pointer'>Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer