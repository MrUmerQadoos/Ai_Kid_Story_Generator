
import { Button } from '@nextui-org/react';
import React from 'react';

const LastPage = () => {
  return (
    <div className="h-full  justify-center bg-gradient-to-r from-[#b388ff] to-[#ffcccb] p-10">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">End Of Story</h2>
        <p className="text-center text-lg text-gray-600 mb-6">
          Thank you for reading! Share the story with your friends and family.
        </p>
        <div className="flex items-center justify-center">
          <Button 
            className="rounded-full bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold py-3 px-8 shadow-md transition-transform transform hover:scale-105"
            
          >
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LastPage;


// import { Button } from '@nextui-org/react';
// import React from 'react';

// const LastPage = () => {
//   return (
//     <div className='bg-primary p-10 h-full'>
//       <h2 className='text-center text-2xl text-white'>End Of Story</h2>
//       <div className='flex items-center justify-center'>
//         <Button>Share</Button>
//       </div>
//     </div>
//   );
// };

// export default LastPage;
