import 'cirrus-ui/dist/cirrus.min.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
};

export const argTypes = {
  color: {
    control: 'select',
    options: [
      '',
      'transparent',
      'light',
      'dark',
      'black',
      'primary',
      'link',
      'info',
      'success',
      'warning',
      'danger',
    ],
  },
};
