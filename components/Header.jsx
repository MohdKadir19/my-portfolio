import React from "react";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import Navbar from "./Navbar";
import {
  IoArrowForwardCircleOutline,
  IoArrowDownCircleOutline,
} from "react-icons/io5";
import Social from "./Social";
const Header = () => {
  return (
    <header className="xl:hidden absolute left-0 top-0 right-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-[15px] xl:py-6">
          {/* Logo */}
          <Logo />
          <Sheet>
            <SheetTrigger className="cursor-pointer text-[28px] text-white">
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              className="bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
                <Navbar containerStyle="flex flex-col gap-6 max-w-[100px]" />
                <div className="pt-4">
                  <a
                    href="/resume.pdf"
                    download="Abdul_Kadir_Resume.pdf"
                    className="btn btn-sm bg-[#201832] mb-10"
                  >
                    <div className="flex items-center gap-3">
                      <span>Download CV</span>
                      <IoArrowDownCircleOutline className="text-xl" />
                    </div>
                  </a>
                  <Social
                    containerStyles="flex gap-4"
                    iconStyle="bg-accent text-white hover:bg-accent-hover transition w-[36px] h-[36px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                  />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
