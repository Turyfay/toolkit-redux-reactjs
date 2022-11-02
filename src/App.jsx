
import './App.css'
import { increment, decrement, incrementByAmount } from './store/slices/counter/CounterSlice';
import { useDispatch, useSelector } from 'react-redux';
import reactLogo from './assets/react.svg'

function App() {
  const { value: counter } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p> count is {counter}</p>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          Increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          increment By 2
        </button>
      </div>

    </div>
  )
}

export default App
