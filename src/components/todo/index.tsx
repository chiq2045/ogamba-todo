import { useTodos } from 'src/hooks';
import { Button } from '../button';

interface Props {
  todo: ReturnType<typeof useTodos>['filteredTodos'][number][1];
}
export const Todo = (props: Props) => {
  return (
    <div className='u-shadow-sm tile'>
      <div className='tile__container u-flex u-gap-2 p-2'>
        <div className='u-flex u-basis-40p'>{props.todo.title}</div>
        <div className='u-flex u-basis-30p'>
          <div className='tag-container'>
            {props.todo.tags.map((tag) => (
              <div key={tag} className='tag'>
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className='u-flex u-basis-30p'>
          <Button color='info'>View Todo</Button>
        </div>
      </div>
    </div>
  );
};
