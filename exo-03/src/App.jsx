import './App.css'
import logo from '/della.png';
import Compteur from './components/Compteur/Compteur'

function App() {

  return (
    <>
      <img className='logo' src={logo} alt="Della Duck" />
      <Compteur />
    </>
  )
}

export default App
