import { Test, TestingModule } from '@nestjs/testing';
import { BasespruebacionController } from './basespruebacion.controller';
import { BasespruebacionService } from './basespruebacion.service';

describe('BasespruebacionController', () => {
  let controller: BasespruebacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasespruebacionController],
      providers: [BasespruebacionService],
    }).compile();

    controller = module.get<BasespruebacionController>(BasespruebacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
