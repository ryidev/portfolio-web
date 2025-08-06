import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="p-4 rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.2)] border border-white/[0.08] bg-white/[0.01] flex flex-wrap justify-between items-center relative overflow-hidden mt-[-50]">
      <p className="text-sm text-white/80 z-10">
        &copy; {new Date().getFullYear()} RyiDev.co. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-primary transition-colors z-10 shadow"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};