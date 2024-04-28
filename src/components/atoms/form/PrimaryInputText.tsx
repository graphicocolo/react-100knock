// 基本のinput[text]スタイル
// TODO List タスク追加に使用

// React の ref, useRef, forwardRefの基本的な知識
// https://qiita.com/ryosuketter/items/1ebf2d68ba3317db53a9

import { memo, forwardRef, Ref } from 'react'

type PrimaryInputTextProps = {
  placeholder?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

  export const PrimaryInputText = memo(forwardRef((props: PrimaryInputTextProps, ref: Ref<HTMLInputElement>) => {
  const { placeholder, onChange, disabled } = props
  return (
    <>
      <input type="text" placeholder={placeholder} ref={ref} onChange={onChange} disabled={disabled} />
    </>
  )
}))