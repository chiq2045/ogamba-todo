import Koa from 'koa';
import logger from 'koa-logger';
import cors from '@koa/cors';
import json from 'koa-json';
import { todoRouter } from 'app/routes';

const app = new Koa();

app.use(logger());
app.use(cors());
app.use(json());
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());

export { app };
