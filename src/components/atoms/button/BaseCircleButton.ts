// 丸型ボタンのベースとなる基本のボタンスタイル用コンポーネント

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BaseCircleButton = css`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  padding: 0;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  & > span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`