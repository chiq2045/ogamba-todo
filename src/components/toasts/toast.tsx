import { useEffect } from 'react';
import { Toast as ToastType } from 'types';
import ReactJson from 'react-json-view';

interface Props {
  index: number;
  onClose: () => void;
  toast: ToastType;
}
export const Toast = ({ toast, onClose, index }: Props) => {
  const { type, title, value, moreDetails, timeout } = toast;

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onClose();
    }, timeout ?? 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div
      className={`toast toast--${type} u-overflow-scroll`}
      style={{
        position: 'fixed',
        zIndex: index,
        right: '50%',
        bottom: '50px',
        width: '40%',
        maxHeight: '40vh',
      }}
      role='region'
      aria-labelledby='toast-title'
      aria-live='polite'
    >
      <button className='btn-close' onClick={onClose} />
      <h2 className='toast--title title text-md' aria-labelledby='toast-title'>
        {title}
      </h2>
      <p>{value}</p>
      {moreDetails ? (
        <details className='u-round-xs p-1' style={{ border: '1px solid' }}>
          <summary className='px-1'>More Details</summary>
          <ReactJson src={moreDetails} theme='apathy' />
        </details>
      ) : null}
    </div>
  );
};
