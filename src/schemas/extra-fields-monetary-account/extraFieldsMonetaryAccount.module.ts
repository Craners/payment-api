import { Module } from '@nestjs/common';
import { extraFieldsMonetaryAccountsProviders } from './extraFieldsMonetaryAccount.provider';
import { ExtraFieldsMonetaryAccountSchemaService } from './extraFieldsMonetaryAccount.service';
import { ExtraFieldsMonetaryAccountController } from './extraFieldsMonetaryAccount.controller';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [ExtraFieldsMonetaryAccountController],
  providers: [
    ExtraFieldsMonetaryAccountSchemaService,
    ...extraFieldsMonetaryAccountsProviders,
  ],
})
export class ExtraFieldsMonetaryAccountModule {}
