import { Module, Global } from '@nestjs/common';
import { ConfigModule } from '../shared/config/config.module';
import { BunqClientService } from './bunq-client.service';

@Global()
@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [BunqClientService],
  exports: [BunqClientService]
})
export class BunqClientModule {}
