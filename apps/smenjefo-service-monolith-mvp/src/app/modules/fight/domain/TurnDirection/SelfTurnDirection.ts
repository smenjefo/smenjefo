import ITurnDirection from "./ITurnDirection";

export default class SelfTurnDirection implements ITurnDirection {
  public toTextValue = () => {
    return 'self';
  };
}