import { HTMLAttributes, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

export const Button = (
  props: AriaButtonProps & HTMLAttributes<HTMLButtonElement>
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
