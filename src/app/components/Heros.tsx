"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

type Props = {};

const Heros = (props: Props) => {
  const router = useRouter();
  const HandleClick = () => {
    router.push("/model");
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md ">
          <h1 className="mb-5 text-5xl text-amber-100 font-bold ">
            Anticheat AI
          </h1>
          <p className="mb-5">
            Tired of Cheater in Your Game ? the machine Learning model i build
            can detect suspicious player just upload it and give the name of the
            player
          </p>
          <button onClick={HandleClick} className="btn btn-primary">
            Expose the Cheater
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heros;
