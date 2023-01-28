import { createContext, Dispatch } from 'react';
import { Toast, ToastAction } from 'types';
import { nanoid } from 'nanoid';

export const ToastsContext = createContext<Toast[]>([]);
export const ToastsDispatchContext = createContext<Dispatch<ToastAction>>(
  () => ({ type: '' })
);

export const toastsReducer = (toasts: Toast[], action: ToastAction) => {
  switch (action.type) {
    case 'add': {
      return action.toast
        ? [...toasts, { ...action.toast, id: nanoid() }]
        : [...toasts];
    }
    case 'remove': {
      return [...toasts].filter((toast) => toast.id !== action.id);
    }
    default:
      return [...toasts];
  }
};

export const initialToasts: Toast[] = [];
