import { useContext } from 'react';
import { ToastsContext, ToastsDispatchContext } from 'src/hooks/use-toasts';
import { Toast } from './toast';

export const Toasts = () => {
  const toasts = useContext(ToastsContext);
  const dispatch = useContext(ToastsDispatchContext);

  const showToast = (toast: (typeof toasts)[number], index: number) => {
    return (
      <Toast
        key={toast.id}
        onClose={() => dispatch({ id: toast.id, type: 'remove' })}
        index={index}
        toast={toast}
      />
    );
  };

  return <div>{toasts.map(showToast)}</div>;
};
