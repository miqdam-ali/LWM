import React from "react";
import { FileText, Briefcase, Route, BookOpen } from "lucide-react";

const Announcement = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 sm:p-12 overflow-x-hidden">
      {/* Header Section */}
      <section className="flex justify-center text-center">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-yellow-500 tracking-[0.2em] uppercase">
            UPCOMING ADVANTAGES FOR YOU
          </h1>
          <p className="text-slate-400 text-sm mt-2 tracking-wide">
            Designed to accelerate your execution without the noise.
          </p>
        </div>
      </section>

      {/* Cards Grid with Perspective for 3D tilted icons */}
      <section className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-12 ">
        {/* Card 1: PDFs */}
        <div className="w-full bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 rounded-2xl p-6 relative backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group shadow-lg overflow-hidden">
          <div>
            <h2 className="text-yellow-500 font-bold text-lg sm:text-xl tracking-wide mb-3">
              PDF's Accessibility
            </h2>
            <p className="text-slate-300 text-sm sm:text-base tracking-wider leading-relaxed pr-16 font-tech-body">
              We make sure to provide PDFs, cheat sheets, and starter guidelines
              with zero fluff.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="font-tech-body bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-4 py-2 rounded-xl font-semibold">
              Coming Soon
            </span>
          </div>

          {/* 3D Tilted Icon */}
          <span className="absolute bottom-4 right-4 transform-gpu rotate-x-12 -rotate-y-20 group-hover:scale-110 transition-transform duration-300 opacity-80">
            <FileText size={64} className="text-yellow-500" />
          </span>
        </div>

        {/* Card 2: Tools */}
        <div className="w-full bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 rounded-2xl p-6 relative backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group shadow-lg overflow-hidden">
          <div>
            <h2 className="text-yellow-500 font-bold text-lg sm:text-xl tracking-wide mb-3">
              Tools Accessibility
            </h2>
            <p className="text-slate-300 text-sm sm:text-base tracking-wider leading-relaxed pr-16 font-tech-body">
              First 100 subscribers will get free subscription for upcoming
              future tools by us.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="font-tech-body bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-4 py-2 rounded-xl font-semibold">
              Coming Soon
            </span>
          </div>

          {/* 3D Tilted Icon */}
          <span className="absolute bottom-4 right-4 transform-gpu rotate-x-12 -rotate-y-20 group-hover:scale-110 transition-transform duration-300 opacity-80">
            <Briefcase size={64} className="text-yellow-500" />
          </span>
        </div>

        {/* Card 3: Custom Guide */}
        <div className="w-full bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 rounded-2xl p-6 relative backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group shadow-lg overflow-hidden">
          <div>
            <h2 className="text-yellow-500 font-bold text-lg sm:text-xl tracking-wide mb-3">
              Custom Guide
            </h2>
            <p className="text-slate-300 text-sm sm:text-base tracking-wider leading-relaxed pr-16 font-tech-body">
              You will get guidelines and roadmaps according to your specific
              interest or niche.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="font-tech-body bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-4 py-2 rounded-xl font-semibold">
              Coming Soon
            </span>
          </div>

          {/* 3D Tilted Icon */}
          <span className="absolute bottom-4 right-4 transform-gpu rotate-x-12 -rotate-y-20 group-hover:scale-110 transition-transform duration-300 opacity-80">
            <Route size={64} className="text-yellow-500" />
          </span>
        </div>

        {/* Card 4: Live Skill Development */}
        <div className="w-full bg-slate-900/60 border border-slate-800 hover:border-yellow-500/40 rounded-2xl p-6 relative backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group shadow-lg overflow-hidden">
          <div>
            <h2 className="text-yellow-500 font-bold text-lg sm:text-xl tracking-wide mb-3">
              Live Skill Development
            </h2>
            <p className="text-slate-300 text-sm sm:text-base tracking-wider leading-relaxed pr-16 font-tech-body">
              We will provide live session skill development according to your
              specific niche or interest.
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <span className="font-tech-body bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs px-4 py-2 rounded-xl font-semibold">
              Coming Soon
            </span>
          </div>

          {/* 3D Tilted Icon */}
          <span className="absolute bottom-4 right-4 transform-gpu rotate-x-12 -rotate-y-20 group-hover:scale-110 transition-transform duration-300 opacity-80">
            <BookOpen size={64} className="text-yellow-500" />
          </span>
        </div>
      </section>

      {/* Footer Note */}
      <div className="w-full flex justify-center mt-12">
        <p className="text-slate-500 text-xs sm:text-sm tracking-widest uppercase text-center">
          * These all include Freemium and Premium tiers both
        </p>
      </div>
    </main>
  );
};

export default Announcement;
