// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// TODO List タスクの追加に使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
// import { BaseSquareButton } from "@/components/atoms/button/BaseSquareButton"
import { PrimarySquareButton } from "@/components/atoms/button/PrimarySquareButton"

type TodoAddButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const Button = css`
  ${PrimarySquareButton}
  height: 35px;
  margin: 0 10px;
`

export const TodoAddButton = memo((props: TodoAddButtonProps) => {
  const { children, onClick } = props
  return (
    <>
      <button onClick={onClick} css={Button}>{children}</button>
    </>
  )
})