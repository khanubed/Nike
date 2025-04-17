import { useState } from "react"; 

import { arrowRight } from "../assets/icons"
import  Button  from "../components/Button"
import { shoes ,  statistics } from "../constants"
import { bigShoe1 , bigShoe2 , bigShoe3 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"

function Hero() {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  
  return (
    <section id="home" className="w-full  dark:bg-black bg-white dark:text-white  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container ">
      <div className="flex justify-center items-start w-full  relative flex-col xl:w-2/5  max-lg:padding-x pt-28">
        <p className="text-coral-red text-xl font-montserrat mt-2">Our Summer Collection</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold   dark:text-white text-black z-20' >
          <span className='xl:bg-white rounded-xl   dark:lg:bg-black  xl:whitespace-nowrap relative z-[-10] pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className="flex justify-start items-start mt-20 gap-16 flex-wrap w-full">
          {statistics.map((stat,index) => ( <div key={stat.label}><p className="text-4xl font-palanquin font-bold">{stat.value}</p>
                                                 <p className="leading-7 font-montserrat text-slate-gray">{stat.label}</p>
                                            </div> )) }
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-slate dark:bg-black-400  bg-cover xl:bg-contain xl:bg-no-repeat dark:bg-card bg-hero bg-center'>
        <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={610}
          height={502}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero 