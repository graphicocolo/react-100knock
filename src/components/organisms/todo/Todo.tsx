// TODO List タスク単独

import { memo } from 'react'

import { PrimaryCheckbox } from '@/components/atoms/form/PrimaryCheckbox'
import { useTodo } from '@/hooks/useTodo';

type Props = {
  todo: {
    id: number;
    task: string;
    completed: boolean;
  }
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[]
  setTodos: (todo: {
    id: number;
    task: string;
    completed: boolean;
  }[]) => void
}

export const Todo = memo((props: Props) => {
  const { todo, todos, setTodos } = props
  const { clickCheckbox } = useTodo({ todos, setTodos })

  return (
    <>
      <PrimaryCheckbox todo={todo} todos={todos} setTodos={setTodos} onClick={(e) => clickCheckbox(e, todo.id)}>{todo.task}</PrimaryCheckbox>
    </>
  )
})