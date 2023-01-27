import { plainToClass } from 'class-transformer';
import { SeasonPlayersEntity } from '../../src/players/types/entities/season-players.entity';

const statsEntityRaw = {
  playerId: 2,
  points: 0,
  starts: 0,
  subs: 0,
  goals: 0,
  ownGoals: 0,
  assists: 0,
  concedes: 0,
  cleansheets: 0,
  redCards: 0,
  yellowCards: 0,
  penSaves: 0,
  penMisses: 0,
  savesTier1: 0,
  savesTier2: 0,
  passesTier1: 0,
  passesTier2: 0,
  tacklesTier1: 0,
  tacklesTier2: 0,
  shotsTier1: 0,
  shotsTier2: 0,
  motms: 0,
  added: '2020-10-31T23:47:45.000Z',
  updated: '2020-10-31T23:47:46.000Z',
  player: {
    id: 2,
    uuid: '21hyrpedxxu2ilkspxq4uril1',
    teamId: 19,
    firstName: 'Matt',
    lastName: 'Macey',
    position: 'GK',
    added: '2020-09-03T13:35:16.000Z',
    updated: '2020-11-02T11:30:55.000Z',
    team: {
      id: 19,
      uuid: '4dsgumo7d4zupm2ugsvm4zm4d',
      name: 'Arsenal',
      shortName: 'Arsenal',
      abbr: 'ARS',
      added: '2020-09-03T13:34:41.000Z',
      updated: '2020-09-03T13:34:41.000Z',
    },
  },
};

export const statsEntityMock = plainToClass(
  SeasonPlayersEntity,
  statsEntityRaw,
);
