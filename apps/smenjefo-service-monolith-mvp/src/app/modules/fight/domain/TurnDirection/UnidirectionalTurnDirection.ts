import ITurnDirection from "./ITurnDirection";

export default class UnidirectionalTurnDirection implements ITurnDirection {
  public toTextValue = () => {
    return 'unidirectional';
  };
}
