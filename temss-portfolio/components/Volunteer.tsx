import React from "react";
import { motion } from "framer-motion";
import VolunteerCard from "./VolunteerCard";

type Props = {};

function Volunteer({}: Props) {
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
      className="h-screen flex relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-40">
        VOLUNTEER
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-30 snap-x snap-mandatory mt-40 text-white scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]">
        <VolunteerCard
          company="Utiva Product School"
          role="Product Management Mentor"
          companyLogo={"https://res.cloudinary.com/soares04/image/upload/v1725286234/wzkzze97fm8dtkwzevfi.jpg"}
        />
        <VolunteerCard
          company="Web3 Ladies"
          role="Product Management Mentor"
          companyLogo={"https://res.cloudinary.com/soares04/image/upload/v1725286234/lrxfq5op1cszbrkmzrxb.png"}
        />
      </div>
    </motion.div>
  );
}

export default Volunteer;
