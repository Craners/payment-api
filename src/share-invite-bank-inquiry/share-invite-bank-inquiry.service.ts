import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { BunqClientService } from 'src/bunq-client/bunq-client.service';
import { ShareInviteBankInquiryParams } from 'src/shared/params/shareInviteBankInquiry.params';

@Injectable()
export class ShareInviteBankInquiryService {
  constructor(private readonly bunqClientService: BunqClientService) {}

  async createShareInquiry(
    shareInviteBankInquiryParams: ShareInviteBankInquiryParams,
  ): Promise<any> {
    return await this.bunqClientService
      .getBunqClient()
      .then(async bunqclient => {
        let share = await bunqclient.api.shareInviteBankInquiry.post(
          shareInviteBankInquiryParams.userId,
          shareInviteBankInquiryParams.monetaryAccountId,
          shareInviteBankInquiryParams.counterPartyAlias,
          shareInviteBankInquiryParams.shareDetail,
        );

        return share;
      })
      .catch(error => {
        console.log(error.response.data);
        throw new HttpException(
          "Share-identity shit doesn't work.",
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      });
  }
}
