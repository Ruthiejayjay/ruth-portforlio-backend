"use client";
import { motion } from "framer-motion";
import { techStack } from "@/data";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

export default function TechStack() {
  return (
    <section id="tech" className="relative">
      <div className="max-w-6xl mx-auto space-y-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="font-mono text-[#9DFFB8] text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-4"
        >
          My Tech Stack
        </motion.h2>
        <hr className="h-px bg-white flex-1" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-[#161616] border border-[#2a2a2a] rounded-xl overflow-hidden max-w-md"
        >
          {/* Terminal dots */}
          <div className="flex gap-1.5 px-4 py-3 border-b border-[#222]">
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <div
                key={color}
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* Code lines */}
          <motion.div
            variants={staggerContainer(0.07, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="px-6 py-5"
          >
            {techStack.map((tech) => (
              <motion.div
                key={tech.line}
                variants={staggerItem}
                className="flex gap-6 font-mono text-sm leading-loose"
              >
                <span className="text-[#555] select-none w-6 text-right shrink-0">
                  {String(tech.line).padStart(2, "0")}.
                </span>
                <span style={{ color: tech.color ?? "#888888" }}>
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
