// 計算機能の背景のみのコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo } from 'react'

type CalcBackgroundProps = {
  children: React.ReactNode
}

export const CalcBackground = memo((props: CalcBackgroundProps) => {
  const { children } = props
  return (
    <div css={columnStyle}>{children}</div>
  )
})

const columnStyle = css`
background-color: #f4fbff;
border: 5px solid #fff;
border-radius: 3px;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
padding: 2rem 5px 3rem;
width: 250px;
height: auto;
`