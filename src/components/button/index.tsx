import { HTMLAttributes, useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

interface Props {
  outline?: boolean;
  color?:
    | ''
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
  loading?: '' | 'left' | 'right';
  disabled?: boolean;
}
type ButtonProps<
  T = HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLDivElement
> = AriaButtonProps & HTMLAttributes<T> & Props;

const getClassName = (props: ButtonProps) => `
    mb-0 ${props.className ?? ''}
    ${props.outline ? 'outline' : ''}
    ${props.color ? `btn-${props.color}` : ''}
    ${props.loading ? `animated loading loading-${props.loading}` : ''}
    ${props.disabled ? 'btn--disabled' : ''}
    ${props.animated ? 'btn-animated' : ''}
    ${props.size ? `btn--${props.size}` : ''}
    `;

export const Button = (props: ButtonProps<HTMLButtonElement>) => {
  const ref = useRef<HTMLButtonElement>(null);
  const { buttonProps } = useButton(props, ref);

  const className = getClassName(props);

  return (
    <button {...{ ...buttonProps, className, ref }}>{props.children}</button>
  );
};

export const DivButton = (props: ButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { buttonProps } = useButton(props, ref);

  const className = getClassName(props);

  return (
    <div {...{ ...buttonProps, className: `${className} btn`, ref }}>
      {props.children}
    </div>
  );
};

export const LinkButton = (props: ButtonProps) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const { buttonProps } = useButton(props, ref);

  const className = getClassName(props);

  return (
    <a {...{ ...buttonProps, className: `${className} btn`, ref }}>
      {props.children}
    </a>
  );
};

export const SubmitButton = (props: ButtonProps<HTMLInputElement>) => {
  const ref = useRef<HTMLInputElement>(null);
  const { buttonProps } = useButton(props, ref);

  const className = getClassName(props);

  return <input {...{ ...buttonProps, type: 'submit', className, ref }} />;
};
