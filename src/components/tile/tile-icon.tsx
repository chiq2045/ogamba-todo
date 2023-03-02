import { HTMLAttributes } from 'react';

export const TileIcon = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...{ className: `tile__icon ${className}`, ...props }}>
      {children}
    </div>
  );
};
