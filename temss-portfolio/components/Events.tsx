import React from "react";
import { motion } from "framer-motion";

type Props = {};

function Events({}: Props) {
  const projects = [
    {
      id: 0,
      imgSrc:
        "https://res.cloudinary.com/soares04/image/upload/v1725288239/l4cuo51ptfxnwj9enhxn.jpg",
    },
    {
      id: 1,
      imgSrc:
        "https://res.cloudinary.com/soares04/image/upload/v1725288239/hykdqvbusbf7iuhahrag.jpg",
    },
    {
      id: 2,
      imgSrc:
        "https://res.cloudinary.com/soares04/image/upload/v1725288239/mf4g0gxvhc3fhbjybube.jpg",
    },
    {
      id: 3,
      imgSrc:
        "https://res.cloudinary.com/soares04/image/upload/v1725288239/oqm8alhutp7g52uevkuy.jpg",
    },
    {
      id: 4,
      imgSrc:
        "https://res.cloudinary.com/soares04/image/upload/v1725288239/ayohnranzy5zpmnkqkyx.jpg",
    },
  ];
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.5,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="h-screen flex relative flex-col text-left md:flex-row max-w-full xl:px-10 min-h-screen justify-around z-0 mx-auto items-center overflow-hidden"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl mt-0">
        EVENTS
      </h3>

      <div className="relative flex w-fit overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a] ">
        {projects.map((project, i) => {
          return (
            <div
              key={i}
              className="w-screen flex flex-shrink-0 flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen xl:p-64"
            >
              <motion.img
                initial={{
                  y: -300,
                  opacity: 0,
                }}
                transition={{
                  duration: 1.2,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="w-110 h-80"
                src={project.imgSrc}
                alt=""
              />

              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-[#f7ab0a]">
                    {i + 1} - {projects.length}
                  </span>
                </h4>
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <h4 className=" text-gray-500 text2xl mt-0">Stembrige event </h4>-{" "}
        <p>
          Speaker for the Stembridge Summer Boot Camp speaking to high school
          graduates on how they can pivot to a tech space
        </p>
      </div>
      <div></div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Events;
