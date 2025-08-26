import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import { IoArrowDownCircleOutline } from "react-icons/io5";

export const MainNav = () => {
  return (
    <nav className="w-full py-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <Navbar containerStyle="flex flex-col gap-6" />
        <div>
          <a
            href="/resume.pdf"
            download="Abdul_Kadir_Resume.pdf"
            className="btn btn-sm bg-[#201832]"
          >
            <div className="flex items-center gap-3">
              <span>Download CV</span>
              <IoArrowDownCircleOutline className="text-xl" />
            </div>
          </a>
        </div>
      </div>
    </nav>
  );
};
