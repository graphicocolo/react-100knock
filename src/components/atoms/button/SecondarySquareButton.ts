// 基本のボタンスタイルをベースとし、背景色・文字色を変更したボタンコンポーネント
// TODO List タスクの追加に使用

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import { BaseSquareButton } from "@/components/atoms/button/BaseSquareButton"

export const SecondarySquareButton = css`
  ${BaseSquareButton}
  background-color: #858585;
  color: #fff;
`