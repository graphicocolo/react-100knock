// 基本のチェックボックススタイルをベースとし、チェック枠・チェックの色を変更したチェックボックスコンポーネント
// TODO List タスクに使用
// https://chaika.hatenablog.com/entry/2023/11/02/083000#google_vignette

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
import { label, BaseCheckboxAfter, text } from "@/components/atoms/form/BaseCheckbox"

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
  onClick?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void
  children: React.ReactNode
}

const LabelStyle = css`
  ${label}
`

const TextStyle = css`
  ${text}
  ${BaseCheckboxAfter}
  font-size: 1.125rem;
`

export const PrimaryCheckbox = memo((props: Props) => {
  const { todo, onClick, children } = props
  return (
    <>
      <label css={LabelStyle} onClick={onClick} htmlFor={String(todo.id)}><input id={String(todo.id)} type="checkbox" readOnly /><span css={TextStyle} className={todo.completed ? 'checked' : ''}>{children}{todo.completed}</span></label>
    </>
  )
})