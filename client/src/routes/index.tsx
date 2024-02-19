import { useRoutes } from 'react-router-dom'

import { Home } from 'pages/home/Home'

import { DApp } from 'pages/dApp/DApp'
import { Market } from 'pages/dApp/Market'
import { Dashboard } from 'pages/dApp/Dashboard'
import { Points } from 'pages/dApp/Points'
import { Social } from 'pages/dApp/Social'

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'dapp',
      element: <DApp />,
      children: [
        {
          path: '',
          element: <Market />,
        },
        {
          path: 'dashboard',
          element: <Dashboard />,
        },
        {
          path: 'points',
          element: <Points />,
        },
        {
          path: 'social',
          element: <Social />,
        },
      ],
    },
  ])
