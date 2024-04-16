/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

import { memo } from 'react'

export const Greeting = memo(() => {
  // 書き方その1 CSS と全く同じ記述ができる
  const titleStyle = css`
  color: #d80075;
  font-weight: 600;
  `

  return (
    <>
      <h1>Greeting ページです</h1>
      <p css={titleStyle}>Hello World!</p>
      {/* <p><Link to='/'>Topへ</Link></p> */}
      <p><Link to={`/`}>Homeへ</Link></p>
    </>
  )
})