import { ApiProperty } from '@nestjs/swagger';
import { EStatsPeriod } from '../enums/stats-period.enum';
import { IStatsResponse } from '../interfaces/stats-response.interface';
import { StatsDto } from './stats.dto';

export class StatsResponse implements IStatsResponse {
  @ApiProperty({
    description: 'Which period are the stats for',
    enum: EStatsPeriod,
  })
  period: EStatsPeriod;

  @ApiProperty({
    description: 'Stats for selected period',
    type: StatsDto,
    isArray: true,
  })
  stats: StatsDto[];
}
