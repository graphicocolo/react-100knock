// TODO List タスク単独

import { memo } from 'react'

import { PrimaryCheckbox } from '@/components/atoms/form/PrimaryCheckbox'
import { useTodo } from '@/hooks/useTodo';
import { TodoDeleteButton } from '@/components/atoms/button/TodoDeleteButton';

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
  const { clickCheckbox, deleteTodo } = useTodo({ todos, setTodos })

  return (
    <>
      <PrimaryCheckbox todo={todo} todos={todos} setTodos={setTodos} onClick={(e) => clickCheckbox(e, todo.id)}>{todo.task}</PrimaryCheckbox>
      <TodoDeleteButton onClick={() => deleteTodo(todo.id)}>削除</TodoDeleteButton>
    </>
  )
})