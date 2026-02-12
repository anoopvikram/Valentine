import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const [noPosition, setNoPosition] = useState(null);
  const [messageIndex, setMessageIndex] = useState(-1);

  // 😄 Funny sentences
  const funnyMessages = [
    "Mad Aaavana njan? 😢",
    "Think again… I’m very lovable!",
    "Penangan pooovaaaa!",
    "Njan penangeeee!",
    "Kunj Anooop alle? 🥺",
    "Okay but… what if you reconsider?",
    "Plot twist: No actually means Yes",
    "You clicked No… but destiny says otherwise",
    "Enne ishtillaaaleeee!!! 😭",
    "Last chance before I cry dramatically..."
  ];

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });

    // 🔁 Loop through messages
    setMessageIndex((prev) => (prev + 1) % funnyMessages.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <img
        src="/background.webp"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-120"
        alt="bg"
      />

      <div className="bg-black/50 absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">

        <h1 className="text-2xl md:text-3xl font-bold mb-10">
          Will you be my Valentine?
        </h1>

        {/* Buttons */}
        <div className="flex gap-6">

          <button
            onClick={() => navigate("/propose")}
            className="px-5 py-1 bg-red-900 rounded-full border-2 text-lg font-semibold hover:scale-105 transition"
          >
            Yes
          </button>

          <button
            onClick={moveNoButton}
            style={
              noPosition
                ? {
                    position: "absolute",
                    top: noPosition.top,
                    left: noPosition.left,
                  }
                : {}
            }
            className="px-5 py-1 bg-gray-700 rounded-full border-2 text-lg font-semibold transition"
          >
            No
          </button>

        </div>

        {/* Funny Message */}
        {messageIndex >= 0 && (
          <p className="mt-8 text-lg">
            {funnyMessages[messageIndex]}
          </p>
        )}

      </div>
    </div>
  );
};
