import FightRegistrationController from "../controllers/FightRegistrationController";

export default class FightRegistration {
  constructor (
    private readonly io: any,
    private readonly socket: any,
    private readonly fightRegistrationController: FightRegistrationController,
  ) {
    this.socket.on('loadFightApplications', this.loadFightApplications);
    this.socket.on('loadFightApplication', this.loadFightApplication);
    this.socket.on('removeFightApplication', this.removeFightApplication);
    this.socket.on('createFightApplication', this.createFightApplication);
    this.socket.on('addPlayerToFightApplication', this.addPlayerToFightApplication);
    this.socket.on('removePlayerFromFightApplication', this.removePlayerFromFightApplication);
  }

  public loadFightApplications = async (payload: any) => {
    try {
      const result = await this.fightRegistrationController.loadFightApplications(payload);

      this.socket.emit('fightApplicationsLoaded', result);
    } catch (err) {
      this.socket.emit('error', err);
    }
  };

  public loadFightApplication = async (payload: any) => {
    try {
      const result = await this.fightRegistrationController.loadFightApplication(payload);

      this.socket.emit('fightApplicationLoaded', result);
    } catch (err) {
      this.socket.emit('error', err);
    }
  };

  public removeFightApplication = async (payload: any) => {
    try {
      const result = await this.fightRegistrationController.removeFightApplication(payload);
      
      this.socket.emit('fightApplicationRemoved', result);
    } catch (err) {
      this.socket.emit('error', err);
    }

    try {
      this.io
        .of('/')
        .to(payload.fightApplicationId)
        .emit('profileUpdated');
    } catch (err) {
      this.socket.emit('error', err);
    }
  };
  
  public createFightApplication = async (payload: any) => {
    try {
      const result = await this.fightRegistrationController.createFightApplication(payload);
      
      this.socket.emit('fightApplicationCreated', result);

      this.socket.emit('profileUpdated');

      // room creation by fight application id
      this.socket.join(result.id);
    } catch (err) {
      this.socket.emit('error', err);
    }
  };
  
  public addPlayerToFightApplication = async (payload: any) => {
    try {
      await this.fightRegistrationController.addPlayerToFightApplication({
        ...payload,
        entityId: payload.entityId,
        nickname: payload.nickname,
      });

      this.socket.join(payload.fightApplicationId);

      this.io
        .of('/')
        .to(payload.fightApplicationId)
        .emit('fightApplicationUpdated', {
          fightApplicationId: payload.fightApplicationId,
        });

      this.io
        .of('/')
        .to(payload.fightApplicationId)
        .emit('profileUpdated');
    } catch (err) {
      this.socket.emit('error', err);
    }
  };
  
  public removePlayerFromFightApplication = async (payload: any) => {
    let result;

    try {
      result = await this.fightRegistrationController.removePlayerFromFightApplication(payload);

      this.socket.emit('playerFromFightApplicationRemoved', result);

      this.io
        .of('/')
        .to(payload.fightApplicationId)
        .emit('fightApplicationUpdated', {
          fightApplicationId: payload.fightApplicationId,
        });

      this.io
        .of('/')
        .to(payload.fightApplicationId)
        .emit('profileUpdated');
    } catch (err) {
      this.socket.emit('error', err);
    }
  };
}