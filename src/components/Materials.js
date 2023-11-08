import React from 'react'

import materials from "../assets/images/materials.svg"
import arrow from "../assets/images/arrow.svg";


const Materials = () => {
  return (
    <div className=' grid lg:grid-cols-2 pt-[80px] lg:pt-[240px]'>
        <div className='text-center lg:text-start lg:ps-[80px] md:px-0 order-2 lg:order-1'>
            <p className=' font-gilory-semibold text-[14px] md:text-[16px] lg:text-[18px] text-ternary leading-[16px] md:leading-[18px] lg:leading-[21px] uppercase pt-[50px] md:pt-[20px] pb-[20px] tracking-[0.175em] pt-4 lg:pt-[60px] '>Materials</p>
            <h5 className='font-gilory-bold text-[28px] md:text-[36px] lg:text-[42px] leading-[36px] md:leading-[44px] lg:leading-[49px] capitalize pb-[20px] text-secondary max-w-[413px] m-auto lg:m-0 py-[20px]'>Very serious materials for making furniture</h5>
            <p className=' font-gilory-regular text-[14px] md:text-[16px] lg:text-[18px] leading-[16px] md:leading-[24px] lg:leading-[33px] pb-[24px] text-secondary opacity-[0.8] max-w-[556px] mx-auto lg:mx-0'>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
            <a href='/' className=' text-ternary flex justify-center lg:justify-start font-gilory-medium text-[12px] md:text-[14px] leading-[16px] md:leading-[18px] lg:leading-[21px] m-auto md:m-0 '>More Info <img alt="material" src={arrow} className='ps-3' /></a>
        </div>
        <div className=' order-1 lg:order-2'>
            <img src={materials} alt='materials' className="float-right" />
        </div>
    </div>
  )
}

export default Materials