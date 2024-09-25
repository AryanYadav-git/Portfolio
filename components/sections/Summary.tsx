import React from "react";
import WordFadeIn from "../magicui/word-fade-in";
import MagicButton from "../ui/magic-button";
import {
  IconCheck,
  IconChevronRight,
  IconCopy,
  IconDownload,
} from "@tabler/icons-react";
import { AnimatedSubscribeButton } from "../magicui/animated-subscribe-button";
import TechStack from "../common/TechStack";

const Summary = () => {
  return (
    <div className="grid garid-cols-1 md:grid-cols-2 gap-2 h-fit md:h-96 ">
      <div className="w-full rounded-xl p-2 ">
        <WordFadeIn
          words="Versatile full-stack software developer proficient in both front-end development and back-end development,
adept at leading projects and cross-functional teams. Passionate about crafting efficient and scalable solutions
that seamlessly bridge user experiences with robust server-side functionality."
          className="text-sm text-white"
        />
        <div className="flex justify-evenly items-center mt-4 ">
          <a href="./files/Aryan_Yadav_Resume.pdf">
            <MagicButton
              title="Resume"
              icon={<IconDownload />}
              position="right"
              otherClasses="text-sm "
            />
          </a>
          <div className="relative inline-flex h-12 w-fit overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-96 md:mt-10">
            <AnimatedSubscribeButton
              buttonColor="#fff"
              buttonTextColor="#000"
              subscribeStatus={false}
              initialText={
                <span className="group inline-flex items-center text-xs md:text-base">
                  yadavaryan466@gmail.com{" "}
                  <IconCopy className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              }
              changeText={
                <span className="group inline-flex items-center text-black">
                  <IconCheck className="mr-2 h-6 w-6 text-green-500" />
                  Copied{" "}
                </span>
              }
            />
          </div>
        </div>
      </div>
      <div className=" rounded-lg ">
        <TechStack />
      </div>
    </div>
  );
};

export default Summary;
