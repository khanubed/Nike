import { useState } from 'react'
import {CustomerReviews , Footer, Hero,  PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality} from './sections'
import Nav from './components/Nav'
import ShoeCard from './components/ShoeCard'

import './App.css'

export default function App() {
  return (
    <main className='relative'>
    <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b dark:bg-black bg-white dark:text-white' >
      <Hero /> 
      </section>
      <section className='padding dark:bg-black bg-white dark:text-white '>
      <PopularProducts/> 
      </section>
      <section className='padding dark:bg-black bg-white dark:text-white '>
      <SuperQuality/> 
      </section>
      <section className='padding-x py-10 dark:bg-black bg-white dark:text-white '>
      <Services/> 
      </section>
      <section className='padding dark:bg-black bg-white dark:text-white '>
      <SpecialOffer/> 
      </section>
      <section className='bg-pale-blue padding dark:bg-black  dark:text-white '>
      <CustomerReviews/> 
      </section>
      <section className='padding-x sm:py-32 py-16 w-full dark:bg-black bg-white dark:text-white '>
      <Subscribe/> 
      </section>
      <section className=' bg-black padding-x padding-t pb-8 dark:bg-black-400 '>
      <Footer/> 
      </section>
    </main>
  )
}