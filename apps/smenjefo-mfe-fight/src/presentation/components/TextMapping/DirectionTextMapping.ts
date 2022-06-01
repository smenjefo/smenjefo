import ITextMapping from "./ITextMapping";

export default class DirectionTextMapping implements ITextMapping {
  public mapValueToUserText = (value) => {
    if (value === 'mutual') {
      return '<->';
    }

    if (value === 'unidirectional') {
      return '->';
    }

    if (value === 'self') {
      return '<-';
    }

    return '';
  };
}