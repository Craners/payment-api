import * as mongoose from 'mongoose';

export const ExtraFieldsMonetaryAccountSchema = new mongoose.Schema({
  monetaryAccountId: { type: String, required: true },
  transactionLimit: { type: String, required: true },
  ownerId: { type: String, required: true },
  originalAccountId: { type: String, required: true },
});
