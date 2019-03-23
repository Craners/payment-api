import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';
import { async } from 'rxjs/internal/scheduler/async';

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
        throw new HttpException(
          'Get users failed!',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }

  async createSandboxUser(): Promise<any> {
    return await this.bunqClientService
      .getBunqClient()
      .then(async bunqClient => {
        let newUser = await bunqClient.api.sandboxUser.post();
        return newUser;
      })
      .catch(error => {
        console.log(error.response.data);
        throw new HttpException(
          'Get users failed!',
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }
}
