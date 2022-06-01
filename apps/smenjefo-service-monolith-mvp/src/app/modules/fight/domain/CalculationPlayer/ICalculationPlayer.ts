export default interface ICalculationPlayer {
  increaseHealthBy(value: number): void;
  decreaseHealthBy(value: number): void;
  increaseEnergyBy(value: number): void;
  decreaseEnergyBy(value: number): void;
  getHealthBeforeCalculation(): number;
  getEnergyBeforeCalculation(): number;
  equalizeInitialToActualHp(): void;
  equalizeInitialToActualEnergy(): void;
  getHealth(): number;
  getEnergy(): number;
  getNickname(): string;
  getId(): string;
}