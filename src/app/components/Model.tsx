"use client";

import React, { useState } from "react";

type Props = {};

function Model({}: Props) {
  // creating fetch and also state for the input name the models needs to predict on the given name
  const [suspectName, setSuspectName] = useState("");
  // loading state for my animation
  const [loading, setLoading] = useState(false);
  const fetchMyModelBackend = async () => {
    const url = "https://localhost:8080/predict";
    let playerName = suspectName;
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error fetching");
      }
    } catch (error) {
      console.error("error", error);
      return null;
    }
  };
  //::TODO: showcase the model in action on the right or left div ! so user can se that something is working in the background and the other
  // div is to live compare to a pro player aim
  return (
    <div className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center space-y-10">
      <div className="text-center space-y-4 max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#0cdcf7] drop-shadow">
          Is Your Suspect Cheating?
        </h1>
        <p className="text-gray-300 text-lg">
          Our AI compares the suspect's aim to professional players' data —
          based on reaction time and tracking precision.
        </p>
      </div>

      {/* Comparison Panels */}
      <div className="flex flex-col md:flex-row gap-10 mt-8">
        {/* Pro Player Panel */}
        <div className="w-72 h-96 border border-[#0cdcf7] rounded-lg p-4 shadow-lg bg-gradient-to-br from-black via-gray-900 to-black">
          <h2 className="text-xl font-semibold text-[#0cdcf7] mb-4">
            Pro Player
          </h2>
          <div className="w-full h-full border border-dashed border-gray-600 rounded-md flex items-center justify-center text-gray-500 text-sm">
            {/* Placeholder for animation or chart */}
            The behavior of professional players serves as a benchmark, allowing
            the system to understand what "normal" behavior looks like. This
            helps identify players who deviate significantly from these norms
            and may be cheating
          </div>
        </div>

        {/* Suspect Panel */}
        <div className="w-72 h-96 border border-[#0cdcf7] rounded-lg p-4 shadow-lg bg-gradient-to-br from-black via-gray-900 to-black">
          <h2 className="text-xl font-semibold text-[#0cdcf7] mb-4">Suspect</h2>
          <input
            type="text"
            value={suspectName}
            onChange={(e) => setSuspectName(e.target.value)}
            placeholder="Enter player name"
            className="w-full p-2 rounded-md bg-black border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#0cdcf7]"
          />
          <button
            onClick={fetchMyModelBackend}
            className="mt-4 w-full py-2 bg-[#0cdcf7] text-black font-bold rounded-md hover:bg-cyan-400 transition"
          >
            Analyze
          </button>

          {loading && (
            <div className="mt-6 text-center text-[#0cdcf7] animate-pulse">
              Running model...
            </div>
          )}

          {!loading && (
            <div className="mt-6 text-center text-gray-400 text-sm italic">
              Awaiting input...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Model;
