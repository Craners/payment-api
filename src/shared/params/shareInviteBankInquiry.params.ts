import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { Amount } from './amount.params';
import { CounterpartyAlias } from './counterPartyAlias.params';

class ShareInviteBankInquiryPostShareDetailPaymentBudget {
  @ApiModelProperty()
  amount: Amount;
  @ApiModelProperty({ enum: ['DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY'] })
  frequency: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
}

class ShareInviteBankInquiryPostShareDetailPayment {
  @ApiModelPropertyOptional()
  make_payments?: boolean;
  @ApiModelPropertyOptional()
  make_draft_payments?: boolean;
  @ApiModelPropertyOptional()
  view_balance?: boolean;
  @ApiModelPropertyOptional()
  view_old_events?: boolean;
  @ApiModelPropertyOptional()
  view_new_events?: boolean;
  @ApiModelPropertyOptional()
  budget?: ShareInviteBankInquiryPostShareDetailPaymentBudget;
}

class ShareInviteBankInquiryPostShareDetailReadOnly {
  @ApiModelPropertyOptional()
  view_balance?: boolean;
  @ApiModelPropertyOptional()
  view_old_events?: boolean;
  @ApiModelPropertyOptional()
  view_new_events?: boolean;
}
class ShareInviteBankInquiryPostShareDetailDraftPayment {
  @ApiModelPropertyOptional()
  make_draft_payments?: boolean;
  @ApiModelPropertyOptional()
  view_balance?: boolean;
  @ApiModelPropertyOptional()
  view_old_events?: boolean;
  @ApiModelPropertyOptional()
  view_new_events?: boolean;
}
class ShareInviteBankInquiryPostShareDetail {
  @ApiModelPropertyOptional()
  ShareDetailPayment?: ShareInviteBankInquiryPostShareDetailPayment;
  @ApiModelPropertyOptional()
  ShareDetailReadOnly?: ShareInviteBankInquiryPostShareDetailReadOnly;
  @ApiModelPropertyOptional()
  ShareDetailDraftPayment?: ShareInviteBankInquiryPostShareDetailDraftPayment;
}

export class ShareInviteBankInquiryParams {
  @ApiModelProperty()
  userId: number;
  @ApiModelProperty()
  monetaryAccountId: number;
  @ApiModelProperty()
  counterPartyAlias: CounterpartyAlias;
  @ApiModelProperty()
  shareDetail: ShareInviteBankInquiryPostShareDetail;
}
