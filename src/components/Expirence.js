import React from 'react'

import experience from "../assets/images/expirence.svg"
import arrow from "../assets/images/arrow.svg";

const Expirence = () => {
  return (
    <div className=' pt-[80px] lg:pt-[240px] grid lg:grid-cols-2 gap-x-[40px]'>
        <div>
            <img src={experience} alt='expirence' />
        </div>
        <div className=' text-center lg:text-start px-3 md:px-0 pt-4 lg:pt-[60px]'>
            <p className=' font-gilory-semibold text-[14px] md:text-[16px] lg:text-[18px] text-ternary leading-[16px] md:leading-[18px] lg:leading-[21px] uppercase pt-[50px] md:pt-[20px] pb-[20px] tracking-[0.175em]'>Experiences</p>
            <h5 className=' font-gilory-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[44px] lg:leading-[49px] capitalize pb-[20px] text-secondary max-w-[413px] m-auto lg:m-0'>we provide you the best experience</h5>
            <p className=' font-gilory-regular text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[28px] lg:leading-[33px] pb-[24px] text-secondary opacity-[0.8] max-w-[556px] mx-auto lg:mx-0 '>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
            <a href="/" className=' text-ternary flex justify-center lg:justify-start   font-gilory-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] lg:leading-[21px] m-auto md:m-0 '>More Info <img alt="experience" src={arrow} className='ps-3' /></a>
        </div>
    </div>
  )
}

export default Expirence