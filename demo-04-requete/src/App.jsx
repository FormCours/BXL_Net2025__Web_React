import './App.css'
import NameStats from './features/NameStats/NameStats'
import PokemonRequester from './features/PokemonRequester/PokemonRequester'
import Header from './ui/Header/Header'

function App() {

  return (
    <>
      <Header />
      <main>
        <NameStats />
        <hr />
        <PokemonRequester pokeId={251} />
        
      </main>
    </>
  )
}

export default App
