import { HTMLAttributes } from 'react';

export const TileButtons = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...{ className: `tile__buttons ${className}`, ...props }}>
      {children}
    </div>
  );
};
