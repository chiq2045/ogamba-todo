import { createContext, Dispatch } from 'react';
import { Toast, ToastAction } from 'types';
import { nanoid } from 'nanoid';

export const ToastsContext = createContext(new Map<string, Toast>());
export const ToastsDispatchContext = createContext<Dispatch<ToastAction>>(
  () => ({ type: '' })
);

export const toastsReducer = (
  toasts: Map<string, Toast>,
  action: ToastAction
) => {
  const updatedToasts = new Map(toasts);

  switch (action.type) {
    case 'add': {
      if (action.toast) {
        updatedToasts.set(nanoid(), action.toast);
      }

      break;
    }
    case 'remove': {
      console.log(action, updatedToasts.entries());
      if (action.id && updatedToasts.has(action.id)) {
        updatedToasts.delete(action.id);
      }

      break;
    }
    default:
  }

  return updatedToasts;
};

export const initialToasts = new Map<string, Toast>();
