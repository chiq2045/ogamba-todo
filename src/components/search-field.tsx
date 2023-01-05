import { HTMLAttributes, useRef } from 'react';
import { useSearchFieldState } from 'react-stately';
import { AriaSearchFieldProps, useSearchField } from 'react-aria';

export const SearchField = (props: {
  input: HTMLAttributes<HTMLInputElement>;
  label: HTMLAttributes<HTMLLabelElement>;
}) => {
  const { label, input } = props;
  const searchFieldProps = {
    ...input,
    label: label.children,
  } as AriaSearchFieldProps;
  const state = useSearchFieldState(searchFieldProps);
  const ref = useRef<HTMLInputElement>(null);
  const { labelProps, inputProps } = useSearchField(
    searchFieldProps,
    state,
    ref
  );
  return (
    <div>
      <label {...labelProps}>{label.children}</label>
      <input {...inputProps} ref={ref} />
    </div>
  );
};
