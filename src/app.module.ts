import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MonetaryAccountModule } from './monetary-account/monetary-account.module';
import { ConfigModule } from './shared/config/config.module';
import { BunqClientModule } from './bunq-client/bunq-client.module';
import { PaymentsModule } from './payments/payments.module';
import { UserModule } from './user/user.module';
import { ExtraFieldsMonetaryAccountModule } from './schemas/extra-fields-monetary-account/extraFieldsMonetaryAccount.module';
import { ShareInviteBankInquiryModule } from './share-invite-bank-inquiry/share-invite-bank-inquiry.module';

@Module({
  imports: [
    ConfigModule,
    BunqClientModule,
    MonetaryAccountModule,
    UserModule,
    ExtraFieldsMonetaryAccountModule,
    PaymentsModule,
    ShareInviteBankInquiryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
