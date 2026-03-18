import { Board } from './Board';
import { Controls } from './Controls';
import { useState } from 'react';
import { cells } from './cellNumbers.ts';
import type { CellNumbers } from './cellNumbers.ts';

function App() {
  const [board] = useState<CellNumbers>(cells);

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
