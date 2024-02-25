import { useState, useEffect } from "react";

function ProgressBar({ timer }) {
  const [isRemainingTime, setIsRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={isRemainingTime} max={timer} />;
}

export default ProgressBar;
