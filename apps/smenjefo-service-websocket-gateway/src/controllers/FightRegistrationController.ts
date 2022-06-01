import IHttpService from '../services/IHttpService';

export default class FightRegistrationController {
  constructor (
    private readonly http: IHttpService,
  ) {}

  public loadFightApplications = (payload: any) => {
    return this.http.get('/fight-registration/applications', { type: payload.type });
  };

  public loadFightApplication = (payload: any) => {
    return this.http.get(`/fight-registration/applications/${payload.fightApplicationId}`);
  };

  public removeFightApplication = (payload: any) => {
    return this.http.delete(`/fight-registration/applications/${payload.fightApplicationId}`);
  };
  
  public createFightApplication = (payload: any) => {
    return this.http.post('/fight-registration/applications', payload);
  };
  
  public addPlayerToFightApplication = (payload: any) => {
    return this.http.post(`/fight-registration/applications/${payload.fightApplicationId}/teams/${payload.teamId}/players`, payload);
  };
  
  public removePlayerFromFightApplication = (payload: any) => {
    return this.http.delete(`/fight-registration/applications/${payload.fightApplicationId}/teams/${payload.teamId}/players/${payload.playerId}`);
  };
}