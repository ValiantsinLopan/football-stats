import { Entity, PrimaryColumn } from 'typeorm';
import { BaseStatsEntity } from './base-stats.entity';

@Entity('monthPlayers')
export class MonthPlayersEntity extends BaseStatsEntity {
  @PrimaryColumn({ type: 'int' })
  monthId: number;
}
