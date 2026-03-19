import type { Cell } from './App';
import { SudokuCell } from './SudokuCell.tsx';

interface BoardProps {
  board: Cell[][];
  selectedRow: number | null;
  selectedCol: number | null;
  onCellClick: (i: number, j: number) => void;
}

export function Board({
  board,
  selectedRow,
  selectedCol,
  onCellClick,
}: BoardProps) {
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
