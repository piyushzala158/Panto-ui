import React from "react";
import Slider from "react-slick";

import star from "../assets/images/star.svg";
import plus from "../assets/images/plus.svg";
import arrow from "../assets/images/arrow.svg";
import { Products } from "../constant/BestSell";
import PrewArrow from "./common/PrewArrow";
import NextArrow from "./common/NextArrow";

const BestSell = () => {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    prevArrow:<PrewArrow/>,
    nextArrow:<NextArrow/>,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1023 ,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ]
  };
  return (
   <div className="md:py-[50px] bg-background">
     <div className=" container mx-auto ">
      <h1 className="col-span-4 lg:col-span-1 font-gilory-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] leading-[49px] text-center text-secondary pb-[32px] pt-[28px] lg:pt-[50px] ">
        Best Selling Product
      </h1>
      <div className="max-w-[320px] mx-auto bg-listbackground rounded-full p-[6px] " >
        <button id="chair" className=" font-gilory-medium font-[18px] leading-[33px] text-secondary opacity-[0.8] bg-primary rounded-full px-[19px] py-[7px]">
          Chair
        </button>
        <button id="beds" className=" font-gilory-medium font-[18px] leading-[33px] text-secondary opacity-[0.8] px-[19px] py-[7px]">Beds</button>
        <button id="sofa" className=" font-gilory-medium font-[18px] leading-[33px] text-secondary opacity-[0.8] px-[19px] py-[7px]">Sofa</button>
        <button id="lamp" className=" font-gilory-medium font-[18px] leading-[33px] text-secondary opacity-[0.8] px-[19px] py-[7px]">Lamp</button>
      </div>
      <Slider {...settings} className="container mt-[40px] cards 2xl:max-w-[1220px] ">
        {Products &&
          Products.map((item) => (
            <div className=" bg-primary border-none rounded-[20px] mt-[50px] card">
              <div className="relative bg-cardbackground h-[270px] rounded-t-[20px]">
                <img alt="bestsell" src={item.img} className=" absolute translate-x-[25px] translate-y-[-40px] w-[220px] h-[255px] " />
              </div>
              <div className="pt-[13px] px-[21px]">
                <p className=" font-inter-regular text-[17px] leading-[20px] text-producttype pb-[3px] ">Chair</p>
                <h4 className=" font-inter-semibold text-[21px] leading-[26px] capitalize text-productname pb-[8px] ">{item.name}</h4>
                <div className="flex">
                  <img alt="bestsell" src={star} className="rating" />
                  <img alt="bestsell" src={star} className="rating ps-1" />
                  <img alt="bestsell" src={star} className="rating ps-1" />
                  <img alt="bestsell" src={star} className="rating ps-1" />
                  <img alt="bestsell" src={star} className="rating ps-1" />
                </div>
                <div className="flex justify-between items-center pt-9 pb-7">
                  <h6 className=" font-inter text-[21px] leading-[26px] text-productname ">
                    <sup>$</sup>
                    {item.price}
                  </h6>
                  <img alt="bestsell" src={plus} />
                </div>
              </div>
            </div>
          ))}
      </Slider>
      <div className="text-center py-[60px]">
        <a href="/" className=" text-ternary flex justify-center text-center font-gilory-medium text-[16px] lg:text-[18px] leading-[26px] lg:leading-[33px] ">View All <img alt="bestsell" src={arrow} className="ps-4" /> </a>
      </div>
    </div>
   </div>
  );
};

export default BestSell;
