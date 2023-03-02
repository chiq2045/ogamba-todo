import { HTMLAttributes } from 'react';

export const Tile = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...{ className: `tile ${className}`, ...props }}>{children}</div>
  );
};
