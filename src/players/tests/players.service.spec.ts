import { BadRequestException } from '@nestjs/common';
import { TestingModule, Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { statsDtoMock } from '../../../test/mocks/stats-dto.mock';
import { statsEntityMock } from '../../../test/mocks/stats-entity.mock';
import { mockRepository } from '../../../test/repository/mock.repository';
import { PlayersService } from '../players.service';
import { MonthPlayersEntity } from '../types/entities/month-players.entity';
import { SeasonPlayersEntity } from '../types/entities/season-players.entity';
import { WeekPlayersEntity } from '../types/entities/week-players.entity';
import { EStatsPeriod } from '../types/enums/stats-period.enum';

describe('PlayersService', () => {
  let service: PlayersService;
  let seasonPlayersRepo;
  let monthPlayersRepo;
  let weekPlayersRepo;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlayersService,
        {
          provide: getRepositoryToken(SeasonPlayersEntity),
          useFactory: mockRepository,
        },
        {
          provide: getRepositoryToken(MonthPlayersEntity),
          useFactory: mockRepository,
        },
        {
          provide: getRepositoryToken(WeekPlayersEntity),
          useFactory: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PlayersService>(PlayersService);
    seasonPlayersRepo = module.get(getRepositoryToken(SeasonPlayersEntity));
    monthPlayersRepo = module.get(getRepositoryToken(MonthPlayersEntity));
    weekPlayersRepo = module.get(getRepositoryToken(WeekPlayersEntity));
  });

  describe('getPlayersStats', () => {
    it('should return stats for season when period is EStatsPeriod.SEASON', async () => {
      const period = EStatsPeriod.SEASON;
      const options = {};

      service['getPlayersStatsForSeason'] = jest
        .fn()
        .mockResolvedValue([statsEntityMock]);

      const result = await service.getPlayersStats(period, options);

      expect(result).toEqual({ period, stats: [statsDtoMock] });
    });

    it('should return stats for month when period is EStatsPeriod.MONTH and monthId is provided', async () => {
      const period = EStatsPeriod.MONTH;
      const options = { monthId: 1 };

      service['getPlayersStatsForMonth'] = jest
        .fn()
        .mockResolvedValue([statsEntityMock]);

      const result = await service.getPlayersStats(period, options);

      expect(result).toEqual({ period, stats: [statsDtoMock] });
    });

    it('should return stats for week when period is EStatsPeriod.WEEK and weekId is provided', async () => {
      const period = EStatsPeriod.WEEK;
      const options = { weekId: 1 };

      service['getPlayersStatsForWeek'] = jest
        .fn()
        .mockResolvedValue([statsEntityMock]);

      const result = await service.getPlayersStats(period, options);

      expect(result).toEqual({ period, stats: [statsDtoMock] });
    });

    it('should theow error when period is wrong', async () => {
      const period = 'wrong';
      const options = { weekId: 1 };

      await expect(
        service.getPlayersStats(period as any, options),
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('getPlayersStatsForSeason', () => {
    it('should return all season players', async () => {
      const entities = [statsEntityMock];
      seasonPlayersRepo.createQueryBuilder.mockReturnValue({
        leftJoinAndSelect: jest.fn().mockReturnValue({
          leftJoinAndSelect: jest.fn().mockReturnValue({
            getMany: jest.fn().mockResolvedValue([statsEntityMock]),
          }),
        }),
      });

      const result = await service['getPlayersStatsForSeason']();
      expect(result).toEqual(entities);
    });
  });

  describe('getPlayersStatsForMonth', () => {
    it('should return all month players', async () => {
      const entities = [statsEntityMock];
      monthPlayersRepo.createQueryBuilder.mockReturnValue({
        leftJoinAndSelect: jest.fn().mockReturnValue({
          leftJoinAndSelect: jest.fn().mockReturnValue({
            where: jest.fn().mockReturnValue({
              getMany: jest.fn().mockResolvedValue([statsEntityMock]),
            }),
          }),
        }),
      });

      const result = await service['getPlayersStatsForMonth'](1);
      expect(result).toEqual(entities);
    });
  });

  describe('getPlayersStatsForWeek', () => {
    it('should return all week players', async () => {
      const entities = [statsEntityMock];
      weekPlayersRepo.createQueryBuilder.mockReturnValue({
        leftJoinAndSelect: jest.fn().mockReturnValue({
          leftJoinAndSelect: jest.fn().mockReturnValue({
            where: jest.fn().mockReturnValue({
              getMany: jest.fn().mockResolvedValue([statsEntityMock]),
            }),
          }),
        }),
      });

      const result = await service['getPlayersStatsForWeek'](1);
      expect(result).toEqual(entities);
    });
  });
});
