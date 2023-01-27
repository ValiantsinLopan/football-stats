import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { mockRepository } from '../../../test/repository/mock.repository';
import { PlayersController } from '../players.controller';
import { PlayersService } from '../players.service';
import { GetStatsParamDto } from '../types/dtos/get-stats-param.dto';
import { GetStatsQueryDto } from '../types/dtos/get-stats-query.dto';
import { MonthPlayersEntity } from '../types/entities/month-players.entity';
import { SeasonPlayersEntity } from '../types/entities/season-players.entity';
import { WeekPlayersEntity } from '../types/entities/week-players.entity';
import { EStatsPeriod } from '../types/enums/stats-period.enum';

describe('PlayersController', () => {
  let controller: PlayersController;
  let service: PlayersService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [PlayersController],
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
    controller = new PlayersController(service);
  });

  describe('getPlayersStats', () => {
    it('should return StatsResponse', async () => {
      const param = new GetStatsParamDto();
      param.period = EStatsPeriod.MONTH;

      const query = new GetStatsQueryDto();
      query.monthId = 9;

      const expectedResult = {
        period: EStatsPeriod.MONTH,
        stats: [],
      };

      jest.spyOn(service, 'getPlayersStats').mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(expectedResult);
        });
      });

      const result = await controller.getPlayersStats(param, query);

      expect(service.getPlayersStats).toHaveBeenCalledWith('month', query);
      expect(result).toEqual(expectedResult);
    });
  });
});
