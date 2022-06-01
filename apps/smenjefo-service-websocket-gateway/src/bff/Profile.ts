import ProfileController from '../controllers/ProfileController';

export default class Profile {
  constructor(
    private readonly io: any,
    private readonly socket: any,
    private readonly profileController: ProfileController,
  ) {
    this.socket.on('loadProfile', this.loadProfile);
    this.socket.on('createProfile', this.createProfile);
  }

  public loadProfile = async (payload: any) => {
    try {
      const result = await this.profileController.loadProfile(payload);

      this.socket.emit('profileLoaded', result);
    } catch (err) {
      this.socket.emit('error', err);
    }
  };

  // TODO: fake profile
  public createProfile = async (payload: any) => {
    try {
      const result = await this.profileController.createProfile(payload);

      this.socket.emit('profileCreated', result);
    } catch (err) {
      this.socket.emit('error', err);
    }
  };
}