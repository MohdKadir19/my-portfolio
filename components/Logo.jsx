import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-[28px] font-normal leading-0">
      Abdul<span className="text-accent text-3xl xl:text-6xl">.</span>
    </Link>
  );
};

export default Logo;
