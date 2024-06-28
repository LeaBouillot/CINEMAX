import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './output.css' // pas d input'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
