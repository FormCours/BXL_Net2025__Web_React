import './App.css'
import EventDemo from './components/EventDemo/EventDemo'
import StateDemo from './components/StateDemo/StateDemo'
import Header from './ui/Header/Header'

function App() {

  return (
    <> {/* ← Fragment */}
      <Header />
      <main>
        {/* <h2>Utilisation des events</h2>
        <EventDemo /> */}

        <h2>Utilisation du State</h2>
        <StateDemo />
      </main>
    </>
  )
}

export default App
