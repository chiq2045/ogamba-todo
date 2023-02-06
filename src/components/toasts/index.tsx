import { useContext } from 'react';
import { ToastsContext, ToastsDispatchContext } from 'src/hooks/use-toasts';
import { Toast } from './toast';

export const Toasts = () => {
  const toasts = useContext(ToastsContext);
  const dispatch = useContext(ToastsDispatchContext);
  const topToast = toasts.size > 0 ? [...toasts][0] : null;

  console.log(topToast);
  return (
    <div>
      {topToast ? (
        <Toast
          key={topToast[0]}
          onClose={() => dispatch({ id: topToast[0], type: 'remove' })}
          index={0}
          toast={topToast[1]}
        />
      ) : null}
    </div>
  );
};
