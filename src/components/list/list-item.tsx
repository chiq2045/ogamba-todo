import { useRef } from 'react';
import { ListState } from 'react-stately';
import {
  AriaGridListItemOptions,
  mergeProps,
  useFocusRing,
  useGridListItem,
} from 'react-aria';

interface Props {
  item: AriaGridListItemOptions['node'];
  state: ListState<object>;
}
export const ListItem = (props: Props) => {
  const ref = useRef<HTMLLIElement>(null);
  const { rowProps, gridCellProps, isPressed } = useGridListItem(
    { node: props.item },
    props.state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <li
      {...mergeProps(rowProps, focusProps)}
      className={`${isPressed ? 'pressed' : ''} ${
        isFocusVisible ? 'focus-visible' : ''
      } u-shadow-md px-2 py-1`}
      ref={ref}
    >
      <div {...gridCellProps}>{props.item.rendered}</div>
    </li>
  );
};
