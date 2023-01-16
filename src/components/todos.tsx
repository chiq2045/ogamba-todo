import { ReactNode } from 'react';

export const Todos = ({ children }: { children: ReactNode }) => {
  return (
    <ul className='no-bullets'>
      <div className='u-flex u-flex-column'>{children}</div>
    </ul>
  );
};
