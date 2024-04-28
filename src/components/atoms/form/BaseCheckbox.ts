// チェックボックスのベースとなる基本スタイル用コンポーネント

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const label = css`
  position: relative;
  display: inline-block;
  padding-left: 25px;
  margin-bottom: 5px;
  cursor: pointer;
`

// export const BaseCheckboxBefore = css`
//   &:focus + .checkbox-content::before {
//     outline: 2px solid #3498db;
//   }
// `

export const BaseCheckboxAfter = css`
  &.checked::after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid #7d7d7d;
    border-width: 0 2px 2px 0;
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%) rotate(45deg);
  }
`

export const text = css`
  &::before {
    content: "";
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid #9e9e9e;
    border-radius: 4px;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`