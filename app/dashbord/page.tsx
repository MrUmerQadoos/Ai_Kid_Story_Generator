"use client";

import { useState, useEffect } from "react";
import DashbordHeader from "./_components/DashbordHeader";
import UserStoryList from "./_components/UserStoryList";

const Page = () => {
  const [loading, setLoading] = useState(true);

  // Simulate a loading time (remove this in a real app)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading simulation

    return () => clearTimeout(timer);
  }, []);

  return (
    <section> {/* Changed overflow-hidden to overflow-auto */}
      <div>
        <div className="container">
          <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-10 pt-48 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
            <div className="relative z-4 mx-auto flex w-full rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
              <DashbordHeader />
            </div>

            <div className="pricing-bg">
              <img
                src="/images/bg-outlines.svg"
                width={960}
                height={380}
                alt="outline"
                className="relative z-2"
              />
              <img
                src="/images/bg-outlines-fill.png"
                width={960}
                height={380}
                alt="outline"
                className="absolute inset-0 opacity-5 mix-blend-soft-light"
              />
            </div>
          </div>

          {/* Skeleton Loader or Actual Content */}
          <div className="min-h-screen"> {/* Set minimum height to ensure the page is scrollable */}
            {loading ? (
              <SkeletonLoader />
            ) : (
              <UserStoryList />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {/* Skeleton Cards */}
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="bg-gray-300 animate-pulse h-64 w-full rounded-lg"
        >
          <div className="h-40 bg-gray-400 rounded-t-lg"></div>
          <div className="p-4">
            <div className="h-4 bg-gray-400 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-400 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;


// "use client";

// import DashbordHeader from "./_components/DashbordHeader";
// import UserStoryList from "./_components/UserStoryList";

// const Page = () => {
//   return (
//     <section className="overflow-hidden h-screen">
//       <div>
//         <div className="container">
//           <div className="max-w-960 pricing-head_before relative mx-auto border-l border-r border-s2 bg-s1/50 pb-10 pt-48 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
//             <div className="relative z-4 mx-auto flex w-full rounded-3xl border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
//               <DashbordHeader />
//             </div>

//             <div className="pricing-bg">
//               <img
//                 src="/images/bg-outlines.svg"
//                 width={960}
//                 height={380}
//                 alt="outline"
//                 className="relative z-2"
//               />
//               <img
//                 src="/images/bg-outlines-fill.png"
//                 width={960}
//                 height={380}
//                 alt="outline"
//                 className="absolute inset-0 opacity-5 mix-blend-soft-light"
//               />
//             </div>
//           </div>

//           {/* Flexbox layout to display UserStoryList with red background */}
//           <div className="">
//             <UserStoryList />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Page;





