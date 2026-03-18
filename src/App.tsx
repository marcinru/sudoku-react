import {Board} from './Board';
import {Controls} from './Controls';
import {useState} from 'react';
import {cellNumbers} from './cellNumbers.ts';

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
    }))
);

function App() {
  const [board] = useState<Cell[][]>(initialCells);

  const onControlClick = (num: number) => {
    console.log(num);
  };

  return (
    <div id="wrapper">
      <Board board={board} />
      <Controls onClick={onControlClick} />
    </div>
  );
}

export default App;
