import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  Query,
  Delete,
} from '@nestjs/common';
import { ExtraFieldsMonetaryAccountSchemaService } from './extraFieldsMonetaryAccount.service';
import { ExtraFieldsMonetaryAccountDto } from './dto/ExtraFieldsMonetaryAccount.dto';
import { ExtraFieldsMonetaryAccountParams } from 'src/shared/params/extraFieldsMonetaryAccount.params';

@Controller('extra-fields-monetary-account')
export class ExtraFieldsMonetaryAccountController {
  constructor(
    private readonly extraFieldsMonetaryAccountService: ExtraFieldsMonetaryAccountSchemaService,
  ) {}

  @Post()
  async create(@Body() object: ExtraFieldsMonetaryAccountDto) {
    await this.extraFieldsMonetaryAccountService.create(object);
  }

  @Get()
  async findObjById(
    @Query() params: ExtraFieldsMonetaryAccountParams,
  ): Promise<ExtraFieldsMonetaryAccountDto> {
    return await this.extraFieldsMonetaryAccountService.findByMonetaryAccountId(
      params,
    );
  }

  @Delete()
  async removeById(
    @Query() params: ExtraFieldsMonetaryAccountParams,
  ): Promise<boolean> {
    return await this.extraFieldsMonetaryAccountService.removeShopByAccountId(
      params,
    );
  }
}
