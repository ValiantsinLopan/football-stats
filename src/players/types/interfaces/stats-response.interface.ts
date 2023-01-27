import { EStatsPeriod } from '../enums/stats-period.enum';
import { IStats } from './stats.interface';

export interface IStatsResponse {
  period: EStatsPeriod;
  stats: IStats[];
}
