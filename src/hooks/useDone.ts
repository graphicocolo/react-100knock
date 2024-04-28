// TODO List チェックボックス用カスタムフック

import { useState } from "react"

export const useDone = (initialState: boolean) => {
  const [state, setState] = useState<boolean>(initialState)
  const handleCheckboxChange = () => setState(prevState => !prevState)

  return { state, handleCheckboxChange }
  // return [state, handleCheckboxChange]
}