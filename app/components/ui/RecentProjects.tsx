"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1
  className="heading text-center text-3xl md:text-5xl font-extrabold mb-60 bg-gradient-to-r from-[#7c6ca8] via-[#a18ad6] to-[#c3a6f7] bg-clip-text text-transparent drop-shadow-lg tracking-tight"
  style={{
    letterSpacing: "0.04em",
    textShadow: "0 2px 16px #1a133a, 0 1px 2px #7c6ca8",
    zIndex: 10,
    position: "relative"
  }}
>
  A small selection of{" "}
  <span className="text-purple font-black">my projects</span>
</h1>
      <div className="flex flex-wrap items-center justify-center p-3 gap-30 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[25rem] h-[15rem] flex items-center justify-center sm:w-80 w-[80vw]"
            key={item.id}
          >
            <PinContainer
              title="/satriaridho.vercel.app"
              href="https://www.instagram.com/peachydhoo_/"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0"
                />
              </div>

              <h1 className="font-bold lg:text-xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-l lg:font-normal font-light text-sm line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-7 lg:h-7 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-l md:text-xs text-sm text-purple">
                    <a target="_blank" href={item.link}>Check Live Site</a>
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
