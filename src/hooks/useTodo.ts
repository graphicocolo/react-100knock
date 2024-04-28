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

export const useTodo = (props: Props) => {
  const { todos, setTodos } = props

  const addTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  return { todos, addTodo }
}