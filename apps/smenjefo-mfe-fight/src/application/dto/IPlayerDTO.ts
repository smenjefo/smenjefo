export type PlayerRole = 'maniac' | 'comrade' | 'rogue';
export type PlayerStatus = 'inGame' | 'eliminated';
export type PlayerTurnStatus = 'inProgress' | 'completed';

export default interface IPlayerDTO {
  id: string;
  entityId: string;
  nickname: string;
  team: string;
  role: PlayerRole;
  hp: number;
  energy: number;
  avatarURL: string;
  status: PlayerStatus;
  turnStatus: PlayerTurnStatus;
}