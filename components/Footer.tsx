"use client";
import { Mail, ArrowUpRight } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Ruthiejayjay", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ruth-james-685760222/",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-8 py-6">
      <div className="max-w-6xl mx-auto flex items-start justify-between gap-8 flex-wrap">
        {/* Left */}
        <div>
          <div className="flex items-center gap-1.5 mb-3">
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

          <p className="font-nunito text-sm text-white max-w-[460px] leading-relaxed">
            Let&apos;s have a chat, there&apos;s nothing quite like talking to
            another person
          </p>

          <a
            href="https://mail.google.com/mail/?view=cm&to=ruthiejay022@gmail.com"
            target="_blank"
            className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-transparent text-black bg-white border border-[#2a2a2a] font-semibold text-sm rounded-md hover:border-green-400 transition-colors"
          >
            <Mail size={18} />
            Send a Mail
          </a>
        </div>

        {/* Right */}
        <div>
          <p className="text-2xl text-white font-mono mb-4">
            Get in Touch
            <ArrowUpRight size={30} className="inline-block" />
          </p>
          <div className="flex flex-col gap-3 ml-auto items-end">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg text-white hover:text-[#9DFFB8] transition-colors"
              >
                <Icon size={20} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white font-mono text-xs text-white">
        © {new Date().getFullYear()} Ruth James
      </div>
    </footer>
  );
}
