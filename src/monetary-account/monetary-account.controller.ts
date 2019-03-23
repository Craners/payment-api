import { Controller, Get, Query, Post, Body, Put } from '@nestjs/common';
import { MonetaryAccountService } from './monetary-account.service';
import { UserIdParams } from 'src/shared/params/userId.params';
import { DeleteParams } from 'src/shared/params/delete.params';

@Controller('monetary-account')
export class MonetaryAccountController {
  constructor(
    private readonly monetaryAccountService: MonetaryAccountService,
  ) {}

  @Get()
  async getMonetaryAccounts(@Query() userId: UserIdParams): Promise<any> {
    return await this.monetaryAccountService.getMonetaryAccounts(userId);
  }

  @Post()
  async postMonetaryAccounts(@Body() userId: UserIdParams): Promise<any> {
    return await this.monetaryAccountService.createMonetaryAccounts(userId);
  }

  @Put()
  async puttMonetaryAccounts(@Body() userId: DeleteParams): Promise<any> {
    return await this.monetaryAccountService.deleteMonetaryAccounts(userId);
  }
}
