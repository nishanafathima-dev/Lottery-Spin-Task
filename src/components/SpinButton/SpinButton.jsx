import React from "react";
const SpinButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative px-12 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 
      rounded-full font-bold text-xl text-purple-950 transition-all duration-300
      ${
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:scale-110 active:scale-95"
      }`}
    >
      <span className="relative z-10">SPIN</span>
      <div className="absolute inset-0 bg-yellow-300/50 rounded-full blur-xl opacity-50" />
    </button>
  );
};

export default SpinButton;
