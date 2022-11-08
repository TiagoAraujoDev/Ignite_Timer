import { Routes, Route } from 'react-router-dom'

import { DefaultLayout } from './layouts/DefaultLayouts'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { ToDo } from './pages/ToDo'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/ToDo" element={<ToDo />} />
      </Route>
    </Routes>
  )
}
