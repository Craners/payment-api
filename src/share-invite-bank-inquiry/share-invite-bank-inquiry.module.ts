import { Module } from '@nestjs/common';
import { ShareInviteBankInquiryController } from './share-invite-bank-inquiry.controller';
import { ShareInviteBankInquiryService } from './share-invite-bank-inquiry.service';

@Module({
  imports: [],
  controllers: [ShareInviteBankInquiryController],
  providers: [ShareInviteBankInquiryService],
  exports: [ShareInviteBankInquiryService],
})
export class ShareInviteBankInquiryModule {}
