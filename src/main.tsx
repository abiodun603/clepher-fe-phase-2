import React from 'react'
import ReactDOM from 'react-dom/client'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'

// ** Route Layout
import Root from './layouts/layout.tsx'

// ** Style
import './styles/globals.css'

// ** Page
import CaptureTools from './pages/capture-tools/capture-tools.tsx'
import Dashboard from './pages/dashboard/dashboard.tsx'

// ** Store
import EditPostManagements from './pages/capture-tools/edit-post-management.tsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/audience",
        element: <Dashboard />
      },
      {
        path: "/chat",
        element: <Dashboard />
      },
      {
        path: "/broadcasts",
        element: <Dashboard />
      },
      {
        path: "/automation",
        element: <Dashboard />
      },
      {
        path: "/shelf",
        element: <Dashboard />
      },
      {
        path: "/chart",
        element: <Dashboard />
      },
      {
        path: "capture-tools",
        element: <CaptureTools />,
      },
      {
        path: "capture-tools/post-engagements/:id/edit",
        element: <EditPostManagements />,
      },
      {
        path: "/settings",
        element: <Dashboard />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
)
