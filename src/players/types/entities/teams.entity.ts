import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('teams')
export class TeamsEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column({ unique: true, length: 45 })
  uuid: string;

  @Column({ length: 64, nullable: true })
  name?: string;

  @Column({ length: 64, nullable: true })
  shortName?: string;

  @Column({ length: 3, nullable: true })
  abbr?: string;

  @CreateDateColumn({ type: 'datetime' })
  added: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated: Date;
}
