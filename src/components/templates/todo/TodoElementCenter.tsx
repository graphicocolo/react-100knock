// TODOリスト エレメント配置のためのコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'

type TodoElementCenterProps = {
  children: React.ReactNode
}

export const TodoElementCenter = memo((props: TodoElementCenterProps) => {
  const { children } = props
  return (
    <div css={column}>{children}</div>
  )
})

const column = css`
text-align: center;
margin: auto;
`