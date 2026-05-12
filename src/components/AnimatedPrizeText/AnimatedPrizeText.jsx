import { useEffect, useState } from "react";
import React from "react";
const AnimatedPrizeText = ({ show }) => {
  const [colorState, setColorState] = useState(0);

  useEffect(() => {
    if (!show) return;
    const interval = setInterval(
      () => setColorState((prev) => (prev + 1) % 2),
      500
    );
    return () => clearInterval(interval);
  }, [show]);

  if (!show) return null;
// hhh

  return (
    <div className="absolute top-16 left-0 right-0 flex justify-center z-10">
      <h2
        className={`text-3xl sm:text-5xl font-bold tracking-wider transition-colors duration-300 ${
          colorState === 0 ? "text-white" : "text-red-500"
        }`}
        style={{
          textShadow:
            colorState === 0
              ? "0 0 20px rgba(255,255,255,.8)"
              : "0 0 20px rgba(239,68,68,.8)",
        }}
      >
        1ST PRIZE
      </h2>
    </div>
  );
};

export default AnimatedPrizeText;
