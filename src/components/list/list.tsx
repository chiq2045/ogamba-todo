import { useRef } from 'react';
import { ListProps, useListState } from 'react-stately';
import { useGridList } from 'react-aria';
import { ListItem } from './list-item';

export const List = (props: ListProps<object>) => {
  const state = useListState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { gridProps } = useGridList(props, state, ref);

  return (
    <ul {...gridProps} className='no-bullets' ref={ref}>
      <div className='u-flex u-flex-column'>
        {[...state.collection].map((item) => (
          <ListItem key={item.key} item={item} state={state} />
        ))}
      </div>
    </ul>
  );
};
