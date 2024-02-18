import { Home } from 'pages/home/Home'
import { useRoutes } from 'react-router-dom'

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
  ])
