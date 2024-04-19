import { memo } from "react"
import { IncDec } from "@/components/molecules/calculation/IncDec"
import { CalcBackground } from "@/components/templates/calculation/CalcBackground"

type Props = {
  init: number
}

// export const Counter = memo((props: Props) => {
export const Counter = memo(({ init }: Props) => {
  // const { init } = props
  return (
    <CalcBackground>
      <IncDec init={init} />
    </CalcBackground>
  )
})