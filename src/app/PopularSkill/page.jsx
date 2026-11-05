'use client'
import React, { useState, useEffect } from "react";
import { getSkillVotes, incrementVote } from "../Database/actions/action";

const getTagStyle = (tag) => {
  switch (tag?.toLowerCase()) {
    case 'available':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';
     case 'working':
      return 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400';  
    case 'pending':
      return 'bg-orange-500/10 border-orange-500/30 text-orange-400';
    case 'will soon':
      return 'bg-purple-500/10 border-yellow-500/30 text-yellow-500';
    default:
      return 'bg-yellow-500/10 border-yellow-500/30 text-purple-400';
  }
};

const SkillCard = ({ id, title, subtitle, description, tags }) => {
  const [votes, setVotes] = useState(0);
  const [isVoting, setIsVoting] = useState(false); // <--- Loading state

  useEffect(() => {
    const fetchVotes = async () => {
      const res = await getSkillVotes(id);
      if (res.success) {
        setVotes(res.votes);
      }
    };
    fetchVotes();
  }, [id]);

  const handleVote = async () => {
    setIsVoting(true); // <--- Loading start
    // Optimistic UI update
    setVotes(prev => prev + 1);

    const res = await incrementVote(id);
    if (!res.success) {
      setVotes(prev => prev - 1); // Rollback on error
    }
    setIsVoting(false); // <--- Loading finish
  };

  return (
    <div className="w-full bg-slate-900/60 border border-yellow-500/40 rounded-2xl p-6 relative backdrop-blur-sm flex flex-col justify-between transition-all duration-300 group shadow-lg overflow-hidden">
      {tags && (
        <span className={`absolute top-4 right-4 border text-xs px-3 py-1 rounded-full font-semibold tracking-wider ${getTagStyle(tags)}`}>
          {tags}
        </span>
      )}

      <div>
        <h1 className="text-yellow-500 font-bold text-lg sm:text-xl tracking-wide mb-2 pr-20">
          {title}
        </h1>
        <h2 className="text-slate-400 text-sm">{subtitle}</h2>
        <p className="text-sm text-slate-300 mt-3 leading-relaxed">
          {description}
        </p>
        
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800/60">
          <button
            onClick={handleVote}
            disabled={isVoting}
            className="bg-yellow-500 hover:bg-yellow-400 transition-colors text-black font-semibold px-6 py-2 rounded-xl text-sm cursor-pointer disabled:opacity-50"
          >
            {isVoting ? "Voting..." : "Vote"}
          </button>
          
          <p className="text-slate-300 font-medium flex items-center gap-2">
            Votes: 
            <span className="border border-yellow-500 px-4 py-1 text-yellow-500 rounded-lg flex items-center justify-center min-w-[50px]">
              {isVoting ? (
                <div className="w-3 h-3 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
              ) : (
                votes
              )}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Page Component (Yeh missing tha!)
export default function Page() {
  const skillsList = [
    {
      id: "nextjs-16-fullstack",
      title: "NEXT.JS 16 FULL STACK SYSTEM",
      tags: 'Available',
      subtitle: "High Demand Production Architecture",
      description: "Master Modern SSR, App Router And Server Actions. Build Production-Ready Full-Stack Applications With Extreme Performance, Zero Bloat With Complete SEO Control"
    },
    {
      id: "Supabase-modern-backend-architecture",
      title: "SUPABASE & MODERN ARCHITECTURE",
      tags: 'Working',
      subtitle: "PostgreSQL, Auth and Real Time Sync",
      description: "Learn complete backend engineering by masterfully combining database management with secure authentication protocols."
    },
    {
      id: "react-native-app-development",
      title: "REACT NATIVE APP DEVELOPMENT",
      subtitle: "Single Code Base, Native Speed",
      tags: "Pending",
      description: "Build Production-Ready iOS And Android Apps. Skip Separate Code Bases And Learn Native Bridge Optimization For Real World Developments."
    },
    {
      id: "ai-python",
      title: "APPLIED PYTHON & AI SYSTEM",
      tags: "Will Soon",
      subtitle: "Automation, APIs And Model Integration",
      description: "Go from writing standard script foundations to deploying autonomous AI-powered web applications. You will bridge the gap between engineering and machine learning by designing AI Voice Agent, LLM integrations."
    },
  ];

  return (
    <main className="min-h-screen p-8 bg-slate-950 text-white">
      <section>
        <div className="h-40 w-full flex justify-center items-end">
          <h1 className="text-5xl text-yellow-500 font-bold tracking-tight">Popular Skills</h1>
        </div>
      </section>

      <section className="mt-10">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
          {skillsList.map((skill) => (
            <SkillCard
              key={skill.id}
              id={skill.id}
              title={skill.title}
              subtitle={skill.subtitle}
              description={skill.description}
              tags={skill.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}