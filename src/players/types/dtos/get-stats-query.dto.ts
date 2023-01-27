import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsInt, IsOptional, Max, Min } from 'class-validator';

export class GetStatsQueryDto {
  @Transform(({ value }) => parseInt(value, 10))
  @ApiProperty({
    required: false,
    description:
      "When period set to 'week' - specifies the ID of the week to return",
  })
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(8)
  weekId?: number;

  @Transform(({ value }) => parseInt(value, 10))
  @ApiProperty({
    required: false,
    description:
      "When period set to 'month' - specifies the ID of the month to return",
  })
  @IsOptional()
  @IsInt()
  @Min(9)
  @Max(11)
  monthId?: number;
}
