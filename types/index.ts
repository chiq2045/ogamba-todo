export type Todo = {
  title: string
  subtitle?: string
  completed: boolean
  due: string
}

export type TodoWithId = Todo & {
  id: string
}
