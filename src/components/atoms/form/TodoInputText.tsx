// 基本のinput[text]スタイル
// TODO List タスク追加に使用

// React の ref, useRef, forwardRefの基本的な知識
// https://qiita.com/ryosuketter/items/1ebf2d68ba3317db53a9

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { memo, forwardRef, Ref } from 'react'

import { BaseInputText } from "./BaseInputText"

type TodoInputTextProps = {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

const Input = css`
  ${BaseInputText}
  margin-bottom: 0.5rem;
  padding: 0.4rem 0.5rem;
  border: 2px solid rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  &:focus {
    outline: none;
    border: 2px solid rgba(0, 0, 0, 0.3);
  }
`

  export const TodoInputText = memo(forwardRef((props: TodoInputTextProps, ref: Ref<HTMLInputElement>) => {
  const { placeholder, onChange, disabled } = props
  return (
    <>
      <input type="text" css={Input} placeholder={placeholder} ref={ref} onChange={onChange} disabled={disabled} />
    </>
  )
}))