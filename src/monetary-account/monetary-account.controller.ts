import { Controller, Get, Query, Post, Body, Put, Param } from '@nestjs/common';
import { MonetaryAccountService } from './monetary-account.service';
import { MonetaryAccountPostParams } from 'src/shared/params/monetaryAccountPost.params';
import { DeleteParams } from 'src/shared/params/delete.params';
import { MonetaryAccountListParams } from 'src/shared/params/monetaryAccountList.params';
import { MonetaryAccountGetParams } from 'src/shared/params/monetaryAccountGet.params';

@Controller('monetary-account')
export class MonetaryAccountController {
  constructor(
    private readonly monetaryAccountService: MonetaryAccountService,
  ) {}
  MonetaryAccountPostParams;

  @Get(':accountId')
  async getMonetaryAccount(
    @Param() monetaryAccountGetParams: MonetaryAccountGetParams,
    @Query() monetaryAccountListParams: MonetaryAccountListParams,
  ): Promise<any> {
    return await this.monetaryAccountService.getMonetaryAccount(
      monetaryAccountGetParams,
      monetaryAccountListParams,
    );
  }

  @Get()
  async getMonetaryAccounts(
    @Query() monetaryAccountGetParams: MonetaryAccountListParams,
  ): Promise<any> {
    return await this.monetaryAccountService.getMonetaryAccounts(
      monetaryAccountGetParams,
    );
  }

  @Post()
  async postMonetaryAccounts(
    @Body() monetaryAccountPostParams: MonetaryAccountPostParams,
  ): Promise<any> {
    return await this.monetaryAccountService.createMonetaryAccounts(
      monetaryAccountPostParams,
    );
  }

  @Put()
  async puttMonetaryAccounts(@Body() userId: DeleteParams): Promise<any> {
    return await this.monetaryAccountService.deleteMonetaryAccounts(userId);
  }
}
