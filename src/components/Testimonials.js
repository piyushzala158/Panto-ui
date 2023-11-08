import React from 'react'
import Slider from 'react-slick'
import PrewArrow from './common/PrewArrow';
import NextArrow from './common/NextArrow';
import clientWork from '../assets/images/clientwork1.svg';
import clientWork2 from '../assets/images/clientwork2.svg';
import clientWork3 from '../assets/images/clientwork3.svg';
import client from '../assets/images/client1.svg';
import client2 from '../assets/images/client2.svg';
import client3 from '../assets/images/client3.svg';
import star from '../assets/images/starbold.svg';
import starlight from '../assets/images/startlight.svg';


const Testimonials = () => {
    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow:<PrewArrow/>,
        nextArrow:<NextArrow/>,
        responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ],
      };
  return (
    <div className='mt-[50px] lg:mt-[240px]'>
         <p className=' font-gilory-semibold text-[18px] leading-[21px] text-center uppercase text-ternary pb-[20px] tracking-[0.175em] '>Testimonials</p>
        <h3 className=' font-gilory-bold text-[24px] md:text-[28px] lg:text-[42px] leading-[30px] lg:leading-[49px] text-center capitalize pb-[60px] '>Our Client Reviews</h3>
        <Slider {...settings} className="container client mx-auto 2xl:max-w-[1280px]  ">
            <div className=' relative ' >
                <img alt="testimonial" src={clientWork} className=' w-[270px] min-[640px]:w-[370px] '/> 
                <div className="absolute w-[260px] sm:w-[334px] h-[200px] bottom-0 left-[4px] md:h-[240px] sm:bottom-[10px] md:bottom-[20px] sm:left-[18px] bg-[url('/src/assets/images/Union.svg')] bg-contain bg-no-repeat bg-center ">
                    <div className=' px-[40px] text-center'>
                    <img alt="testimonial" src={client} className=' m-auto mb-[4px] md:mb-[12px] w-[40px] md:w-auto pt-[10px] lg:pt-[8px] ' />
                    <h4 className=' font-gilory-bold text-[14px] md:text-[18px] leading-4 md:leading-[21px] text-center capitalize text-secondary pb-[6px]'>Bang Upin</h4>
                    <p className=' font-gilory-regular text-[12px] leading-[14px] text-center text-secondary opacity-[0.6] '>Pedagang Asongan</p>
                    <p className=' font-gilory-regular text-[14px] leading-3 md:leading-[14px] text-center text-secondary opacity-[0.8] pt-[12px] lg:pt-[22px]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                   <div className=' flex justify-center mt-[10px] lg:mt-[20px] '>
                   <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={starlight} className='m-[2px]' />
                   </div>
                    </div>
                </div>
            </div>
            <div className=' relative ' >
                <img alt="testimonial" src={clientWork2} className=' w-[270px] min-[640px]:w-[370px] '/> 
                <div className="absolute w-[260px] sm:w-[334px] h-[200px] bottom-0 left-[4px] md:h-[240px] sm:bottom-[10px] md:bottom-[20px] sm:left-[18px] bg-[url('/src/assets/images/Union.svg')] bg-contain bg-no-repeat bg-center ">
                    <div className=' px-[40px] text-center'>
                    <img alt="testimonial" src={client2} className=' m-auto mb-[4px] md:mb-[12px] w-[40px] md:w-auto pt-[10px] lg:pt-[8px] ' />
                    <h4 className=' font-gilory-bold text-[14px] md:text-[18px] leading-4 md:leading-[21px] text-center capitalize text-secondary pb-[6px]'>Bang Upin</h4>
                    <p className=' font-gilory-regular text-[12px] leading-[14px] text-center text-secondary opacity-[0.6] '>Pedagang Asongan</p>
                    <p className=' font-gilory-regular text-[14px] leading-3 mdleading-[14px] text-center text-secondary opacity-[0.8] mt-[4px] lg:mt-[20px] pt-[12px] lg:pt-[22px] '>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                   <div className=' flex justify-center mt-[10px] lg:mt-[20px] '>
                   <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={starlight} className='m-[2px]' />
                   </div>
                    </div> 

                </div>
            </div>
            <div className=' relative ' >
                <img alt="testimonial" src={clientWork3} className=' w-[270px] min-[640px]:w-[370px] '/> 
                <div className="absolute w-[260px] sm:w-[334px] h-[200px] bottom-0 left-[4px] md:h-[240px] sm:bottom-[10px] md:bottom-[20px] sm:left-[18px] bg-[url('/src/assets/images/Union.svg')] bg-contain bg-no-repeat bg-center ">
                    <div className=' px-[40px] text-center'>
                    <img alt="testimonial" src={client3} className=' m-auto mb-[4px] md:mb-[12px] w-[40px] md:w-auto pt-[10px] lg:pt-[8px] ' />
                    <h4 className=' font-gilory-bold text-[14px] md:text-[18px] leading-4 md:leading-[21px] text-center capitalize text-secondary pb-[6px]'>Bang Upin</h4>
                    <p className=' font-gilory-regular text-[12px] leading-[14px] text-center text-secondary opacity-[0.6] '>Pedagang Asongan</p>
                    <p className=' font-gilory-regular text-[14px] leading-3 mdleading-[14px] text-center text-secondary opacity-[0.8] mt-[4px] lg:mt-[20px] pt-[12px] lg:pt-[22px] '>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                   <div className=' flex justify-center mt-[10px] lg:mt-[20px] '>
                   <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={starlight} className='m-[2px]' />
                   </div>
                    </div>
                </div>
            </div>
            <div className=' relative ' >
                <img alt="testimonial" src={clientWork} className=' w-[270px] min-[640px]:w-[370px] '/> 
                <div className="absolute w-[260px] sm:w-[334px] h-[200px] bottom-0 left-[4px] md:h-[240px] sm:bottom-[10px] md:bottom-[20px] sm:left-[18px] bg-[url('/src/assets/images/Union.svg')] bg-contain bg-no-repeat bg-center">
                    <div className=' px-[40px] text-center'>
                    <img alt="testimonial" src={client} className=' m-auto mb-[4px] md:mb-[12px] w-[40px] md:w-auto pt-[10px] lg:pt-[8px] ' />
                    <h4 className=' font-gilory-bold text-[14px] md:text-[18px] leading-4 md:leading-[21px] text-center capitalize text-secondary pb-[6px]'>Bang Upin</h4>
                    <p className=' font-gilory-regular text-[12px] leading-[14px] text-center text-secondary opacity-[0.6] '>Pedagang Asongan</p>
                    <p className=' font-gilory-regular text-[14px] leading-3 mdleading-[14px] text-center text-secondary opacity-[0.8] mt-[4px] lg:mt-[20px] pt-[12px] lg:pt-[22px]'>“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                   <div className=' flex justify-center mt-[10px] lg:mt-[20px] '>
                   <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={star} className='m-[2px]' />
                    <img alt="testimonial" src={starlight} className='m-[2px]' />
                   </div>
                    </div>
                </div>
            </div>

      </Slider>
    </div>
  )
}

export default Testimonials