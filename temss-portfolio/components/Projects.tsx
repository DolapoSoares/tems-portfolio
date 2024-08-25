import React from "react";
import { motion } from "framer-motion"

type Props = {};

function Projects({}: Props) {
  const projects = [
    {
      id: 1,
      imgSrc: 'https://res.cloudinary.com/soares04/image/upload/v1724599773/nepbvvhonamdwbkrwkan.png',
      title: 'HitchAfrica',
      description: 'Its an app that offers Seamless On-Demand Services for Your Everyday Need: e-hailing, Food, Grocery, Delivery & Payments.',
      url: 'https://hitch.africa/'
    },
    {
      id: 1,
      imgSrc: 'https://res.cloudinary.com/soares04/image/upload/v1724601723/qcjjoozfudepi1bdkqxa.png',
      title: 'Paydirect',
      description: 'Payment collections,Monitoring & Reporting solution',
      url: 'https://www.paydirectonline.com/paydirect/'
    },
    {
      id: 2,
      imgSrc: 'https://res.cloudinary.com/soares04/image/upload/v1724602187/zxtqosh56fskmvl74uyz.png',
      title: 'Arca Pay',
      description: 'Arca offers a comprehensive suite of payment-related products and services to cater to businesses of all sizes,understand the unique requirements of each business and offer customised solutions accordingly.',
      url: 'https://arca.network/'
    },
    {
      id: 3,
      imgSrc: 'https://res.cloudinary.com/soares04/image/upload/v1686153216/rqcwrp9pcl4inlocgcn5.png',
      title: 'PennyCanny',
      description: 'PennyCanny is your go to website when you want to get latest coupons to products for different companies like Doordash,Lowe\'s, chegg, Fiverr, GRUBHUB and the likes. PenyCanny is the ultimate destination for finding the best deals and discounts on everything from fashion and home decor to food and travel. They offer a hassle-free, high-value shopping experience to online buyers and help customers save money on their everyday purchases..',
      url: 'https://pennycanny.com/'
    }
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
    className="h-screen flex relative flex-col text-left md:flex-row max-w-full xl:px-10 min-h-screen justify-evenly z-0 mx-auto items-center overflow-hidden">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text2xl mt-0">
        Projects
      </h3>

      <div className="relative flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-slate-400/20 scrollbar-thumb-[#f7ab0a] ">
        {projects.map((project, i) => {
            return (
                <div key={i} className="w-screen flex flex-shrink-0 flex-col space-y-3 items-center justify-center p-20 md:p-44 h-screen xl:p-64">
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                          }}
                          transition={{
                            duration: 1.2,
                          }}
                          whileInView={{
                            opacity: 1,
                            y:0
                          }}
                          viewport={{
                            once:true
                          }}
                    className="w-110 h-80" src={project.imgSrc} alt=""/>

                    <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#f7ab0a]">{i + 1} of {projects.length}:</span><a href={project.url} target="_blank" rel="noopener noreferrer">{project.title}</a>
                        </h4>

                        <p className="text-lg text-center md:text-left">
                            {project.description}
                        </p>
                    </div> 
                </div>
            )
        })}
      </div>

      <div className="w-full absolute top-[30%] bg-[#f7ab0a]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
