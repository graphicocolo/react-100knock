// 基本のinput[text]スタイル

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BaseInputText = css`
input[type='text'] {
  padding: 0;
  border: none;
  border-radius: 0;
  outline: none;
  background: none;
  box-shadow: none;
  appearance: none;
  font: inherit;
  border: 1px solid rgba(0, 0, 0, 0.16);
}
input[type='text']:focus {
  outline: 2px solid #3498db;
  outline-offset: 0;
}
`