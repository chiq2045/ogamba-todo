import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/button';
import { TextArea, TextField } from 'src/components/text-field';
import { useTodos } from 'src/hooks';
import { Todo } from 'types';

interface Props {
  addTodo: ReturnType<typeof useTodos>['addTodo'];
}
export const AddTodo = (props: Props) => {
  const [title, setTitle] = useState<Todo['title']>('');
  const [content, setContent] = useState<Todo['content']>('');

  const navigate = useNavigate();

  const handleChangeTitle = (value: string) => setTitle(value);
  const handleChangeContent = (value: string) => setContent(value);
  const handleSubmit = () => {
    props.addTodo({ title, content });
    navigate('/');
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <form>
        <TextField label='Title' onChange={handleChangeTitle} />
        <TextArea label='Content' onChange={handleChangeContent} />
        <Button type='submit' onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </div>
  );
};
