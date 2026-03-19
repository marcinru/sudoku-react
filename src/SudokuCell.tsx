import type { Cell } from './App.tsx';

interface SudokuCellProps {
  cell: Cell;
  isSelected: boolean;
  onClick: () => void;
}

export function SudokuCell(props: SudokuCellProps) {
  const { cell, isSelected, onClick } = props;

  if (cell.isReadOnly) {
    return <td className="given-number">{cell.value}</td>;
  } else {
    return (
      <td className={isSelected ? 'selected' : undefined} onClick={onClick}>
        <span className="candidates">{cell.candidates.join(', ')}</span>
        <span className="value">{cell.value}</span>
      </td>
    );
  }
}
