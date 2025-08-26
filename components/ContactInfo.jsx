import React from "react";
import { BiCalendar, BiPhoneCall, BiLogoGmail, BiMapPin } from "react-icons/bi";
const ContactInfo = ({ direction = "row" }) => {
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div
        className={`flex ${
          direction === "row" ? "flex-col lg:flex-row" : "flex-col"
        } gap-6`}
      >
        <div className="w-[280px] flex items-start gap-4">
          <BiPhoneCall className="text-2xl mb-1 text-accent" />
          <div>
            <p className="text-base xl:text-[18px] text-white/50">Phone</p>
            <p className="text-base xl:text-[18px]">+91-9643425217</p>
          </div>
        </div>
        <div className="w-[280px] flex items-start gap-4">
          <BiLogoGmail className="text-2xl mb-1 text-accent" />
          <div>
            <p className="text-base xl:text-[18px] text-white/50">
              Email Address
            </p>
            <p className="text-base xl:text-[18px]">mohdkadir19@gmail.com</p>
          </div>
        </div>
      </div>
      <div
        className={`flex ${
          direction === "row" ? "flex-col lg:flex-row" : "flex-col"
        } gap-6`}
      >
        <div className="w-full flex items-start gap-4">
          <BiMapPin className="text-2xl mb-1 text-accent" />
          <div>
            <p className="text-base xl:text-[18px] text-white/50">Address</p>
            <p className="text-base xl:text-[18px]">Okhla, New Delhi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
