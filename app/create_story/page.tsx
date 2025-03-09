// "use client";

// import AgeGroup from "@/components/AgeGroup";
// import ImageStyle from "@/components/ImageStyle";
// import StorySubjectInput from "@/components/StorySubjectInput";
// import StoryType from "@/components/StoryType";
// import uuid4 from "uuid4";
// import { db } from "@/config/db";
// import { chatSession } from "@/config/GemineAi";
// import { StoryData, Users } from "@/config/schema";
// import React, { useContext, useState } from "react";
// import CustomLoader from "@/components/CustomLoader";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { useUser } from "@clerk/nextjs";
// import Button from "@/components/style/Button";
// import { toast } from "react-toastify";
// import { UserDetailContext } from "../_context/UserDetailContext";
// import { eq } from "drizzle-orm";
// import { User } from "@nextui-org/react";

// const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

// export interface fieldData {
//   fieldName: string;
//   fieldValue: string;
// }

// export interface formDataType {
//   storySubject: string;
//   storyType: string;
//   AgeGroup: string;
//   imageStyle: string;
// }

// const CreateStoryPage = () => {
//   const [formData, setFormData] = useState<formDataType>({
//     storySubject: "",
//     storyType: "",
//     AgeGroup: "",
//     imageStyle: "",
//   });

//   const [loading, setLoading] = useState(false); // Control loader visibility

//   const router = useRouter();

//   const { isLoaded, isSignedIn, user } = useUser();

//   const [isAdvanced, setIsAdvanced] = useState(false);

// const {userDetail,setUserDetail}=useContext(UserDetailContext)


//   const notify = (msg:string) => toast(msg);


//   const GenrateStory = async () => {

//     if(userDetail.credit<=0){
//       notify("You don,t have enough Credits")
//       return
//     }

//     if (CREATE_STORY_PROMPT && formData) {
//       setLoading(true); // Show loader

//       const FINAL_PROMPT = CREATE_STORY_PROMPT
//         .replace("{ageGroup}", formData.AgeGroup || "")
//         .replace("{storyType}", formData.storyType || "")
//         .replace("{imageStyle}", formData.imageStyle || "")
//         .replace("{storySubject}", formData.storySubject || "");

//       try {
//         console.log("FINAL_PROMPT : ", FINAL_PROMPT);

//         const result = await chatSession.sendMessage(FINAL_PROMPT);
//         const story = JSON.parse(result?.response.text());

        
//         const imagResp = await axios.post("api/generate_image", {
//           prompt:
//             "Add text with title " +
//             story?.story?.title +
//             " in bold text for book cover " +
//             story?.story?.cover?.image_prompt,
//         });

//         const AiImageUrl = imagResp?.data?.imageUrl;

//         const imageResult = await axios.post("api/save-image", {
//           url: AiImageUrl,
//         });

//         const FirebaseStorageImageUrl = imageResult.data.imageUrl;

//         console.log("Result: ", result?.response.text());
//         const resp = await SaveInDB(result?.response.text(), FirebaseStorageImageUrl);
//         console.log("resp", resp);

//         toast.success("Story generated successfully!");
//         await updateUserCredit();
//         router?.replace('/viewStory/'+resp[0].storyId)


//         setLoading(false); // Hide loader once done
//       } catch (e) {
//         console.log(e);
//         toast.error("An error occurred while generating the story.");
//         setLoading(false); // Hide loader in case of an error
//       }
//     } else {
//       console.error("Prompt or form data is missing");
//       console.error("Prompt or form data is missing");
//     }
//   };

//   const toggleMode = () => {
//     setIsAdvanced((prevMode) => !prevMode);
//   };
  
//   const onHandleUserSelection = (data: fieldData) => {
    
//     setFormData((prev: formDataType) => ({
//       ...prev, // Spread the previous form data to keep other fields intact
//       [data.fieldName]: data.fieldValue, // Update the specific field with the new value
//     }));

//     console.log("formData", formData);
//   };

//   const SaveInDB = async (output: string, imageUrl: string) => {
//     const recordId = uuid4();

//     setLoading(true);

//     try {
//       // Access user properties safely
//       const primaryEmail = user?.emailAddresses.find(
//         (email) => email.id === user.primaryEmailAddressId
//       )?.emailAddress;
//       const userImage = user?.profileImageUrl;
//       const userName = user?.fullName;

//       const result = await db
//         .insert(StoryData)
//         .values({
//           storyId: recordId,
//           ageGroup: formData?.AgeGroup,
//           imageStyle: formData?.imageStyle,
//           storySubject: formData?.storySubject,
//           storyType: formData?.storyType,
//           output: JSON.parse(output),
//           coverImage: imageUrl,
//           userEmail: primaryEmail, // Primary email address
//           userImage: userImage, // User profile image
//           userName: userName, // User full name
//         })
//         .returning({ storyId: StoryData?.storyId });

