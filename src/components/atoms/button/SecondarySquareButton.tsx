// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// TODO List タスクの追加に使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
import { BaseSquareButton } from "@/components/atoms/button/BaseSquareButton"

type SecondarySquareButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const pbutton = css`
  ${BaseSquareButton}
  background-color: #858585;
  color: #fff;
`

export const SecondarySquareButton = memo((props: SecondarySquareButtonProps) => {
  const { children, onClick } = props
  // const { children } = props
  return (
    <>
      <button onClick={onClick} css={pbutton}>{children}</button>
      {/* <button css={pbutton}>{children}</button> */}
    </>
  )
})