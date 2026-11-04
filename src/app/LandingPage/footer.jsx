import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/30 text-white py-12 px-6 sm:px-12 overflow-x-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Logo */}
        <div className="flex flex-col items-center md:items-start">
          <Link
            href="/"
            className="text-yellow-500 font-bold tracking-[0.2em] text-lg hover:opacity-80 transition-opacity"
          >
            LWM
          </Link>
          <p className="text-slate-400 text-sm mt-2 text-center md:text-left max-w-xs">
            Master skills that actually matter. No fluff, absolute clarity.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-10 text-sm text-slate-300 font-medium">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="hover:text-yellow-500 transition-colors">
              Home
            </Link>
            <Link
              href="/Interest"
              className="hover:text-yellow-500 transition-colors"
            >
              Drop Your Interest
            </Link>
          </div>
          <div className="flex flex-col space-y-4">
            <Link href="#" className="hover:text-yellow-500 transition-colors">
              Popular Skills
            </Link>
            <a
              href="https://whatsapp.com/channel/0029VbDszcx5q08f8PQPL80Q"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition-colors"
            >
              Join Channel
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-slate-900 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} LWM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