//         toast.success("Story saved successfully!"); // Add this line for success

//       setLoading(false);
//       return result;
//     } catch (e) {
//       console.log(e);
//       toast.error("An error occurred while saving the story.");
//       setLoading(false); // Hide loader in case of error
//     }

   
  

    
//   };
//   const updateUserCredit = async () => {
//     try {
//       await db
//         .update(Users)
//         .set({ credit: Number(userDetail?.credit - 1) })
//         .where(eq(Users.userEmail, user?.primaryEmailAddress?.emailAddress || ""))
//         .returning({ id: Users.id });
//     } catch (error) {
//       console.error("Error updating user credit:", error);
//     }
//   };
//   return (
//     <section>
//       <div className="max-w-screen max-h-screen pricing-head_before relative mx-auto pt-[140px]">
//         <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-0 pt-16 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
//           Flexible pricing for teams of all sizes
//         </h3>
  
//         <div className="pricing-bg">
//           <img
//             src="/images/bg-outlines.svg"
//             width={960}
//             height={880}
//             alt="outline"
//             className="relative z-2"
//           />
//           <img
//             src="/images/bg-outlines-fill.png"
//             width={960}
//             height={880}
//             alt="outline"
//             className="absolute inset-0 opacity-5 mix-blend-soft-light"
//           />
//         </div>
//       </div>
  
//       {/* Pricing section */}
//       <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto pt-[80px]">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-16 lg:mx-20 mt-4 justify-center w-full px-11 lg:p-10">
//           {/* Always show the StorySubjectInput */}
//           <StorySubjectInput userSelection={onHandleUserSelection} />
  
//           {/* Show Simple/Advanced toggle buttons */}
//           <div><div className="flex justify-between">
//             <Button onClick={toggleMode}   >
//               {isAdvanced ? "Simple" : "Advanced"} Mode
//             </Button>
//           </div></div>
          
  
//           {/* Show advanced inputs if in Advanced mode */}
//           {isAdvanced && (
//             <>
//               <StoryType userSelection={onHandleUserSelection} />
//               <AgeGroup userSelection={onHandleUserSelection} />
//               <ImageStyle userSelection={onHandleUserSelection} />
//             </>
//           )}
  
//           {/* Generate button */}
//           <div className=" flex justify-end my-10 px-11">
            
//             <Button onClick={GenrateStory} icon="/images/zap.svg">
//               Generate Story
//             </Button>
//           </div>
//         </div>
  
//         <CustomLoader loading={loading} />
//       </div>
//     </section>
//   );
// };

// export default CreateStoryPage;





















"use client";

import AgeGroup from "@/components/AgeGroup";
import ImageStyle from "@/components/ImageStyle";
import StorySubjectInput from "@/components/StorySubjectInput";
import StoryType from "@/components/StoryType";
import uuid4 from "uuid4";
import { db } from "@/config/db";
import { chatSession } from "@/config/GemineAi";
import { StoryData, Users } from "@/config/schema";
import React, { useContext, useState } from "react";
import CustomLoader from "@/components/CustomLoader";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import Button from "@/components/style/Button";
import { toast } from "react-toastify";
import { UserDetailContext } from "../_context/UserDetailContext";
import { eq } from "drizzle-orm";
import { User } from "@nextui-org/react";

const CREATE_STORY_PROMPT = process.env.NEXT_PUBLIC_CREATE_STORY_PROMPT;

export interface fieldData {
  fieldName: string;
  fieldValue: string;
}

export interface formDataType {
  storySubject: string;
  storyType: string;
  AgeGroup: string;
  imageStyle: string;
}

