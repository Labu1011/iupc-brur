"use client";

import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import Marquee from "@/components/sections/marquee";
import Nav from "@/components/sections/nav";
import Reviews from "@/components/sections/reviews";
import Services from "@/components/sections/services";
import Showcases from "@/components/sections/showcases";

export default function Home() {
  return (
    <main className="relative flex w-full overflow-hidden min-h-screen bg-black flex-col items-center justify-between">
      <div
        style={{
          backgroundPosition: "50% 0",
          backgroundSize: "auto",
          alignItems: "end",
        }}
        className="-mt-[111px] flex flex-col align-end bg-[url('/bg1.svg')] bg-repeat-x  absolute w-[100vw] h-[100vh]"
      ></div>
      <Nav />
      <Hero />
      <Marquee />
      <Services />
      <Showcases />
      <About />
      <Reviews />
      <Footer />
      <Contact />
    </main>
  );
}
