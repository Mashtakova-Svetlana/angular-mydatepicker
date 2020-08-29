import {IMyMarkedDate} from "./my-marked-date.interface";

export interface IMyCalendarMonth {
  nbr: number;
  name: string;
  currMonth: boolean;
  markedMonth: IMyMarkedDate;
  selected: boolean;
  disabled: boolean;
  row?: number;
  col?: number
}
