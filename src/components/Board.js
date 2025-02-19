import React from 'react';
import './Board.css';
import Square from './Square';
import PropTypes from 'prop-types';

const generateSquareComponents = (squares, onClickCallback) => {
  // Complete this for Wave 1
  // squares is a 2D Array, but
  //  you need to return a 1D array
  //  of square components
  const squareContainer = [];

  for (let row of squares) {
    for (let box of row) {
      squareContainer.push(
        <Square
          key={box.id}
          id={box.id}
          value={box.value}
          onClickCallback={onClickCallback}
        />
      );
    }
  }

  return squareContainer;
};

const Board = ({ squares, onClickCallback }) => {
  const squareList = generateSquareComponents(squares, onClickCallback);
  return <div className="grid">{squareList}</div>;
};

Board.propTypes = {
  squares: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        value: PropTypes.string.isRequired,
      })
    )
  ),
  onClickCallback: PropTypes.func.isRequired,
};

export default Board;
