import { ApiModelProperty } from '@nestjs/swagger';

declare type AmountValue = string;

export class Amount {
  @ApiModelProperty()
  value: AmountValue;
  @ApiModelProperty()
  currency: string;
}
