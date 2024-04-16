// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// カウンターのデクリメントに使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'
import { BaseCircleButton } from "@/components/atoms/button/BaseCircleButton"

type SecondaryCircleButtonProps = {
  children: React.ReactNode
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const SButton = css`
  ${BaseCircleButton}
  background-color: #ffffff;
  color: #222;
`

export const SecondaryCircleButton = memo((props: SecondaryCircleButtonProps) => {
  const { children, onClick } = props
  return (
    <>
      <button onClick={onClick} css={SButton}>{children}</button>
    </>
  )
})