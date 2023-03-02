import { HTMLAttributes } from 'react';

export const TileSubtitle = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...{ className: `tile__subtitle ${className}`, ...props }}>
      {children}
    </div>
  );
};
