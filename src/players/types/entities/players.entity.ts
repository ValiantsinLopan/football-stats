import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { EPlayerPosition } from '../enums/player-position.enum';
import { TeamsEntity } from './teams.entity';

@Entity('players')
export class PlayersEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ unique: true, length: 45 })
  uuid: string;

  @Column({ type: 'int', nullable: true })
  teamId?: number;

  @ManyToOne(() => TeamsEntity, { nullable: true })
  team?: TeamsEntity;

  @Column({ length: 128, nullable: true })
  firstName?: string;

  @Column({ length: 128, nullable: true })
  lastName?: string;

  @Column({ type: 'enum', enum: EPlayerPosition, nullable: true })
  position?: EPlayerPosition;

  @CreateDateColumn({ type: 'datetime' })
  added: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated: Date;
}
