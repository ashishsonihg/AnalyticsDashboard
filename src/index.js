import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import Home from './views/Home'
const root = ReactDOM.createRoot(document.getElementById('root'))
import { Provider } from 'react-redux'
import store from './store'
root.render(
  <React.StrictMode>
    <nav
      className={
        'w-full sticky top-0 z-[50]  justify-center font-bold text-center bg-[hsl(var(--background))] min-h-[65px] xsl:min-h-[78px] h-[65px] xsl:h-[78px] border-b border-[#2F3037] flex items-center h-[50px]'
      }
    >
      STREAMIFY
    </nav>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>
)
