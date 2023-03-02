import { HTMLAttributes } from 'react';

export const TileTitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...{ className: `tile__title ${className}`, ...props }}>
      {children}
    </div>
  );
};
