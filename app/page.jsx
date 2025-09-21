"use client";
import Blob from "@/components/Blob";
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import avtImg from "@/public/assets/avatar.png";
import { TypeAnimation } from "react-type-animation";
import React from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";

import Info from "@/components/Info";
import Social from "@/components/Social";

const containerStyles = `flex xl:flex-col gap-6 lg:hidden xl:flex xl:absolute xl:top-1/2 xl:-right-4 xl:transform xl:-translate-x-1/2 xl:-translate-y-1/2 z-20`;
const iconStyle = `bg-blue text-white hover:bg-blue/50 transition-all
    w-[42px] h-[42px] text-[22px] flex items-center justify-center 
    rounded-full cursor-pointer`;

const Home = () => {
  return (
    <>
      {/* <Gradient /> */}
      <PageWrapper>
        {/* <Pattern /> */}
        <div className="flex flex-col xl:flex-row items-center justify-between w-full pt-6 lg:pt-0">
          {/* Left Part */}
          <div className="w-full xl-w-[500px] flex flex-col items-center xl:items-start text-center xl:text-left pt-[30px] lg:p-0">
            <h1 className="h1 flex-1 mb-[20px]">
              Hi! I am Abdul Kadir
              <br />
              <TypeAnimation
                sequence={["Front-End Developer", 1500, "UI Developer", 1500]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-accent"
              />
            </h1>
            <p className="max-w-[500px] md:mb-[44px] mb-5 xl:mb-[50px] text-base xl:text-[18px] leading-6 xl:leading-7">
              Experienced UI Developer with a passion for clean code and
              pixel-perfect design. Proficient in modern front-end technologies
              to build high-performance, scalable web applications.
            </p>
            <button className="btn btn-lg bg-teriary hover:bg-teriary-hover mb-5 md:mb-16">
              <div className="flex items-center gap-3">
                <span className="text-base xl:text-[18px]">Let's talk</span>
                <IoArrowForwardCircleOutline className="text-xl" />
              </div>
            </button>
            <div className="flex flex-col xl:flex-row xl:items-center gap-2 xl:gap-8 mb-8 xl:mb-0">
              <Info />
            </div>
            <Social containerStyles={containerStyles} iconStyle={iconStyle} />
          </div>
          {/* Right Part hidden xl:block */}
          <div className="flex-1 relative z-10 mix-blend-multiply">
            {/* Blob components */}
            <Blob containerStyle="w-[500px] h-[500px]" />
            {/* Gradient Overlay (z-10) */}

            {/* Avatar */}
            <Image
              src={avtImg}
              alt="avatar image"
              width={300}
              height={300}
              quality={100}
              className="absolute top-[21%] left-22 z-1  drop-shadow-[0_0_40px_rgba(0,183,172,0.6)] rounded-full"
            />
            <svg
              className="absolute top-1/5 left-20 w-full h-full"
              viewBox="0 0 320 320"
              fill="none"
            >
              <circle
                cx="100"
                cy="100"
                r="100"
                stroke="#3B82F6" // Tailwind blue-500
                strokeWidth="3"
                strokeDasharray="20 5 30 10 15 40" // <-- Irregular border lengths
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default Home;
