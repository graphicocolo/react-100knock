// グローバルスタイル

// JSX pragma
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import 'normalize.css'

export const globalStyle = css`
body {
  font-family: -apple-system, BlinkMacSystemFont,
  "Segoe UI",Helvetica, Arial, sans-serif;
}
*, *::before, *::after {
  box-sizing: border-box;
}
input[type='text'],
input[type='email'],
input[type='file'],
input[type='submit'] {
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
input[type='text']:focus,
input[type='email']:focus {
  outline: 2px solid #3498db;
  outline-offset: 0;
}
input[type='checkbox'],
input[type='radio'] {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
/* .label-checkbox {
  position: relative;
  display: inline-block;
  padding-left: 25px;
  margin-bottom: 5px;
  cursor: pointer;
}
.checkbox-content::before {
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
input[type='checkbox']:checked + .checkbox-content::after {
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
input[type='checkbox']:focus + .checkbox-content::before {
  outline: 2px solid #3498db;
} */
.label-radio {
  position: relative;
  display: inline-block;
  padding-left: 30px;
  margin-bottom: 5px;
  cursor: pointer;
}
.radio-content::before {
  content: "";
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}
input[type='checkbox']:checked + .radio-content::after {
  content: "";
  display: block;
  width: 10px;
  height: 10px;
  background-color: #000;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 7px;
  transform: translateY(-50%);
}
input[type='checkbox']:focus + .radio-content::before {
  outline: 2px solid #3498db;
}
.select-container {
  position: relative;
  display: inline-block;
  width: 200px;
  margin-bottom: 20px;
}
select {
  padding: 10px;
  border: 2px solid #000;
  border-radius: 4px;
  outline: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  font-size: 16px;
  color: #000;
}
.select-container::after {
  content: "";
  position: absolute;
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000;
  transform: translateY(-50%);
}
select {
  border-color: #3498db;
}
textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 4px;
  font-size: 16px;
  resize: vertical;
  outline: none;
  box-sizing: border-box;
  margin-bottom: 20px;
}
input[type='submit'] {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #3498db;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  text-align: center;
}
input[type='submit']:hover {
  background-color: #2980b9;
}
input[type='submit']:active {
  background-color: #1c598a;
}
input[type='submit']:focus {
  outline: none;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.5);
}
`