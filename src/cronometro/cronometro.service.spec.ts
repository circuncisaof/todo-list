import { Test, TestingModule } from '@nestjs/testing';
import { CronometroService } from './cronometro.service';

describe('CronometroService', () => {
  let service: CronometroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CronometroService],
    }).compile();

    service = module.get<CronometroService>(CronometroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
