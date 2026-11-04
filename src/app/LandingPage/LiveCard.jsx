"use client";

import React, { useState, useEffect } from "react";

const VisualConsole = () => {
  const [activeStep, setActiveStep] = useState(0);

  const roadmapSteps = [
    { title: "CORE FOUNDATIONS", status: "INTILAIZED", tech: "Guidance About Career Path" },
    { title: "INTEREST BASED SURVEY", status: "PROCESSING", tech: "Taking Interest Based Surveys" },
    { title: "PDF'S", status: "PENDING", tech: "PDF'S , Personalized Guidance, Custom Roadmaps" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % roadmapSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" w-full max-w-xl rotate-x-12 -rotate-y-15 font-mono relative group hover:rotate-x-0 hover:rotate-y-0 hover:scale-101 duration-500">
      {/* Decorative Outer Glow Effect */}
      <div className="absolute -inset-1.5 bg-linear-to-r from-yellow-500/20 to-amber-500/0 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000"></div>
      
      {/* Main Terminal Box */}
      <div className="relative bg-black/80 border border-yellow-500/60 rounded-xl overflow-hidden shadow-2xl backdrop-blur-xl">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-900">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/40"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/40"></div>
          </div>
          <div className="text-[10px] text-white/50 tracking-widest font-black uppercase">
            LWM
          </div>
          <div className="w-4"></div>
        </div>

        {/* Terminal Screen Body */}
        <div className="p-6 space-y-6 text-sm">
          {/* Status Metrics */}
          <div className="grid grid-cols-2 gap-4 pb-4 border-b border-slate-900 text-xs text-slate-400">
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px] tracking-wider">System Status</span>
              <span className="text-yellow-400 flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span> INITIALIZED
              </span>
            </div>
            <div>
              <span className="text-slate-400 block uppercase font-bold text-[10px] tracking-wider">Resource Delivery</span>
              <span className="text-yellow-500 font-bold">100% READY [.PDF's]</span>
            </div>
          </div>

          {/* Animated Roadmap Engine */}
          <div className="space-y-4">
            {roadmapSteps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <div
                  key={index}
                  className={`p-3.5 rounded-lg border transition-all duration-500 ${
                    isActive
                      ? "bg-yellow-500/10 border-yellow-500/50 shadow-[inset_0_1px_12px_rgba(234,179,8,0.05)]"
                      : "bg-slate-950/40 border-slate-900 opacity-40"
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`font-black tracking-wide text-xs ${isActive ? "text-yellow-400" : "text-slate-400"}`}>
                      {step.title}
                    </span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-black tracking-wider ${
                      step.status === "COMPLETED" ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" :
                      step.status === "PROCESSING" ? "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 animate-pulse" :
                      "bg-slate-900 text-slate-500 border border-slate-800"
                    }`}>
                      {step.status}
                    </span>
                  </div>
                  <p className={`text-xs ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                    {step.tech}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Command Prompt Line */}
          
        </div>
      </div>
    </div>
  );
};

export default VisualConsole;