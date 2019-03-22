import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/shared/config/config.service';
import * as path from 'path';

const BunqJSClient = require('@bunq-community/bunq-js-client/dist/BunqJSClient').default;
const customStore = require('@bunq-community/bunq-js-client/dist/Stores/JSONFileStore').default;

@Injectable()
export class BunqClientService {
  private PERMITTED_IPS: any;
  private DEVICE_NAME: string;
  private API_KEY: string;
  private ENVIRONMENT: string;
  private ENCRYPTION_KEY: string;

  constructor(config?: ConfigService) {
    this.PERMITTED_IPS = config.get('PERMITTED_IPS')
      ? config.get('PERMITTED_IPS').split(',')
      : [];
    this.DEVICE_NAME = config.get('DEVICE_NAME');
    this.API_KEY = config.get('API_KEY');
    this.ENVIRONMENT = config.get('ENVIRONMENT');
    this.ENCRYPTION_KEY = config.get('ENCRYPTION_KEY');
  }

  async getBunqClient(): Promise<any> {
    // setup a new store instance
    const customStoreInstance = customStore(
      `${__dirname}${path.sep}storage.json`,
    );  

    const defaultErrorLogger = error => {
      if (error.response) {
        throw error.response.data;
      }
      throw error;
    };

    // setup a bunqClient
    const BunqClient = new BunqJSClient(customStoreInstance);

    // load and refresh bunq client
    await BunqClient.run(
      this.API_KEY,
      this.PERMITTED_IPS,
      this.ENVIRONMENT,
      this.ENCRYPTION_KEY,
    ).catch(exception => {
      throw exception;
    });

    // disable keep-alive since the server will stay online without the need for a constant active session
    BunqClient.setKeepAlive(false);

    // create/re-use a system installation
    await BunqClient.install().catch(defaultErrorLogger);

    // create/re-use a device installation
    await BunqClient.registerDevice(this.DEVICE_NAME).catch(
      defaultErrorLogger,
    );

    // create/re-use a bunq session installation
    await BunqClient.registerSession().catch(defaultErrorLogger);

    return BunqClient;
  }
}
