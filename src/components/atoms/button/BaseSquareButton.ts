// 四角ボタンのベースとなる基本のボタンスタイル用コンポーネント

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

export const BaseSquareButton = css`
  position: relative;
  min-width: 100px;
  height: 40px;
  border-radius: 8px;
  padding: 5px 10px;
  border: none;
  font-size: 1rem;
  text-align: center;
  cursor: pointer;
  /* & > span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  } */
`