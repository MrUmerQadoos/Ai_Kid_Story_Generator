import React from "react";
import { Textarea } from "@nextui-org/input";

const StorySubjectInput = ({ userSelection }: { userSelection: (data: { fieldValue: string; fieldName: string }) => void }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    userSelection({
      fieldValue: e.target.value,
      fieldName: "storySubject",
    });
  };

  return (
    <div className="w-full  px-4 ">
      {/* Label */}
      <label className="font-bold text-2xl mb-4  text-white block">
        1. Subject of the Story
      </label>

      {/* Textarea with onChange to update formData */}
      <Textarea
        placeholder="Write the subject of the story you want to generate"
        size="lg"
        disableAnimation
        disableAutosize
        classNames={{
          input: "resize-y min-h-[250px] p-4 ",
        }}
        className="w-full border-medium border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] rounded-2xl"
        onChange={handleInputChange} // Capture the input and pass it to the parent
      />
    </div>
  );
};

export default StorySubjectInput;



