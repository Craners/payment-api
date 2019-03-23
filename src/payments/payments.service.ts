import { Injectable } from '@nestjs/common';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';
import { PaymentParams } from 'src/shared/params/payment.params';
import { ListPaymentParams } from 'src/shared/params/listPayment.params';

@Injectable()
export class PaymentsService {
  async getPayment(userId: ListPaymentParams): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.payment.list(
          userId.userId,
          userId.monetaryAccountId,
        );

        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
  constructor(private readonly authService: BunqClientService) {}

  async makePayment(userId: PaymentParams): Promise<any> {
    return await this.authService
      .getBunqClient()
      .then(async bunqclient => {
        let accounts = await bunqclient.api.payment.post(
          userId.userId,
          userId.monetaryAccountId,
          userId.description,
          userId.amount,
          userId.counterpartyAlias,
        );

        return accounts;
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }
}
