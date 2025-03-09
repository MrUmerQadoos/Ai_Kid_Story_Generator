
import HeroSection from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";

import Faq from "@/components/Faq";
import Testimonials from "@/components/Testimonials";
import Download from "@/components/Download";
import Footer from "@/components/Footer";


export default function Home() {
  return (
<div className=" ">


  <HeroSection/>
  <Features />
  <Pricing />
  <Faq />
      <Testimonials />
       <Download />
      <Footer />
  
    </div>
  );
}
