import { Key } from 'react';

export type Todo = {
  completed: boolean;
  content: string;
  dueDate: number;
  id: Key;
  timeTaken: number;
  title: string;
  working: boolean;
};
