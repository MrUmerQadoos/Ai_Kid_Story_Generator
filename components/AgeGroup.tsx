"use client";
import Image from "next/image";
import React, { useState } from "react";
import { OptionField } from "./ImageStyle";

const AgeGroup = ({ userSelection }: { userSelection: (data: { fieldValue: string; fieldName: string }) => void }) => {
  const OptionList: OptionField[] = [
    {
      label: "0-2 years",
      imageUrl: "/pics/1-2.webp",
      isFree: true,
    },
    {
      label: "3-5 years",
      imageUrl: "/pics/3-4.webp",
      isFree: true,
    },
    {
      label: "5-8 years",
      imageUrl: "/pics/5-6.webp",
      isFree: true,
    },
  ];

  const [selectedOption, setSelectedOption] = useState<string>();
  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection( 
        {fieldValue:item?.label,
        fieldName:'AgeGroup'}
    )
  };

  return (
    <div className="w-full">
      <label className="font-bold text-2xl mb-4 block  text-white">3. Age Group</label>
      <div className="flex gap-2 mt-3 overflow-x-auto">
        {OptionList.map((item, index) => (
          <div
            key={index}
            className={`relative p-[2px] cursor-pointer ${
              selectedOption === item.label
                ? "border-2 border-blue-500 rounded-xl grayscale-0" // Border color and highlight for selected
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
              className="object-cover h-[220px]  lg:min-w-[180px] rounded-xl"
            />
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default AgeGroup;











