import { BadRequestException } from '@nestjs/common';
import { GetStatsQueryDto } from '../../types/dtos/get-stats-query.dto';
import { EStatsPeriod } from '../../types/enums/stats-period.enum';
import { GetStatsQueryValidationPipe } from '../get-stats-query-validation.pipe';

describe('GetStatsQueryValidationPipe', () => {
  it('should return a class instance when validation passes', async () => {
    const pipe = new GetStatsQueryValidationPipe({
      params: { period: EStatsPeriod.WEEK },
    });
    const data = {
      weekId: 1,
    };
    const result = await pipe.transform(data);
    expect(result).toBeInstanceOf(GetStatsQueryDto);
  });

  it('should throw a BadRequestException when weekId is wrong for week period', async () => {
    const data = {
      weekId: 'wrong',
    };
    const pipe = new GetStatsQueryValidationPipe({
      params: { period: EStatsPeriod.WEEK },
    });
    await expect(pipe.transform(data as any)).rejects.toThrow(
      BadRequestException,
    );
  });

  it('should throw a BadRequestException when weekId is missing for week period', async () => {
    const data = {};
    const pipe = new GetStatsQueryValidationPipe({
      params: { period: EStatsPeriod.WEEK },
    });
    await expect(pipe.transform(data)).rejects.toThrow(BadRequestException);
  });

  it('should throw a BadRequestException when monthId is missing for month period', async () => {
    const data = {};
    const pipe = new GetStatsQueryValidationPipe({
      params: { period: EStatsPeriod.MONTH },
    });
    await expect(pipe.transform(data)).rejects.toThrow(BadRequestException);
  });
});
