import React from 'react'
import Header from './common/Header'
import search from '../assets/images/search.svg'

import '../assets/scss/Hero.scss'

const Hero = () => {
  return (
    <div className="hero h-[900px] sm:h-[1084px]">
        <Header/>
        <h1 className='mx-auto text-center text-primary font-gilory-bold capitalize max-w-[360px] sm:max-w-[600px] md:max-w-[880px] max-[420px]:text-[24px] max-[640px]:text-[32px] sm:text-[50px] md:text-[60px] lg:text-[80px] pt-[60px] md:pt-[90px] max-[420px]:leading-[30px] sm:leading-[54px] md:leading-[70px] lg:leading-[104px]'>
            Make your interior more minimalistic & modern
            </h1>
            <p className='mx-auto text-center text-primary font-gilory-regular max-w-[340px] min-[420px]:max-w-[400px]  sm:max-w-[560px] md:max-w-[610px] max-[420px]:text-[14px] max-[640px]:text-[16px] sm:text-[22px] md:text-[24px] lg:text-[24px] opacity-80 '>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>
            <div className='max-w-[280px] md:max-w-[344px] mx-auto mt-[45px] relative '>
                <input type='search' placeholder='Search furniture' className='rounded-full w-full p-[10px] md:p-[15px] bg-primary/20 border-primary/20 placeholder:text-primary placeholder:opacity-80 placeholder:font-gilory-regular placeholder:text-[18px] leading-[27px] ' />
                <img alt="hero" src={search} className=' absolute right-[8px] top-[8px] max-[768px]:max-w-[32px]  ' />
            </div>
        </div>
  )
}

export default Hero