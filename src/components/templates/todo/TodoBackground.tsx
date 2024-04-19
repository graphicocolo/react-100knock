// TODOリストの背景のみのコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'

type TodoBackgroundProps = {
  children: React.ReactNode
}

export const TodoBackground = memo((props: TodoBackgroundProps) => {
  const { children } = props
  return (
    <div css={backgroundStyle}>
      <div css={columnStyle}>{children}</div>
    </div>
  )
})

const backgroundStyle = css`
background-color: #ededed;
  @media (min-width: 768px) {
    padding-bottom: 2rem;
  }
`

const columnStyle = css`
position: relative;
display: block;
background-color: #fff;
max-width: 768px;
margin: auto;
`