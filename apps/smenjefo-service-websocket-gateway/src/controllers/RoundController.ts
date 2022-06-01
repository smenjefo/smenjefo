import IHttpService from "../services/IHttpService";

export default class RoundController {
  constructor(
    private readonly http: IHttpService,
  ) {}

  public getRoundByUUID = (fightId: any, roundId: any) => {
    return this.http.get(`/fight/fights/${fightId}/rounds/${roundId}`);
  };

  public createRoundByUUID = (fightId: any, newRoundId: any) => {
    return this.http.put(`/fight/fights/${fightId}/rounds/${newRoundId}`, {});
  };
}