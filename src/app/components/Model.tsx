import React from "react";

type Props = {};

function Model({}: Props) {
  const fetchMyModelBackend = async () => {
    const url = "https//:localhost8080/predict";
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
        <div className="border border-r-2 w-[260px] h-[350px]"></div>
        <div className="border border-r-2 w-[260px] h-[350px]"></div>
      </div>
    </div>
  );
}

export default Model;
