/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { useState } from "react"

const columnStyle = css`
background-color: #f4fbff;
border: 5px solid #fff;
border-radius: 3px;
box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.05);
padding: 2rem 5px 3rem;
width: 250px;
height: auto;
`

const btnWrapStyle = css`
display: flex;
justify-content: space-evenly;
`

const numStyle = css`
font-size: 3rem;
font-weight: bold;
color: #0080e9;
margin: 0;
margin-bottom: 3rem;
padding: 0;
line-height: 1.2;
`

const btnIncStyle = css`
position: relative;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #016ac1;
font-size: 2rem;
color: #fff;
padding: 0;
border: none;
/* @media (hover: hover) {
  &:enabled:hover {
    border: none;
  }
} */
`

const btnDecStyle = css`
position: relative;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #ffffff;
font-size: 2rem;
color: #222;
padding: 0;
border: none;
/* @media (hover: hover) {
  &:enabled:hover {
    border: none;
  }
} */
`

const btnTxtStyle = css`
display: inline-block;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

// 課題
// デクリメント時、マイナスの値にならないようにしたい
// インクリメント時、ある決まった数値以上の値にならないようにしたい

type StateProps = {
  init: number
}

export const Counter = ({ init }: StateProps) => {
  const [count, setCount] = useState(init)
  const handleIncClick = () => {
    setCount(count + 1)
    // setCount(count++) // そもそも count は定数であるためエラー また DOM への直接の操作となるため NG
    // setCount(count + 1) // 1
    // setCount((count) => count + 1) // 2 本当に現在の State の値を反映させて更新したい場合、このように関数を使う形で記述
    // そもそも1と2は同じ挙動だが、
    // setCount(count + 1)
    // setCount(count + 1)
    // のように2行続けると、カウンターにプラスされるのは1
    // setCount((count) => count + 1)
    // setCount((count) => count + 1)
    // のように2行続けると、カウンターにプラスされるのは2となる
    // これは2の場合、本当に現在の値を参照して動作しているから
  }
  const handleDecClick = () => {
    setCount(count - 1)
    // setCount(count++) // そもそも count は定数であるためエラー また DOM への直接の操作となるため NG
  }

  return (
    <div css={columnStyle}>
      <p css={numStyle}>{count}</p>
      <div css={btnWrapStyle}>
        <button css={btnIncStyle} onClick={handleIncClick}><span css={btnTxtStyle}>+</span></button>
        <button css={btnDecStyle} onClick={handleDecClick}><span css={btnTxtStyle}>-</span></button>
      </div>
    </div>
  )
}