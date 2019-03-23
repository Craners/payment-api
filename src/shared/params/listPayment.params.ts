import { ApiModelProperty } from '@nestjs/swagger';

export class ListPaymentParams {
  @ApiModelProperty()
  userId: number;
  @ApiModelProperty()
  monetaryAccountId: number;
}
