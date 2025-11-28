import './App.css'
import TodoApp from './features/TodoApp/TodoApp'
import Header from './ui/Header/Header'

function App() {

  return (
    <>
      <Header/>
      <main>
        <TodoApp />
      </main>
    </>
  )
}

export default App
