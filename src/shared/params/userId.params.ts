import { ApiModelProperty } from '@nestjs/swagger';

declare type AmountValue = string;

export class UserIdParams {
  @ApiModelProperty()
  userId: number;

  @ApiModelProperty()
  currency: string;

  @ApiModelProperty()
  description: string;

  @ApiModelProperty()
  dailyLimit: AmountValue;

  @ApiModelProperty()
  color: string;
}
