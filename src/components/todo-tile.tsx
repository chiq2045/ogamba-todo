import { Todo } from '../../types';

interface Props {
  todo: Todo;
}
export const TodoTile = (props: Props) => {
  return (
    <>
      <div className='tile u-items-center mb-3'>
        <div className='tile__container'>
          <p className='tile__title m-0 u-text-no-wrap'>{props.todo.title}</p>
          <p className='tile__subtitle m-0 u-text-no-wrap'>
            {props.todo.moreInfo}
          </p>
        </div>
        <div className='tile__buttons'>
          {!props.todo.completed ? (
            <button
              className='border-green-700 text-green-700 bg-green-200 p-0'
              aria-label='Complete todo'
            >
              <span className='icon'>
                <i
                  className='fa fa-wrapper small fa-check'
                  aria-hidden='true'
                ></i>
              </span>
            </button>
          ) : null}
          <button className='btn-transparent p-0' aria-label='Delete todo'>
            <span className='icon'>
              <i
                className='fa fa-wrapper small fa-times'
                aria-hidden='true'
              ></i>
            </span>
          </button>
        </div>
      </div>
      <div className='divider' />
    </>
  );
};
