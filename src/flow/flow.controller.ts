import { Controller, Body, Post } from '@nestjs/common';
import { FlowPrams } from 'src/shared/params/flow.params';
import { FlowService } from './flow.service';
import { MonetaryAccountService } from 'src/monetary-account/monetary-account.service';
import { UserIdParams } from 'src/shared/params/userId.params';

@Controller('flow')
export class FlowController {
  constructor(
    private readonly flowService: FlowService,
    private readonly monetaryAccService: MonetaryAccountService,
  ) {}

  @Post()
  async postMonetaryAccounts(@Body() userId: FlowPrams): Promise<any> {
    var createUser: UserIdParams = {
      userId: userId.userId,
      currency: 'EUR',
      description: userId.description,
      dailyLimit: '1000',
      color: '#0099CC',
    };
    this.monetaryAccService.createMonetaryAccounts(createUser);
    // return await this.flowService.createFlow(userId);
  }
}
