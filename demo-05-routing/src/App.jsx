import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/Home/Home.page'
import AboutPage from './pages/About/About.page'
import ExamplePage from './pages/Example/Example.page'
import NavBar from './ui/NavBar/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='example' element={<ExamplePage />} />
      </Routes>
    </>
  )
}

export default App
