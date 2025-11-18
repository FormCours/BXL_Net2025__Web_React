import Welcome from './components/welcome/welcome'
import './app.css';
import NumberTester from './components/NumberTester/NumberTester';
import MessageDisplayer from './components/MessageDisplayer/MessageDisplayer';

function App() {

  return (
    <>
      <h1>Demo 01</h1>
      <h2>Intro</h2>
      <Welcome firstname='Della' lastname='Duck' />
      {/* <Welcome firstname='Gontran' /> */}

      <h2>Conditionnel</h2>
      <NumberTester nb={42} />
      {/* <NumberTester nb={13} /> */}
      <NumberTester nb={'six'} />

      <MessageDisplayer msg='Hello World' />
      {/* <MessageDisplayer msg='Je suis caché' visible={false} /> */}
      {/* <MessageDisplayer msg='' visible /> */}
    </>
  )
}

export default App
