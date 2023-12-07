"use client";

import { useState, useEffect } from "react";
import dayjs from "dayjs";

const CountdownTimer = () => {
  const targetDate = dayjs("2023-12-12T00:00:00");
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());
  const [mounted, setMounted] = useState(false);

  function getTimeRemaining() {
    const now = dayjs();
    const difference = targetDate.diff(now, "second");

    const days = Math.floor(difference / (60 * 60 * 24));
    const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((difference % (60 * 60)) / 60);
    const seconds = Math.floor(difference % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full items-center justify-center gap-3">
      <span className="flex h-8 w-8 items-center justify-center rounded bg-dystopi-yellow p-2 font-medium text-dystopi-black 4xl:h-12 4xl:w-12 4xl:text-3xl">
        {mounted ? timeRemaining.days : 0}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded bg-dystopi-yellow p-2 font-medium text-dystopi-black 4xl:h-12 4xl:w-12 4xl:text-3xl">
        {mounted ? timeRemaining.hours : 0}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded bg-dystopi-yellow p-2 font-medium text-dystopi-black 4xl:h-12 4xl:w-12 4xl:text-3xl">
        {mounted ? timeRemaining.minutes : 0}
      </span>
      <span className="flex h-8 w-8 items-center justify-center rounded bg-dystopi-yellow p-2 font-medium text-dystopi-black 4xl:h-12 4xl:w-12 4xl:text-3xl">
        {mounted ? timeRemaining.seconds : 0}
      </span>
    </div>
  );
};

export default CountdownTimer;
