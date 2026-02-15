"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { Heading } from "../common";
import { achievements } from "@/constants";

function highlightText(text: string, highlights: string[] = []) {
  if (highlights.length === 0) return [text];
  const parts: (string | JSX.Element)[] = [];
  let remaining = text;
  for (const h of highlights) {
    const i = remaining.indexOf(h);
    if (i === -1) continue;
    if (i > 0) parts.push(remaining.slice(0, i));
    parts.push(<span key={parts.length} className="text-white font-medium">{h}</span>);
    remaining = remaining.slice(i + h.length);
  }
  if (remaining) parts.push(remaining);
  return parts;
}

export default function AchievementsSection() {
  const [open, setOpen] = useState(false);
  const [selectedAchievementIndex, setSelectedAchievementIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openGallery = (achievementIdx: number, imageIdx: number) => {
    setSelectedAchievementIndex(achievementIdx);
    setSelectedImageIndex(imageIdx);
    setOpen(true);
  };

  const currentImages = achievements[selectedAchievementIndex]?.images ?? [];
  const next = () =>
    setSelectedImageIndex((prev) => (prev + 1) % currentImages.length);
  const prev = () =>
    setSelectedImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);

  const currentAlt = achievements[selectedAchievementIndex]?.alt ?? "Achievement gallery";

  return (
    <section className="mt-24 w-full" id="achievements">
      <Heading title="Acheivements" />

      <div className="flex flex-col gap-10">
        {achievements.map((achievement, achievementIdx) => (
          <div
            key={achievementIdx}
            className="flex flex-col md:flex-row items-stretch gap-10 bg-[#111213] rounded-2xl p-0 md:p-6 shadow-md md:border border-neutral-800"
          >
            {/* Left: Bento Grid */}
            <div className="grid grid-cols-2 gap-2 md:w-1/2 w-full">
              {achievement.images.map((src, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-md group relative cursor-pointer h-40"
                  onClick={() => openGallery(achievementIdx, idx)}
                >
                  <Image
                    src={src}
                    alt={`${achievement.alt ?? "Achievement"} - Photo ${idx + 1}`}
                    width={400}
                    height={160}
                    className="object-cover h-40 w-full rounded-md transition duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 rounded-xl pointer-events-none" />
                </div>
              ))}
            </div>

            {/* Right: Description */}
            <div className="md:w-1/2 w-full flex flex-col ">
              <p className="text-gray-300 text-base leading-relaxed mb-6">
                {achievement.paragraphs.map((para, paraIdx) => (
                  <span key={paraIdx}>
                    {paraIdx > 0 && (
                      <>
                        <br />
                        <br />
                      </>
                    )}
                    {highlightText(para.text, para.highlights)}
                  </span>
                ))}
              </p>
              {achievement.date && (
                <p className="text-white text-sm  text-end ">{achievement.date}</p>
              )}
            </div>
          </div>
        ))}
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
            {currentImages[selectedImageIndex] && (
              <Image
                src={currentImages[selectedImageIndex]}
                alt={currentAlt}
                width={1200}
                height={800}
                className="rounded-xl max-h-[80vh] w-auto h-auto object-contain"
              />
            )}
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
