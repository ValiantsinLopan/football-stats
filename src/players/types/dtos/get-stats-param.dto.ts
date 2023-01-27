import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { EStatsPeriod } from '../enums/stats-period.enum';

export class GetStatsParamDto {
  @IsEnum(EStatsPeriod)
  @ApiProperty({
    enum: EStatsPeriod,
    description: 'Time frame requested',
  })
  period: EStatsPeriod;
}
