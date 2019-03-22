import { Test, TestingModule } from '@nestjs/testing';
import { MonetaryAccount } from './monetary-account';

describe('MonetaryAccount', () => {
  let provider: MonetaryAccount;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MonetaryAccount],
    }).compile();

    provider = module.get<MonetaryAccount>(MonetaryAccount);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
