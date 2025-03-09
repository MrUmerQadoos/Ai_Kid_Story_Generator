"use client";
import Image from "next/image";
import React, { useState } from "react";

export interface OptionField {
  label: string;
  imageUrl: string;
  isFree: boolean;
}


// Destructure userSelection from props
const ImageStyle = ({ userSelection }: { userSelection: (data: { fieldValue: string; fieldName: string }) => void }) => {
  const OptionList: OptionField[] = [
        {
          label: "3D Cartoon",
          imageUrl: "/pics/3dcartoon.webp",
          isFree: true,
        },
        {
          label: "Paper Cut",
          imageUrl: "/pics/Paper Cut.webp",
          isFree: true,
        },
        {
          label: "Water Colour",
          imageUrl: "/pics/water color.webp",
          isFree: true,
        },
        {
          label: "Pixel Style",
          imageUrl: "/pics/pixleted.webp",
          isFree: true,
        },
      ];


  const [selectedOption, setSelectedOption] = useState<string>();

  const onUserSelect = (item: OptionField) => {
    setSelectedOption(item.label);
    userSelection({
      fieldValue: item.label,
      fieldName: "imageStyle",
    });
  };

  return (
    <div className="w-full">
      <label className="font-bold text-2xl mb-4 block  text-white">2. Story Type</label>
      <div className="grid grid-cols-3 gap-4 mt-3">
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
 className="object-cover h-[170px] rounded-xl"
            />
          </div>
        ))}

      </div>

      
    </div>
  );
};

export default ImageStyle;



