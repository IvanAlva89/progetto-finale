import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './providers/SessionProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <SessionProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </SessionProvider>
)
