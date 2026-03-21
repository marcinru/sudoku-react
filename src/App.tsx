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
  const [isCandidateMove, setIsCandidateMove] = useState(false);

  const onControlClick = (num: number) => {
    if (selectedRow === null || selectedCol === null) return;
    const newBoard = board.map((row, i) =>
      row.map((cell, j) => {
        if (i === selectedRow && j === selectedCol) {
          if (isCandidateMove) {
            const exists = cell.candidates.includes(num);
            const candidates = exists
              ? cell.candidates.filter((c) => c !== num)
              : [...cell.candidates, num];
            return { ...cell, candidates: candidates.sort() };
          }
          return { ...cell, value: num };
        }
        return cell;
      }),
    );
    setBoard(newBoard);
  };

  const onCandidateSwitchChange = () => {
    setIsCandidateMove(!isCandidateMove);
  };

  const onCellClick = (i: number, j: number) => {
    setSelectedRow(i);
    setSelectedCol(j);
  };

  return (
    <div id="wrapper" className="p-8">
      <Board
        board={board}
        selectedRow={selectedRow}
        selectedCol={selectedCol}
        onCellClick={onCellClick}
      />
      <Controls
        isCandidateMove={isCandidateMove}
        onCandidateSwitchChange={onCandidateSwitchChange}
        onClick={onControlClick}
      />
    </div>
  );
}

export default App;
