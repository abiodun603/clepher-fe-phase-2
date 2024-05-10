import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

// ** Route Layout
import Root from './routes/route.tsx'


// ** Style
import './styles/globals.css'

// ** Store
import { Provider } from 'react-redux'
import store from './store/index.ts'

// ** Page
import PostEngagements from './pages/post-engagements/PostEngagements.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "post-engagements",
        element: <PostEngagements />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
