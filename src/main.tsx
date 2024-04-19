import React from 'react'
import ReactDOM from 'react-dom/client'
import { css, Global } from "@emotion/react"
import 'normalize.css'

import { RouterProvider } from 'react-router-dom'
import { RoutesLink } from '@/settings/RoutesLink'

const globalStyle = css`
  body {
    font-family: -apple-system, BlinkMacSystemFont,
    "Segoe UI",Helvetica, Arial, sans-serif;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <RouterProvider router={RoutesLink} />
  </React.StrictMode>
);