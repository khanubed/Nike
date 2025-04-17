import React from 'react'
import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
   <section id='about-us' className='flex w-full max-container justify-between items-center max-lg:flex-col '>
    <div className='flex flex-1 flex-col'>
    <h2 className="text-4xl font-bold lg:max-w-lg font-palanquin">
    We Provide You <span className="text-coral-red">Super Quality</span> Shoes
        </h2>
        <p className="lg:max-w-lg mt-4 text-lg font-montserrat text-slate-gray" >Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg text-lg mt-6 font-montserrat text-slate-gray" >
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details'></Button>
        </div>
    </div>
    <div className='flex max-lg:mt-10 flex-1 justify-center items-center'>
      <img src={shoe8} alt="shoes8" width={570} height={522} className='object-contain' />
    </div>
   </section>
  )
}

export default SuperQuality