"use client";
import Image from "next/image";
import React, { useState } from "react";
import { OptionField } from "./ImageStyle";


// Destructure userSelection from props
const StoryType = ({ userSelection }: { userSelection: (data: { fieldValue: string; fieldName: string }) => void }) => {
  const OptionList: OptionField[] = [
    {
      label: "Story Book",
      imageUrl: "/pics/storybook.webp",
      isFree: true,
    },
    {
      label: "Bed Story",
      imageUrl: "/pics/bedsleep.webp",
      isFree: true,
    },
    {
      label: "Educational",
      imageUrl: "/pics/educational.webp",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item.label,
      fieldName: "storyType",
    });
  };

  return (
    <div className="w-full">
      <label className="font-bold text-2xl mb-4 block text-white">2. Story Type</label>
      <div className="flex gap-2 mt-3 overflow-x-auto">
        {OptionList.map((item, index) => (
          <div
            key={index}
            className={`relative p-[2px] cursor-pointer ${
              selectedOption === item.label
                ? "border-2 border-blue-500 backdrop-blur-[6px] rounded-xl grayscale-0" // Border color and highlight for selected
                : "grayscale hover:grayscale-0"
            }`}
            onClick={() => onUserSelect(item)}
          >
            {/* Text Overlay */}
            <h2 className="absolute bottom-2 left-0 w-full text-xl text-white text-center p-2  ">
              {item.label}
            </h2>

            {/* Image */}
            <Image
              src={item.imageUrl}
              alt={item.label}
              width={300}
              height={450}
              className="object-cover h-[240px] lg:min-w-[180px] rounded-xl"
            />
          </div>
        ))}
      </div>

     
    </div>
  );
};

export default StoryType;
