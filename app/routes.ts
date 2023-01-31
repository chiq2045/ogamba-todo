import { config } from 'dotenv';
import Router from '@koa/router';
import { prodDb, devDb } from './database';
import koaBody from 'koa-body';
import { ObjectId } from 'mongodb';
import { Todo } from 'types';

config();

const { NODE_ENV: nodeEnv = 'development' } = process.env;

const db = nodeEnv === 'development' ? devDb : prodDb;

const todoRouter = new Router({
  prefix: '/todos',
});

todoRouter
  .get('/', async (ctx) => {
    try {
      const todos = await db().then((v) =>
        v.collection('todos').find().toArray()
      );
      ctx.body = { data: todos };
    } catch (error) {
      console.error(error);
      ctx.body = { error };
      ctx.status = 400;
    }
  })
  .post('/', koaBody({ multipart: true }), async (ctx) => {
    const body = ctx.request.body as Pick<Todo, 'title' | 'content' | 'tags'>;
    const newTodo: Omit<Todo, 'id'> = {
      ...body,
      completed: false,
      working: false,
      timeTaken: 0,
    };

    try {
      await db().then((v) => v.collection('todos').insertOne(newTodo));
    } catch (error) {
      console.error(error);
      ctx.body = { error };
      ctx.status = 400;
    }
  })
  .get('/:todoId', async (ctx) => {
    const { todoId } = ctx.params;
    const objectId = new ObjectId(todoId);

    try {
      const todo = await db().then((v) =>
        v.collection('todos').findOne({ _id: { $eq: objectId } })
      );
      ctx.body = { data: [todo] };
    } catch (error) {
      console.error(error);
      ctx.body = { error };
      ctx.status = 400;
    }
  })
  .put('/:todoId', koaBody({ multipart: true }), async (ctx) => {
    const newTodo = ctx.request.body as Todo;
    const { todoId } = ctx.params;
    const objectId = new ObjectId(todoId);

    try {
      await db().then((v) =>
        v
          .collection('todos')
          .findOneAndUpdate(
            { _id: objectId },
            { $set: { ...newTodo, _id: objectId } }
          )
      );
    } catch (error) {
      console.error(error);
      ctx.body = { error };
      ctx.status = 400;
    }
  })
  .delete('/:todoId', async (ctx) => {
    const { todoId } = ctx.params;
    const objectId = new ObjectId(todoId);

    try {
      await db().then((v) =>
        v.collection('todos').findOneAndDelete({ _id: objectId })
      );
    } catch (error) {
      console.error(error);
      ctx.body = { error };
      ctx.status = 400;
    }
  });

export { todoRouter };
