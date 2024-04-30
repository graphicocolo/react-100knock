// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// TODO List タスクの削除に使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
import { SecondarySquareButton } from "@/components/atoms/button/SecondarySquareButton"

type TodoDeleteButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = css`
  ${SecondarySquareButton}
  height: 35px;
  margin: 0 10px;
`

export const TodoDeleteButton = memo((props: TodoDeleteButtonProps) => {
  const { children, onClick } = props
  return (
    <>
      <button onClick={onClick} css={Button}>{children}</button>
    </>
  )
})