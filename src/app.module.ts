import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CronometroModule } from './cronometro/cronometro.module';
import { TodoModule } from './todo/todo.module';
@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'postgres',
      username: 'postgres',
      password: 'mari0001',
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
    }),
    CronometroModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
