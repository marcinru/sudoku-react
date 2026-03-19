import { Board } from './Board';
import { Controls } from './Controls';
import { useState } from 'react';
import { cellNumbers } from './cellNumbers.ts';

export interface Cell {
  value: number | null;
  candidates: number[];
  isReadOnly: boolean;
}

const initialCells: Cell[][] = cellNumbers.map((row) =>
  row.map((cell) => ({
    value: cell,
    candidates: [],
    isReadOnly: cell !== null,
  })),
);

function App() {
  const [board, setBoard] = useState<Cell[][]>(initialCells);
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCol, setSelectedCol] = useState<number | null>(null);

  const onControlClick = (num: number) => {
    if (selectedRow === null || selectedCol === null) return;

    const newBoard = board.map((row, i) =>
      row.map((cell, j) => {
        if (i === selectedRow && j === selectedCol) {
          return { ...cell, value: num };
        }
        return cell;
      }),
    );
    setBoard(newBoard);
  };

  const onCellClick = (i: number, j: number) => {
    setSelectedRow(i);
    setSelectedCol(j);
  };

  return (
    <div id="wrapper">
      <Board
        board={board}
        selectedRow={selectedRow}
        selectedCol={selectedCol}
        onCellClick={onCellClick}
      />
      <Controls onClick={onControlClick} />
    </div>
  );
}

export default App;
