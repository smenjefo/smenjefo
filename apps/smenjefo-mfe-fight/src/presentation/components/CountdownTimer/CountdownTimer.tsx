import React, { useEffect, useState } from "react";
import { Text } from '@smenjefo/smenjefo-ui';

import CountdownTimerFormat from "./CountdownTimerFormat";

interface ICountdownTimerProps {
  timerId: any;
  initialTime: number;
  reattemptIntervalInSeconds?: number;
  onReattempt: () => void;
}

// TODO: refactoring
const CountdownTimer = (props: ICountdownTimerProps) => {
  const [time, setTime] = useState(props.initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((time) => {
        return time - 1;
      });
    }, 1000);

    return () => {
      // clears timer and set actial time
      clearInterval(timer);
      setTime(() => {
        return props.initialTime;
      });
    };
  }, [props.initialTime, props.timerId]);

  if (time < 0) {
    const reattemptIntervalTick = (
      time === -1 ||
      !(time % props.reattemptIntervalInSeconds)
    );

    if (reattemptIntervalTick) {
      setTime(30);
      props.onReattempt();
    }
  }

  return (
    <CountdownTimerFormat time={time}>
      {(formattedTime, behaviorOfTime) => {
        return (
          <Text
            theme={
              behaviorOfTime === 'danger'
                ? 'error'
                : 'gray'
            }
          >
            {formattedTime}
          </Text>
        );
      }}
    </CountdownTimerFormat>
  );
};

CountdownTimer.defaultProps = {
  reattemptIntervalInSeconds: 5,
};

export default CountdownTimer;