import { Link } from 'react-router-dom'

export const Todo = () => {
  return (
    <div>
      <h1>Todo ページです</h1>
      <p><Link to={`/`}>Homeへ</Link></p>
    </div>
  )
}