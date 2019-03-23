import { Document } from 'mongoose';

export interface IExtraFieldsMonetaryAccount extends Document {
  readonly monetaryAccountId: string;
  readonly transactionLimit: string;
  readonly ownerId: string;
  readonly originalAccountId: string;
}
