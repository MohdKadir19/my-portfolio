"use client";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Info from "@/components/Info";
import ContactInfo from "@/components/ContactInfo";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import avtImg from "@/public/assets/avatar.png";
import Image from "next/image";
import Blob from "@/components/Blob";
import Social from "@/components/Social";
const iconStyle = `bg-blue text-white transition-all 
    w-[38px] h-[38px] text-[20px] flex items-center justify-center 
    rounded-full cursor-pointer`;

const About = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center gap-8 md:gap-12 xl:gap-24 w-full h-full xl:h-[620px] pt-20 lg:pt-20 xl:pt-0">
          {/* img */}
          <div className="flex w-full pt-0 md:pt-14 m-w-[420px] relative justify-center">
            <Image
              className="relative z-20 rounded-full border-3 border-dashed border-[#3B82F6] md:border-none"
              width={320}
              height={320}
              src={avtImg}
              alt="about"
            />
            <svg
              className="absolute top-1/9 lg:left-[17px] md:left[10px] w-full h-full hidden md:flex"
              viewBox="0 0 320 320"
              fill="none"
            >
              <circle
                cx="150"
                cy="150"
                r="150"
                stroke="#3B82F6" // Tailwind blue-500
                strokeWidth="3"
                strokeDasharray="20 5 30 10 15 40" // <-- Irregular border lengths
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute bottom-1/15 md:left-[34%] lg:left-[22%] z-40 ">
              <Social
                containerStyles="flex gap-4 w-max"
                iconStyle={`${iconStyle} hover:scale-110`}
              />
            </div>
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[620px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About Us</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Abdul</span> Kadir
              </h2>
              <p className="w-full xl:max-w-[540px] mb-6 xl:mb-12 text-base lg:text-[18px] ">
                Experienced UI Developer with a passion for clean code and
                pixel-perfect design. Proficient in modern front-end
                technologies to build high-performance, scalable web
                applications.
              </p>
              <div className="flex flex-col items-start gap-14 xl:gap-16">
                {/* <Stats />
                <Testimonials /> */}
                <ContactInfo />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </PageWrapper>
  );
};

export default About;
