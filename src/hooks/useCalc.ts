// カウンター用カスタムフック

import { useState } from "react";

type Props = {
  increment: () => void;
  decrement: () => void;
  formattedCount: string
}

export const useCalc = (init: number): Props => {
  const [count, setCount] = useState(init)

  const increment = () => {
    if (count <= 10000000) {
      // 正負判断
      // Math.sign(count) ? setCount((count) => count + 1) : null
      // setCount(count + 1)
      // setCount(count++) // そもそも count は定数であるためエラー また DOM への直接の操作となるため NG
      // setCount(count + 1) // 1.
      // setCount((count) => count + 1) // 2. 本当に現在の State の値を反映させて更新したい場合、このように関数を使う形で記述
      // そもそも1.と2.は同じ挙動だが、
      // setCount(count + 1)
      // setCount(count + 1)
      // のように2行続けると、カウンターにプラスされるのは1
      // setCount((count) => count + 1)
      // setCount((count) => count + 1)
      // のように2行続けると、カウンターにプラスされるのは2となる
      // これは2.の場合、本当に現在の値を参照して動作しているから
      setCount((prevCount) => prevCount + 1)
    }
  }

  const decrement = () => {
    if (count > 0) {
      // setCount(count - 1)
      // setCount(count++) // そもそも count は定数であるためエラー また DOM への直接の操作となるため NG
      setCount((prevCount) => prevCount - 1)
    }
  }

  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return { increment, decrement, formattedCount }
}