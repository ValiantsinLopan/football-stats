import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersController } from './players.controller';
import { PlayersService } from './players.service';
import { MonthPlayersEntity } from './types/entities/month-players.entity';
import { PlayersEntity } from './types/entities/players.entity';
import { SeasonPlayersEntity } from './types/entities/season-players.entity';
import { TeamsEntity } from './types/entities/teams.entity';
import { WeekPlayersEntity } from './types/entities/week-players.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PlayersEntity,
      TeamsEntity,
      WeekPlayersEntity,
      MonthPlayersEntity,
      SeasonPlayersEntity,
    ]),
  ],
  controllers: [PlayersController],
  providers: [PlayersService],
  exports: [PlayersService],
})
export class PlayersModule {}
