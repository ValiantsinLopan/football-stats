import { Controller, Get, Param, Query, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { GetStatsQueryValidationPipe } from './pipes/get-stats-query-validation.pipe';
import { PlayersService } from './players.service';
import { GetStatsParamDto } from './types/dtos/get-stats-param.dto';
import { GetStatsQueryDto } from './types/dtos/get-stats-query.dto';
import { StatsResponse } from './types/dtos/stats-response.dto';

@Controller('players')
export class PlayersController {
  constructor(private playersService: PlayersService) {}

  @Get('/stats/:period')
  @ApiResponse({ status: 200, type: StatsResponse })
  public async getPlayersStats(
    @Param(ValidationPipe) param: GetStatsParamDto,
    @Query(GetStatsQueryValidationPipe) query: GetStatsQueryDto,
  ) {
    return await this.playersService.getPlayersStats(param.period, query);
  }
}
