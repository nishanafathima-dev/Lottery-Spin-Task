import { useState, useCallback } from "react";

const useSpinAnimation = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentNumbers, setCurrentNumbers] = useState([1, 2, 3, 4, 5, 6]);

  const generateRandomNumber = () => Math.floor(Math.random() * 9) + 1;

  const spinNumbers = useCallback(() => {
    setIsSpinning(true);
    setShowResult(false);

    const winners = Array.from({ length: 6 }, generateRandomNumber);

    let spinCount = 0;
    const maxSpins = 30;
    let spinSpeed = 50;

    const spinInterval = setInterval(() => {
      setCurrentNumbers(Array.from({ length: 6 }, generateRandomNumber));
      spinCount++;

      if (spinCount > maxSpins * 0.6) {
        spinSpeed += 20;
      }

      if (spinCount >= maxSpins) {
        clearInterval(spinInterval);
        setCurrentNumbers(winners);
        setIsSpinning(false);

        setTimeout(() => setShowResult(true), 300);
      }
    }, spinSpeed);
  }, []);

  return { isSpinning, showResult, currentNumbers, spinNumbers };
};

export default useSpinAnimation;
