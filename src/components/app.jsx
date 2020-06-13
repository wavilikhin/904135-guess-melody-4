import React from 'react'
import ReactDOM from 'react-dom'

import WelcomeScreen from './welcome-screen.jsx'

const settings = {
    errorCount : 3
}

const App = () => {
    return <WelcomeScreen
      errorCount = {settings.errorCount}
    />
}
export default App