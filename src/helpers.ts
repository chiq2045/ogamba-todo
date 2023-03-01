import { Margin, Padding } from '~types';

export const getMargin = (margin?: Margin) => {
  let returnMargin = '';
  if (margin?.m) {
    returnMargin = `m-${margin.m} ${returnMargin}`;
  }
  if (margin?.ml) {
    returnMargin = `ml-${margin.ml} ${returnMargin}`;
  }
  if (margin?.mr) {
    returnMargin = `mr-${margin.mr} ${returnMargin}`;
  }
  if (margin?.mb) {
    returnMargin = `mb-${margin.mb} ${returnMargin}`;
  }
  if (margin?.mt) {
    returnMargin = `mt-${margin.mt} ${returnMargin}`;
  }
  return returnMargin;
};

export const getPadding = (padding?: Padding) => {
  let returnPadding = '';
  if (padding?.p) {
    returnPadding = `p-${padding.p} ${returnPadding}`;
  }
  if (padding?.pl) {
    returnPadding = `pl-${padding.pl} ${returnPadding}`;
  }
  if (padding?.pr) {
    returnPadding = `pr-${padding.pr} ${returnPadding}`;
  }
  if (padding?.pb) {
    returnPadding = `pb-${padding.pb} ${returnPadding}`;
  }
  if (padding?.pt) {
    returnPadding = `pt-${padding.pt} ${returnPadding}`;
  }
  return returnPadding;
};
