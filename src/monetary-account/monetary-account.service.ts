import { Injectable } from '@nestjs/common';
import { UserIdParams } from 'src/shared/params/userId.params';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';
import { DeleteParams } from 'src/shared/params/delete.params';

@Injectable()
export class MonetaryAccountService {
  constructor(private readonly authService: BunqClientService) {}

  async getMonetaryAccounts(userId: UserIdParams): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.monetaryAccountBank.list(
          userId.userId,
        );

        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }

  async createMonetaryAccounts(userId: UserIdParams): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.monetaryAccountBank.post(
          userId.userId,
          userId.currency,
          userId.description,
          userId.dailyLimit,
          userId.color,
        );
        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
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
      });
  }
}
