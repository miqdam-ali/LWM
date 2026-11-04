import React from "react";
import Link from "next/link";
import Check from "./LiveCard";
import NExtPage from "./Announcement";
import Footer from "./footer";
const page = () => {
  return (
    <>
      <main className="min-h-screen w-full hero-gradient flex md:flex-row mt-15 md:mt-0 flex-col bg-slate-950 text-white overflow-hidden ">
        {/* Left Content Column */}
        <section className="md:w-1/2 w-full flex flex-col justify-center min-h-[50vh] md:min-h-screen px-6 sm:px-12 md:px-16 py-12">
          <div className="max-w-xl space-y-6">
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-black text-yellow-500 tracking-wider uppercase leading-none">
                MASTER SKILLS THAT ACTUALLY MATTER
              </h1>
            </div>

            <div>
              <p className="font-tech-heading inline-block bg-yellow-500/10 text-yellow-400 border border-yellow-500/20 rounded-xl px-4 py-1.5 text-xs sm:text-sm tracking-wide shadow-sm backdrop-blur-sm">
                <span className="text-yellow-600 mr-1.5">❯</span> No Fluff, No
                Deadends. Accelerate Your Learning
              </p>
            </div>

            {/* Main Descriptive Text */}
            <div>
              <p className="font-tech-body text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg">
                Drop your skill interest, grab tested PDFs, and master high-tech
                stacks with absolute clarity via step-by-step roadmaps.
              </p>
            </div>

            {/* Buttons Row properly aligned inside the text block */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 pt-2">
              <Link
                href="/Interest"
                className="bg-yellow-500 hover:bg-yellow-400 transition-colors text-black px-5 py-2.5 rounded-lg font-heading text-sm font-semibold"
              >
                Drop Your Interest
              </Link>
              <a
                href="https://whatsapp.com/channel/0029VbDszcx5q08f8PQPL80Q"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-102 duration-500 border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 transition-colors px-5 py-2.5 rounded-lg font-heading text-sm font-semibold"
              >
                Join WA Channel
              </a>
            </div>
          </div>
        </section>

        {/* Right Content Column */}
        <section className="md:w-1/2 w-full border-t md:border-t-0 md:border-l border-slate-800 bg-slate-900/30 backdrop-blur-2xl flex items-center justify-center p-8 min-h-[50vh] md:min-h-screen">
          <Check />
        </section>
      </main>
      <NExtPage />
      <Footer />
    </>
  );
};

export default page;
