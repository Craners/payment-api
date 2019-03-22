import { Injectable } from '@nestjs/common';
import { UserIdParams } from 'src/shared/params/userId.params';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';

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

    // return await this.authService.getBunqClient().then(async bunqClient => {
    //   let users = await bunqClient.getUsers(true);
    //   return users;
    // });
  }
}
