import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function Experience({}: Props) {
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
        EXPERIENCE
      </h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-30 snap-x snap-mandatory mt-40 scrollbar scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a]">
        <ExperienceCard
          jobTitle="Manager"
          company="Demz Analytics"
          role="Product Manager"
          startDate="Feb 2020"
          endDate="May 2022"
          bulletPoints={["Managed the end-to-end building of the software that processes close to 70% of the device tracking system.", "Developed a B2B and device configuration module that led to the onboarding of 5,000 thousand devices in February 2022.", "Assisted with the development and launch of versions 1.1 to 1.5 of the Speed Manager system."]}
          companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722640708/hekxbmhfexqxtyvtxl8z.png"
          logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000","https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000","https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000","https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000","https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"]}
        />
        <ExperienceCard
           jobTitle="Manager"
           company="storri.AI"
           role="Product Manager"
           startDate="June 2022"
           endDate="December 2022"
           bulletPoints={["Worked with the Data, Business, Design, and Engineering teams to convert words into videos using generative AI.", "Worked with key stakeholders to develop a model that helped us reach 1200 journalists(active users) within 4 months."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722640958/yvoaipdujj1zu3cauh5o.png"
           logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=CIAZz2CYc6Kc&format=png&color=000000","https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000","https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000","https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000","https://img.icons8.com/?size=100&id=34886&format=png&color=000000","https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000"]}
        />
        <ExperienceCard 
           jobTitle="Manager"
           company="Arca"
           role="Senior Product Manager"
           startDate="May 2022"
           endDate="October 2023"
           bulletPoints={["Managed the back office for the acquiring and payment processing.", "Implemented flexible settlement features; A feature that enabled Merchants receive payments same day, hourly and withing 6 hours,taking them outside the industry standard for T+1 payments leading to a 20% growth in 5 months.", "Implemented design solutions and conducted root cause analysis on component failures, contributing to system stability and reliability."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722641040/tdzyy1qbatczbg5h52wh.jpg"
           logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000","https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000"]}
        />
         <ExperienceCard 
           jobTitle="Associate Engineer"
           company="Decagon"
           role="Backend Engineer"
           startDate="October 2020"
           endDate="March 2022"
           bulletPoints={["Developed full-stack applications using Node, Express on the backend, and React on the frontend, delivering highly interactive and user-friendly experiences.", "Maintained client information and accounts while ensuring confidentiality, upholding professional ethics and standards.", "Built high-quality applications using React, JavaScript, and Nodejs and designed testable code and applications using the latest technical features."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1722641177/vu4ehfndgqulupaztwdv.png"
           logos={["https://img.icons8.com/?size=100&id=54087&format=png&color=000000","https://img.icons8.com/?size=100&id=asWSSTBrDlTW&format=png&color=000000","https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000","https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000","https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000","https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000","https://img.icons8.com/?size=100&id=oROcPah5ues6&format=png&color=000000","https://img.icons8.com/?size=100&id=9ESZMOeUioJS&format=png&color=000000","https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000"]}
        />
      </div>
    </motion.div>
  );
}

export default Experience;
