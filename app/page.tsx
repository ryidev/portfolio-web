"use client";

import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import Ribbons from "./components/Ribbons/Ribbons";
import Grid from "./components/ui/Grid";
import RecentProjects from "./components/ui/RecentProjects";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop";
import Experiences from "./section/Experiences";
import CircularGallery from "./components/CircularGallery/CircularGallery";
import {ContactSection} from "./components/ContactSection";
import {Footer} from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden text-white relative">
      {/* --- Ribbons / efek tambahan --- */}
      <Ribbons
        baseThickness={30}
        colors={["#6c00ff", "#8a2be2"]}
        speedMultiplier={1}
        maxAge={500}
        enableFade={true}
        enableShaderEffect={true}
      />


      {/* --- Section Utama --- */}
      <div className="w-full min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32">
        <div className="container mx-auto relative z-10 grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8">
          {/* Left Section */}
          <div className="col-span-1 md:col-span-6 flex items-center justify-center md:justify-start">
            <div className="flex flex-col gap-6 w-full max-w-xl items-center md:items-start text-center md:text-left">
              <div className="flex items-center gap-2 w-full justify-center md:justify-start pt-10">
                <RotatingText
                  texts={["Web Development", "UI/UX", "Web Programming"]}
                  mainClassName="px-4 py-1 bg-[#410BAA] shadow-[0_0_20px_#410BAA] text-sm sm:text-base md:text-lg font-bold inline-flex justify-center items-center rounded-full text-white transition-all w-full md:w-auto"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <div className="flex flex-col items-center md:items-start w-full">
                <SplitText
                  text="Satria Ridho Eksobar"
                  className="text-4xl sm:text-5xl font-extrabold drop-shadow-[0_0_15px_#410BAA] w-start"
                  delay={50}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                />
                <SplitText
                  text="Full Stack Developer"
                  className="text-2xl sm:text-4xl font-semibold text-[#5e507a] drop-shadow-[0_0_15px_#410BAA] w-start"
                  delay={125}
                  duration={0.6}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 40 }}
                  to={{ opacity: 1, y: 0 }}
                />
              </div>

              <BlurText
                text="Creative front-end developer with more than +2 years of experience in enterprise companies and startups. Proficient in HTML, CSS, JavaScript, Laravel, Next JS. Passionate about UI/UX."
                delay={100}
                animateBy="words"
                direction="top"
                className="text-base sm:text-lg text-gray-300 max-w-xl w-full"
              />

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start flex-wrap gap-4 mt-2 w-full">
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] bg-[#410BAA] transition-shadow duration-300 w-full sm:w-auto">
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-80 px-6 py-1 text-sm font-medium text-white">
                    <a href="https://wa.me/6281274588486">Contact Me</a>
                  </span>
                </button>

                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] bg-[#410BAA] transition-shadow duration-300 w-full sm:w-auto">
                  <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black bg-opacity-80 px-6 py-1 text-sm font-medium text-white">
                    Resume
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 md:col-span-6 relative flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
            <div className="w-full h-full flex items-center justify-center">
              <Lanyard position={[3, 3, 9]} gravity={[1, -40, 0]} />
            </div>
          </div>
        </div>
        
      </div>
      
      <div className="relative min-h-screen z-10 overflow-hidden px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32">
        <Grid/>
      </div>

      <div className="container relative mx-auto min-h-screen z-10 overflow-hidden px-4 sm:px-6 md:px-10 lg:px-24 xl:px-32">
        <RecentProjects/>
      </div>


      {/* Responsive CurvedLoop Section */}
      <div className="container relative mx-auto min-h-screen mt-[-350px] px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 w-full">
        <CurvedLoop 
          marqueeText="Certificate ✦ Career ✦ And ✦ Learning ✦ Path ✦"
          speed={3}
          curveAmount={-150}
          direction="left"
          interactive={false}
          className="custom-text-style w-full"
        />
      </div>

      {/* Responsive Experiences Section */}
      <div className="container relative mx-auto min-h-screen z-10 overflow-hidden px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 mt-[-350px] w-full">
        <Experiences/>
      </div>

      {/* Responsive CircularGallery Section */}
      <div className="container min-h-auto mx-auto" style={{ height: '600px', position: 'relative' }}>
        <CircularGallery bend={-1} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
      </div>

      <div className="container relative mx-auto min-h-screen px-2 sm:px-4 md:px-8 lg:px-16 xl:px-24 w-full">
        <ContactSection/>
      </div>

<Footer/>

    </div>
  );
}
