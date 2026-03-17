import type { Cells } from './App';
import { Cell } from './Cell';
import { useState } from 'react';

interface BoardProps {
  board: Cells;
}

export function Board({ board }: BoardProps) {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);
  const [selectedCol, setSelectedCol] = useState<number | null>(null);

  const onCellClick = (i: number, j: number) => {
    setSelectedRow(i);
    setSelectedCol(j);
  };

  return (
    <table id="board">
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <colgroup span={3}></colgroup>
      <tbody>
        {board.map((row, i) => (
          <tr key={`row${i}`}>
            {row.map((cell, j) => (
              <Cell
                givenNumber={cell}
                isSelected={selectedRow === i && selectedCol === j}
                onClick={() => onCellClick(i, j)}
                key={`cell${i}${j}`}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
