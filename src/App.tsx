import { Board } from './Board';
import { Controls } from './Controls';
import { useState } from 'react';
import { cells } from './cells';
import type { Cells } from './cells';

function App() {
  const [board] = useState<Cells>(cells);

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
