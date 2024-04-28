// TODO List タスクリスト

import { memo } from 'react'

import { Todo } from '@/components/organisms/todo/Todo'

type Props = {
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

export const TodoList = memo((props: Props) => {
  const { todos, setTodos } = props
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  )
})