"use client"

import { siteConfig } from "@/config/site";
import { Avatar, Badge } from "@nextui-org/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CardSlider = () => {
  const profiles = siteConfig.profiles;
  const [selected, setSelected] = useState(1); // Default selected item (id: 2)

  const canScrollPrev = selected > 0
  const canScrollNext = selected < profiles.length - 1

  function scrollPrev() {
    //prevent scrolling past first item
    if (!canScrollPrev) setSelected(profiles.length - 1)
    else setSelected((prev) => prev - 1)
  }

  function scrollNext() {
    // prevent scrolling past last item
    if (!canScrollNext) setSelected(0)
    else setSelected((prev) => prev + 1)
  }

  return (
    <div className="my-10 md:my-0 w-full h-full min-h-[400px] max-h-[480px] flex justify-center items-center"> 
      <div className="relative w-full h-full flex justify-center items-center">
        <motion.div
          className="absolute -top-20 translate-x-1/2 z-10 bg-[#E9F7EF] rounded-lg px-4 py-2 shadow-lg flex items-center gap-2 text-emerald-500"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="absolute -bottom-2 inset-x-[45%] w-0 h-0
            border-l-[8px] border-l-transparent
            border-t-[12px] border-t-[#E9F7EF]
            border-r-[8px] border-r-transparent"
          />
          <span className="text-lg md:text-xl font-extrabold">$</span>
          <span className="text-lg md:text-xl font-extrabold">{profiles[selected].salary}</span>
        </motion.div>

        {profiles.map((item, index) => {
          const isActive = index === selected;
          const isPrevious = index === (selected === 0 ? profiles.length - 1 : selected - 1);
          const isNext = index === (selected === profiles.length - 1 ? 0 : selected + 1);

          let position = 'inactive';
          if (isActive) position = 'active';
          else if (isPrevious) position = 'previous';
          else if (isNext) position = 'next';

          return (
            <motion.label
              key={item.id}
              className={`w-[234px] h-full carousel ${position} bg-white px-4 py-8 rounded-lg`}
              onClick={() => setSelected(index)}
            >
              <div className="flex flex-col items-center text-center space-y-4">
              <Avatar className="w-24 h-24" src={item.image} />
              
              <div className="space-y-1">
                <h3 className="text-2xl font-extrabold">
                  {item.name} {item.flag}
                </h3>
                <p className="text-primary font-bold">
                  {item.role} · {item.experience}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {item.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="text-sm border-2 p-1 rounded-lg"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            </motion.label>
          );
        })}

      <button
        type="button"
        className="group absolute left-0 top-[40%] z-20 grid aspect-square place-content-center rounded-full transition-colors text-white"
        style={{
          width: 80,
          height: 80,
        }}
        onClick={scrollPrev}
      >
        <span className="sr-only">Previous Guide</span>
        <FaChevronLeft className="h-10 w-10 stroke-1 transition-colors group-enabled:group-hover:text-gray-300 group-disabled:opacity-50" />
      </button>
      <button
        type="button"
        className="group absolute right-0 top-[40%] z-20 grid aspect-square place-content-center rounded-full transition-colors text-white"
        style={{
          width: 80,
          height: 80,
        }}
        onClick={scrollNext}
      >
        <span className="sr-only">Next Guide</span>
        <FaChevronRight className="h-10 w-10 stroke-1 transition-colors group-enabled:group-hover:text-gray-300 group-disabled:opacity-50" />
      </button>
      </div>
    </div>
  );
};

export default CardSlider;