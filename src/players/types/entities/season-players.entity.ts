import { Entity } from 'typeorm';
import { BaseStatsEntity } from './base-stats.entity';

@Entity('seasonPlayers')
export class SeasonPlayersEntity extends BaseStatsEntity {}
