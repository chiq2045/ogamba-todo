import { config } from 'dotenv';
import { Db, MongoClient } from 'mongodb';
import { MongoMemoryServer } from 'mongodb-memory-server';

config();

let database: Db | null = null;

export const prodDb = async () => {
  const { MONGO_URL: url } = process.env;
  const client = new MongoClient(url as string);
  await client.connect();

  return client.db();
};

export const devDb = async () => {
  const mongo = await MongoMemoryServer.create();
  const url = mongo.getUri();
  const client = new MongoClient(url);

  if (!database) {
    await client.connect();
    database = client.db();

    await database
      .collection('hello')
      .insertOne({ id: 0, message: 'Hello World' });

    await database.collection('instruments').insertMany([
      {
        completed: false,
        content: 'This is a test',
        timeTaken: 0,
        title: 'Test',
        working: false,
        tags: [],
      },
    ]);
  }
  return database;
};
