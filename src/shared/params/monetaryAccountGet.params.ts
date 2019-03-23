import { ApiModelProperty } from '@nestjs/swagger';

export class MonetaryAccountGetParams {
  @ApiModelProperty()
  accountId: number;
}
