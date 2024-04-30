import React from 'react'
import ReactDOM from 'react-dom/client'
import { Global } from "@emotion/react"
import { RouterProvider } from 'react-router-dom'

import { globalStyle } from '@/settings/GlobalStyes'
import { RoutesLink } from '@/settings/RoutesLink'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <RouterProvider router={RoutesLink} />
  </React.StrictMode>
);