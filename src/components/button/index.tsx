import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLButtonElement> {
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
  outline?: boolean;
}
export const Button = (props: Props) => {
  const { color, outline, children, ...rest } = props;
  const className = `
    ${rest.className ?? ''}
    ${color ? `btn-${color}` : ''}
    ${outline ? 'outline' : ''}
  `;

  return <button {...{ className, ...rest }}>{children}</button>;
};
