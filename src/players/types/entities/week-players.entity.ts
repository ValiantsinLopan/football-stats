import { Entity, PrimaryColumn } from 'typeorm';
import { BaseStatsEntity } from './base-stats.entity';

@Entity('weekPlayers')
export class WeekPlayersEntity extends BaseStatsEntity {
  @PrimaryColumn({ type: 'int' })
  weekId: number;
}
