
"use client";

import { db } from '@/config/db';
import { Users } from '@/config/schema';
import { useUser } from '@clerk/nextjs';
import { NextUIProvider } from '@nextui-org/react';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserDetailContext } from './_context/UserDetailContext';

// Define the type for UserDetails
type UserDetails = {
  userEmail: string;
  userImage: string;
  userName: string;
  credit: number;
};

function Provider({ children }: { children: React.ReactNode }) {
  const [userDetail, setUserDetail] = useState<UserDetails | null>(null);
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      saveNewUserIfNotExist();
    }
  }, [user]);

  const saveNewUserIfNotExist = async () => {
    // Check if user already exists in the database
    const userResp = await db
      .select()
      .from(Users)
      .where(eq(Users.userEmail, user?.primaryEmailAddress?.emailAddress ?? ''));
    
    console.log('User Response:', userResp);

    if (!userResp[0]) {
      // If user does not exist, create a new user
      const result = await db
        .insert(Users)
        .values({
          userEmail: user?.primaryEmailAddress?.emailAddress,
          userImage: user?.imageUrl,
          userName: user?.fullName,
        })
        .returning({
          userEmail: Users.userEmail,
          userName: Users.userName,
          userImage: Users.userImage,
          credit: Users.credit,
        });
      
      console.log('New User Created:', result[0]);
      // @ts-expect-error: result[0] contains fields that may be null, and we're handling them elsewhere.
      setUserDetail(result[0]);
    } else {
      // If user exists, set the user details
      console.log('Existing User:', userResp[0]);
      // @ts-expect-error: userEmail and other fields may be null, but we are handling that case elsewhere.
      setUserDetail(userResp[0]); 
    }
  };

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
    <NextUIProvider>
      {children}
      <ToastContainer />
    </NextUIProvider>
    </UserDetailContext.Provider >
  );
}

export default Provider;













// "use client"
// import { db } from '@/config/db';
// import { Users } from '@/config/schema';
// import { useUser } from '@clerk/nextjs';
// import { NextUIProvider } from '@nextui-org/react';
// import { eq } from 'drizzle-orm';
// import React, { useEffect, useState } from 'react'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function Provider({

//     children
//   }: {
//     children: React.ReactNode;
//   }) {


//     const [userDetail , setUserDetail] = useState<any>()
//     const {user} = useUser()

//     useEffect(()=>{
// user&&saveNewUserIfNotExist()
//     },[user])

//     const saveNewUserIfNotExist=async()=>{
//       // check if already exist 
// const userResp= await db.select().from(Users)
//  .where(eq(Users.userEmail,user?.primaryEmailAddress?.emailAddress??''))
//  console.log(userResp)
//       // if not create new 

//       if (!userResp[0]) {
//         const result = await db.insert(Users).values({
//           userEmail: user?.primaryEmailAddress?.emailAddress,
//           userImage: user?.imageUrl,
//           userName: user?.fullName
//         }).returning(
//           {
//             userEmail:Users.userEmail,
//             userName:Users.userName,
//             userImage:Users.userImage,
//             credit:Users.credit
//           }
//         )
      
//         setUserDetail(result[0])
//       } 

//       else{
//         setUserDetail(userResp[0])
//       }
//     }

//   return (
//     <NextUIProvider>{children}
//     <ToastContainer />
//     </NextUIProvider>
//   )
// }

// export default Provider