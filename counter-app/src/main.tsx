import React from "react";
import {createRoot} from "react-dom/client";
import {HelloReact} from "./HelloReact";
import {CounterApp} from "./CounterApp";

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <CounterApp key='cap' value={10}></CounterApp>
    </React.StrictMode>
)

