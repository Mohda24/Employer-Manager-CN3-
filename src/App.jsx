
import React from 'react'
import Login from './pages/login'
import store from './app/store/store'
import { Provider } from 'react-redux'
import AppRouter from './Router/AppRouter'

function App() {
  return (
    <Provider store={store}>
    <AppRouter/>
    </Provider> 
  )
}

export default App