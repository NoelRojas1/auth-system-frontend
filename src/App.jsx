import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./components/Header"
import Signin from "./components/Signin"
import Signup from "./components/Signup"
import Welcome from "./components/Welcome"

function App() {
  return (
      <>
        <header>
          <Header />
        </header>

        <main>
          <Routes>
            <Route path="/signin" element={<Signin />}/>
            <Route path="/signup" element={<Signup />}/>
            <Route path="/user" element={<Welcome />}/>
          </Routes>
        </main>
      </>
  )
}

export default App
