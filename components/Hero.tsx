"use client";
import Image from "next/image";
import { Mail } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import RuthImg from "@/assets/images/user-image.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 overflow-hidden"
    >
      {/* Noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "url('/images/hero-noise.png')",
          backgroundRepeat: "repeat",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* LEFT (TEXT) */}
        <div className="flex-1 text-center lg:text-left">
          <p className="font-nunito text-lg sm:text-xl lg:text-2xl text-white mb-4 tracking-wide">
            Hi! I am Ruth James.
          </p>

         <h1 className="font-monomaniac text-[clamp(2.2rem,6vw,5rem)] font-normal leading-[1] tracking-[-0.04em] uppercase mb-6"> Backend Engineer </h1>

          <p className="font-nunito text-sm sm:text-base text-white leading-relaxed max-w-md mx-auto lg:mx-0 mb-10">
           I build and maintain production backend systems, APIs, fintech applications, and third-party integrations. I work primarily with Laravel, Node.js, NestJS, TypeScript, MySQL, and PostgreSQL, with experience taking features from architecture through production.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center lg:items-start gap-4">
            <a
              href="#contact"
              className="font-mono inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-[#9DFFB8] text-[#1e1e1e] font-bold text-base sm:text-lg rounded-xl hover:opacity-85 transition-opacity w-full sm:w-auto"
            >
              <Mail size={20} />
              Get in Touch
            </a>

            <a
              href="https://github.com/Ruthiejayjay"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-transparent text-[#f0f0f0] border border-[#2a2a2a] font-semibold text-base sm:text-lg rounded-xl hover:border-[#555] transition-colors w-full sm:w-auto"
            >
              <FiGithub size={20} />
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT (IMAGE) */}
        <div className="w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[540px] aspect-[3/4] relative rounded-lg overflow-hidden">
          <Image
            src={RuthImg}
            alt="Ruth James — Backend Engineer"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Fade Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[180px] bg-gradient-to-b from-transparent to-[#1C1C1C] pointer-events-none z-40" />
    </section>
  );
}
