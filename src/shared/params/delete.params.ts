import { ApiModelProperty } from '@nestjs/swagger';

export class DeleteParams {
  @ApiModelProperty()
  userId: number;

  @ApiModelProperty()
  accountId: number;

  @ApiModelProperty()
  status: string;

  @ApiModelProperty()
  sub_status: string;

  @ApiModelProperty()
  reason: string;
}
