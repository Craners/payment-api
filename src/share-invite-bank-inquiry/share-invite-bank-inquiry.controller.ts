import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { ShareInviteBankInquiryService } from './share-invite-bank-inquiry.service';
import { ShareInviteBankInquiryParams } from 'src/shared/params/shareInviteBankInquiry.params';

@Controller('share-invite-bank-inquiry')
export class ShareInviteBankInquiryController {
  constructor(
    private readonly shareInviteBankInquiryService: ShareInviteBankInquiryService,
  ) {}

  @Post()
  async createShareInquiry(
    @Body() shareInviteBankInquiryParams: ShareInviteBankInquiryParams,
  ): Promise<any> {
    return await this.shareInviteBankInquiryService.createShareInquiry(
      shareInviteBankInquiryParams,
    );
  }
}
