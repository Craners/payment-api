import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MonetaryAccountPostParams } from 'src/shared/params/monetaryAccountPost.params';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';
import { DeleteParams } from 'src/shared/params/delete.params';
import { MonetaryAccountListParams } from 'src/shared/params/monetaryAccountList.params';
import { MonetaryAccountGetParams } from 'src/shared/params/monetaryAccountGet.params';

@Injectable()
export class MonetaryAccountService {
  constructor(private readonly authService: BunqClientService) {}

  async getMonetaryAccounts(
    monetaryAccountListParams: MonetaryAccountListParams,
  ): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.monetaryAccountBank.list(
          monetaryAccountListParams.userId,
        );

        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
        throw new HttpException(
          'Monetary-account list failed!',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  async getMonetaryAccount(
    monetaryAccountGetParams: MonetaryAccountGetParams,
    monetaryAccountListParams: MonetaryAccountListParams,
  ): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.monetaryAccountBank.get(
          monetaryAccountListParams.userId,
          monetaryAccountGetParams.accountId,
        );

        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
        throw new HttpException(
          'Monetary-account get failed!',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  async createMonetaryAccounts(
    monetaryAccountPostParams: MonetaryAccountPostParams,
  ): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.monetaryAccountBank.post(
          monetaryAccountPostParams.userId,
          monetaryAccountPostParams.currency,
          monetaryAccountPostParams.description,
          monetaryAccountPostParams.dailyLimit,
          monetaryAccountPostParams.color,
        );
        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
        throw new HttpException(
          'Monetary-account post failed!',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  async deleteMonetaryAccounts(userId: DeleteParams): Promise<any> {
    userId.status = 'CANCELLED';
    userId.sub_status = 'REDEMPTION_VOLUNTARY';

    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.monetaryAccountBank.putCancel(
          userId.userId,
          userId.accountId,
          userId.status,
          userId.sub_status,
          userId.reason,
        );

        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
        throw new HttpException(
          'Monetary-account delete failed!',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }
}
