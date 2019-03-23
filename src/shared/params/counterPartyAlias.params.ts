import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CounterpartyAlias {
  @ApiModelProperty({ enum: ['EMAIL', 'PHONE_NUMBER', 'IBAN'] })
  type: string;
  @ApiModelProperty()
  value: string;
  @ApiModelPropertyOptional()
  name?: string;
}
