import { memo } from "react"

import { PrimaryCheckbox } from "@/components/atoms/form/PrimaryCheckbox"
import { useDone } from "@/hooks/useDone"

export const Tasks = memo(() => {
  const { state, handleCheckboxChange } = useDone(false)
  return (
    <>
      <ul>
        <li><PrimaryCheckbox onClick={handleCheckboxChange} checked={state} >タスク1</PrimaryCheckbox></li>
      </ul>
      <label htmlFor="donecheck"><input id="donecheck" type="checkbox" /><span>テストタスク</span></label>
    </>
  )
})