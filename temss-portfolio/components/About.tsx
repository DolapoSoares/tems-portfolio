import React from "react";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
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
        x: 0
      }}
      className="flex flex-col relative text-center h-screen md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.3,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://res.cloudinary.com/soares04/image/upload/v1724266097/hzpfwwmlncpp5jyqlem2.png"
        className="-mb-20 md:mb-0 w-56 h-56 flex-shrink-0 object-cover rounded-full md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">Welcome to my professional space.</h4>
        <p className="text-base">I am Joyce Temilolu Daramola, also known as Temilolu TTJ, a passionate and result-oriented Product Manager with a wealth of experience in IoT, SaaS, and Fintech. My journey spans startups and established companies, where I have honed my skills in implementing strategic marketing initiatives, driving growth, and maximizing revenue. My deep understanding of product management, coupled with a customer-first mindset and a positive, solution-driven approach, allows me to deliver high-quality services and achieve significant results consistently.</p>
      </div>
    </motion.div>
  );
}

export default About;
