import {
  PipeTransform,
  Injectable,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { GetStatsQueryDto } from '../types/dtos/get-stats-query.dto';
import { EStatsPeriod } from '../types/enums/stats-period.enum';

@Injectable()
export class GetStatsQueryValidationPipe implements PipeTransform {
  constructor(@Inject(REQUEST) protected readonly request) {}

  async transform(value: GetStatsQueryDto) {
    const period = this.request.params.period as EStatsPeriod;

    if (period && period !== EStatsPeriod.SEASON) {
      if (period === EStatsPeriod.WEEK && !value.weekId) {
        throw new BadRequestException('weekId is required for week period');
      }

      if (period === EStatsPeriod.MONTH && !value.monthId) {
        throw new BadRequestException('monthId is required for month period');
      }
    }

    const modelDataClass = plainToClass(GetStatsQueryDto, value);

    const errors = await validate(modelDataClass);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    return modelDataClass;
  }
}
