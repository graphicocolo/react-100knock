// チェックボックスのベースとなる基本スタイル用コンポーネント

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BaseCheckbox = css`
  position: relative;
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  padding: 5px 10px;
  border: none;
  font-size: 1rem;
  text-align: center;
`