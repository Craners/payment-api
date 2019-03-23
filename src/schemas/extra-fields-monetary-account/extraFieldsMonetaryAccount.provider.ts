import { Connection } from 'mongoose';
import { ExtraFieldsMonetaryAccountSchema } from './schemas/ExtraFieldsMonetaryAccount.schema';

export const extraFieldsMonetaryAccountsProviders = [
  {
    provide: 'ExtraFieldsMonetaryAccountSchemaModelToken',
    useFactory: (connection: Connection) =>
      connection.model(
        'ExtraFieldsMonetaryAccount',
        ExtraFieldsMonetaryAccountSchema,
      ),
    inject: ['DbConnectionToken'],
  },
];
