import { HTMLAttributes, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

interface Props {
  variant?: 'solid' | 'outline';
  color?:
    | 'transparent'
    | 'light'
    | 'dark'
    | 'black'
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger';
  size?: 'xs' | 'sm' | '' | 'lg' | 'xl';
  animated?: boolean;
  loading?: 'left' | 'right';
}
export const Button = (
  props: AriaButtonProps & HTMLAttributes<HTMLButtonElement> & Props
) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);
  const { children, className } = props;

  return (
    <button {...buttonProps} className={`mb-0 ${className}`} ref={ref}>
      {children}
    </button>
  );
};
