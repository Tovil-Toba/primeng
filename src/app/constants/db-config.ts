import { DBConfig } from 'ngx-indexed-db';

export const DB_CONFIG: DBConfig = {
  name: 'PrimeDb',
  version: 1,
  objectStoresMeta: [
    {
      store: 'settings',
      storeConfig: { keyPath: 'key', autoIncrement: false },
      storeSchema: [
        { name: 'value', keypath: 'value', options: { unique: false } }
      ]
    }
  ]
};
