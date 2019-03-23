import { Module } from '@nestjs/common';
import { FlowController } from './flow.controller';
import { FlowService } from './flow.service';
import { MonetaryAccountService } from 'src/monetary-account/monetary-account.service';

@Module({
  imports: [MonetaryAccountService],
  controllers: [FlowController],
  providers: [FlowService],
})
export class FlowModule {}
