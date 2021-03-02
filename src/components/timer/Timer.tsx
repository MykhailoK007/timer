import React, { useEffect, useRef, useState } from 'react';
import classes from './timer.module.scss';
//TODO
// 1. time
// 2. onTick should be execute every tick
interface TimerProps {
  time: number;
  autoStart: boolean;
  step: number;
}
export const Timer = ({ time, autoStart, step }: TimerProps) => {
  const [currentTime, setCurrentTime] = useState<number>(time * 1000);
  const [isTimerLaunched, toggleTimerLaunched] = useState<boolean>(false);
  let timerId: any = useRef(null);

  useEffect(() => {
    if (autoStart) {
      toggleTimerLaunched(true);
      startTimer();
    }
  }, []);
  useEffect(() => {
    currentTime <= 0 && pauseTimer();
  }, [currentTime]);

  const onTick = () => {
    currentTime > 0 ? setCurrentTime(prevProps => prevProps - step) : stopTimer();
  };

  // Button event handler
  const toggleTimer = () => {
    let changedCase = !isTimerLaunched;
    toggleTimerLaunched(changedCase);
    changedCase ? startTimer() : stopTimer();
  };

  // Start interval
  const startTimer = () => {
    timerId.current = setInterval(onTick, step);
  };

  // Clear interval
  const stopTimer = () => {
    clearInterval(timerId.current);
    toggleTimerLaunched(false);
  };
  const pauseTimer = () => {
    clearInterval(timerId.current);
    toggleTimerLaunched(false);
  };

  return (
    <>
      <div className={classes.timerScoreboard}>{currentTime}</div>
      <button className={classes.toggleBtn} onClick={toggleTimer}>
        {isTimerLaunched ? 'Stop' : 'Start'}
      </button>
      <progress className={classes.progressBar} value={currentTime} max={time}></progress>
    </>
  );
};
