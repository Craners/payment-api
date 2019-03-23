import { Test, TestingModule } from '@nestjs/testing';
import { MonetaryAccountModule } from './monetary-account.module';

describe('MonetaryAccount', () => {
  let provider: MonetaryAccountModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonetaryAccountModule],
    }).compile();

    provider = module.get<MonetaryAccountModule>(MonetaryAccountModule);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
