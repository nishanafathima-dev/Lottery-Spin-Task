import React from "react";
import useSpinAnimation from "../../hooks/useSpinAnimation";
import Background from "../../components/Background/Background";
import NumberCard from "../../components/NumberCard/NumberCard";
import SpinButton from "../../components/SpinButton/SpinButton";
import AnimatedPrizeText from "../../components/AnimatedPrizeText/AnimatedPrizeText";

const LotterySpin = () => {
  const { isSpinning, showResult, currentNumbers, spinNumbers } =
    useSpinAnimation();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <Background />

      <div className="relative z-10 max-w-2xl w-full px-4">
        <h1 className="text-center text-5xl font-bold text-cyan-400 mb-12">
          CONGRATULATION
        </h1>

        <AnimatedPrizeText show={showResult} />

        <div className="flex justify-center gap-4 mb-16">
          {currentNumbers.map((num, i) => (
            <NumberCard key={i} number={num} isSpinning={isSpinning} />
          ))}
        </div>

        <div className="flex justify-center">
          <SpinButton onClick={spinNumbers} disabled={isSpinning} />
        </div>
      </div>
    </div>
  );
};

export default LotterySpin;
