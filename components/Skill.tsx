"use client"
import React from 'react'
import { skillsData } from "@/lib/data"
import { useSectionInView } from '@/lib/hooks';
import SectionHeading from './section-heading';

import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

const Skills = () => {
    const {ref} = useSectionInView("Skills")
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
                <motion.li
                    key={index}
                    className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    variants={fadeInAnimationVariants}
                    custom={index}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.1, background: "#ffffff33" }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    data-aos="fade-up"
                    data-aos-delay={`${0.05 * index}s`}
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                >
                    {skill}
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default Skills