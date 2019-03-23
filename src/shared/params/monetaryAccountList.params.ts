import { ApiModelProperty } from '@nestjs/swagger';

export class MonetaryAccountListParams {
  @ApiModelProperty()
  userId: number;
}
