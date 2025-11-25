import './App.css'
import EventDemo from './components/EventDemo/EventDemo'
import Header from './ui/Header/Header'

function App() {

  return (
    <> {/* ← Fragment */}
      <Header />
      <main>
        <h2>Utilisation des events</h2>
        <EventDemo />
      </main>
    </>
  )
}

export default App
