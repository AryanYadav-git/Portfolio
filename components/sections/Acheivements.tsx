"use client";
import { ArrowRight, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";

const images = [
  "/images/achievements/iitr1.jpg",
  "/images/achievements/iitr2.png",
  "/images/achievements/iitr3.jpg",
  "/images/achievements/iitr4.png",
];

export default function AchievementsSection() {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (index: number) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const next = () =>
    setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const prev = () =>
    setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="mt-24 w-full">
      <h2 className="text-5xl font-semibold tracking-tight mb-10">
        Achievements
      </h2>

      <div className="flex flex-col md:flex-row items-start gap-10 bg-[#111213] rounded-2xl p-6 md:p-10 shadow-md border border-neutral-800">
        {/* Left: Bento Grid */}
        <div className="grid grid-cols-2 gap-2 md:w-1/2 w-full">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-md group relative cursor-pointer"
              onClick={() => openGallery(idx)}
            >
              <img
                src={src}
                alt={`Hackathon ${idx + 1}`}
                className="object-cover h-40 w-full rounded-md transition duration-300 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Right: Description */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <p className="text-gray-300 text-base leading-relaxed mb-6">
            <span className="text-white font-medium">
              Winner - Spheron Track
            </span>{" "}
            at{" "}
            <span className="text-white font-medium">Productathon AI 2025</span>
            , hosted by IIT Roorkee, among 50+ competitive teams.
            <br />
            <br />
            Built a powerful{" "}
            <span className="text-white">NLP-powered YAML generator</span> that
            automates deployment workflows on Spheron’s decentralized GPU
            infrastructure. The intuitive application, coupled with{" "}
            <span className="text-white font-medium">one-click deployment</span>{" "}
            on Spheron’s GPU infrastructure.
            <br />
            <br />
            The platform also featured{" "}
            <span className="text-white">
              deployment history management
            </span>{" "}
            for easy redeployment, and a custom-built dashboard to monitor job
            states and resource usage. This project showcased not just technical
            execution, but thoughtful user experience design.
          </p>
          {/* <a
            href="/blog/iit-roorkee-hackathon"
            className="inline-flex items-center text-sm text-blue-400 hover:underline"
          >
            Read full story <ArrowRight className="ml-1 h-4 w-4" />
          </a> */}
        </div>
      </div>

      {/* Modal Gallery */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-4xl w-full bg-[#0f0f0f] py-2 border-none">
          <div className="relative flex items-center justify-center">
            <button
              className="absolute left-4 z-10 text-white text-2xl hover:text-gray-700 hover:bg-gray-300 h-10 rounded-md"
              onClick={prev}
            >
              <ChevronLeft />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`Gallery ${selectedImageIndex}`}
              className="rounded-xl max-h-[80vh] object-contain w-11/12"
            />
            <button
              className="absolute right-4 z-10 text-white text-2xl hover:text-gray-700 hover:bg-gray-300 h-10 rounded-md"
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
