import { ReactNode } from 'react';
import { getMargin, getPadding } from '~src/helpers';
import { Margin, Padding, Spacing } from '~types';

interface Props {
  children: ReactNode;
  inline?: boolean;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
  justifyContent?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  flexGrow?: 0 | 1;
  flexShrink?: 0 | 1;
  flexBasis?:
    | 'auto'
    | 'max-content'
    | 'min-content'
    | 'fit-content'
    | 'content'
    | 'revert'
    | 'revert-layer';
  gap?: Spacing;
  m?: Margin;
  p?: Padding;
}
export const Flex = (props: Props) => {
  const className = `
    u-flex
    ${props.inline ? 'inline-flex' : ''}
    ${props.direction ? `u-flex-${props.direction}` : ''}
    ${props.alignItems ? `u-align-${props.alignItems}` : ''}
    ${props.justifyContent ? `u-justify-${props.justifyContent}` : ''}
    ${props.flexGrow ? `u-flex-grow-${props.flexGrow}` : ''}
    ${props.flexShrink ? `u-flex-shrink-${props.flexShrink}` : ''}
    ${props.flexBasis ? `u-basis-${props.flexBasis}` : ''}
    ${props.gap ? `u-gap-${props.gap}` : ''}
    ${props.m ? `u-gap-${props.gap}` : ''}
    ${props.gap ? `u-gap-${props.gap}` : ''}
    ${getMargin(props.m)}
    ${getPadding(props.p)}
  `;

  return <div className={className}>{props.children}</div>;
};
