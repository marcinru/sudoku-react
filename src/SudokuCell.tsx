interface SudokuCellProps {
  cell: {
    value: number | null;
    candidates: number[];
    isReadOnly: boolean;
  };
  isSelected: boolean;
  onClick: () => void;
}

export function SudokuCell(props: SudokuCellProps) {
  const { cell, isSelected, onClick } = props;

  if (cell.value == null) {
    return (
      <td className={isSelected ? 'selected' : undefined} onClick={onClick}>
        <span className="candidates">{cell.candidates.join(', ')}</span>
        <span className="value"></span>
      </td>
    );
  } else {
    return (
      <td
        className={cell.isReadOnly ? 'given-number' : isSelected ? 'selected' : undefined}
        onClick={onClick}
      >
        {cell.value}
      </td>
    );
  }
}
