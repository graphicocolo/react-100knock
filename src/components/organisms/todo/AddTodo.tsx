// TODO List タスク追加

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo, useRef } from 'react'

import { TodoInputText } from "@/components/atoms/form/TodoInputText"
import { TodoAddButton } from "@/components/atoms/button/TodoAddButton"
import { useTodo } from "@/hooks/useTodo"

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

const Wrap = css`
  margin: 1rem 0 2rem;
`

export const AddTodo = memo((props: Props) => {
  const { todos, setTodos } = props
  const taskText = useRef<HTMLInputElement>(null)
  const { addTodo } = useTodo({ todos, setTodos })

  const onClickAdd = () => {
    if (taskText.current === null) return
    if (taskText.current.value === "") return alert("Todoを入力してください!!");
    addTodo(taskText.current.value)
    taskText.current.value = ""
  }

  return (
    <>
      <div css={Wrap}>
        <TodoInputText ref={taskText} placeholder='タスクを入力' />
        <TodoAddButton onClick={onClickAdd}>追加</TodoAddButton>
      </div>
    </>
  );
})