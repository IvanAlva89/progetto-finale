import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { SessionProvider } from './providers/SessionProvider.jsx'
import { CartProvider } from './providers/CartProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <SessionProvider>
        <CartProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CartProvider>
    </SessionProvider>
)
