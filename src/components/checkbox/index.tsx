import { HTMLAttributes, useId } from 'react';

interface Props {
  inputProps: HTMLAttributes<HTMLInputElement>;
  labelProps: HTMLAttributes<HTMLLabelElement>;
}
export const CheckBox = ({
  inputProps: { className: inputClassName, ...inputProps },
  labelProps: {
    className: labelClassName,
    children: labelChildren,
    ...labelProps
  },
}: Props) => {
  const id = useId();

  return (
    <>
      <label {...{ className: labelClassName, htmlFor: id, ...labelProps }}>
        {labelChildren}
      </label>
      <input
        {...{ id, className: inputClassName, type: 'checkbox', ...inputProps }}
      />
    </>
  );
};
