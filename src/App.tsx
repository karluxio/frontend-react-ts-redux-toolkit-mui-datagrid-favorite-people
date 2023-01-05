import { Navbar } from './components'
import { Home } from './pages/Home'
import { AppTheme } from '@/theme';
import { store } from './redux/store';
import { Provider } from 'react-redux'
function App() {

  return (
    <Provider store={store}>
      <AppTheme>
        <Navbar />
        <Home />
      </AppTheme>
    </Provider>

  )
}

export default App
