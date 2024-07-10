import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({});
  const [mounted, setMounted] = useState(false);

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, mounted]);

  useEffect(() => {
    if (mounted) {
      setTimeLeft(calculateTimeLeft());
    }
  }, [mounted]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof TimeLeft]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval as keyof TimeLeft]}
        {interval[0].toUpperCase()}{" "}
      </span>
    );
  });

  return timerComponents.length != 0 ? (
    <div className="font-mono text-white text-2xl tracking-[0px]">
      {timerComponents.length ? (
        <h3>SALE ENDS IN: {timerComponents.reverse()}</h3>
      ) : (
        <span>SALE IS COMPLETE</span>
      )}
    </div>
  ) : null;
};

export default Countdown;
