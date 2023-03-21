import React from 'react'
import ReactDOM from 'react-dom/client'
import '@picocss/pico'
import {HooksApp} from "./components/HooksApp.jsx";
import {CounterApp} from "./components/CounterApp.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp/>
  </React.StrictMode>,
)
