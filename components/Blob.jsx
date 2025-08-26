"use client";
import React from "react";
import { motion } from "framer-motion";

const Blob = ({ containerStyle }) => {
  return (
    <div className={containerStyle}>
      <svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          fill="#60A5FA"
          initial={{
            d: "M421,319Q377,388,299,418Q221,448,150,374Q79,300,143,228Q207,156,292,145Q377,134,419,217Q461,300,421,319Z",
          }}
          animate={{
            d: [
              "M421,319Q377,388,299,418Q221,448,150,374Q79,300,143,228Q207,156,292,145Q377,134,419,217Q461,300,421,319Z",
              "M444,337Q398,374,334,419Q270,464,189,414Q108,364,128,282Q148,200,224,155Q300,110,360,165Q420,220,444,337Z",
              "M421,319Q377,388,299,418Q221,448,150,374Q79,300,143,228Q207,156,292,145Q377,134,419,217Q461,300,421,319Z",
            ],
          }}
          transition={{
            duration: 6,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      </svg>
    </div>
  );
};

export default Blob;
