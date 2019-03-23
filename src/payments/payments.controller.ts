import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentParams } from 'src/shared/params/payment.params';
import { ListPaymentParams } from 'src/shared/params/listPayment.params';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentService: PaymentsService) {}

  @Post()
  async makePayment(@Body() userId: PaymentParams): Promise<any> {
    return await this.paymentService.makePayment(userId);
  }

  @Get()
  async getPayment(@Query() userId: ListPaymentParams): Promise<any> {
    return await this.paymentService.getPayment(userId);
  }
}
