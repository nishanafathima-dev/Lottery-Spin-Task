import React from "react";
const NumberCard = ({ number, isSpinning }) => {
  return (
    <div className="relative w-14 h-20 sm:w-16 sm:h-24">
      <div
        className={`absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-purple-900/40 
        rounded-lg border border-cyan-400/50 backdrop-blur-sm transition-all duration-300
        ${isSpinning ? "scale-105 border-cyan-300" : ""}`}
      >
        <div className="absolute inset-[2px] bg-gradient-to-b from-purple-900/60 to-purple-950/80 rounded-lg flex items-center justify-center">
          <span
            className={`text-3xl sm:text-4xl font-bold bg-gradient-to-b from-cyan-300 to-cyan-500 
            bg-clip-text text-transparent transition-all duration-200
            ${isSpinning ? "blur-[1px]" : ""}`}
          >
            {number}
          </span>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-cyan-400/20 rounded-lg blur-xl transition-opacity duration-300
        ${isSpinning ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default NumberCard;
