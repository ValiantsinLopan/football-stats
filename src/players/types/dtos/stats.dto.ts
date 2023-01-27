import { ApiProperty } from '@nestjs/swagger';
import { EPlayerPosition } from '../enums/player-position.enum';
import { IStats } from '../interfaces/stats.interface';

export class StatsDto implements IStats {
  @ApiProperty({
    description: 'Player identifier',
  })
  id: number;

  @ApiProperty({
    description: 'Player first name - empty string for someone like Willian',
  })
  firstName: string;

  @ApiProperty({
    description: 'Player last name',
  })
  lastName: string;

  @ApiProperty({
    enum: EPlayerPosition,
    description: 'Player position',
  })
  position: string;

  @ApiProperty({
    description: 'Name of the players current team',
  })
  teamName: string;

  @ApiProperty({
    description: 'Players save bonus tier 1 in the requested period',
  })
  savesTier1?: number;

  @ApiProperty({
    description: 'Players save bonus tier 2 in the requested period',
  })
  savesTier2?: number;

  @ApiProperty({
    description: 'Players substitute appearances in the requested period',
  })
  subs?: number;

  @ApiProperty({
    description: 'Players man of the match awards in the requested period',
  })
  motms?: number;

  @ApiProperty({
    description: 'Players points scored in the requested period',
  })
  points?: number;

  @ApiProperty({
    description: 'Players red cards received in the requested period',
  })
  redCards?: number;

  @ApiProperty({
    description: 'Players yellow cards received in the requested period',
  })
  yellowCards?: number;

  @ApiProperty({
    description: 'Players goals conceded in the requested period',
  })
  concedes?: number;

  @ApiProperty({
    description: 'Players assists in the requested period',
  })
  assists?: number;

  @ApiProperty({
    description: 'Players shots bonus tier 1 in the requested period',
  })
  shotsTier1?: number;

  @ApiProperty({
    description: 'Players shots bonus tier 2 in the requested period',
  })
  shotsTier2?: number;

  @ApiProperty({
    description: 'Players match starts in the requested period',
  })
  starts?: number;

  @ApiProperty({
    description: 'Players match starts in the requested period',
  })
  goals?: number;

  @ApiProperty({
    description: 'Players tackles bonus tier 1 in the requested period',
  })
  tacklesTier1?: number;

  @ApiProperty({
    description: 'Players tackles bonus tier 2 in the requested period',
  })
  tacklesTier2?: number;

  @ApiProperty({
    description: 'Players own goals scored in the requested period',
  })
  ownGoals?: number;

  @ApiProperty({
    description: 'Players cleansheets in the requested period',
  })
  cleansheets?: number;

  @ApiProperty({
    description: 'Players penalty saves in the requested period',
  })
  penSaves?: number;

  @ApiProperty({
    description: 'Players penalties missed in the requested period',
  })
  penMisses?: number;

  @ApiProperty({
    description: 'Players passes bonus tier 1 in the requested period',
  })
  passesTier1?: number;

  @ApiProperty({
    description: 'Players passes bonus tier 2 in the requested period',
  })
  passesTier2?: number;
}
