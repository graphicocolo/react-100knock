// TODOリストのコンテンツ背景のみのコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'

type TodoContentProps = {
  children: React.ReactNode
}

export const TodoContent = memo((props: TodoContentProps) => {
  const { children } = props
  return (
    <div css={backgroundStyle}>{children}</div>
  )
})

const backgroundStyle = css`
background-color: #ffffff;
padding: 1.5rem 1rem;
`