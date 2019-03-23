import { Model } from 'mongoose';
import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { IExtraFieldsMonetaryAccount } from './interfaces/ExtraFieldsMonetaryAccount.interface';
import { ExtraFieldsMonetaryAccountDto } from './dto/ExtraFieldsMonetaryAccount.dto';
import { ExtraFieldsMonetaryAccountParams } from 'src/shared/params/extraFieldsMonetaryAccount.params';

@Injectable()
export class ExtraFieldsMonetaryAccountSchemaService {
  constructor(
    @Inject('ExtraFieldsMonetaryAccountSchemaModelToken')
    private readonly extraFieldsMonetaryAccountModel: Model<
      IExtraFieldsMonetaryAccount
    >,
  ) {}

  async create(
    extraFieldsMonetaryAccountDto: ExtraFieldsMonetaryAccountDto,
  ): Promise<any> {
    const extraFieldsMonetaryAccountWrapper = this.extraFieldsMonetaryAccountModel(
      extraFieldsMonetaryAccountDto,
    );
    return await extraFieldsMonetaryAccountWrapper.save();
  }

  async findByMonetaryAccountId(
    monetaryAccountId: ExtraFieldsMonetaryAccountParams,
  ): Promise<any> {
    return await this.extraFieldsMonetaryAccountModel.findOne({
      monetaryAccountId: monetaryAccountId.accountId,
    });
  }

  async removeShopByAccountId(
    monetaryAccountId: ExtraFieldsMonetaryAccountParams,
  ): Promise<boolean> {
    var res = await this.extraFieldsMonetaryAccountModel.deleteOne({
      monetaryAccountId: monetaryAccountId.accountId,
    });
    if (res.deletedCount > 0) {
      return true;
    }
    return false;
  }
}
