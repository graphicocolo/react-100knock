// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// タスクの追加に使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
import { BaseSquareButton } from "@/components/atoms/button/BaseSquareButton"

type PrimarySquareButtonProps = {
  children: React.ReactNode
  // onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const pbutton = css`
  ${BaseSquareButton}
  background-color: #016ac1;
  color: #fff;
`

export const PrimarySquareButton = memo((props: PrimarySquareButtonProps) => {
  // const { children, onClick } = props
  const { children } = props
  return (
    <>
      {/* <button onClick={onClick} css={pbutton}>{children}</button> */}
      <button css={pbutton}>{children}</button>
    </>
  )
})