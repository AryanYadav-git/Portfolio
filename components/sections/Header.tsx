import { IconArrowRight, IconMapPin } from "@tabler/icons-react";
import Image from "next/image";
import React from "react";
import WordFadeIn from "@/components/magicui/word-fade-in";
import TypingAnimation from "../magicui/typing-animation";
import GradualSpacing from "../magicui/gradual-spacing";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse w-full px-8 py-6 rounded-xl bg-[#809091] bg-[#4a7766] text-white">
      <div className="w-1/3 md:w-1/5 flex md:justify-end">
        <Image
          src="/photo.jpg"
          alt="photo"
          height={200}
          width={200}
          className=" rounded-full"
        />
      </div>
      <div className="w-full md:w-4/5 flex flex-col gap-8 justify-start">
        <div className="text-5xl md:text-8xl mt-4 md:mt-8 font-light">
          Aryan Yadav
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          <div className="w-full md:w-1/2 xl:w-1/4">
            <Link href="#projects">
              <div className="flex px-4 border w-full p-1 rounded-3xl bg-white text-dark-200 justify-between font-semibold">
                Full Stack Developer <IconArrowRight className="font-light" />
              </div>
            </Link>
          </div>
          <div className="w-fit">
            <div className="flex px-4 py-1 justify-between items-center border rounded-3xl text-balance text-base font-medium ">
              <IconMapPin className="font-light size-4 " /> Haridwar, India
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
