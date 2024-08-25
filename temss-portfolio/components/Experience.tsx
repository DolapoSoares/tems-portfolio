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
          companyLogo="https://res.cloudinary.com/soares04/image/upload/v1724439411/abjq98f6hyxbsvs1gq3h.png"
          logos={[""]}
        />
        <ExperienceCard
           jobTitle="Manager"
           company="storri.AI"
           role="Product Manager"
           startDate="June 2022"
           endDate="December 2022"
           bulletPoints={["Worked with the Data, Business, Design, and Engineering teams to convert words into videos using generative AI.", "Worked with key stakeholders to develop a model that helped us reach 1200 journalists(active users) within 4 months."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1724598196/cjjwd3bqvtmzs6uii8uu.png"
           logos={[""]}
        />
        <ExperienceCard 
           jobTitle="Manager"
           company="Arca Payments"
           role="Senior Product Manager"
           startDate="May 2022"
           endDate="October 2023"
           bulletPoints={["Implemented flexible settlement features; A feature that enabled Merchants receive payments same day, hourly and withing 6 hours,taking them outside the industry standard for T+1 payments leading to a 20% growth in 5 months.", "Interphase with different banks to use their APIs for our payments.","Developed Arca's Funds Disbursement Platform end-to-end facilitating single and bulk payments using the NIBSS Multipay API","Facilitated the development or Arca's collection platform, Arca collect with deployment to 1 banks for bills payment."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1724439411/nkdo7cn25ubepthdtkrm.png"
           logos={[""]}
        />
         <ExperienceCard 
           jobTitle="Manager"
           company="Interswitch"
           role="Product Manager"
           startDate="October 2023"
           endDate="Present"
           bulletPoints={[`Delivered the completion of Paydirect Enterprise API restructuring, with a success rate featuring:
            a. Level 4 sigma processing accuracy
            b. Integration with 3 top Banks in Nigeria (FBN, GTB, Union Banks)
            c. Availability of Billers on the TSA Settlement Module facilitating the same-day settlement.`, "Maintained client information and accounts while ensuring confidentiality, upholding professional ethics and standards.", "Built high-quality applications using React, JavaScript, and Nodejs and designed testable code and applications using the latest technical features."]}
           companyLogo="https://res.cloudinary.com/soares04/image/upload/v1724439411/hqspxjxe640it6sehvqc.png"
           logos={[""]}
        />
      </div>
    </motion.div>
  );
}

export default Experience;
