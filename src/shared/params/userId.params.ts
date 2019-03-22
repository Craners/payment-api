import { ApiModelProperty } from '@nestjs/swagger';

export class UserIdParams {
  @ApiModelProperty()
  userId: number;
}