const CreateStoryPage = () => {
  const [formData, setFormData] = useState<formDataType>({
    storySubject: "",
    storyType: "",
    AgeGroup: "",
    imageStyle: "",
  });

  const [loading, setLoading] = useState(false); // Control loader visibility

  const router = useRouter();

  const { isLoaded, isSignedIn, user } = useUser();

const {userDetail,setUserDetail}=useContext(UserDetailContext)


  const notify = (msg:string) => toast(msg);


  const GenrateStory = async () => {

    if(userDetail.credit<=0){
      notify("You don,t have enough Credits")
      return
    }

    if (CREATE_STORY_PROMPT && formData) {
      setLoading(true); // Show loader

      const FINAL_PROMPT = CREATE_STORY_PROMPT
        .replace("{ageGroup}", formData.AgeGroup || "")
        .replace("{storyType}", formData.storyType || "")
        .replace("{imageStyle}", formData.imageStyle || "")
        .replace("{storySubject}", formData.storySubject || "");

      try {
        console.log("FINAL_PROMPT : ", FINAL_PROMPT);

        const result = await chatSession.sendMessage(FINAL_PROMPT);
        const story = JSON.parse(result?.response.text());

        
        const imagResp = await axios.post("api/generate_image", {
          prompt:
            "Add text with title " +
            story?.story?.title +
            " in bold text for book cover " +
            story?.story?.cover?.image_prompt,
        });

        const AiImageUrl = imagResp?.data?.imageUrl;

        const imageResult = await axios.post("api/save-image", {
          url: AiImageUrl,
        });

        const FirebaseStorageImageUrl = imageResult.data.imageUrl;

        console.log("Result: ", result?.response.text());
        const resp = await SaveInDB(result?.response.text(), FirebaseStorageImageUrl);
        console.log("resp", resp);

        toast.success("Story generated successfully!");
        await updateUserCredit();
        // router?.replace('/viewStory/'+resp[0].storyId)
        if (resp && resp[0]?.storyId) {
          router?.replace('/viewStory/'+resp[0].storyId);
        }
        


        setLoading(false); // Hide loader once done
      } catch (e) {
        console.log(e);
        toast.error("An error occurred while generating the story.");
        setLoading(false); // Hide loader in case of an error
      }
    } else {
      console.error("Prompt or form data is missing");
      console.error("Prompt or form data is missing");
    }
  };

  const onHandleUserSelection = (data: fieldData) => {
    
    setFormData((prev: formDataType) => ({
      ...prev, // Spread the previous form data to keep other fields intact
      [data.fieldName]: data.fieldValue, // Update the specific field with the new value
    }));

    console.log("formData", formData);
  };

  const SaveInDB = async (output: string, imageUrl: string) => {
    const recordId = uuid4();

    setLoading(true);

    try {
      // Access user properties safely
      const primaryEmail = user?.emailAddresses.find(
        (email) => email.id === user.primaryEmailAddressId
      )?.emailAddress;
      
      // @ts-expect-error: profileImageUrl is expected but not in type definition
      const userImage = user?.profileImageUrl;
      const userName = user?.fullName;

      const result = await db
        .insert(StoryData)
        .values({
          storyId: recordId,
          ageGroup: formData?.AgeGroup,
          imageStyle: formData?.imageStyle,
          storySubject: formData?.storySubject,
          storyType: formData?.storyType,
          output: JSON.parse(output),
          coverImage: imageUrl,
          userEmail: primaryEmail, // Primary email address
          userImage: userImage, // User profile image
          userName: userName, // User full name
        })
        .returning({ storyId: StoryData?.storyId });

        toast.success("Story saved successfully!"); // Add this line for success

      setLoading(false);
      return result;
    } catch (e) {
      console.log(e);
      toast.error("An error occurred while saving the story.");
      setLoading(false); // Hide loader in case of error
    }

   
  

    
  };
  const updateUserCredit = async () => {
    try {
      await db
        .update(Users)
        .set({ credit: Number(userDetail?.credit - 1) })
        .where(eq(Users.userEmail, user?.primaryEmailAddress?.emailAddress || ""))
        .returning({ id: Users.id });
    } catch (error) {
      console.error("Error updating user credit:", error);
    }
  };
  return (
    <section>
      <div className="max-w-screen max-h-screen pricing-head_before relative mx-auto pt-[140px]">
        <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-0 pt-16 max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
          Flexible pricing for teams of all sizes
        </h3>

        <div className="pricing-bg">
          <img
            src="/images/bg-outlines.svg"
            width={960}
            height={880}
            alt="outline"
            className="relative z-2"
          />
          <img
            src="/images/bg-outlines-fill.png"
            width={960}
            height={880}
            alt="outline"
            className="absolute inset-0 opacity-5 mix-blend-soft-light"
          />
        </div>
      </div>

      {/*  pricing section */}
      <div className="scroll-hide relative z-2 -mt-12 flex items-start max-xl:gap-5 max-xl:overflow-auto pt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-16 lg:mx-20 mt-4 justify-center w-full px-11 lg:p-10">
          <StorySubjectInput userSelection={onHandleUserSelection} />
          <StoryType userSelection={onHandleUserSelection} />
          <AgeGroup userSelection={onHandleUserSelection} />
          <ImageStyle userSelection={onHandleUserSelection} />
          <div></div>
          <div className="w-full max-w-[1200px] flex justify-end my-10 px-11">
          <Button
  onClick={GenrateStory}
  icon="/images/zap.svg"
  href=""
  containerClassName="button-container"
  markerFill="#000"
>
  Generate Story
</Button>

          </div>
        </div>
        <CustomLoader loading={loading} />
      </div>
    </section>
  );
};

export default CreateStoryPage;












