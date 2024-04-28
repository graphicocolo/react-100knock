// TODO List タスク単独

import { memo } from 'react'

import { PrimaryCheckbox } from '@/components/atoms/form/PrimaryCheckbox'

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

type Todos = {
  id: number;
  task: string;
  completed: boolean;
}[];

export const Todo = memo((props: Props) => {
  const { todo, todos, setTodos } = props
  const toggleTodo = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.stopPropagation()
    e.preventDefault()
    const newtodos: Todos = todos.map((todo) => {
      if (todo.id === todo.id) {
        todo.completed = !todo.completed
      }
      return todo;
    });
    setTodos(newtodos)
  }

  return (
    <>
      <PrimaryCheckbox todo={todo} todos={todos} setTodos={setTodos} onClick={(e) => toggleTodo(e)}>{todo.task}</PrimaryCheckbox>
    </>
  )
})