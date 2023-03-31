import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico'
import '../src/styles.scss';
import { TodoApp } from './components/useReducer/TodoApp';
/* import {HooksApp} from "./components/HooksApp.jsx";
import {CounterApp} from "./components/CounterApp.jsx";
import { CounterWithCustomHook } from './components/CounterWithCustomHook.jsx';
import { SimpleForm } from './components/useEffect/SimpleForm.jsx';
import { FormCustomHook } from './components/useEffect/FormCustomHook.jsx';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './components/useRef/FocusScreen.jsx'; */
/* import { Layout } from './components/useLayoutEffect/Layout.jsx';
import { Memorize } from './components/memo/Memorize'; */
/* import {MemoHook} from './components/memo/MemoHook';
import { Callback } from './components/useCallback/Callback'; */
//import { Padre } from './components/memo-hw/Padre';
//import './components/useReducer/reducer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <TodoApp/>
  </React.Fragment>,
)