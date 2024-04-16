// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// カウンターのインクリメントに使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
import { BaseCircleButton } from "@/components/atoms/button/BaseCircleButton"

type PrimaryCircleButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const SButton = css`
  ${BaseCircleButton}
  background-color: #016ac1;
  color: #fff;
`

export const PrimaryCircleButton = memo((props: PrimaryCircleButtonProps) => {
  const { children, onClick } = props
  return (
    <>
      <button onClick={onClick} css={SButton}>{children}</button>
    </>
  )
})