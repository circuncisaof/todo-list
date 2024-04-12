import { Test, TestingModule } from '@nestjs/testing';
import { CronometroController } from './cronometro.controller';
import { CronometroService } from './cronometro.service';

describe('CronometroController', () => {
  let controller: CronometroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CronometroController],
      providers: [CronometroService],
    }).compile();

    controller = module.get<CronometroController>(CronometroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
