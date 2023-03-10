import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { BotDetails } from './pages/BotDetails'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/:shortName/details" element={<BotDetails />} />
      </Route>
    </Routes>
  )
}
