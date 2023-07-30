import { config } from 'dotenv'
import Router from '@koa/router'
import { prodDb, devDb } from './database'
import koaBody from 'koa-body'
import { ObjectId } from 'mongodb'
import { Todo } from 'types'

config()

const { NODE_ENV: env = 'production' } = process.env
const devMode = env === 'development'
const db = devMode ? devDb : prodDb
const todoRouter = new Router({
  prefix: '/todos',
})

todoRouter
  .get('/', async (ctx) => {
    try {
      const data = await db().then((v) =>
        v.collection<Todo>('todos').find().toArray(),
      )
      const todos = new Map<string, Todo>()
      data.forEach((item) => {
        const { _id: id, ...todo } = item
        todos.set(id.toString(), todo)
      })
      ctx.body = { data: { todos } }
    } catch (e) {
      console.log(e)
      ctx.body = { message: 'Err', error: e }
      ctx.status = 400
    }
  })
  .post('/', koaBody({ multipart: true }), async (ctx) => {
    const { body: todo } = ctx.request

    try {
      const data = await db().then((v) =>
        v.collection<Todo>('todos').insertOne({
          ...todo,
          createdDate: Date.now().toString(),
          updatedDate: '',
        }),
      )
      if (!data.acknowledged) {
        throw Error('Todo not added. Write not acknowledged')
      }
      ctx.body = {
        message: 'Todo successfully added',
        data: { id: data.insertedId },
      }
    } catch (e) {
      console.log(e)
      ctx.body = { error: e }
      ctx.status = 400
    }
  })
  .get('/:id', async (ctx) => {
    const { id } = ctx.params
    const objectId = new ObjectId(id)

    try {
      const data = await db().then((v) =>
        v.collection<Todo>('todos').findOne({ _id: { $eq: objectId } }),
      )
      if (!data) {
        throw Error('Error getting todo. No data returned')
      }
      const { _id: id, ...todo } = data
      ctx.body = { data: { id, todo } }
    } catch (e) {
      console.log(e)
      ctx.body = { error: e }
      ctx.status = 400
    }
  })
  .put('/:id', koaBody({ multipart: true }), async (ctx) => {
    const { body: todo } = ctx.request
    const { id } = ctx.params
    const objectId = new ObjectId(id)

    try {
      const data = await db().then((v) =>
        v.collection('todos').findOneAndUpdate(
          { _id: objectId },
          {
            $set: {
              ...todo,
              updatedDate: Date.now().toString(),
              _id: objectId,
            },
          },
          {
            returnDocument: 'after',
          },
        ),
      )
      if (!data.value) {
        throw Error('Error updating todo. No data updated')
      }
      const { _id: id, ...updatedTodo } = data.value
      ctx.body = {
        message: 'Todo successfully updated',
        data: { id, todo: updatedTodo },
      }
    } catch (e) {
      console.log(e)
      ctx.body = { error: e }
      ctx.status = 400
    }
  })
  .del('/:id', async (ctx) => {
    const { id } = ctx.params
    const objectId = new ObjectId(id)

    try {
      const data = await db().then((v) =>
        v.collection('todos').findOneAndDelete({ _id: objectId }),
      )
      if (!data.value) {
        throw Error('Error updating todo. No data deleted')
      }
      ctx.body = { message: 'Todo successfully deleted', data: null }
    } catch (e) {
      console.log(e)
      ctx.body = { error: e }
      ctx.status = 400
    }
  })

export { todoRouter }
