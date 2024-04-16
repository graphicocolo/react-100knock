// ルーティングを設定・管理するファイル

import {
  createBrowserRouter,
  createRoutesFromElements, 
  Route
} from 'react-router-dom'

import { Home } from '@/components/pages/Home'
import { NotFound } from '@/components/pages/NotFound'
import { Todo } from '@/components/pages/Todo'
import { Greeting } from '@/components/pages/Greeting'
import { Calc } from '@/components/pages/Calc'

export const RoutesLink = createBrowserRouter(
  // [
  //   {
  //     path: '/',
  //     element: <Home />,
  //   },
  //   {
  //     path: '/todo',
  //     element: <Todo />,
  //   },
  // ]
  //   createRoutesFromElements(
      // トップレベルのリンクのかたまり
  //     <Route path='group1'>
  //       <Route index={true} element={<Home />} />
  //       <Route path='todo' element={<Todo />} />
  //     </Route>
  //   )
  createRoutesFromElements(
    <>
      <Route path='/' element={<Home />} />
      <Route path='greeting' element={<Greeting />} />
      <Route path='calc' element={<Calc />} />
      <Route path='todo' element={<Todo />} />
      <Route path='*' element={<NotFound />} />
    </>
  )
)