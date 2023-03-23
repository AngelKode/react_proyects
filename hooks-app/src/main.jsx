import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico'
import {HooksApp} from "./components/HooksApp.jsx";
import {CounterApp} from "./components/CounterApp.jsx";
import { CounterWithCustomHook } from './components/CounterWithCustomHook.jsx';
import { SimpleForm } from './components/useEffect/SimpleForm.jsx';
import { FormCustomHook } from './components/useEffect/FormCustomHook.jsx';
import { MultipleCustomHooks } from './components/examples/MultipleCustomHooks.jsx';
import '../src/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Fragment>
    <MultipleCustomHooks/>
  </React.Fragment>,
)
