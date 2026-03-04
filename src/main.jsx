import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles.css'

// Pull in global styles once so all components share the same look.
// Start the React app and show it inside the HTML element with id="root".
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch common issues while developing.
  <React.StrictMode>
    {/* App is the top-level component for the page content. */}
    <App />
  </React.StrictMode>,
)
