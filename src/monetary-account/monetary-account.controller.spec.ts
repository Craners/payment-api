import { Test, TestingModule } from '@nestjs/testing';
import { MonetaryAccountController } from './monetary-account.controller';

describe('MonetaryAccount Controller', () => {
  let controller: MonetaryAccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MonetaryAccountController],
    }).compile();

    controller = module.get<MonetaryAccountController>(MonetaryAccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
