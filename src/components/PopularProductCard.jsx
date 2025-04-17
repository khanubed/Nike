import React from 'react'
import { star } from '../assets/icons'

const PopularProductCard = ({imgURL , name , price}) => {
  return (
    <>
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
        <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
        <div className='mt-8 flex justify-start gap-2.5'>
      <span><img src={star} height={24} width={24} alt="Rating"  />
      <p className="text-xl leading-normal text-slate-gray font-montserrat" >(4.9)</p></span>
      
    </div>
    <h3 className='mt-2 text-2xl leading-normal font-palanquin font-semibold'>{name}</h3>
      <p className='mt-2 text-xl leading-normal font-montserrat font-semibold text-coral-red'>{price}</p>
    </div>
    
    </>
  )
}

export default PopularProductCard