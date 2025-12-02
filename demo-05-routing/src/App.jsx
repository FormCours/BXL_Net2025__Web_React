import { Route, Routes } from 'react-router'
import './App.css'
import HomePage from './pages/Home/Home.page'
import AboutPage from './pages/About/About.page'
import ExamplePage from './pages/Example/Example.page'
import NavBar from './ui/NavBar/NavBar'
import ExempleIndexPage from './pages/Example/ExampleIndex.page'
import ExempleSecondPage from './pages/Example/ExampleSecond.page'
import ExampleDataPage from './pages/Example/ExampleData.page'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='example' element={<ExamplePage />}>
          <Route index element={<ExempleIndexPage />} />
          <Route path=':id' element={<ExampleDataPage />} />
          <Route path='second' element={<ExempleSecondPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
