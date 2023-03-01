import { ReactNode } from 'react';
import { getMargin, getPadding } from '~src/helpers';
import { Margin, Padding } from '~types';

interface Props {
  children: ReactNode;
  m?: Margin;
  p?: Padding;
}
export const TileTitle = (props: Props) => {
  const className = `
    tile__title
    ${getMargin(props.m)}
    ${getPadding(props.p)}
  `;

  return <div {...{ className }}>{props.children}</div>;
};
