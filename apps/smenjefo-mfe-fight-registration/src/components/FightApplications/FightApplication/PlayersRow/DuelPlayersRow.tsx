import { Table, Text } from '@smenjefo/smenjefo-ui';

import IPlayersRowProps from './IPlayersRowProps';

const DuelPlayersRow = (props: IPlayersRowProps) => {
  return (
    <Table.Row>
      {props.fightApplication.teams.map((team) => {
        return (
          <Table.DataCell
            key={team.id}
            textAlign="center"
            border="unbordered"
            padding="small"
            colSpan={2}
          >
            {team.players.map((player) => {
              const isOwner = props.fightApplication.ownerEntityId === player.entityId;

              if (isOwner) {
                return (
                  <Text
                    key={player.id}
                    size="medium"
                    theme="primary"
                    weight="bold"
                  >
                    {player.nickname}
                  </Text>
                );
              }

              return (
                <Text
                  key={player.id}
                  size="medium"
                >
                  {player.nickname}
                </Text>
              );
            })}
          </Table.DataCell>
        );
      })}
    </Table.Row>
  );
};

export default DuelPlayersRow;