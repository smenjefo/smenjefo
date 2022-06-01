import FightController from '../controllers/FightController';
import RoundController from '../controllers/RoundController';
import RemainingTimeLogic from '../logic/RemainingTimeLogic';

export default class Fight {
  constructor(
    private readonly io: any,
    private readonly socket: any,
    private readonly fightController: FightController,
    private readonly roundController: RoundController,
    private readonly remainingTimeLogic: RemainingTimeLogic,
  ) {
    this.socket.on('initializeFight', this.initializeFight);
    this.socket.on('loadFightRound', this.loadFightRound);
    this.socket.on('makeTurn', this.makeTurn);
  }

  public initializeFight = async (payload: any) => {
    try {
      const result = await this.fightController.loadFight(payload);

      if (!this.socket.rooms[result.id]) {
        this.socket.join(result.id);
      }

      this.socket.emit('fightInitialized', {
        teams: result.teams,
        status: {
          type: result.type,
          fightId: result.id,
          currentRoundId: result.currentRoundId,
          status: result.status,
        },
      });
    } catch (err) {
      this.socket.emit('error', err);
    }
  };

  public loadFightRound = async (payload: any) => {
    try {
      const round = await this.roundController.getRoundByUUID(payload.fightId, payload.roundId);

      const remainingTime = this.remainingTimeLogic.getRemainingTimeForRoundInSeconds(round.endsAt);

      if (this.remainingTimeLogic.isNeedToCreateNewRound(remainingTime)) {
        const newRound = await this.roundController.createRoundByUUID(payload.fightId, round.nextRoundId);

        if (newRound) {
          this.io
            .of('/')
            .to(payload.fightId)
            .emit('newFightRoundCreated', newRound);
        }
      } else {
        this.socket.emit('fightRoundLoaded', {
          ...round,
          remainingTime,
        });
      }
    } catch (err) {
      this.socket.emit('error', err);
    }
  };

  public makeTurn = async (payload: any) => {
    try {
      const result = await this.fightController.makeTurn(payload);

      this.io
        .of('/')
        .to(payload.fightId)
        .emit('turnMade', result);
    } catch (err) {
      this.socket.emit('error', err);
    }
  };
}