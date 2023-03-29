import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico'
import '../src/styles.scss';
/* import {HooksApp} from "./components/HooksApp.jsx";
import {CounterApp} from "./components/CounterApp.jsx";
import { CounterWithCustomHook } from './components/CounterWithCustomHook.jsx';
import { SimpleForm } from './components/useEffect/SimpleForm.jsx';
import { FormCustomHook } from './components/useEffect/FormCustomHook.jsx';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks.jsx';
import { FocusScreen } from './components/useRef/FocusScreen.jsx'; */
/* import { Layout } from './components/useLayoutEffect/Layout.jsx';
import { Memorize } from './components/memo/Memorize'; */
import {MemoHook} from './components/memo/MemoHook';
import { Callback } from './components/useCallback/Callback';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <Callback/>
  </React.Fragment>,
)
