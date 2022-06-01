import IStatusDTO from "./IStatusDTO";
import ITeamDTO from "./ITeamDTO";

export default interface IFightInitializedDTO {
  teams: ITeamDTO[];
  status: IStatusDTO;
}