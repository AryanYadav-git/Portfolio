import React from "react";

const EducationCard = ({
  education,
  index,
}: {
  education: EducationParams;
  index: number;
}) => {
  const { degree, institute, score, duration, location } = education;
  const current = index == 0;
  return (
    <div className="">
      {current ? (
        <div className="py-6 md:px-4 border-dark-600 border-b-2 md:border-b-0  grid grid-cols-8 md:bg-white md:text-black md:font-semibold text-xs/tight md:text-base">
        <p className="col-span-2 ">{duration}</p>
        <p className="col-span-2 ">{degree} <span className="block md:hidden"> - {score}</span></p>
        <p className="col-span-4 md:col-span-3 ">{institute} - {location}</p>
        <p className="col-span-1 hidden md:block  ">{score}</p>
      </div>
      ) : (
        <div className="py-6 md:px-4 border-b-2 border-dark-600 grid grid-cols-8 text-xs md:text-base">
          <p className="col-span-2 ">{duration}</p>
        <p className="col-span-2 ">{degree} <span className="md:hidden"> - {score}</span></p>
        <p className="col-span-4 md:col-span-3 ">{institute} - {location}</p>
        <p className="col-span-1 hidden md:block  ">{score}</p>
        </div>
      )}
    </div>
  );
};

export default EducationCard;
