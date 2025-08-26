"use client";
import PageWrapper from "@/components/PageWrapper";
import React from "react";
import { projects } from "@/components/Projects";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const Work = () => {
  return (
    <PageWrapper>
      <div className="container mx-auto w-full h-full flex-col justify-center pt-[100px] pb-[30px] lg:p-0">
        <div>
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 5000 }}
            loop
            className="h-max xl:h-[380px] "
          >
            {projects.map((works) => (
              <SwiperSlide key={works.id}>
                <div className="flex flex-col xl:flex-row gap-5 md:gap-8 xl:gap-12">
                  {/* Project info */}
                  <div className="w-full max-w-[350px] flex flex-col gap-5 xl:gap-8 xl:pt-3 order-2 xl:order-none">
                    <h3 className="h3">{works.title}</h3>
                    <div className="xl:mb-1 max-w-[300px] h-auto md:min-h-[130px] xl:min-h-[150px]">
                      <p className="text-sm md:text-base xl:text-[18px] mb-2 xl:mb-4">
                        Technology Used
                      </p>
                      <ul className="flex flex-wrap gap-2 xl:gap-4">
                        {works.tags.map((tech, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full text-sm md:text-base xl:text-[18px]"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={works.link} target="_blank">
                      <button className="btn btn-sm btn-teriary  flex gap-2">
                        <span className="text-sm md:text-base xl:text-[18px]">
                          View Project
                        </span>
                      </button>
                    </Link>
                  </div>
                  {/* Project image */}
                  <div className="w-full h-[200px] md:h-[300px] xl:h-[350px] relative bg-pink-50/10  order-1 xl:order-none rounded-lg overflow-hidden">
                    <Image
                      src={works.image}
                      alt={works.title}
                      fill
                      className="xl:object-cover"
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-bold">{works.title}</h1>
                  <p className="text-sm">{works.description}</p>
                </div> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Work;
