import PlayerName from "./PlayerName";
import PlayerNameUser from "./PlayerNameUser";

type PlayerType = 'user' | 'player';

interface IPlayerNameFactoryProps {
  playerType: PlayerType;
  nickname: string;
}

const PlayerNameFactory = (props: IPlayerNameFactoryProps) => {
  if (props.playerType === 'user') {
    return (
      <PlayerNameUser
        nickname={props.nickname}
      />
    );
  }

  if (props.playerType === 'player') {
    return (
      <PlayerName
        nickname={props.nickname}
      />
    );
  }

  return null;
};

export default PlayerNameFactory;