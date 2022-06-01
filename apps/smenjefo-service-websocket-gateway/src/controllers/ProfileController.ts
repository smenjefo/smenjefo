import IHttpService from "../services/IHttpService";

export default class ProfileController {
  constructor(
    private readonly http: IHttpService,
  ) {}

  public loadProfile = (payload: any) => {
    return this.http.get(`/profile/${payload.id}`);
  };

  // TODO: fake profile
  public createProfile = (payload: any) => {
    return this.http.put(`/profile/${payload.id}`, payload);
  };
}