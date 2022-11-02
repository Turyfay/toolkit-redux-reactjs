import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { PokemonApp } from './screens/PokemonApp'
import { Todoapp } from './screens/Todoapp'
import { store } from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    {/*  <App /> */}
    {/*  <PokemonApp/> */}
    <Todoapp/>
    </Provider>
  </React.StrictMode>
)
