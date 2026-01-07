import React from "react";
const Background = () => {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-purple-900 to-indigo-950" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math?.random() * 100}%`,
              left: `${Math?.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Background;
