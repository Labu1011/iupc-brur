import CountdownSection from "@/components/sections/countdown"
import EventSchedule from "@/components/sections/eventSchedule"
import Hero from "@/components/sections/hero"
import GoogleMapEmbed from "@/components/sections/location"
import Nav from "@/components/sections/nav"
import Perks from "@/components/sections/perks"
import PrizePool from "@/components/sections/prizepool"
import RegisterForm from "@/components/sections/registerForm"

export default function Home() {
  return (
    <main className="relative flex w-full pb-12 overflow-hidden min-h-screen bg-black flex-col items-center justify-between">
      <div
        style={{
          backgroundPosition: "50% 0",
          backgroundSize: "auto",
          alignItems: "end",
        }}
        className="flex flex-col align-end bg-[url('/jigsaw.svg')] opacity-20 bg-repeat absolute w-[100vw] h-[100vh]"
      >
        <div className="mt-auto w-full h-44 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>
      <Nav />
      <Hero />
      <CountdownSection />
      <EventSchedule />
      <PrizePool />
      <Perks />
      <RegisterForm />
      <GoogleMapEmbed />
      {/* <Footer /> */}
    </main>
  )
}
