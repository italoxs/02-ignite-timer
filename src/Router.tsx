import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout/index'

import { Home } from './pages/Home'
import { History } from './pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/History" element={<History />} />
      </Route>
    </Routes>
  )
}
