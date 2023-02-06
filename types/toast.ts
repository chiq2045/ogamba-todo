export type Toast = {
  moreDetails?: object;
  timeout?: number;
  title: string;
  type?: Color;
  value: string;
};

export type Color =
  | 'success'
  | 'warning'
  | 'danger'
  | 'error'
  | 'info'
  | 'link'
  | 'primary'
  | 'gray'
  | 'dark';

export type ToastAction = {
  type: 'add' | 'remove' | '';
  id?: string;
  toast?: Toast;
};
