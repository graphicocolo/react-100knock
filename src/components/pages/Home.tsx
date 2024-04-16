import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div>
      <h1>Home ページです</h1>
      <ul>
        <li><Link to={`greeting`}>Greetingページへ</Link></li>
        <li><Link to={`calc`}>Calcページへ</Link></li>
        <li><Link to={`todo`}>Todoページへ</Link></li>
      </ul>
    </div>
  )
}