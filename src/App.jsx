import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/HeaderJ.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';  //bootstrapのインポート


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
    </>
  )
}

export default App
