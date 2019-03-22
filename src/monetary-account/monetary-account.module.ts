import { Module } from '@nestjs/common';
import { MonetaryAccountController } from './monetary-account.controller';
import { MonetaryAccountService } from './monetary-account.service';

@Module({
  imports: [],
  controllers: [MonetaryAccountController],
  providers: [MonetaryAccountService],
})
export class MonetaryAccountModule {}