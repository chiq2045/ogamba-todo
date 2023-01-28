import { useRef } from 'react';
import { useTextField } from 'react-aria';
import { AriaTextFieldProps } from '@react-types/textfield';

export const TextField = (props: AriaTextFieldProps) => {
  const { label, description, errorMessage } = props;
  let ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div>
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
      {description ? (
        <span
          {...descriptionProps}
          className={`info ${descriptionProps.className}`}
        >
          {description}
        </span>
      ) : null}
      {errorMessage ? (
        <span
          {...errorMessageProps}
          className={`info ${errorMessageProps.className}`}
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};

export const TextArea = (props: AriaTextFieldProps) => {
  const { label, description, errorMessage } = props;
  let ref = useRef(null);
  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(
      {
        ...props,
        inputElementType: 'textarea',
      },
      ref
    );

  return (
    <div>
      <label {...labelProps}>{label}</label>
      <textarea {...inputProps} ref={ref} />
      {description ? (
        <span
          {...descriptionProps}
          className={`info ${descriptionProps.className}`}
        >
          {description}
        </span>
      ) : null}
      {errorMessage ? (
        <span
          {...errorMessageProps}
          className={`info ${errorMessageProps.className}`}
        >
          {errorMessage}
        </span>
      ) : null}
    </div>
  );
};
