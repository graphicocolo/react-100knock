import { Link } from 'react-router-dom'

import { Counter } from '@/components/organisms/calculation/Counter'

export const Calc = () => {
  return (
    <div>
      <h1>Clac ページです</h1>
      <Counter init={0}/>
      <p><Link to={`/`}>Homeへ</Link></p>
    </div>
  )
}