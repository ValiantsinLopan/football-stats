import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlayersModule } from './players/players.module';
import { MonthPlayersEntity } from './players/types/entities/month-players.entity';
import { PlayersEntity } from './players/types/entities/players.entity';
import { SeasonPlayersEntity } from './players/types/entities/season-players.entity';
import { TeamsEntity } from './players/types/entities/teams.entity';
import { WeekPlayersEntity } from './players/types/entities/week-players.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [
        PlayersEntity,
        TeamsEntity,
        WeekPlayersEntity,
        MonthPlayersEntity,
        SeasonPlayersEntity,
      ],
      synchronize: true,
    }),
    PlayersModule,
  ],
})
export class AppModule {}
