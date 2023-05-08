import { BrowserRouter } from 'react-router-dom'

import Notifications from './components/Notifications/Notifications'
import { AppRouting } from './Routes/AppRouting'

function App() {
  return (
    <BrowserRouter>
      <Notifications />
      <AppRouting />
    </BrowserRouter>
  )
}

export default App
