import { config } from 'dotenv';
import { MongoClient } from 'mongodb';

config();

export const db = async () => {
  const { MONGO_URL: url } = process.env;
  const client = new MongoClient(url as string);
  await client.connect();

  return client.db();
};
