import React, { useEffect, useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';
// generates a 2-dimensional array of squares containing an object with id and value keys
// see output below

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
};

const App = () => {
  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  const [playerOnesTurn, setTurn] = useState(false);

  // togglesSquares
  const onClickCallback = (id) => {
    console.log('You clicked on a square with ID', id);

    let player;

    if (playerOnesTurn) {
      player = PLAYER_1;
    } else {
      player = PLAYER_2;
    }

    const newSquares = [...squares];

    for (let row of newSquares) {
      for (let square of row) {
        if (square.id == id) {
          if (square.value == '') {
            square.value = player;
            setSquares(newSquares);
          }
        }
      }
    }
  };

  useEffect(() => {
    setTurn(playerOnesTurn => !playerOnesTurn);
  }, [squares]);

  // starting value of setSquares:
  // [
  //   [ { id: 0, value: '' }, { id: 1, value: '' }, { id: 2, value: '' } ],
  //   [ { id: 3, value: '' }, { id: 4, value: '' }, { id: 5, value: '' } ],
  //   [ { id: 6, value: '' }, { id: 7, value: '' }, { id: 8, value: '' } ]
  // ]

  // Wave 2
  // You will need to create a method to change the square
  //   When it is clicked on.
  //   Then pass it into the squares as a callback

  let winner = '';
  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if
    //    all three squares have the same value.
  };

  const resetGame = () => {
    // Complete in Wave 4
    setSquares(generateSquares());
    setTurn(false);
  };
    
  // I'm calling these functions right here
  // Just bc the warnings drive me crazy
  checkForWinner();
  // resetGame();

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {winner} </h2>
        <button onClick={ resetGame }>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback} />
      </main>
    </div>
  );
};

export default App;
