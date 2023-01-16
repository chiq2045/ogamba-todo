import { useRef } from 'react';
import { useSearchFieldState } from 'react-stately';
import { AriaSearchFieldProps, useSearchField } from 'react-aria';

export const SearchField = (props: {
  input: AriaSearchFieldProps;
  label: AriaSearchFieldProps['label'];
}) => {
  const { label, input } = props;
  const searchFieldProps = {
    ...input,
    label,
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
      <label {...labelProps}>{label}</label>
      <input {...inputProps} ref={ref} />
    </div>
  );
};
