import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentParams } from 'src/shared/params/payment.params';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Post()
  async getMonetaryAccounts(@Body() userId: PaymentParams): Promise<any> {
    return await this.paymentService.makePayment(userId);
  }
}
