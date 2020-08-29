import { IMyMarkedDate } from './my-marked-date.interface';

export interface IMyCalendarYear {
  year: number;
  currYear: boolean;
  selected: boolean;
  disabled: boolean;
  markedYear: IMyMarkedDate;
  row?: number;
  col?: number
}
