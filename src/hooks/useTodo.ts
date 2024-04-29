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

  // チェックボックス機能
  const clickCheckbox = (e: React.MouseEvent<HTMLLabelElement>, id: number) => {
    e.stopPropagation()
    e.preventDefault()
    const newtodos: Todos = todos.map((t) => {
      if (t.id === id) {
        t.completed = !t.completed
      }
      return t;
    });
    setTodos(newtodos)
    // console.log(todos)
  }

  return { todos, addTodo, clickCheckbox }
}