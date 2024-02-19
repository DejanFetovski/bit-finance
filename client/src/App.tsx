import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'routes'
import { NextUIProvider } from '@nextui-org/react'
// import { Home } from 'pages/home/Home'
// import { DApp } from 'pages/dApp/DApp'

function App() {
  // const navigate = useNavigate()

  return (
    <BrowserRouter>
      <NextUIProvider>
        <Routes />
      </NextUIProvider>
    </BrowserRouter>
  )
}

export default App
