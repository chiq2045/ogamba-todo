import { Todo } from '../../types'

interface Props {
  todo: Todo
  handleDelete: () => void
}
export const TodoTile = (props: Props) => {
  return (
    <div className="tile u-items-center mb-3">
      <div className="tile__container">
        <p className="tile__title m-0 u-text-no-wrap">{props.todo.title}</p>
      </div>
      <div className="tile__buttons">
        <button
          className="btn-transparent p-0"
          aria-label="Delete todo"
          onClick={props.handleDelete}
        >
          <span className="icon">
            <i className="fa fa-wrapper fa-trash" aria-hidden="true"></i>
          </span>
        </button>
      </div>
    </div>
  )
}
