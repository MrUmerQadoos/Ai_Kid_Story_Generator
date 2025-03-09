// // app/sign-up/[[...sign-up]]/page.tsx

// // import AuthTabs from "@/components/AuthTabs"; // Path to your AuthTabs component

// // export default function SignUpPage() {
// //   return (
// //     <div className="flex justify-center items-center min-h-screen">
// //       <AuthTabs />
// //     </div>
// //   );
// // }



import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className="flex justify-center items-center min-h-screen bg-red-50"> <SignUp /> </div>
}