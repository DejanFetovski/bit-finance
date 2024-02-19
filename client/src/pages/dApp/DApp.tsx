import { Outlet } from 'react-router'

import { Header } from './Header'
import { Footer } from 'components/Footer'

export const DApp = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)
