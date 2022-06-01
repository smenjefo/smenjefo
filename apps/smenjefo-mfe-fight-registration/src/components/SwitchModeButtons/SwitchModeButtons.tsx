import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import {
  changeCurrentFightTypeToTeamOnTeam,
  changeCurrentFightTypeToDuel,
  changeCurrentFightTypeToAllVersusAll,
} from '../../slices/fightTypeSlice';

import { actions } from '../../slices/fightApplicationsSlice';

import AllVersusAllSwitchModeButton from './components/AllVersusAllSwitchModeButton';
import DuelSwitchModeButton from './components/DuelSwitchModeButton';
import TeamOnTeamSwitchModeButton from './components/TeamOnTeamSwitchModeButton';
import ControllersContext from '../ControllersProvider/ControllersContext';

interface ISwitchModeButtonsProps {}

const SwitchModeButtons = (props: ISwitchModeButtonsProps) => {
  const dispatch = useDispatch();
  const { controllers } = useContext(ControllersContext);

  const teamOnTeamSwitchModeButtonOnClick = () => {
    dispatch(changeCurrentFightTypeToTeamOnTeam());
    dispatch(actions.clear());
    controllers.fightApplications.loadFightApplications({ type: 'teamOnTeam' });
  };

  const duelSwitchModeButtonOnClick = () => {
    dispatch(changeCurrentFightTypeToDuel());
    dispatch(actions.clear());
    controllers.fightApplications.loadFightApplications({ type: 'duel' });
  };

  const allVersusAllSwitchModeButtonOnClick = () => {
    dispatch(changeCurrentFightTypeToAllVersusAll());
    dispatch(actions.clear());
    controllers.fightApplications.loadFightApplications({ type: 'allVersusAll' });
  };

  return (
    <>
      <TeamOnTeamSwitchModeButton
        onClick={teamOnTeamSwitchModeButtonOnClick}
      />

      <DuelSwitchModeButton
        onClick={duelSwitchModeButtonOnClick}
      />

      <AllVersusAllSwitchModeButton
        onClick={allVersusAllSwitchModeButtonOnClick}
      />
    </>
  );
};

export default SwitchModeButtons;