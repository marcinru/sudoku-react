import type {Cell} from './App';
import {useState} from 'react';
import {SudokuCell} from "./SudokuCell.tsx";

interface BoardProps {
  board: Cell[][];
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
              <SudokuCell
                cell={cell}
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
