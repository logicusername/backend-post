import { Test, TestingModule } from '@nestjs/testing';
import { BasespruebacionService } from './basespruebacion.service';

describe('BasespruebacionService', () => {
  let service: BasespruebacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasespruebacionService],
    }).compile();

    service = module.get<BasespruebacionService>(BasespruebacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
