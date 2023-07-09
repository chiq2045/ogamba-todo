import { Todo } from '../../types'

interface Props {
  updateTodos: (newTodo: Todo) => void
  onClose: () => void
}
export const AddTodoModal = (props: Props) => {
  return (
    <div className="modal" id="add-todo-modal">
      <a href="/#" className="close-btn modal-overlay" aria-label="Close" />
      <div className="modal-content">
        <div className="modal-header">Header</div>
        <div className="modal-body">Body</div>
        <div className="modal-footer">Footer</div>
      </div>
    </div>
  )
}
