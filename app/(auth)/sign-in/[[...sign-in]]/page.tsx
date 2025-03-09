
// // app/sign-in/[[...sign-in]]/page.tsx

// // import AuthTabs from "@/components/AuthTabs"; // Path to your AuthTabs component

// // export default function SignInPage() {
// //   return (
// //     <div className="flex justify-center items-center min-h-screen">
// //       <AuthTabs />
// //     </div>
// //   );
// // }



import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (<div className="flex justify-center items-center min-h-screen bg-red-50"> <SignIn /> </div>)
  
}
