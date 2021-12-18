import React, { useEffect, useState } from "react";

const PresaleCountdown = () => {
  const [timer, setTimer] = useState({
    days: "",
    hours: "",
    minutes: "",
    seconds: "",
  });

  const countdown = () => {
    const countDate = new Date("Dec 25, 2021 12:00:00");
    const now = new Date().getTime();

    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    setTimer({
      days: textDay,
      hours: textHour,
      minutes: textMinute,
      seconds: textSecond,
    });
  };

  useEffect(() => {
    countdown();
  }, [1000]);

  return (
    <div className="presale-count-container">
      <h2>Presale starts in</h2>
      <div className="timer-container">
        <div>
          <h3>{timer.days}</h3>
          <p>days</p>
        </div>
        <div>
          <h3>{timer.hours}</h3>
          <p>hours</p>
        </div>
        <div>
          <h3>{timer.minutes}</h3>
          <p>minutes</p>
        </div>
        <div>
          <h3>{timer.seconds}</h3>
          <p>seconds</p>
        </div>
      </div>
      <div className="howtojoin-container">
        <div>
          <a
            className="link"
            href="https://discord.gg/gFeG9DYpYS"
            target="_blank"
          >
            Join our discord to discover how to enter into the whitelist
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresaleCountdown;
