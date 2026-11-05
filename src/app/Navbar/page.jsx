'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Main Navbar */}
      <nav className="w-full px-6 py-3 flex justify-between items-center border-b border-white/20 bg-slate-950/30 backdrop-blur-md fixed top-0 left-0 z-50">
        {/* Brand Logo */}
        <div>
          <Link
            href="/"
            className="text-yellow-500 font-bold tracking-[0.2em] text-lg hover:opacity-80 transition-opacity"
          >
            LWM
          </Link>
        </div>

        {/* Desktop Nav Links */}
        <div className="font-tech-body hidden md:flex flex-row space-x-6 items-center text-sm font-medium text-slate-300">
          <Link
            href="/"
            className="hover:text-yellow-500 hover:underline hover:underline-offset-4 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/Interest"
            className="hover:text-yellow-500 hover:underline hover:underline-offset-4 transition-colors"
          >
            Drop Your Interest
          </Link>

          <Link
            href="/PopularSkill"
            className="hover:text-yellow-500 hover:underline hover:underline-offset-4 transition-colors"
          >
            Popular Skills
          </Link>

          <a
            href="https://whatsapp.com/channel/0029VbDszcx5q08f8PQPL80Q"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-lg px-4 py-2 transition-colors shadow-sm"
          >
            Join Channel
          </a>
        </div>

        {/* Mobile Menu Icon Button */}
        <div className="md:hidden flex">
          <Menu
            onClick={() => setIsOpen(true)}
            className="text-yellow-500 cursor-pointer w-6 h-6"
          />
        </div>
      </nav>

      {isOpen && (
        <div className="inset-0 fixed flex justify-center items-start z-50 md:hidden">
          <div
            className="fixed inset-0 bg-transparent backdrop-blur-2xl "
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer Box */}
          <div className="relative pb-10 rounded-b-2xl z-50 w-full bg-white/20 border-b border-slate-800 p-6 flex flex-col space-y-6 shadow-2xl">
            {/* Top Bar inside Drawer */}
            <div className="flex justify-between items-center">
              <span className="text-yellow-500 font-bold tracking-[0.2em] text-lg">
                LWM
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col space-y-4 pt-2 font-tech-body text-slate-300 text-base">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className=" hover:text-yellow-500 transition-colors py-2  text-center"
              >
                Home
              </Link>

              <Link
                href="/Interest"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors py-2 text-center"
              >
                Drop Your Interest
              </Link>

              <Link
                href="/PopularSkill"
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors py-2  text-center"
              >
                Popular Skills
              </Link>

              <a
                href="https://whatsapp.com/channel/0029VbDszcx5q08f8PQPL80Q"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold rounded-xl py-3 text-center transition-colors shadow-sm mt-2"
              >
                Join Channel
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;