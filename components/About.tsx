"use client";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";
import Experience from "./Experience";
import TechStack from "./Techstack";

export default function About() {
  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:py-24 overflow-hidden"
    >
      {/* Top Fade */}
      {/* <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent pointer-events-none z-10" /> */}

      <div className="relative z-20 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-8">
          {/* Title + Line */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="flex items-center gap-4 sm:gap-6 w-full lg:min-w-[250px]"
          >
            <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
              About
            </h2>

            {/* Line */}
            <div className="h-px bg-white flex-1 sm:max-w-none" />
          </motion.div>

          {/* Paragraph */}
          <div className="space-y-5 sm:space-y-6 max-w-3xl">
            <motion.div
              variants={staggerContainer(0.12, 0.15)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="font-nunito space-y-5 sm:space-y-6"
            >
              {[
                "I'm a Full-Stack Developer with over 4 years of experience building production-ready web applications across fintech and SaaS industries.",
                "I specialize in Laravel, Express.js, GraphQL, and modern frontend frameworks like Next.js and Vue. My experience spans API architecture, payment integrations, authentication systems, and scalable backend design.",
                "I've worked with both Nigerian and international teams, contributing to applications used by real customers globally.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  variants={staggerItem}
                  className="text-white leading-relaxed text-sm sm:text-[0.95rem]"
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
            <Experience />
            <TechStack />
          </div>
        </div>
      </div>
    </section>
  );
}
