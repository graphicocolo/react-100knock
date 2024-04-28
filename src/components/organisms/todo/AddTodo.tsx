// TODO List タスク追加

import { memo, useRef } from 'react'

import { PrimaryInputText } from "@/components/atoms/form/PrimaryInputText"
import { PrimarySquareButton } from "@/components/atoms/button/PrimarySquareButton"
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
      <div>
        <PrimaryInputText ref={taskText} placeholder='タスクを入力' />
        <PrimarySquareButton onClick={onClickAdd}>追加</PrimarySquareButton>
      </div>
    </>
  );
})