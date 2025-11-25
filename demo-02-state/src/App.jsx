import './App.css'
import EventDemo from './components/EventDemo/EventDemo'
import FormDemoAction from './components/FormDemo/FormDemo_Action'
import FormDemoControl from './components/FormDemo/FormDemo_Control'
import StateDemo from './components/StateDemo/StateDemo'
import Header from './ui/Header/Header'

function App() {

  return (
    <> {/* ← Fragment */}
      <Header />
      <main>
        {/* <h2>Utilisation des events</h2>
        <EventDemo /> */}

        {/* <h2>Utilisation du State</h2>
        <StateDemo /> */}

        <h2>Utilisation des formulaires</h2>
        <h3> - Contre au lait</h3>
        <FormDemoControl />

        <h3> - Action</h3>
        <FormDemoAction />

      </main>
    </>
  )
}

export default App
