// 加算減算のコンポーネント

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

import { memo } from "react"

import { useCalc } from "@/hooks/useCalc"
import { PrimaryCircleButton } from "@/components/atoms/button/PrimaryCircleButton"
import { SecondaryCircleButton } from "@/components/atoms/button/SecondaryCircleButton"

type Props = {
  init: number;
}

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

// export const IncDec = memo((props: Props) => { ①がセットで必要 冒頭のtype指定も必要
// 別の書き方
// export const IncDec = memo((props: { init: number }) => { ①がセットで必要 冒頭のtype指定は不要
// export const IncDec = memo(({ init }: { init: number }) => { ①は不要 冒頭のtype指定も不要
// memo 関数に渡す関数コンポーネントの引数は、propsオブジェクトである必要があるため下記記述は間違い
// export const IncDec = memo((init: number) => {

export const IncDec = memo(({ init }: Props) => {
  // const { init } = props ①
  const { increment, decrement, formattedCount } = useCalc(init)

  return (
    <>
      <p css={numStyle}>{formattedCount}</p>
      <div css={btnWrapStyle}>
          <PrimaryCircleButton onClick={increment}>+</PrimaryCircleButton>
          <SecondaryCircleButton onClick={decrement}>-</SecondaryCircleButton>
      </div>
    </>
  )
})