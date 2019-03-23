import { ApiModelProperty } from '@nestjs/swagger';
import { CounterpartyAlias } from './counterPartyAlias.params';
import { Amount } from './amount.params';

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
