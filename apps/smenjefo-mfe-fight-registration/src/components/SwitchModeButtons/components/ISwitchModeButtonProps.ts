import { MouseEventHandler } from "react";

export default interface ISwitchModeButtonProps {
  onClick: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLSpanElement> & MouseEventHandler<HTMLHeadingElement>;
}