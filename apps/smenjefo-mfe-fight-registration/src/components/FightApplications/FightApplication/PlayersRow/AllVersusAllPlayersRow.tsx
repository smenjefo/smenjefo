import { Table, List, Text } from '@smenjefo/smenjefo-ui';

import IPlayersRowProps from './IPlayersRowProps';

const AllVersusAllPlayersRow = (props: IPlayersRowProps) => {
  return (
    <Table.Row>
      <Table.DataCell
        textAlign="center"
        border="unbordered"
        padding="small"
        colSpan={4}
      >
        {props.fightApplication.teams.map((team) => {
          return (
            <List.Index
              key={team.id}
              marginBottom="small"
            >
              {team.players.map((player) => {
                const isOwner = props.fightApplication.ownerEntityId === player.entityId;

                return (
                  <List.Item
                    key={player.id}
                  >
                    {
                      isOwner
                        ? (
                          <Text
                            key={player.id}
                            size="medium"
                            theme="primary"
                            weight="bold"
                          >
                            {player.nickname}
                          </Text>
                        )
                        : (
                          <Text
                            key={player.id}
                            size="medium"
                          >
                            {player.nickname}
                          </Text>
                        )
                    }
                  </List.Item>
                );
              })}
            </List.Index>
          );
        })}
      </Table.DataCell>
    </Table.Row>
  );
};

export default AllVersusAllPlayersRow;