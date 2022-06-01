export default class Fight {
  constructor(
    private readonly createdAt: string,
    private readonly endsAt: string,
  ) {}

  public getCreatedAt = () => {
    return this.createdAt;
  };

  public getEndsAt = () => {
    return this.endsAt;
  };
}