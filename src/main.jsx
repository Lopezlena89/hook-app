import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HookApp } from './01-useState/HookApp'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomeHook } from './02-useEffect/FormWithCustomeHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks' 
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallBackHook } from './06-memos/CallBackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // </React.StrictMode>
)
