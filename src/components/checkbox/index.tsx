import { HTMLAttributes, useId } from 'react';

interface Props extends HTMLAttributes<HTMLInputElement> {
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
  labelText?: string;
}
export const CheckBox = (props: Props) => {
  const { color, labelText, ...rest } = props;
  const className = `
    form-ext-input
    ${color ? `form-ext-input-${color}` : ''}
  `;
  const id = useId();

  return (
    <div className='form-ext-control form-ext-checkbox'>
      <input {...{ id, className, type: 'checkbox', ...rest }} />
      {labelText ? (
        <label className='form-ext-label' htmlFor={id}>
          {labelText}
        </label>
      ) : null}
    </div>
  );
};
