import { HTMLAttributes } from 'react';

export const Button = ({
  children,
  ...props
}: HTMLAttributes<HTMLButtonElement>) => {
  return <button {...props}>{children}</button>;
};
