// TODO List カスタムフック

type Props = {
  todos: {
    id: number;
    task: string;
    completed: boolean;
  }[]
  setTodos: (todo: {
    id: number;
    task: string;
    completed: boolean;
  }[]) => void
}

type Todo = {
  id: number;
  task: string;
  completed: boolean;
}

type Todos = {
  id: number;
  task: string;
  completed: boolean;
}[]

export const useTodo = (props: Props) => {
  const { todos, setTodos } = props

  // 追加機能
  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  // 完了機能(チェックボックス)
  const clickCheckbox = (e: React.MouseEvent<HTMLLabelElement>, id: number) => {
    e.stopPropagation()
    e.preventDefault()
    const newtodos: Todos = todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed
      }
      return t
    })
    setTodos(newtodos)
  }

  // 削除機能
  const deleteTodo = (id: number) => {
    // 配列を全て走査するため負荷が大きい
    // const newtodos: Todos = todos.filter(todo => todo.id !== id)
    // setTodos(newtodos)

    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    }
  }

  return { todos, addTodo, clickCheckbox, deleteTodo }
}