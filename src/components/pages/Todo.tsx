import { Link } from 'react-router-dom'

import { TodoBackground } from '@/components/templates/todo/TodoBackground'
import { TodoHeader } from '@/components/templates/todo/TodoHeader'
import { TodoContent } from '@/components/templates/todo/TodoContent'
import { PrimarySquareButton } from '@/components/atoms/button/PrimarySquareButton'
import { TodoElementCenter } from '@/components/templates/todo/TodoElementCenter'

export const Todo = () => {
  return (
    <div>
      <TodoBackground>
        <TodoHeader>TODO List</TodoHeader>
        <TodoContent>
          
          <TodoElementCenter>
            <PrimarySquareButton>追加</PrimarySquareButton>
          </TodoElementCenter>
        </TodoContent>
      </TodoBackground>
      <p><Link to={`/`}>Homeへ</Link></p>
    </div>
  )
}