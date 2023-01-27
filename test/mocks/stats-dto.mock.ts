import { plainToClass } from 'class-transformer';
import { StatsDto } from '../../src/players/types/dtos/stats.dto';

const statsDtoRaw = {
  id: 2,
  firstName: 'Matt',
  lastName: 'Macey',
  position: 'GK',
  teamName: 'Arsenal',
  savesTier1: 0,
  savesTier2: 0,
  subs: 0,
  motms: 0,
  points: 0,
  redCards: 0,
  yellowCards: 0,
  concedes: 0,
  assists: 0,
  shotsTier1: 0,
  shotsTier2: 0,
  starts: 0,
  goals: 0,
  tacklesTier1: 0,
  tacklesTier2: 0,
  ownGoals: 0,
  cleansheets: 0,
  penSaves: 0,
  penMisses: 0,
  passesTier1: 0,
  passesTier2: 0,
};

export const statsDtoMock = plainToClass(StatsDto, statsDtoRaw);
