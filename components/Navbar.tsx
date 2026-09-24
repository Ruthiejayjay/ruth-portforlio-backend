"use client";
import { useState } from "react";
import Link from "next/link";
import { navLinks } from "../data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2E2E2E03] backdrop-blur-3xl">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 md:px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-1.5">
          <div className="text-2xl">
            <span className="text-white font-bold">&lt;</span>
            <span className="text-[#9DFFB8] font-bold">/</span>
            <span className="text-white font-bold">&gt;</span>
          </div>
          <span
            className="text-lg md:text-2xl font-bold tracking-widest"
            style={{ fontFamily: "Impact, sans-serif", fontWeight: 400 }}
          >
            RUTH
          </span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-lg text-white hover:text-[#9DFFB8] transition-colors duration-200"
                style={{ fontFamily: "DM Mono, monospace", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5"
        >
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-white transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown (NOW positioned under navbar) */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-6 px-5 py-6 bg-[#0f0f0f]/95 backdrop-blur-xl border-b border-[#222]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-lg text-white hover:text-[#9DFFB8] transition-colors duration-200"
                style={{ fontFamily: "DM Mono, monospace", fontWeight: 500 }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}