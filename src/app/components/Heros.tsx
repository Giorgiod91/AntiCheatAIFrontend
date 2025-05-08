"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BrainCircuit, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

type Props = {};

const Heros = (props: Props) => {
  const router = useRouter();
  const HandleClick = () => {
    router.push("#model");
  };

  const backgroundImage = "/bg.png";

  return (
    <section className="min-h-screen flex items-center bg-black relative overflow-hidden">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/bg.png)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/30 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-6"
        >
          <ShieldAlert className="text-amber-400 w-16 h-16" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-amber-100 leading-tight">
            Detect. Expose. Dominate.
          </h1>
          <p className="text-lg text-gray-300">
            Say goodbye to cheaters. Our AI-driven model analyzes gameplay,
            flags suspicious behavior, and helps you maintain a fair
            battlefield. Built with machine learning. Powered by integrity.
          </p>
          <button
            onClick={HandleClick}
            className="btn btn-primary mt-4 px-8 py-3 text-lg hover:scale-105 transition duration-300"
          >
            Try the AI Detector
          </button>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex justify-center"
        ></motion.div>
      </div>
    </section>
  );
};

export default Heros;
