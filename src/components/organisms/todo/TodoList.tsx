// TODO List タスクリスト

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
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

const Listitem = css`
  padding: 0.8rem 1rem;
`

export const TodoList = memo((props: Props) => {
  const { todos, setTodos } = props
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} css={Listitem}>
          <Todo todo={todo} todos={todos} setTodos={setTodos} />
        </li>
      ))}
    </ul>
  )
})