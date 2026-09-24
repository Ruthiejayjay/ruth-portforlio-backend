"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { fadeUp, staggerContainer, staggerItem } from "../lib/animations";
import { projects } from "../data";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-24 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex items-center gap-4 sm:gap-6 mb-12"
        >
          <h2 className="font-mono text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight">
            Selected Work
          </h2>

          <div className="h-px bg-white flex-1" />
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-0"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              variants={staggerItem}
              className={`py-10 ${
                index !== projects.length - 1 ? "border-b border-[#1f1f1f]" : ""
              }`}
            >
              <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-[#9DFFB8]">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#666] uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                  <h3 className="font-mono text-2xl sm:text-3xl text-white mb-4">
                    {project.name}
                  </h3>
                  <p className="text-sm text-[#9a9a9a] leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <ul className="space-y-3">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-[#b0b0b0]"
                      >
                        <span className="text-[#9DFFB8] mt-[3px]">▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="lg:w-64 shrink-0">
                  <p className="font-mono text-xs text-[#666] uppercase tracking-wider mb-3">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span
                        key={technology}
                        className="font-mono text-xs text-[#999] border border-[#2a2a2a] rounded-md px-3 py-1.5"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 font-mono text-sm text-[#9DFFB8] hover:opacity-70 transition-opacity"
                    >
                      View Project
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
      {/* <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-b from-transparent to-[#1C1C1C] pointer-events-none z-40" /> */}
    </section>
  );
}
