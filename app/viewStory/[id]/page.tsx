"use client";

import { db } from '@/config/db';
import { StoryData } from '@/config/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import BookCoverPage from '../_components/BookCoverPage';
import StoryPages from '../_components/StoryPages';
import LastPage from '../_components/LastPage';
import { PageProps, Story } from '@/types/types';
// import { PiArrowFatLineLeft, PiArrowFatLineRight, FiPlayCircle } from 'react-icons/fi'; // Import icons
import { PiArrowFatLineRight,PiArrowFatLineLeft } from "react-icons/pi";

const Page = ({ params }: PageProps) => {
  const [story, setStory] = useState<Story | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0); // Keep track of the current page
  // @ts-expect-error: HTMLFlipBook contains fields that may be null, and we're handling them elsewhere.
  const flipBookRef = useRef<HTMLFlipBook>(null);

  useEffect(() => {
    getStory();

    // Add event listener for keydown to flip pages using arrow keys
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        // Flip to the next page on right arrow key
        flipBookRef.current?.pageFlip().flipNext();
      } else if (event.key === 'ArrowLeft') {
        // Flip to the previous page on left arrow key
        flipBookRef.current?.pageFlip().flipPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [params.id]);

  const getStory = async () => {
    const result = await db
      .select()
      .from(StoryData)
      .where(eq(StoryData.storyId, params.id));
      // @ts-expect-error: result[0] contains fields that may be null, and we're handling them elsewhere.
    setStory(result[0]);
  };

  // Navigate to the next page
  const nextPage = () => {
    if (flipBookRef.current) {
      flipBookRef.current.pageFlip().flipNext();
      setCurrentPage((prev) => prev + 1);
    }
  };

  // Navigate to the previous page
  const prevPage = () => {
    if (flipBookRef.current && currentPage > 0) {
      flipBookRef.current.pageFlip().flipPrev();
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div >
      {story ? (
        <div className="p-5 md:px-10 lg:px-20 h-screen  ">
          
          {/* Play icon on top center of the book */}
          {/* <div className="absolute top-5 left-1/2 transform -translate-x-1/2">
            <FiPlayCircle className="text-4xl text-gray-700" />
          </div> */}
          
<div className=' relative '>
 


<

  // @ts-ignore
  HTMLFlipBook 

  
            ref={flipBookRef} // Attach the flipbook reference
            width={window.innerWidth <= 640 ? 300 : 500} // Responsive width
            height={window.innerWidth <= 640 ? 400 : 500} // Responsive height
            showCover={true}
            useMouseEvents={false}
            onFlip={(e) => setCurrentPage(e.data)} // Track the current page on flip
            className="mt-5  md:mt-[100px] lg:mt-[100px]  mx-auto shadow-lg rounded-lg"
          >
            <div>
              <BookCoverPage imageUrl={story.coverImage} />
            </div>
            {story.output.story.chapters.map((chapter, index) => (
              <div key={index} className="bg-white p-5 md:p-10 border shadow-inner">
                <StoryPages storyChapter={chapter} />
              </div>
            ))}
            <div>
              <LastPage />
            </div>
          </HTMLFlipBook>

          {/* Navigation Buttons */}
          <div className="absolute left-[167px] top-1/2 transform -translate-y-1/2">
            {currentPage > 0 && ( // Only show previous button if not on the first page
              <button
                className="bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800 opacity-85"
                onClick={prevPage}
              >
                <PiArrowFatLineLeft className="text-2xl" />
              </button>
            )}
          </div>

          <div className="absolute right-[167px] top-1/2 transform -translate-y-1/2 opacity-85">
            <button
              className="bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-800"
              onClick={nextPage}
            >
              <PiArrowFatLineRight className="text-2xl" />
            </button>
          </div>

</div>
          {/* Flipbook */}
         
        </div>
      ) : (
        <p>Loading story...</p>
      )}
    </div>
  );
};

export default Page;







// "use client";

// import { db } from '@/config/db';
// import { StoryData } from '@/config/schema';
// import { eq } from 'drizzle-orm';
// import React, { useEffect, useRef, useState } from 'react';
// import HTMLFlipBook from 'react-pageflip';
// import BookCoverPage from '../_components/BookCoverPage';
// import StoryPages from '../_components/StoryPages';
// import LastPage from '../_components/LastPage';
// import { PageProps, Story } from '@/types/types';

// const Page = ({ params }: PageProps) => {
//   const [story, setStory] = useState<Story | null>(null);
//   const flipBookRef = useRef<HTMLFlipBook>(null); 

//   useEffect(() => {
//     getStory();

//     // Add event listener for keydown to flip pages using arrow keys
//     const handleKeyDown = (event: KeyboardEvent) => {
//       if (event.key === 'ArrowRight') {
//         // Flip to the next page on right arrow key
//         flipBookRef.current?.pageFlip().flipNext();
//       } else if (event.key === 'ArrowLeft') {
//         // Flip to the previous page on left arrow key
//         flipBookRef.current?.pageFlip().flipPrev();
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);

//     // Clean up event listener when the component unmounts
//     return () => {
//       window.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [params.id]);

//   const getStory = async () => {
//     const result = await db
//       .select()
//       .from(StoryData)
//       .where(eq(StoryData.storyId, params.id));
//     setStory(result[0]);
//   };

//   return (
//     <div>
//       {story ? (
//         <div className="p-5 md:px-10 lg:px-20 h-screen flex items-center justify-center">
//           <HTMLFlipBook
//             ref={flipBookRef} // Attach the flipbook reference
//             width={window.innerWidth <= 640 ? 300 : 500} // Responsive width
//             height={window.innerWidth <= 640 ? 400 : 500} // Responsive height
//             showCover={true}
//             useMouseEvents={false}
//             className="mt-5  md:mt-[100px] lg:mt-[100px]  mx-auto shadow-lg rounded-lg"
//           >
//             <div>
//               <BookCoverPage imageUrl={story.coverImage} />
//             </div>
//             {story.output.story.chapters.map((chapter, index) => (
//               <div key={index} className="bg-white p-5 md:p-10 border shadow-inner">
//                 <StoryPages storyChapter={chapter} />
//               </div>
//             ))}
//             <div>
//               <LastPage />
//             </div>
//           </HTMLFlipBook>
//         </div>
//       ) : (
//         <p>Loading story...</p>
//       )}
//     </div>
//   );
// };

// export default Page;


