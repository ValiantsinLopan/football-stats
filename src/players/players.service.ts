import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { GetStatsQueryDto } from './types/dtos/get-stats-query.dto';
import { StatsResponse } from './types/dtos/stats-response.dto';
import { BaseStatsEntity } from './types/entities/base-stats.entity';
import { MonthPlayersEntity } from './types/entities/month-players.entity';
import { SeasonPlayersEntity } from './types/entities/season-players.entity';
import { WeekPlayersEntity } from './types/entities/week-players.entity';
import { EStatsPeriod } from './types/enums/stats-period.enum';

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(SeasonPlayersEntity)
    private readonly seasonPlayersRepository: Repository<SeasonPlayersEntity>,
    @InjectRepository(MonthPlayersEntity)
    private readonly monthPlayersRepository: Repository<MonthPlayersEntity>,
    @InjectRepository(WeekPlayersEntity)
    private readonly weekPlayersRepository: Repository<WeekPlayersEntity>,
  ) {}

  public async getPlayersStats(
    period: EStatsPeriod,
    options: GetStatsQueryDto,
  ): Promise<StatsResponse> {
    let entities: BaseStatsEntity[];
    switch (period) {
      case EStatsPeriod.SEASON:
        entities = await this.getPlayersStatsForSeason();
        break;
      case EStatsPeriod.MONTH:
        entities = await this.getPlayersStatsForMonth(options.monthId);
        break;
      case EStatsPeriod.WEEK:
        entities = await this.getPlayersStatsForWeek(options.weekId);
        break;
      default:
        throw new BadRequestException('Wrong peiod provided');
    }

    const stats = entities.map((entity) => entity.mapToStatsDto());

    return {
      period,
      stats,
    };
  }

  private async getPlayersStatsForSeason() {
    const entities = await this.seasonPlayersRepository
      .createQueryBuilder('seasonPlayers')
      .leftJoinAndSelect('seasonPlayers.player', 'players')
      .leftJoinAndSelect('players.team', 'teams')
      .getMany();

    return entities;
  }

  private async getPlayersStatsForMonth(mounth: number) {
    const entities = await this.monthPlayersRepository
      .createQueryBuilder('monthPlayers')
      .leftJoinAndSelect('monthPlayers.player', 'players')
      .leftJoinAndSelect('players.team', 'teams')
      .where('monthPlayers.monthId = :mounth', { mounth })
      .getMany();

    return entities;
  }

  private async getPlayersStatsForWeek(week: number) {
    const entities = await this.weekPlayersRepository
      .createQueryBuilder('weekPlayers')
      .leftJoinAndSelect('weekPlayers.player', 'players')
      .leftJoinAndSelect('players.team', 'teams')
      .where('weekPlayers.weekId = :week', { week })
      .getMany();

    return entities;
  }
}
