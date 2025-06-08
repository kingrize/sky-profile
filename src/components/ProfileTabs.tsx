// src/components/ProfileTabs.tsx
"use client";
import { useState } from "react";

const tabs = [
  { name: "Videos", content: (
    <div>
      <h3 className="text-xl font-semibold mb-4">My Videos</h3>
      <p>Check out my latest Sky adventures and creations!</p>
      {/* Bisa tambahkan list video di sini */}
    </div>
  )},
  { name: "About", content: (
    <div>
      <h3 className="text-xl font-semibold mb-4">About Me</h3>
      <p>
        Hi! I’m Dylan, a passionate Sky: Children of the Light player.  
        I love exploring new realms, helping fellow Sky kids, and sharing beautiful moments from the game.  
        Let’s fly together!
      </p>
    </div>
  )},
  { name: "Stories", content: (
    <div>
      <h3 className="text-xl font-semibold mb-4">Stories</h3>
      <p>Read my favorite moments, collaborations, and touching memories from my journey in Sky!</p>
    </div>
  )},
  { name: "Schedules", content: (
    <div>
      <h3 className="text-xl font-semibold mb-4">Streaming & Game Schedules</h3>
      <p>Stay tuned for my upcoming streams, events, and collaborations!</p>
    </div>
  )},
];

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full max-w-4xl">
      {/* Tab Navigation */}
      <div className="flex gap-10 mb-8 border-b border-slate-700">
        {tabs.map((tab, idx) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(idx)}
            className={`pb-3 font-bold transition-colors ${
              activeTab === idx
                ? "border-b-2 border-indigo-400 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="bg-slate-800 rounded-xl p-8 shadow min-h-[180px]">
        {tabs[activeTab].content}
      </div>
    </div>
  );
}
