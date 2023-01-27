import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { StatsDto } from '../dtos/stats.dto';
import { PlayersEntity } from './players.entity';

export abstract class BaseStatsEntity {
  @PrimaryColumn({ type: 'int' })
  playerId: number;

  @ManyToOne(() => PlayersEntity)
  player: PlayersEntity;

  @Column({ type: 'int', nullable: true })
  points?: number;

  @Column({ type: 'int', nullable: true })
  starts?: number;

  @Column({ type: 'int', nullable: true })
  subs?: number;

  @Column({ type: 'int', nullable: true })
  goals?: number;

  @Column({ type: 'int', nullable: true })
  ownGoals?: number;

  @Column({ type: 'int', nullable: true })
  assists?: number;

  @Column({ type: 'int', nullable: true })
  concedes?: number;

  @Column({ type: 'int', nullable: true })
  cleansheets?: number;

  @Column({ type: 'int', nullable: true })
  redCards?: number;

  @Column({ type: 'int', nullable: true })
  yellowCards?: number;

  @Column({ type: 'int', nullable: true })
  penSaves?: number;

  @Column({ type: 'int', nullable: true })
  penMisses?: number;

  @Column({ type: 'int', nullable: true })
  savesTier1?: number;

  @Column({ type: 'int', nullable: true })
  savesTier2?: number;

  @Column({ type: 'int', nullable: true })
  passesTier1?: number;

  @Column({ type: 'int', nullable: true })
  passesTier2?: number;

  @Column({ type: 'int', nullable: true })
  tacklesTier1?: number;

  @Column({ type: 'int', nullable: true })
  tacklesTier2?: number;

  @Column({ type: 'int', nullable: true })
  shotsTier1?: number;

  @Column({ type: 'int', nullable: true })
  shotsTier2?: number;

  @Column({ type: 'int', nullable: true })
  motms?: number;

  @CreateDateColumn({ type: 'datetime' })
  added: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated: Date;

  public mapToStatsDto(): StatsDto {
    const stats = new StatsDto();
    stats.id = this.playerId;
    stats.firstName = this.player?.firstName;
    stats.lastName = this.player?.lastName;
    stats.position = this.player?.position;
    stats.teamName = this.player?.team?.name;

    stats.savesTier1 = this.savesTier1;
    stats.savesTier2 = this.savesTier2;
    stats.subs = this.subs;
    stats.motms = this.motms;
    stats.points = this.points;
    stats.redCards = this.redCards;
    stats.yellowCards = this.yellowCards;
    stats.concedes = this.concedes;
    stats.assists = this.assists;
    stats.shotsTier1 = this.shotsTier1;
    stats.shotsTier2 = this.shotsTier2;
    stats.starts = this.starts;
    stats.goals = this.goals;
    stats.tacklesTier1 = this.tacklesTier1;
    stats.tacklesTier2 = this.tacklesTier2;
    stats.ownGoals = this.ownGoals;
    stats.cleansheets = this.cleansheets;
    stats.penSaves = this.penSaves;
    stats.penMisses = this.penMisses;
    stats.passesTier1 = this.passesTier1;
    stats.passesTier2 = this.passesTier2;

    return stats;
  }
}
