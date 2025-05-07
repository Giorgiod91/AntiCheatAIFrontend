"use client";

import React, { useState } from "react";

type Props = {};

function Model({}: Props) {
  // creating fetch and also state for the input name the models needs to predict on the given name
  const [suspectName, setSuspectName] = useState("");
  const fetchMyModelBackend = async () => {
    const url = "https//:localhost8080/predict";
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
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-5xl  font-bold">
        {" "}
        Lets Check if the Suspect could be Cheating
      </h1>
      <p>
        {" "}
        the model is trained on the aim of the best players in the world and
        will compare reaction time with your suspect
      </p>

      <div className="flex flex-row gap-2">
        <div className="border border-r-2 w-[260px] h-[350px]">
          {" "}
          <h2>pro player</h2>
        </div>
        <div className="border border-r-2 w-[260px] h-[350px]">
          {" "}
          <h2>your suspect</h2>
          <input onChange={(e) => setSuspectName(e.target.value)} type="text" />
        </div>
      </div>
    </div>
  );
}

export default Model;
