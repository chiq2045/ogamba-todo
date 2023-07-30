import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import cors from '@koa/cors'

const app = new Koa()

app.use(logger())
app.use(cors())
app.use(json())

export { app }
