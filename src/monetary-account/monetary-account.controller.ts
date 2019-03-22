import { Controller, Get, Query } from '@nestjs/common';
import { MonetaryAccountService } from './monetary-account.service';
import { UserIdParams } from 'src/shared/params/userId.params';

@Controller('monetary-account')
export class MonetaryAccountController {
    constructor(private readonly monetaryAccountService: MonetaryAccountService) {}

    @Get()
    async getMonetaryAccounts(@Query() userId: UserIdParams) : Promise<any> {
        return await this.monetaryAccountService.getMonetaryAccounts(userId)
    }
}
