import IHttpService from "../services/IHttpService";

export default class FightController {
  constructor(
    private readonly http: IHttpService,
  ) {}

  public loadFight = (payload: any) => {
    return this.http.get(`/fight/fights/${payload.id}`);
  };

  public makeTurn = (payload: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { fightId, roundId, ...data } = payload;

    return this.http.post(`/fight/fights/${payload.fightId}/rounds/${payload.roundId}/turns`, data);
  };
}