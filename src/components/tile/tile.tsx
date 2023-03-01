import { HTMLAttributes } from 'react';
import { getMargin, getPadding } from '~src/helpers';
import { Margin, Padding } from '~types';

interface Props extends HTMLAttributes<HTMLDivElement> {
  m?: Margin;
  p?: Padding;
  shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  insetShadow?: boolean;
}
export const Tile = (props: Props) => {
  console.log(props);
  const {
    className: propsClassName,
    children,
    m,
    p,
    shadow,
    insetShadow,
    ...rest
  } = props;
  const className = `
    tile
    ${propsClassName}
    ${getMargin(m)}
    ${getPadding(p)}
    ${shadow ? `u-shadow-${shadow}` : ''}
    ${insetShadow ? 'u-shadow-inset' : ''}
  `;

  return <div {...{ className, ...rest }}>{children}</div>;
};
