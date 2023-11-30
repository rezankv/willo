import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
// import "./styles/react/apps/app-todo.scss";
// import "./styles/core.scss";


// // ** React Perfect Scrollbar
// import 'react-perfect-scrollbar/dist/css/styles.css'

// // ** Ripple Button
// import './@core/components/ripple-button'

// // ** React Hot Toast Styles
// import '@styles/react/libs/react-hot-toasts/react-hot-toasts.scss'

// // ** Core styles
// import './@core/assets/fonts/feather/iconfont.css'
// import './@core/scss/core.scss'
// import './assets/scss/style.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
