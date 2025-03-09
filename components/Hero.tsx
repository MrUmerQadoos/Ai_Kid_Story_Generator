"use client";
import Button  from '@/components/style/Button';
import Image from "next/image.js";
import Link from "next/link.js";
import React from 'react';

const Hero = () => {

  const clicklink =()=>{}
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32 overflow-hidden">
     <div >
        <div className="container">
          <div className="relative z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
             Ai Kid Story 
            </div>
            <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
             Magical Stories 
            </h1>
            <p className="max-w-440  text-[#c3caf4] mb-14 body-1 max-md:mb-10">
            Create fun and personalized stories that bring your child adventures to life and spark their passion for reading. It only takes a few seconds!

            </p>


            <div className="w-full max-w-[1200px] flex justify-start ">
          <Button
  onClick={clicklink}
  icon="/images/zap.svg"
  href={'create_story'}
  containerClassName="button-container"
  markerFill="#000"
>
  Generate Story
</Button> 
</div>

          
          </div>

          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <Image
              src="/images/hero.png"
              className="size-1230 max-lg:h-auto"
              alt="hero"
              width={1230}
                       height={380}
            />
          </div>
        </div>
        </div>
     
    </section>
  );
};

export default Hero;
// // import { Button, Image } from '@nextui-org/react';
// import Button  from '@/components/style/Button';
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const HeroSection = () => {
//   // Handle smooth scroll to the target element by ID
//   const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
//     e.preventDefault();
//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop - 100, // Offset for sticky headers
//         behavior: 'smooth',
//       });
//     }
//   };

//   return (
//     <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
//       <div className="container">
//         <div className="relative z-2 max-w-512 max-lg:max-w-388">
//           <div className="caption small-2 uppercase text-p3">Video Editing</div>
//           <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
//             Amazingly simple
//           </h1>
//           <p className="max-w-440 mb-14 body-1 max-md:mb-10">
//             We designed XORA AI Video Editor to be easy to use, quick to learn, and surprisingly powerful.
//           </p>

//           {/* Smooth Scroll Link without react-scroll */}
//           <Link href="#features" passHref onClick={(e) => handleScroll(e, 'features')}>
//           <Button icon="/images/zap.svg">Try it now</Button>
                
          
//           </Link>
//         </div>

//         {/* Hero Image */}
//         <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
//           <Image
//             src="/images/hero.png"
//             alt="Hero Image"
//             width={1230}
//             height={380}
//             className="size-1230 max-lg:h-auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;



// // import { Button, Image } from '@nextui-org/react';
// // import Link from 'next/link';

// // export default function HeroSection() {
// //   return (
// //     <div className="px-10 md:px-28 lg:px-26 lg:pt-8 mt-10 h-screen  ">
// //       <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-2">
// //         {/* Left Side - Text and Button */}
// //         <div>
// //           <h2 className="text-[60px]  font-extrabold py-10">
// //             Craft Magical Stories for Kids in Minutes
// //           </h2>
// //           <p className="text-xl  font-light">
// //             Create fun and personalized stories that bring your child adventures to life and spark their passion for reading. It only takes a few seconds!
// //           </p>

// //           <Link href={"/create_story"}> <Button
// //             size="lg"
// //             color="secondary"
// //             className="mt-5 font-bold text-2xl p-8"
// //           >
// //             Create Story
// //           </Button></Link>
         
// //         </div>

// //         {/* Right Side - Image */}
// //         <div >
// //           <Image
// //             src="hero/file.webp"
// //             alt="Hero Image"
// //             width={700}
// //             height={400}
// //             className="rounded-lg pt-4"
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
