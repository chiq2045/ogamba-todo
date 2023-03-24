import { createServer, Factory, Model, Registry } from 'miragejs';
import { ModelDefinition } from 'miragejs/-types';
import Schema from 'miragejs/orm/schema';
import { Todo } from '../../types';

const TodoModel: ModelDefinition<Todo> = Model.extend({});
const models = {
  todo: TodoModel,
};

const todoFactory = Factory.extend<Todo>({
  id(n) {
    return n.toString();
  },
  title(n) {
    return `Todo ${n}`;
  },
  completed: false,
  moreInfo(n) {
    return n % 2 === 1 ? 'More info about todo' : '';
  },
});
const factories = {
  todo: todoFactory,
};

type AppSchema = Schema<Registry<typeof models, typeof factories>>;

export default function () {
  return createServer({
    models,
    factories,
    seeds(server) {
      server.create('todo', { title: 'Move WiFi to new place' });
      server.create('todo', {
        title: 'Message Jeff and Trent about address',
        moreInfo:
          'Do we pay electricity bill for 585B too? How are they differentiated?',
      });
      server.create('todo', { title: 'Message Jeff and Trent about USCIS' });
    },
    routes() {
      this.get('/api/todos', (schema: AppSchema) => {
        return schema.all('todo');
      });
    },
  });
}
