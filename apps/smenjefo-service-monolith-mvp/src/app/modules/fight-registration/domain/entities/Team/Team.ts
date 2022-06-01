export default class Team {
  constructor(
    private readonly hasOwner: boolean,
  ) {}

  public getHasOwner = () => {
    return this.hasOwner;
  };
}