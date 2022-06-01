import { TurnType } from './types';

export default interface ITurnWindowTurnDTO {
  type: TurnType;
  energyCost: number;
  isDisabled: boolean;
}