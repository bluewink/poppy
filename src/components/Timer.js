import React, { useState, useEffect } from "react";

export default function Timer({ mm, ss, timerTrigger, setTimerTrigger }) {
  const [minute, setMinute] = useState(parseInt(mm));
  const [second, setSecond] = useState(parseInt(ss));
  const [timerTriggeredOnce, setTimerTriggeredOnce] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (parseInt(second) > 0) {
        setSecond(parseInt(second) - 1);
      }
      if (parseInt(second) === 0) {
        if (parseInt(minute) === 0) clearInterval(timer);
        else {
          setMinute(parseInt(minute) - 1);
          setSecond(59);
        }
      }
    }, 1000);

    if (!timerTrigger) {
      if (!timerTriggeredOnce) {
        setTimerTriggeredOnce(true);
      } else {
        setTimerTrigger(true);
      }
      setMinute(parseInt(mm));
      setSecond(parseInt(ss));
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [minute, second, timerTrigger]);

  return (
    <div>
      {minute}:{second < 10 ? `0${second}` : second}
    </div>
  );
}
