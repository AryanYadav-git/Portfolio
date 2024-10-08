import React from "react";
import { Heading, ExperienceCard } from "../common";
import { experiences } from "@/constants";

const Experience = () => {
  return (
    <div className="">
      <Heading title="Work" />
      <div className="grid md:grid-cols-2 gap-2 ">
        {experiences.map((experience, index) => (
          <ExperienceCard experience={experience} key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Experience;
