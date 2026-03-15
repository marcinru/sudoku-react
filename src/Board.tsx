import { Cell } from './Cell';
import { useState } from 'react';

const cells = [
  [5, 7, null, 1, 8, null, null, null, 3],
  [null, 8, 6, null, null, null, 4, null, 2],
  [null, 9, 2, 6, 7, null, 8, null, null],
  [null, 1, null, 8, 6, 3, null, 4, 7],
  [4, 2, null, null, 1, null, null, null, null],
  [null, null, 7, null, 2, null, 1, 9, null],
  [7, null, 3, 2, 9, 8, 5, 1, 6],
  [null, null, null, 5, null, null, null, 8, 4],
  [8, 5, null, 7, null, 6, null, null, 9],
];

export function Board() {
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
        {cells.map((row, i) => (
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
