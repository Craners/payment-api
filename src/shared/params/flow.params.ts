import { ApiModelProperty } from '@nestjs/swagger';

export class FlowPrams {
  @ApiModelProperty()
  userId: number;

  @ApiModelProperty()
  originalAcc: string;

  @ApiModelProperty()
  expiryDate: string;

  @ApiModelProperty()
  limit: string;

  @ApiModelProperty()
  description: string;
}
