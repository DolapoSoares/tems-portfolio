import React from 'react'
import { motion } from "framer-motion";


type Props = {}

function Skills({}: Props) {
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
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
      
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl my-auto'>Tools</h3>
        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm my-auto'>Hover over screen for proficency level</h3>

        <div className='flex grid-cols-5 gap-6 justify-around'>
          <div className='top-36 uppercase tracking-[3px] text-gray-500 text-sm '>
            <h3 className='text-lg font-bold my-4 '>Skills/ Proficiency</h3>
            <ul>
              <ul>
                <li >Critical Thinking</li>
                <li >Strategic Thinking</li>
                <li >Agile Development</li>
                <li >Product Testing</li>
                <li >Market Place Intelligence</li>
                <li >Product/People Management</li>
                <li >Scrum Product Owner</li>
                <li >User Research</li>
              </ul>
            </ul>
          </div>
          <div className='top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            <h3 className='text-lg font-bold my-4'>Tools</h3>
            <ul>
              <ul>
                <li >Google Suite</li>
                <li >Microsoft 365</li>
                <li >Jira/Confluence</li>
                <li >Lucid</li>
                <li >Balsamic</li>
                <li >Adobe Creative Cloud</li>
              </ul>
            </ul>
          </div>
        </div>
       
    </motion.div>
  )
}

export default Skills