import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
  const navigate = useNavigate();

  const [noPosition, setNoPosition] = useState(null);

  const moveNoButton = () => {
    const randomTop = Math.random() * 80;
    const randomLeft = Math.random() * 80;

    setNoPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background */}
      <img
        src="/background.png"
        className="absolute inset-0 w-full h-full object-cover blur-sm scale-120"
        alt="bg"
      />

      <div className="bg-black/50 absolute inset-0"/>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">

        <h1 className="text-2xl md:text-3xl font-bold mb-10">
          Will you be my Valentine? ❤️
        </h1>

        {/* Button Row */}
        <div className="flex gap-6">

          {/* YES BUTTON */}
          <button
            onClick={() => navigate("/propose")}
            className="px-8 py-3 bg-red-500 rounded-full border-2 text-lg font-semibold hover:scale-105 transition"
          >
            Yes
          </button>

          {/* NO BUTTON */}
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
            className="px-6 py-2 bg-gray-700 rounded-full border-2 text-lg font-semibold transition"
          >
            No 😢
          </button>

        </div>
      </div>
    </div>
  );
};
