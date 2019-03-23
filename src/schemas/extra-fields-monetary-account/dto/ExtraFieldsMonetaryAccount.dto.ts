import { ApiModelProperty } from '@nestjs/swagger';

export class ExtraFieldsMonetaryAccountDto {
  @ApiModelProperty()
  readonly monetaryAccountId: string;
  @ApiModelProperty()
  readonly transactionLimit: string;
  @ApiModelProperty()
  readonly ownerId: string;
  @ApiModelProperty()
  readonly originalAccountId: string;
  @ApiModelProperty()
  readonly expirationDate: Date;
}
