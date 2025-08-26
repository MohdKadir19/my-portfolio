"use client";
import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12">
        {/* Experience */}
        <div className="flex gap-4">
          <div className=" text-5xl font-bold text-accent flex">
            <CountUp
              end={7}
              duration={5}
              delay={2}
              suffix="+"
              className="block w-[60pxs]"
            />
          </div>
          <span>
            Year <br />
            Experience
          </span>
        </div>
        {/* Clients */}
        <div className="flex gap-4">
          <div className=" text-5xl font-bold text-accent flex">
            <CountUp
              end={5}
              duration={5}
              delay={2}
              suffix="+"
              className="block w-[60pxs]"
            />
          </div>
          <span>
            Clients <br />
            Worldwide
          </span>
        </div>
      </div>
    </>
  );
};

export default Stats;
