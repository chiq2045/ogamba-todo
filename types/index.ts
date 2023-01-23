import { Key } from 'react';

export type Todo = {
  completed: boolean;
  content: string;
  id: Key;
  timeTaken: number;
  title: string;
  working: boolean;
};
