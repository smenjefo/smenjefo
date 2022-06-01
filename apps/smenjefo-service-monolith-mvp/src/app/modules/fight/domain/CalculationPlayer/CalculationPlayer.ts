import ICalculationPlayer from "./ICalculationPlayer";

export default class CalculationPlayer implements ICalculationPlayer {
  private healthBeforeCalculation: number;
  private energyBeforeCalculation: number;

  constructor(
    private health: number,
    private energy: number,
    private readonly id: string,
    private readonly nickname: string,
    private readonly teamId: string,
  ) {
    this.healthBeforeCalculation = health;
    this.energyBeforeCalculation = energy;
  }

  public getId = () => {
    return this.id;
  };

  public increaseHealthBy = (value: number) => {
    this.health = this.health + value;
  };

  public decreaseHealthBy = (value: number) => {
    this.health = this.health - value;
  };

  public increaseEnergyBy = (value: number) => {
    this.energy = this.energy + value;
  };

  public decreaseEnergyBy = (value: number) => {
    this.energy = this.energy - value;
  };

  public getHealth = () => {
    return this.health;
  };

  public getEnergy = () => {
    return this.energy;
  };

  public getHealthBeforeCalculation = () => {
    return this.healthBeforeCalculation;
  };

  public getEnergyBeforeCalculation = () => {
    return this.energyBeforeCalculation;
  };

  public isEliminated = () => {
    return this.health < 1;
  };

  public getNickname = () => {
    return this.nickname;
  };

  public getTeamId = () => {
    return this.teamId;
  };

  public equalizeInitialToActualHp = () => {
    this.healthBeforeCalculation = this.health;
  };

  public equalizeInitialToActualEnergy = () => {
    this.energyBeforeCalculation = this.energy;
  };
}