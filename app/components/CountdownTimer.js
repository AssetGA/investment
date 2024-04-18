"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  const targetTime = new Date("May 31, 2024 00:00:00").getTime(); // Replace with your target start time
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetTime - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="flex flex-col translate-y-20">
        <h1 className="flex justify-center px-2 py-2 font-bold">START TIME</h1>

        <div
          className="flex justify-center font-extrabold bg-orange-300 hover:bg-orange-100 p-4 ring-2 rounded-2xl"
          suppressHydrationWarning={true}
        >
          {targetTime > new Date().getTime()
            ? `${timeRemaining.days}d ${timeRemaining.hours}h ${timeRemaining.minutes}m ${timeRemaining.seconds}s`
            : "GO"}
        </div>
      </div>
    </>
  );
};

export default CountdownTimer;
