import { Link } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
      <p>存在しないページです</p>
      <p><Link to={`/`}>Homeへ</Link></p>
    </>
  )
}