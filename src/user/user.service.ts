import { Injectable } from '@nestjs/common';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';

@Injectable()
export class UserService {
  constructor(private readonly bunqClientService: BunqClientService) {}

  async getUsers(): Promise<any> {
    return await this.bunqClientService
      .getBunqClient()
      .then(async bunqClient => {
        let users = await bunqClient.getUsers(true);
        return users;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
}
