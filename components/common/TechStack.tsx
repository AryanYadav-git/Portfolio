import React from "react";

const TechStack = () => {
  return (
    <div className="">
      <h2 className="text-dark-600 font-semibold ">
        Some of my{" "}
        <span className="text-white italic mx-1 font-mono">
          favorite technologies,
          <br />
          topics or tools
        </span>{" "}
        that I worked with
      </h2>
      <div className="grid grid-flow-row grid-rows-3 grid-cols-2 gap-1 mt-2">
        <div className="grid row-span-2 col-span-1 gap-1">
        <div className="p-4 px-6 bg-white text-black rounded-3xl ">
          <h3 className="font-bold text-lg text-dark-500">Frontend</h3>
          <p className="font-semibold text-sm">
            NextJs / React / Recoil / Tailwind / Gsap
          </p>
        </div>
        <div className="p-4 px-6 bg-white text-black rounded-3xl">
          <h3 className="font-bold text-lg text-dark-500">Backend</h3>
          <p className="font-semibold text-sm">
            Node.js / Express.js / Prisma / Jsonwebtoken
          </p>
        </div>
        </div>
        
        <div className="p-4 px-6 bg-dark-500 rounded-3xl col-span-1 row-span-2">
          <h3 className="font-bold text-lg ">Dev tools</h3>
          <p className="font-semibold text-sm">
            Git / Github / CI/CD / Postman / Docker / AWS
          </p>
        </div>
        <div className="p-4 px-6  bg-dark-500 rounded-3xl col-span-1">
          <h3 className="font-bold text-gray-100 text-lg">Languages</h3>
          <p className="font-semibold text-sm">
            Typescript / Javascript / Java / Python / SQL
          </p>
        </div>
        <div className="p-4 px-6 bg-dark-500 rounded-3xl col-span-1">
          <h3 className="font-bold text-gray-100 text-lg">Databases</h3>
          <p className="font-semibold text-sm">mysql / mongodb / postgres </p>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
