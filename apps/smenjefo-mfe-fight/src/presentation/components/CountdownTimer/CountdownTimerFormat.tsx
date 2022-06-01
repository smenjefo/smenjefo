import { useMemo } from "react";

type TimeBehavior = 'normal' | 'danger';

interface ICountdownTimerFormatProps {
  children: (formattedTime: string, behaviorOfTime: TimeBehavior) => JSX.Element;
  time: number;
}

export const format = (value: number): string => {
  if (value > 0) {
    const secondPartOfString = value > 9
      ? value
      : `0${value}`;

    return `0:${secondPartOfString}`;
  } else {
    return '0:00';
  }
};

export const behavior = (value: number) => {
  return value > 5
    ? 'normal'
    : 'danger';
};

const CountdownTimerFormat = (props: ICountdownTimerFormatProps) => {
  const formattedTime = useMemo(() => {
    return format(props.time);
  }, [props.time]);

  const behaviorOfTime = useMemo(() => {
    return behavior(props.time);
  }, [props.time]);

  return props.children(formattedTime, behaviorOfTime);
};

export default CountdownTimerFormat;