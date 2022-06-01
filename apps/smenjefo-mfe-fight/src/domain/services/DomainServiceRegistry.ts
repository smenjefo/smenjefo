import TurnWindowDomainService from "./TurnWindowDomainService";

export default class DomainServiceRegistry {
  constructor(
    public readonly turnWindowDomainService: TurnWindowDomainService,
  ) {}
}