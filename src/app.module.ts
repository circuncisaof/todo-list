import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CronometroModule } from './cronometro/cronometro.module';
@Module({
  imports: [
    TodoModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: Number(process.env.PORT),
      database: process.env.DATABASE,
      username: process.env.USER,
      password: process.env.PASSWORD,
      synchronize: true,
      logging: false,
      entities: [__dirname + '/**/*.entity{.js, .ts}'],
    }),
    CronometroModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
