import { ApiModelProperty } from '@nestjs/swagger';

declare type AmountValue = string;

declare type Amount = {
  value: AmountValue;
  currency: string;
};

declare type CounterpartyAlias = {
  type: string;
  value: string;
  name?: string;
};

export class PaymentParams {
  @ApiModelProperty()
  userId: string;

  @ApiModelProperty()
  monetaryAccountId: string;

  @ApiModelProperty()
  description: string;

  @ApiModelProperty()
  amount: Amount;

  @ApiModelProperty()
  counterpartyAlias: CounterpartyAlias;
}
