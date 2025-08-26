import React from "react";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
const Info = () => {
  return (
    <>
      <div className="flex items-center gap-4 text-lg">
        <span className="text-accent text-xl md:text-2xl">
          <HiOutlinePhone />
        </span>

        <a
          href="tel:+919643425217"
          className="text-base xl:text-[18px]"
          aria-label="Call us"
        >
          +91-9643425217
        </a>
      </div>
      <div className="flex items-center gap-4 text-lg">
        <span className="text-accent text-xl md:text-2xl">
          <HiOutlineMail />
        </span>

        <a
          href="mailto:mohdkadir19@gmail.com"
          className="text-base xl:text-[18px]"
          aria-label="Email us"
        >
          mohdkadir19@gmail.com
        </a>
      </div>
    </>
  );
};

export default Info;
