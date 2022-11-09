import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HookApp } from './01-useState/HookApp'
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterWithCustomHook />
  </React.StrictMode>
)
