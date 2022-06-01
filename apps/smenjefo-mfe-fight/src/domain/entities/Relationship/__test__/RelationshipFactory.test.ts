import Player from '../../Player/Player';
import EnemyRelationship from '../EnemyRelationship';
import RelationshipFactory from '../RelationshipFactory';
import SelfRelationship from '../SelfRelationship';
import TeammateRelationship from '../TeammateRelationship';

describe('RelationshipFactory', () => {
  const getPlayer = (id, teamId) => {
    return new Player(
      id,
      teamId,
      'playerRole',
      'playerStatus',
      'playerTurnStatus',
      3,
    );
  };

  it('should return self relationship', () => {
    const relationshipFactory = new RelationshipFactory();
    const result = relationshipFactory.create(
      getPlayer('1', 'teamOne'),
      getPlayer('1', 'teamOne'),
    );

    expect(result instanceof SelfRelationship).toBeTruthy();
  });

  it('should return self relationship with different teams', () => {
    const relationshipFactory = new RelationshipFactory();
    const result = relationshipFactory.create(
      getPlayer('1', 'teamOne'),
      getPlayer('1', 'teamTwo'),
    );

    expect(result instanceof SelfRelationship).toBeTruthy();
  });

  it('should return teammate relationship', () => {
    const relationshipFactory = new RelationshipFactory();
    const result = relationshipFactory.create(
      getPlayer('1', 'teamOne'),
      getPlayer('2', 'teamOne'),
    );

    expect(result instanceof TeammateRelationship).toBeTruthy();
  });

  it('should return enemy relationship', () => {
    const relationshipFactory = new RelationshipFactory();
    const result = relationshipFactory.create(
      getPlayer('1', 'teamOne'),
      getPlayer('2', 'teamTwo'),
    );

    expect(result instanceof EnemyRelationship).toBeTruthy();
  });
});