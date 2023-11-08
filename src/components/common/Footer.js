import React from "react";

import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'

const Footer = () => {
  return (
    <div className=" bg-background mt-[80px] lg:mt-[220px] pt-[40px] lg:pt-[120px] pb-[20px] lg:pb-[60px] ">
      <div className=" container mx-auto">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 text-center lg:text-left">
          <div className=" lg:col-span-2">
            <a href="/"  className=" font-gilory-bold text-[28px] leading-[33px] capitalize text-secondary tracking-[0.01em]">Panto</a>
            <p className=" font-gilory-medium text-[15px] leading-[24px] text-secondary opacity-[0.8] pt-[29px] max-w-[300px] mx-auto lg:mx-0 ">
              The advantage of hiring a workspace with us is that givees you
              comfortable service and all-around facilities.
            </p>
          </div>
          <div>
            <h6 className=" font-DMSans-regular text-[17px] leading-[22px] text-footertitle  pb-[20px] pt-[20px] lg:pt-0 tracking-[-0.231818px] ">Services</h6>
            <a href="/"  className=" font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] block">Email Marketing</a>
            <a  href="/" className=" font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] block">Campaigns</a>
            <a href="/"  className=" font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] block">Branding</a>
          </div>
          <div>
            <h6 className=" font-DMSans-regular text-[17px] leading-[22px] text-footertitle  pb-[20px] tracking-[-0.231818px] ">Furniture</h6>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] block">Beds</a>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] block">Chair</a>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] block">All</a>
          </div>
          <div> 

            <h6 className="font-DMSans-regular text-[17px] leading-[22px] text-footertitle pb-[20px] tracking-[-0.231818px]">Follow Us</h6>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] flex justify-center lg:justify-start align-middle ">
              <img alt="footer-icon" src={facebook} className=" pr-[10px] h-[20px] w-[30px] " />
              Facebook
            </a>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] flex justify-center lg:justify-start align-middle ">
              <img alt="footer-icon" src={twitter} className=" pr-[10px] h-[20px] w-[30px] " />
              Twitter
            </a>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[160%] text-secondary opacity-[0.8] pb-[16px] flex justify-center lg:justify-start align-middle ">
              <img alt="footer-icon" src={instagram} className=" pr-[10px] h-[20px] w-[30px] " />
              Instagram
            </a>
          </div>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 pt-[20px] lg:pt-[120px] text-center lg:text-left">
          <div className=" col-span-2">
            <a href="/"  className=" font-DMSans-regular text-[15px] leading-[20px] text-footertext opacity-[0.5] pb-[16px] tracking-[-0.204545px] ">Copyright © 2021</a>
          </div>
          <div className="lg:flex">
            <a href="/"  className=" font-gilory-medium text-[15px] leading-[24px] text-secondary opacity-[0.8] lg:pr-[40px] lg:ps-[30px]  pb-[6px] lg:pb-[16px] pt-[6px] lg:pt-0 block ">Terms & Conditions</a>
            <a href="/"  className="font-gilory-medium text-[15px] leading-[24px] text-secondary opacity-[0.8]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
