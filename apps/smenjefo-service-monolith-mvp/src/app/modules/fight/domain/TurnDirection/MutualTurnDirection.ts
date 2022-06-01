import ITurnDirection from "./ITurnDirection";

export default class MutualTurnDirection implements ITurnDirection {
  public toTextValue = () => {
    return 'mutual';
  };
}