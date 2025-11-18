import './App.css'
import Bienvenue from './features/bienvenue/bienvenue'


function App() {

  return (
    <>
      <h1>Exercice</h1>
      <h2>1) Message de bienvenue</h2>
      <Bienvenue nom='Della' age={35} />
    </>
  )
}

export default App
