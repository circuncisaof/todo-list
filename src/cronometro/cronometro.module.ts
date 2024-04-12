import { Module } from '@nestjs/common';
import { CronometroService } from './cronometro.service';
import { CronometroController } from './cronometro.controller';

@Module({
  controllers: [CronometroController],
  providers: [CronometroService],
})
export class CronometroModule {}
