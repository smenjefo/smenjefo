import { IApplicationDataContext } from "../components/Application/ApplicationDataContext";

export const selectHistory = (data: IApplicationDataContext) => {
  return data.history;
};