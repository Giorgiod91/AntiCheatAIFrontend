"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BrainCircuit, ShieldAlert } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {};

const Heros = (props: Props) => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const HandleClick = () => {
    setShow(true); // Example logic to set 'show' to true
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
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#0cdcf7]/10 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white space-y-6"
        >
          <ShieldAlert className="text-[#0cdcf7] w-16 h-16" />
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#0cdcf7] leading-tight drop-shadow-md">
            Detect. Expose. Dominate.
          </h1>
          <p className="text-lg text-gray-300">
            Say goodbye to cheaters. Our AI-driven model analyzes gameplay,
            flags suspicious behavior, and helps you maintain a fair
            battlefield. Built with machine learning. Powered by integrity.
          </p>
          <button
            onClick={HandleClick}
            className="mt-4 px-8 py-3 text-lg font-semibold bg-[#0cdcf7] text-black rounded-full hover:scale-105 hover:bg-cyan-400 transition duration-300 shadow-lg"
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
        >
          <div style={container}>
            <AnimatePresence initial={false}>
              {isVisible ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  style={box}
                  key="box"
                />
              ) : null}
            </AnimatePresence>
            <motion.button
              style={button}
              onClick={() => setIsVisible(!isVisible)}
              whileTap={{ y: 1 }}
            >
              {isVisible ? "Hide" : "Show"}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const container: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  width: 250,
  height: 250,
  position: "relative",
};

const box: React.CSSProperties = {
  width: 280,
  height: 280,
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
};

const button: React.CSSProperties = {
  backgroundColor: "#0cdcf7",
  borderRadius: "10px",
  padding: "10px 20px",
  color: "#0f1115",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
};

export default Heros;
