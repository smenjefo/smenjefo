import DomainException from "../../../../exceptions/DomainException";
import DefaultFightConfiguration from "./DefaultFightConfiguration";
import IFightConfiguration from "./IFightConfiguration";

export default class FightConfigurationFactory {
  public create = (configurationType: string): IFightConfiguration => {
    if (configurationType === 'default') {
      return new DefaultFightConfiguration();
    }

    throw new DomainException('Unknown fight configuration type');
  };
}