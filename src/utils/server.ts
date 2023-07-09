import { createServer, Factory, Model } from 'miragejs'
import { ModelDefinition, Registry } from 'miragejs/-types'
import Schema from 'miragejs/orm/schema'
import { nanoid } from 'nanoid'
import { Todo } from '../../types'
import { apiUrl } from './constants'

const TodoModel: ModelDefinition<Todo> = Model.extend({})
const models = {
  todo: TodoModel,
}

const todoFactory = Factory.extend<Todo>({
  id() {
    return nanoid()
  },
  title(n) {
    return `Todo ${n}`
  },
})
const factories = {
  todo: todoFactory,
}

type AppSchema = Schema<Registry<typeof models, typeof factories>>

export default function () {
  return createServer({
    models,
    factories,
    seeds(server) {
      server.create('todo', { title: 'Move WiFi to new place' })
      server.create('todo', { title: 'Message Jeff and Trent about address' })
      server.create('todo', { title: 'Message Jeff and Trent about USCIS' })
    },
    routes() {
      this.get(apiUrl)
      this.delete(`${apiUrl}/:id`)
      this.post(apiUrl, (schema: AppSchema, request) => {
        const { title } = JSON.parse(request.requestBody)
        console.log(title)
        return schema.create('todo', { id: nanoid(), title })
      })
    },
  })
}
