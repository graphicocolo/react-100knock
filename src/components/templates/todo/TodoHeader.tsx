// TODOリストのヘッダーのみのコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'

type TodoHeaderProps = {
  children: React.ReactNode
}

export const TodoHeader = memo((props: TodoHeaderProps) => {
  const { children } = props
  return (
    <h1 css={header}>{children}</h1>
  )
})

const header = css`
color: #fff;
background-color: #0079bf;
font-size: 1.6rem;
margin: 0;
padding: 1rem 0.5rem;
text-align: center;
`