import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { NodeRepository } from './repositories/node.repository';
import { GraphRepository } from './repositories/graph.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'admin',
      database: 'small-repro',
      entities: [`${__dirname}/**/*.entity.{ts,js}`],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([NodeRepository, GraphRepository]),
  ],
})
export class AppModule {}
