import { DataStatus } from "./data-status.enum";

export interface AppStatus<T> {
  dataState: DataStatus;
  appData?: T;
  error?: string;
}
