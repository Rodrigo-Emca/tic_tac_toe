import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';

const App = () => {

  const [turn, setTurn] = useState('x');
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [scrore, setScore] = useState({
    x: 0,
    O: 0,
  })

  return (
    <div className="container">
      <Board squares={squares}/>
    </div>
  );
}

export default App;