// 参考
// ★React(TypeScript)の復習として簡単なTodoアプリを作ってみた話
// https://zenn.dev/grazie/articles/cfb43e4b81a152
// https://github.com/grazie-a-k-a-keita/TodoApp/tree/master

// Todoアプリを作りながら解説するReact Hooks
// https://noveltyinc.jp/media/todo-app

// 【React hooks】useStateの使い方あれこれ
// https://zenn.dev/yumix/articles/aad5753f1c9da6

// 【フロントエンド】カスタムフックの記述(TODOの処理を呼ぶ)
// https://zenn.dev/engineerhikaru/books/0a615c1248a2ea/viewer/75b7b9

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { TodoBackground } from '@/components/templates/todo/TodoBackground'
import { TodoHeader } from '@/components/templates/todo/TodoHeader'
import { TodoContent } from '@/components/templates/todo/TodoContent'
import { TodoElementCenter } from '@/components/templates/todo/TodoElementCenter'
import { AddTodo } from '@/components/organisms/todo/AddTodo'
import { TodoList } from '../organisms/todo/TodoList'

type Todo = {
  id: number;
  task: string;
  completed: boolean;
}

export const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  return (
    <div>
      <TodoBackground>
        <TodoHeader>TODO List</TodoHeader>
        <TodoContent>
          <TodoElementCenter>
            <AddTodo todos={todos} setTodos={setTodos} />
          </TodoElementCenter>
        </TodoContent>
        <TodoList todos={todos} setTodos={setTodos} />
      </TodoBackground>
      <p><Link to={`/`}>Homeへ</Link></p>
    </div>
  )
}