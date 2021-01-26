import React from 'react'
import ReactDOM from 'react-dom'
import 'jquery/dist/jquery.slim.min.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
      <App />   
  </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
