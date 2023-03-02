import { HTMLAttributes } from 'react';

export const TileContainer = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...{ className: `tile__container ${className}`, ...props }}>
      {children}
    </div>
  );
};
