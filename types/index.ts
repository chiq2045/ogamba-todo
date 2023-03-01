export type Spacing =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 8
  | 10
  | 12
  | 16
  | 20
  | 24
  | 32;
export type Padding = {
  p?: Spacing;
  pr?: Spacing;
  pl?: Spacing;
  pt?: Spacing;
  pb?: Spacing;
};
export type Margin = {
  m?: Spacing;
  mr?: Spacing;
  ml?: Spacing;
  mt?: Spacing;
  mb?: Spacing;
};

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};
