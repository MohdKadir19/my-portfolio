"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    message: "This service was amazing! Highly recommended for anyone.",
  },
  {
    name: "Sarah Smith",
    message: "A truly professional experience with outstanding results.",
  },
  {
    name: "David Lee",
    message: "The best team I have worked with! Super fast and creative.",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-[400px] md:max-w-[520px] bg-scondary rounded-lg "
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="flex px-2 py-4 gap-2">
              <QuoteIcon className="hidden xl:flex text-accent rotate-180 w-[40px]" />
              <div className="flex flex-col gap-4">
                <p>{t.message}</p>
                <small className="self-end text-end semibold">{t.name}</small>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
