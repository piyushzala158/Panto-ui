import React from "react";
import arrow from "../assets/images/arrow.svg";

const Features = () => {
  return (
    <div className=" container mx-auto py-[60px] md:py-[120px]">
      <div className="grid md:grid-cols-3 lg:grid-cols-4">
        <h1 className="col-span-4 lg:col-span-1 font-gilory-bold text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] leading-[49px] lg:pr-[40px] text-center lg:text-start flex items-center justify-center">
          Why Choosing Us
        </h1>
        <div className=" col-span-4 sm:col-span-1 text-center sm:text-start p-3 sm:p-0 max-w-[300px] mx-auto">
          <h3 className="font-gilory-bold text-[16px] sm:text-[18px] md:text-[24px] leading-[28px] opacity-[0.9] pb-[20px] ">Luxury facilities</h3>
          <p className="font-gilory-regular text-start text-[14px] sm:text-[16px] leading-[20px] sm:leading-[30px] opacity-[0.8] ">
            The advantage of hiring a workspace with us is that givees you
            comfortable service and all-around facilities.
          </p>
          <a href="/" className=" text-ternary text-start font-gilory-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[26px] flex justify-start pt-[14px] ">
            More Info <img alt="feature" src={arrow} className=" ps-[13px] " />
          </a>
        </div>
        <div className=" col-span-4 sm:col-span-1 text-center sm:text-start p-3 sm:p-0 max-w-[300px] mx-auto">
          <h3 className="font-gilory-bold text-[16px] sm:text-[18px] md:text-[24px] leading-[28px] opacity-[0.9] pb-[20px]">Affordable Price</h3>
          <p className="font-gilory-regular text-start text-[14px] sm:text-[16px] leading-[20px] sm:leading-[30px] opacity-[0.8]">
            You can get a workspace of the highst quality at an affordable price
            and still enjoy the facilities that are oly here.
          </p>
          <a href="/" className=" text-ternary font-gilory-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[26px] flex justify-start pt-[14px]">
            More Info <img alt="feature" src={arrow} className=" ps-[13px] " />
          </a>
        </div>
        <div className=" col-span-4 sm:col-span-1 text-center sm:text-start p-3 sm:p-0 max-w-[300px] mx-auto">
          <h3 className="font-gilory-bold text-[16px] sm:text-[18px] md:text-[24px] leading-[28px] opacity-[0.9] pb-[20px]">Many Choices</h3>
          <p className="font-gilory-regular text-start text-[14px] sm:text-[16px] leading-[20px] sm:leading-[30px] opacity-[0.8]">
            We provide many unique work space choices so that you can choose the
            workspace to your liking.
          </p>
          <a href="/" className=" text-ternary font-gilory-medium text-[12px] sm:text-[14px] leading-[18px] sm:leading-[26px] flex justify-start pt-[14px]">
            More Info
            <img alt="feature" src={arrow} className=" ps-[13px] " />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
