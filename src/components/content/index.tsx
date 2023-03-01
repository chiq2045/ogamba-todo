import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export const Content = (props: Props) => {
  return (
    <section>
      <div className='content'>{props.children}</div>
    </section>
  );
};
