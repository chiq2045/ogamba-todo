import { config } from 'dotenv'
import { Db, MongoClient } from 'mongodb'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { Todo } from 'types'
import { faker } from '@faker-js/faker'

config()

let database: Db | null = null

export const prodDb = async () => {
  const { MONGO_URL: url } = process.env
  const client = new MongoClient(url as string)
  await client.connect()

  return client.db()
}

const todoFactory = (): Todo => ({
  title: faker.lorem.text(),
  completed: false,
  due: faker.date.anytime().toISOString(),
})

export const devDb = async () => {
  const mongo = await MongoMemoryServer.create()
  const url = mongo.getUri()
  const client = new MongoClient(url)

  if (!database) {
    await client.connect()
    database = client.db()

    await database
      .collection('todos')
      .insertMany(Array.from({ length: 5 }).map(todoFactory))
  }
  return database
}
