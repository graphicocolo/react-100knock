/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

export const Greeting = () => {
  // 書き方その1 CSS と全く同じ記述ができる
  const titleStyle = css`
  color: #d80075;
  font-weight: 600;
  `

  return (
    <>
      <p css={titleStyle}>Hello World!</p>
    </>
  )
}