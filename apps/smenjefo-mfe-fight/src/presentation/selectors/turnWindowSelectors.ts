import { createSelector } from 'reselect';
import { IApplicationDataContext } from "../components/Application/ApplicationDataContext";

export const selectTurnWindow = (data: IApplicationDataContext) => {
  return data.turnWindow[0];
};

export const selectIsTurnWindowOpened = createSelector(
  [selectTurnWindow],
  (turnWindow) => {
    return turnWindow?.isOpened;
  },
);

export const selectTurnWindowTurnListSimple = createSelector(
  [selectTurnWindow],
  (turnWindow) => {
    return turnWindow?.turnList.filter((turn) => {
      return !turn.energyCost;
    });
  },
);

export const selectTurnWindowTurnListRole = createSelector(
  [selectTurnWindow],
  (turnWindow) => {
    return turnWindow?.turnList.filter((turn) => {
      return turn.energyCost;
    });
  },
);